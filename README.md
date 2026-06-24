# Data Center PM Readiness Quiz

A frontend-only quiz app for data-center project management interview preparation. It covers foundation terms, practical operations readiness, and hardest-mode live-site judgment scenarios.

## Run Locally

Open `index.html` directly in a browser, or serve the folder locally:

```sh
python3 -m http.server 5173
```

Then visit `http://localhost:5173`.

## Test

Run the automated scoring tests with:

```sh
npm test
```

## Engineering Workflow

For future feature work, use this default workflow unless the task explicitly says otherwise:

- Keep changes small and focused; prefer microcommits for separate logical steps such as data changes, UI changes, tests, and docs.
- Add or update tests for scoring logic, state transitions, storage behavior, and any user-visible edge cases.
- Update documentation when behavior, setup, feature lists, or development workflow changes.
- Run `npm test` before handing off work; also run a syntax check such as `node --check src/app.js` when editing the main script.
- Preserve existing user changes in the working tree and avoid unrelated refactors.
- Mention any verification that could not be completed, including browser smoke tests or network-dependent checks.

## Included

- Easy, Medium, and Hardest quiz modes
- Randomized question attempts
- Recent-question rotation for Hardest Mode when enough unseen scenarios are available
- Timed interview practice for Hardest Mode scenarios
- Daily 10-question mixed drill with repeatable date-based selection
- Study streaks based on completed daily drill days
- Flashcard mode with randomized decks and review tracking
- Retry-missed flow from results and history
- Multiple-choice, true/false, multi-select, and scenario self-scoring
- Immediate explanations and sample strong scenario answers
- Results summary with weak topics and recommendations
- Progress dashboard with per-mode trends and recurring weak topics
- Study topics page
- LocalStorage result history
- Responsive mobile and desktop layout

## Learning Design

Hardest Mode is designed for concept practice rather than memorizing fixed answers. It serves 5 scenarios per attempt from a 20-scenario bank covering live-site risk, capacity, cooling, power, customer delivery, procurement, security, monitoring, sustainability, and stakeholder trade-offs. Completed attempts save question IDs in local storage so later hard-mode attempts can prefer scenarios the user has not seen recently.
