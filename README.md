# Workflow Repo for the CA

This repository contains the setup for testing, development tools, and CI/CD workflows for the CA. It includes unit tests (Vitest), end-to-end tests (Playwright), and GitHub Actions for CI/CD.

---

## 🚀 Setup Instructions

### Prerequisites

- **Node.js**: v21.6.2 or higher
- **npm**: Installed with Node.js
- **Live Server**: For local development (e.g., via the **Live Server** extension in VS Code)

### Installation

1. **Clone the repository:**
   https://github.com/taraolivia/workflow-repo-ca

1. **Install dependencies:**

   `npm install`

1. **Run tests:**

   - **Unit tests (Vitest):**

     `npm run test:unit`

   - **End-to-end tests (Playwright):**

     `npx playwright test`

1. **Run tests in headed mode (with a visible browser):**

   `npx playwright test --headed`

1. **Show the Playwright test report:**

   `npx playwright show-report`

1. **Start the project with Live Server:**

   - Open `index.html` in your IDE.
   - Start Live Server (e.g., via the **Live Server** extension in VS Code).

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and define the following variables:

| Variable Name        | Description                                                       |
| -------------------- | ----------------------------------------------------------------- |
| `BASE_URL`           | The base URL for your application (e.g., `http://127.0.0.1:5500`) |
| `TEST_USER_EMAIL`    | Email for testing authentication.                                 |
| `TEST_USER_PASSWORD` | Password for testing authentication.                              |

> **Note**: Do not commit the `.env` file to the repository. Use the `.env.example` file as a template for required variables.

---

## 🧪 Testing

### Unit Tests

Unit tests are configured using **Vitest**. Run them with:

`npm run test:unit`

### End-to-End Tests

End-to-end tests are configured using **Playwright**. Run them with:

`npx playwright test`

Test cases include:

1.  **Login Tests**:
    - Successfully log in with valid credentials.
    - Display an error message with invalid credentials.
2.  **Navigation Tests**:
    - Navigate to the home page.
    - Click a venue and verify the "Venue details" heading on the details page.

---

## 🛠️ Development Tools

### Linting and Formatting

This project uses **ESLint** and **Prettier** for consistent code style.

1.  **Run ESLint:**

    `npm run lint`

2.  **Automatically fix issues:**

    `npm run lint:fix`

3.  **Format code:**

    `npm run format`

---

## 🛡️ CI/CD Workflow

### GitHub Actions

This project includes a GitHub Actions workflow for deploying the project to GitHub Pages. The workflow file is located at `.github/workflows/deploy.yml`.

1.  **Deployment Setup:**

    - Ensure GitHub Pages is set to deploy from the "GitHub Actions" source.

2.  **Testing CI/CD:**

    - Push to the `workflow` branch and ensure actions execute without errors.

# To-Do List 📝

✅ 🟢 🎉 ✨

## 1. Fork the Project Repository 🍴

- The repository is available [here](#).
- Start by creating a **fork** of the repo in your GitHub account.

---

✅ 🟢 🎉 ✨

## 2. Create a New Branch 🌱

- Name this branch **workflow**.
- Keep **all changes** in the workflow branch, as this will be needed for the PR.
  - If you use sub-branches, make sure they are merged into the workflow branch.

---

✅ 🟢 🎉 ✨

## 3. Set Up Development Tools 🛠️

- **Install and configure ESLint and Prettier**:
  - ESLint must be configured to handle the globals used in the test files.
- **Set up commit hooks**:
  - Ensure staged code is checked before being committed.
  - Format HTML files and format/lint JavaScript files.

---

---

🔄 🚀 🟠 ⚙️
⛔ 🚫 🔴 🛑
💡 🟦 🤷‍♂️

##Extra: CI/CD 🛠️

I think this doesnt work since I made it in the workflow branch

- **Creating Your First GitHub Action**:
  ✅
  - First, create this folder structure in your repository:
    .github/
    workflows/
    deploy.yml
    -Add code to deploy.yml
- **Setting Up GitHub Pages**:
  Go to your repository settings
  Scroll down to “Pages”
  Under “Build and deployment”:
  Source: Choose “GitHub Actions”
- **Testing Your Workflow**:
  Go to your repository settings
  Scroll down to “Pages”
  Under “Build and deployment”:
  Source: Choose “GitHub Actions”

---

✅ 🟢 🎉 ✨

## 4. Set Up Testing Tools 🧪

### Unit Testing: Configure Vitest

- Install and configure **Vitest** for unit testing. ✅

- Test these cases:

  #### `isActivePath` Function ✅ 🟢 🎉 ✨

  1. Returns `true` when the current path matches `href` exactly.
  2. Returns `true` for the root path (`"/"`) when the path is `"/"` or `"/index.html"`.
  3. Returns `true` when the current path includes the `href`.
  4. Returns `false` when paths don't match.

  #### `getUserName` Function ✅ 🟢 🎉 ✨

  - Test that it:
    - Returns the name from the user object in storage (first save a user object to storage).
    - Returns `null` when no user exists in storage.

### End-to-End Testing: Configure Playwright ✅ 🟢 🎉 ✨

- Install and configure **Playwright** for e2e testing. ✅
- Test these cases:

  #### Login ✅ 🟢 🎉 ✨

  - User can successfully log in with valid credentials from environment variables.
    - If the login details from the lesson do not work, you can create a new user by running the project and using the register form.
  - User sees an error message with invalid credentials.

  **Important:**

  - Add `.env` to the `.gitignore`. ✅
  - Include an `.env.example` file in the branch. ✅

  #### Navigation ✅ 🟢 🎉 ✨

  - Write a test that:
    1. Navigates to the home page.
    2. Waits for the venue list to load.
    3. Clicks the first venue.
    4. Verifies that when the venue details page loads, there are the words “Venue details” in the heading.

---

## 5. Update the README 📝 ✅ 🟢 🎉 ✨

- The README in the repo is almost empty. Update it to include:
  - **Setup Instructions**:
    - Commands such as `npm install`, `npm run test`, and any other scripts you add to the project.
  - **Environment Variables**:
    - Include the names of the required variables (but not their values).

---

## 6. Submit Your Work 📬

1. Open a **Pull Request (PR)** from your workflow branch into your default branch.
   - **Do not merge the PR.**
2. Request a review from peers.✅ 🟢 🎉 ✨
3. Incorporate feedback and make any necessary changes.✅ 🟢 🎉 ✨
4. Submit your **PR link** on Moodle.
