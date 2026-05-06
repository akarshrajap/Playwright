# Playwright Hands-On Project

## Overview

This is a **Playwright Test Automation** project that demonstrates how to write and run end-to-end (E2E) tests for web applications. Playwright is a modern, powerful testing framework that allows developers to test web applications across multiple browsers.

## About Playwright

[Playwright](https://playwright.dev/) is an open-source automation library maintained by Microsoft that provides:
- **Cross-browser testing**: Test on Chromium, Firefox, and WebKit
- **Fast execution**: Tests run in parallel for quicker feedback
- **Multiple languages**: Supports JavaScript, TypeScript, Python, C#, and Java
- **Rich debugging tools**: Built-in browser debugging and trace viewer
- **HTML reports**: Generate comprehensive test reports with visual comparisons

## Project Structure

```
playwright-handson/
├── tests/                          # Test files directory
│   └── first-test.spec.ts         # Sample E2E test
├── playwright-report/              # Generated HTML test reports
│   ├── index.html                 # Test report dashboard
│   └── data/                      # Test execution data
├── test-results/                  # Test artifacts and results
├── example.spec.ts                # Example test file
├── package.json                   # Project dependencies and metadata
├── playwright.config.ts           # Test configuration file
└── README.md                      # This file
```

## Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **VS Code** (recommended) or any text editor

## Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd playwright-handson
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers** (optional, auto-installed on first test run)
   ```bash
   npx playwright install
   ```

## Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests in a specific file
```bash
npx playwright test tests/first-test.spec.ts
```

### Run tests in headed mode (see the browser)
```bash
npx playwright test --headed
```

### Run tests for a specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run a single test by name
```bash
npx playwright test -g "Playwright Official Website Test"
```

### Debug tests
```bash
npx playwright test --debug
```

## Viewing Test Reports

After running tests, view the HTML report:
```bash
npx playwright show-report
```

The report includes:
- Test execution timeline
- Pass/fail status for each test
- Screenshots and videos (if configured)
- Detailed error messages for failed tests

## Test Configuration

The `playwright.config.ts` file contains:
- **Test directory**: Where test files are located (`./tests`)
- **Parallel execution**: Tests run in parallel for faster feedback
- **Retries**: Automatic retry on CI environment
- **Reporters**: HTML report generation
- **Projects**: Configuration for multiple browsers (Chromium, Firefox, WebKit)
- **Trace**: Trace collection on first retry for debugging

## Current Tests

### Playwright Official Website Test
- **File**: `tests/first-test.spec.ts`
- **Purpose**: Demonstrates basic Playwright testing patterns
- **Coverage**:
  - Navigate to https://playwright.dev/
  - Verify page title contains "Playwright"
  - Verify "Get started" link is visible

## Key Features

✅ **Multi-browser testing** - Run tests on multiple browsers simultaneously  
✅ **Parallel execution** - Faster test runs with concurrent execution  
✅ **HTML reports** - Comprehensive test reports with visual feedback  
✅ **TypeScript support** - Type-safe test writing  
✅ **CI/CD ready** - Easy integration with GitHub Actions, Jenkins, etc.

## Dependencies

- `@playwright/test`: ^1.59.1 - Playwright testing framework
- `@types/node`: ^25.6.0 - TypeScript types for Node.js

## Next Steps

1. **Add more tests**: Create new test files in the `tests/` directory
2. **Configure baseURL**: Update `playwright.config.ts` to set your application URL
3. **Add page objects**: Create page object models for maintainability
4. **CI/CD integration**: Set up automated testing in your pipeline
5. **Custom reporters**: Configure additional reporters for detailed insights

## Useful Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Best Practices Guide](https://playwright.dev/docs/best-practices)
- [Debugging Guide](https://playwright.dev/docs/debug)

## License

ISC

---

**Happy Testing! 🚀**
