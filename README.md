# Playwright + BDD + Page Objects

## Setup
    npm install
    npx playwright install

## Run
    npm test              # all scenarios
    npm run test:headed   # watch the browser
    npm run test:smoke    # only @smoke scenarios
    npm run report        # open HTML report

## Adding a new page
1. Create `pages/NewPage.js` (locators + actions, no assertions)
2. Register it in `fixtures.js`
3. Use it in steps: `async ({ newPage }) => { ... }`
