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
  getWeakTopics,
  resultLabel,
  recommendation,
  buildResult,
  titleCase,
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
  assert.equal(
    JSON.stringify(result.weakTopics.map((item) => item.topic)),
    JSON.stringify(["sustainability", "operations"]),
  );
  assert.match(result.recommendation, /Use the study topics page before retrying this mode/);
});

test("returns expected readiness labels at boundaries", () => {
  const api = loadQuizApi();

  assert.equal(api.resultLabel("easy", 49), "Start with fundamentals");
  assert.equal(api.resultLabel("easy", 70), "Decent foundation");
  assert.equal(api.resultLabel("medium", 85), "Ready for Hardest Mode");
  assert.equal(api.resultLabel("hard", 95), "Senior-level judgment");
});
