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

## Included

- Easy, Medium, and Hardest quiz modes
- Randomized question attempts
- Multiple-choice, true/false, multi-select, and scenario self-scoring
- Immediate explanations and sample strong scenario answers
- Results summary with weak topics and recommendations
- Study topics page
- LocalStorage result history
- Responsive mobile and desktop layout
