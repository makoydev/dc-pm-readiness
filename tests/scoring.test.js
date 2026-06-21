const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

function loadQuizApi() {
  const appPath = path.join(__dirname, "..", "src", "app.js");
  const source = fs.readFileSync(appPath, "utf8");
  const fakeElement = {
    innerHTML: "",
    addEventListener() {},
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
  };
  const context = {
    console,
    Intl,
    Date,
    Math,
    Map,
    JSON,
    localStorage: {
      getItem() {
        return null;
      },
      setItem() {},
      removeItem() {},
    },
    document: {
      querySelector(selector) {
        return selector === "#app" ? fakeElement : null;
      },
      querySelectorAll() {
        return [];
      },
    },
    window: {
      scrollTo() {},
    },
  };

  vm.createContext(context);
  vm.runInContext(
    `${source}
globalThis.__quizApi = {
  QUESTIONS,
  MODES,
  isCorrect,
  scoreFor,
  maxScoreFor,
  getModeQuestionCount,
  getRecentQuestionIds,
  selectAttemptQuestions,
  questionsByIds,
  selectFlashcards,
  flashcardAnswer,
  flashcardDetail,
  flashcardSummary,
  getWeakTopics,
  resultLabel,
  recommendation,
  buildResult,
  titleCase,
  formatDuration,
  getTimerRemainingMs,
  getQuestionElapsedSeconds,
  renderedHome: app.innerHTML
};`,
    context,
  );
  return context.__quizApi;
}

test("renders the required three mode cards on initial load", () => {
  const api = loadQuizApi();

  assert.match(api.renderedHome, /Easy Mode/);
  assert.match(api.renderedHome, /Medium Mode/);
  assert.match(api.renderedHome, /Hardest Mode/);
  assert.match(api.renderedHome, /5 per attempt/);
  assert.match(api.renderedHome, /20 scenario bank/);
  assert.match(api.renderedHome, /Timed Practice/);
  assert.match(api.renderedHome, /Start Flashcards/);
});

test("scores objective question types correctly", () => {
  const api = loadQuizApi();
  const multipleChoice = api.QUESTIONS.find((question) => question.id === "easy-power-001");
  const multiSelect = api.QUESTIONS.find((question) => question.id === "medium-ops-003");

  assert.equal(api.isCorrect(multipleChoice, ["Uninterruptible Power Supply"]), true);
  assert.equal(api.scoreFor(multipleChoice, ["Universal Power Source"]), 0);
  assert.equal(api.maxScoreFor(multipleChoice), 1);

  assert.equal(
    api.isCorrect(multiSelect, [
      "Stakeholder notification",
      "Approved MOP",
      "Risk assessment",
      "Rollback plan",
    ]),
    true,
  );
  assert.equal(api.isCorrect(multiSelect, ["Approved MOP", "Rollback plan"]), false);
});

test("uses rubric point counts for scenario scoring", () => {
  const api = loadQuizApi();
  const scenario = api.QUESTIONS.find((question) => question.id === "hard-live-001");

  assert.equal(api.maxScoreFor(scenario), scenario.rubric.length);
  assert.equal(api.scoreFor(scenario, scenario.rubric.slice(0, 5)), 5);
  assert.equal(api.isCorrect(scenario, scenario.rubric.slice(0, 4)), false);
  assert.equal(api.isCorrect(scenario, scenario.rubric.slice(0, 5)), true);
});

test("keeps a broad hard-mode scenario bank for concept practice", () => {
  const api = loadQuizApi();
  const hardQuestions = api.QUESTIONS.filter((question) => question.difficulty === "hard");
  const hardTopics = new Set(hardQuestions.map((question) => question.topic));

  assert.equal(api.getModeQuestionCount("hard"), 20);
  assert.equal(hardQuestions.length >= 18, true);
  assert.equal(hardTopics.size >= 5, true);
  hardQuestions.forEach((question) => {
    assert.equal(question.type, "scenario_text");
    assert.equal(question.rubric.length >= 6, true);
    assert.equal(question.sampleStrongAnswer.length > 80, true);
  });
});

test("avoids recent hard questions when enough fresh scenarios exist", () => {
  const api = loadQuizApi();
  const hardQuestions = api.QUESTIONS.filter((question) => question.difficulty === "hard");
  const recentQuestionIds = hardQuestions.slice(0, 15).map((question) => question.id);
  const history = [
    { mode: "hard", questionIds: recentQuestionIds.slice(0, 5) },
    { mode: "hard", questionIds: recentQuestionIds.slice(5, 10) },
    { mode: "hard", questionIds: recentQuestionIds.slice(10, 15) },
    { mode: "easy", questionIds: ["easy-power-001"] },
  ];

  const selected = api.selectAttemptQuestions("hard", history, () => 0.99);
  const selectedIds = selected.map((question) => question.id);

  assert.equal(selected.length, api.MODES.hard.attemptSize);
  assert.equal(selectedIds.some((id) => recentQuestionIds.includes(id)), false);
});

test("looks up missed questions by stored result IDs", () => {
  const api = loadQuizApi();
  const selected = api.questionsByIds(["hard-live-001", "missing-id", "easy-power-001"]);

  assert.equal(selected.length, 2);
  assert.equal(JSON.stringify(selected.map((question) => question.id)), JSON.stringify(["easy-power-001", "hard-live-001"]));
});

test("builds result labels, weak topics, and recommendations", () => {
  const api = loadQuizApi();
  const quiz = {
    mode: "medium",
    questions: [{ id: "q1" }, { id: "q2" }, { id: "q3" }],
    responses: [
      {
        questionId: "q1",
        topic: "operations",
        tags: ["MOP"],
        selected: ["MOP"],
        correct: true,
        score: 1,
        maxScore: 1,
      },
      {
        questionId: "q2",
        topic: "sustainability",
        tags: ["PUE"],
        selected: ["Wrong"],
        correct: false,
        score: 0,
        maxScore: 1,
      },
      {
        questionId: "q3",
        topic: "operations",
        tags: ["risk"],
        selected: ["Wrong"],
        correct: false,
        score: 0,
        maxScore: 1,
      },
    ],
  };

  const result = api.buildResult(quiz);

  assert.equal(result.percentage, 33);
  assert.equal(result.label, "Study operations basics");
  assert.equal(result.correctCount, 1);
  assert.equal(result.incorrectCount, 2);
  assert.equal(JSON.stringify(result.questionIds), JSON.stringify(["q1", "q2", "q3"]));
  assert.equal(JSON.stringify(result.missedQuestionIds), JSON.stringify(["q2", "q3"]));
  assert.equal(
    JSON.stringify(result.weakTopics.map((item) => item.topic)),
    JSON.stringify(["sustainability", "operations"]),
  );
  assert.match(result.recommendation, /Use the study topics page before retrying this mode/);
});

test("formats timer values and calculates timed result metadata", () => {
  const api = loadQuizApi();
  const quiz = {
    mode: "hard",
    source: "timed",
    timer: {
      enabled: true,
      secondsPerQuestion: 180,
      questionStartedAt: 1_000,
      expiresAt: 181_000,
    },
    questions: [{ id: "q1" }, { id: "q2" }],
    responses: [
      {
        questionId: "q1",
        topic: "operations",
        tags: ["MOP"],
        selected: ["Pause and assess"],
        correct: true,
        score: 5,
        maxScore: 6,
        timedOut: false,
        timedSecondsUsed: 75,
      },
      {
        questionId: "q2",
        topic: "live-site risk",
        tags: ["risk"],
        selected: [],
        correct: false,
        score: 0,
        maxScore: 6,
        timedOut: true,
        timedSecondsUsed: 180,
      },
    ],
  };

  const result = api.buildResult(quiz);

  assert.equal(api.formatDuration(180), "3:00");
  assert.equal(api.getTimerRemainingMs(quiz, 121_000), 60_000);
  assert.equal(api.getQuestionElapsedSeconds(quiz, 91_000), 90);
  assert.equal(result.timed, true);
  assert.equal(result.timedSecondsPerQuestion, 180);
  assert.equal(result.timedOutCount, 1);
  assert.equal(result.totalTimedSeconds, 255);
  assert.equal(result.percentage, 42);
});

test("selects flashcard decks and formats expected answers", () => {
  const api = loadQuizApi();
  const easyDeck = api.selectFlashcards("easy", () => 0.2, 4);
  const multiSelect = api.QUESTIONS.find((question) => question.id === "medium-ops-003");
  const scenario = api.QUESTIONS.find((question) => question.id === "hard-live-001");

  assert.equal(easyDeck.length, 4);
  assert.equal(easyDeck.every((question) => question.difficulty === "easy"), true);
  assert.equal(api.flashcardAnswer(api.QUESTIONS.find((question) => question.id === "easy-power-001")), "Uninterruptible Power Supply");
  assert.match(api.flashcardAnswer(multiSelect), /Approved MOP/);
  assert.match(api.flashcardAnswer(scenario), /Strong answer should cover/);
  assert.match(api.flashcardDetail(scenario), /capacity and redundancy margin/);
});

test("summarizes flashcard session review topics", () => {
  const api = loadQuizApi();
  const session = {
    cards: [
      { id: "q1", topic: "power" },
      { id: "q2", topic: "cooling" },
      { id: "q3", topic: "power" },
    ],
    known: ["q1"],
    review: ["q2", "q3"],
  };

  const summary = api.flashcardSummary(session);

  assert.equal(summary.total, 3);
  assert.equal(summary.knownCount, 1);
  assert.equal(summary.reviewCount, 2);
  assert.equal(JSON.stringify(summary.reviewTopics), JSON.stringify(["cooling", "power"]));
});

test("returns expected readiness labels at boundaries", () => {
  const api = loadQuizApi();

  assert.equal(api.resultLabel("easy", 49), "Start with fundamentals");
  assert.equal(api.resultLabel("easy", 70), "Decent foundation");
  assert.equal(api.resultLabel("medium", 85), "Ready for Hardest Mode");
  assert.equal(api.resultLabel("hard", 95), "Senior-level judgment");
});
