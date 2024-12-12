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
