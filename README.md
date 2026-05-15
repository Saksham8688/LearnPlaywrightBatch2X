# Learn Playwright Batch 2X

A structured learning repository for **Playwright** and **JavaScript** fundamentals, built session by session as part of Batch 2X training.

---

## Repository Structure

```
LearnPlaywrightBatch2X/
├── chapter_01_Basics/
│   ├── 01_Basics.js               # Introduction to Playwright basics
│   ├── 02_JS.js                   # JavaScript fundamentals overview
│   ├── 03_JS_Commands.js          # Common JavaScript commands
│   └── 04_HotCode.js              # Hot reload / live code examples
│
├── chapter_02_Javascript_Concepts/
│   └── 05_JS_Basics.js            # Core JavaScript concepts
│
└── chapter_03_Identifier_Literals/
    ├── 06_Identifier_Rules.js     # Rules for JavaScript identifiers
    ├── 07_Identifier_Part2.js     # Naming conventions (camelCase, snake_case, etc.)
    ├── 08_Comments.js             # Single-line and multi-line comments
    ├── JS_Identifiers_Rules.js    # Comprehensive identifier rules with examples
    ├── VS_Code_KeyboardShortcut_windows.md  # VS Code shortcuts for Windows
    └── VS_Code_KeyboardShortcut_mac.md      # VS Code shortcuts for macOS
```

---

## Topics Covered

### Chapter 01 — Basics
- Setting up Playwright
- Introduction to JavaScript in the context of Playwright
- Common JS commands used in automation
- Hot code reloading

### Chapter 02 — JavaScript Concepts
- Core JavaScript fundamentals
- Variables, data types, and expressions

### Chapter 03 — Identifiers & Literals
- JavaScript identifier rules (what's valid and what's not)
- Naming conventions:
  - `camelCase` — most common for variables and functions
  - `PascalCase` — used for classes and constructors
  - `snake_case` — sometimes used in test IDs
  - `UPPER_SNAKE_CASE` — used for constants
  - `kebab-case` — **not valid** in JS identifiers
- Comments (single-line `//` and multi-line `/* */`)
- VS Code keyboard shortcuts for Windows and macOS

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [Playwright](https://playwright.dev/)
- [Visual Studio Code](https://code.visualstudio.com/)

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/Saksham8688/LearnPlaywrightBatch2X.git

# Navigate into the folder
cd LearnPlaywrightBatch2X

# Install Playwright (when automation scripts are added)
npm init -y
npm install -D @playwright/test
npx playwright install
```

---

## Author

**SAKSHAM SINGH**
GitHub: [@Saksham8688](https://github.com/Saksham8688)

---

## License

This repository is for educational purposes only.
