# Workflow repo for the CA

### Task Status Emojis

- **Not Started**: ⏳ 🟡 🚧 📋
- **In Progress**: 🔄 🚀 🟠 ⚙️
- **Completed**: ✅ 🟢 🎉 ✨
- **Blocked**: ⛔ 🚫 🔴 🛑
- **Optional**: 💡 🟦 🤷‍♂️

---

### General Status Emojis

- **Setup**: 🛠️ ⚒️ 🔧 🏗️
- **Testing**: 🧪 🔬 🩺 ✅
- **Documentation**: 📝 📖 🗒️ 🗂️
- **Deployment**: 🚀 🌍 🛳️
- **Review**: 👀 ✅ 🔍

---

### Contextual Project Emojis

- **Code-related**: 💻 📂 📜 🧑‍💻
- **Git-related**: 🍴 🔀 🔄 🔃
- **Environment/Config**: ⚙️ 🛠️ 🗂️ 📝
- **Bugs/Errors**: 🐛 ❌ 🔴 🛑

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

## 3. Set Up Development Tools 🛠️

- **Install and configure ESLint and Prettier**:
  - ESLint must be configured to handle the globals used in the test files.
- **Set up commit hooks**:
  - Ensure staged code is checked before being committed.
  - Format HTML files and format/lint JavaScript files.

---

## 4. Set Up Testing Tools 🧪

### Unit Testing: Configure Vitest

- Install and configure **Vitest** for unit testing.
- Test these cases:

  #### `isActivePath` Function

  1. Returns `true` when the current path matches `href` exactly.
  2. Returns `true` for the root path (`"/"`) when the path is `"/"` or `"/index.html"`.
  3. Returns `true` when the current path includes the `href`.
  4. Returns `false` when paths don't match.

  #### `getUserName` Function

  - Test that it:
    - Returns the name from the user object in storage (first save a user object to storage).
    - Returns `null` when no user exists in storage.

### End-to-End Testing: Configure Playwright

- Install and configure **Playwright** for e2e testing.
- Test these cases:

  #### Login

  - User can successfully log in with valid credentials from environment variables.
    - If the login details from the lesson do not work, you can create a new user by running the project and using the register form.
  - User sees an error message with invalid credentials.

  **Important:**

  - Add `.env` to the `.gitignore`.
  - Include an `.env.example` file in the branch.

  #### Navigation

  - Write a test that:
    1. Navigates to the home page.
    2. Waits for the venue list to load.
    3. Clicks the first venue.
    4. Verifies that when the venue details page loads, there are the words “Venue details” in the heading.

---

## 5. Update the README 📝

- The README in the repo is almost empty. Update it to include:
  - **Setup Instructions**:
    - Commands such as `npm install`, `npm run test`, and any other scripts you add to the project.
  - **Environment Variables**:
    - Include the names of the required variables (but not their values).

---

## 6. Submit Your Work 📬

1. Open a **Pull Request (PR)** from your workflow branch into your default branch.
   - **Do not merge the PR.**
2. Request a review from peers.
3. Incorporate feedback and make any necessary changes.
4. Submit your **PR link** on Moodle.
