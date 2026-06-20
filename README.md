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
├── chapter_03_Identifier_Literals/
│   ├── 06_Identifier_Rules.js     # Rules for JavaScript identifiers
│   ├── 07_Identifier_Part2.js     # Naming conventions (camelCase, snake_case, etc.)
│   ├── 08_Comments.js             # Single-line and multi-line comments
│   ├── JS_Identifiers_Rules.js    # Comprehensive identifier rules with examples
│   ├── VS_Code_KeyboardShortcut_windows.md  # VS Code shortcuts for Windows
│   └── VS_Code_KeyboardShortcut_mac.md      # VS Code shortcuts for macOS
│
├── chapter_04_Javascript_Concepts/
│   ├── 09_var_let_const.js        # var vs let vs const comparison
│   ├── 10_Functions.js            # Function declarations and expressions
│   ├── 11_var_explained.js        # Deep dive into var behaviour
│   ├── 12_let_people_love.js      # Why developers prefer let
│   ├── 13_constant_explained.js   # Understanding const
│   ├── 14_var_functionscope.js    # var and function scope
│   ├── 15_let_scope.js            # Block scope with let
│   ├── 16_hoisting.js             # Variable hoisting explained
│   ├── 17_hoisting_fn.js          # Function hoisting explained
│   ├── 18_let_hoisting.js         # let hoisting behaviour
│   ├── 19_let_hoisting_block.js   # let hoisting in block scope
│   ├── 20_let_const.js            # let and const together
│   └── 21_Jr_Qa.js                # Junior QA practice exercises
│
├── chapter_05_literals/
│   ├── 22_Literal.js                        # Introduction to literals
│   ├── 23_null_undefined.js                 # null vs undefined explained
│   ├── 24_null.js                           # null deep dive
│   ├── 25_Literal_all.js                    # All literal types overview
│   ├── 26_literal_number_all.js             # All number types in JavaScript
│   ├── 27_String.js                         # String literals
│   ├── 28_Template_Literal.js               # Template literals with ${}
│   └── 29_backtick_single_double_quote.js   # Backtick vs single vs double quote
│
└── chapter_06_Operator/
    ├── 30_Operators.js                      # Introduction to operators
    ├── 31_Arithmetic_Operators.js           # +, -, *, /, %
    ├── 32_Modulus_Operator.js               # Modulus (%) deep dive
    ├── 33_Exponential_Operator.js           # Exponentiation (**)
    ├── 34_IQ.js                             # Operator IQ practice
    ├── 35_Comparsion_Operator.js            # Comparison operators overview
    ├── 36_Comparsion_Strict_loose.js        # Strict vs loose comparison
    ├── 37_IQ_loose_Strict.js                # IQ: loose vs strict equality
    ├── 38_Confusing_Comparsion.js           # Confusing == and === edge cases
    ├── 39_Logical_Operators.js              # &&, ||, ! logical operators
    ├── 40_String_Concatenate_Operator.js    # String concatenation with +
    ├── 41_Ternary_Operator.js               # condition ? true : false
    ├── 42_Type_Of_Operator.js               # typeof operator
    ├── 43_Increment_Decrement_Operator.js   # ++, -- operators
    ├── 44_Null_Operator.js                  # Nullish coalescing (??)
    ├── 45_Post_Increment_Operator.js        # Post-increment operator deep dive
    ├── 46_IQ_Increment_D.js                 # IQ: increment/decrement practice
    └── 47_IQ_Advance_Increment.js           # Advanced increment IQ challenges

├── chapter_07_If_Else/
│   ├── 48_If_Else.js                        # Basic if/else statement
│   ├── 49_If_ElseIf_Else.js                 # if/else if/else chains
│   ├── 50_Real_If_Else.js                   # Real-world if/else examples
│   ├── 51_API_If_Else.js                    # if/else with API responses
│   ├── 52_IQ_If_Else.js                     # IQ: if/else practice
│   ├── 53_If_else_real.js                   # Real scenarios with if/else
│   ├── 54_IQ.js                             # IQ practice exercises
│   ├── 55_IF.js                             # Standalone if statement
│   ├── 56_Even_Odd.js                       # Even or odd number check
│   ├── 57_Student_Grade_Calculator.js       # Grade calculator using if/else
│   └── 58_Leap_Year.js                      # Leap year check program
│
├── chapter_08_Switch_Statement/
│   ├── 59_Swtich.js                         # Basic switch statement
│   ├── 60_No_Break.js                       # Switch without break (fall-through)
│   ├── 61_Default.js                        # Switch with default case
│   ├── 62_Real_Time_Example.js              # Real-world switch example
│   ├── 63_Switch_Group.js                   # Grouped cases in switch
│   ├── 64_IQ.js                             # Switch IQ practice 1
│   ├── 65_IQ2.js                            # Switch IQ practice 2
│   ├── 66_IQ3.js                            # Switch IQ practice 3
│   └── 67_IQ4.js                            # Switch IQ practice 4
│
├── chapter_09_User_Input/
│   ├── 68_User_Input.js                     # Introduction to user input in Node.js
│   ├── 69_Node_readline.js                  # Reading input using node:readline
│   └── 70_Prompt_Sync.js                    # Reading input using prompt-sync
│
├── chapter_10_Loops/
│   ├── 71_For_Loop.js                       # Introduction to for loop
│   ├── 72_For_Loop.js                       # for loop continued
│   ├── 73_For_Loop2.js                      # for loop advanced examples
│   ├── 74_IQ.js                             # for loop IQ practice
│   ├── 75_For_OF_IN_EACH.js                 # for...of, for...in, forEach
│   ├── 76_while.js                          # while loop
│   ├── 77_Do_while.js                       # do...while loop
│   ├── 78_Do_while.js                       # do...while continued
│   ├── 79_IQ.js                             # Loop IQ practice 1
│   ├── 80_IQ.js                             # Loop IQ practice 2
│   ├── 81_IQ.js                             # Loop IQ practice 3
│   └── 82_IQ.js                             # Loop IQ practice 4
│
├── chapter_11_Arrays/
│   ├── 83_Arrays.js                         # Introduction to arrays & indexing
│   ├── 84_Arrays.js                         # Array basics continued
│   ├── 85_Access_Arrays.js                  # Accessing & modifying with [] and at()
│   ├── 86_Adding_Remove_Arrays.js           # push, pop, shift, unshift
│   ├── 87_Adding_Remove2.js                 # Adding/removing elements continued
│   ├── 88_Real_Examples.js                  # Real-world array scenarios
│   ├── 89_Searching.js                      # indexOf, lastIndexOf, includes
│   ├── 90_Iterate.js                        # for, for...of, forEach, for...in
│   ├── 91_Transform_Array.js                # map, filter, reduce, flat
│   ├── 92_Arrays.js                         # Additional array examples
│   ├── 93_Array_Slicing.js                  # slice vs splice examples
│   ├── 94_Concat_Array.js                   # Combining arrays with concat
│   └── 95_Array_Checking.js                 # Array checking utilities
│
├── chapter_12_Functions/
│   ├── 96_Functions.js                      # Function vs method basics
│   ├── 97_Type1_Fn_Basic_Function.js        # Basic function declaration
│   ├── 98_Type2_Fn_With_Parameter_No_Return.js # Function with parameters and no return
│   ├── 99_Type3_Fn_Without_Parameter_Return_Type.js # Function without parameter and with return
│   ├── 100_Type4_Fn_With_Parameter_Retrun_Type.js   # Function with parameter and return
│   ├── 101_Template_Literals.js             # Template literal examples in functions
│   ├── 102_Function_Expression.js           # Function expression examples
│   └── 103_Arrow_Function.js                # Arrow function examples
│
├── Task_20th_May_If_Else/
│   ├── Task_1_HTTP_Status_Code.js              # Classify HTTP status codes
│   ├── Task_2_TestCase_Pass_Fail_Verdict.js    # Test case pass/fail verdict
│   ├── Task_3_Bug_Serverity.js                 # Bug severity classifier
│   ├── Task_4_Build_Health_Reporter.js         # Build health reporter
│   └── Task_5_Login_Lockout_Fail_Attempt.js    # Login lockout after failed attempts
│
└── Task_22nd_May.js/
    ├── TASK_1_Triangle_Classifier.js           # Triangle classifier (Equilateral/Isosceles/Scalene)
    └── TASK_2_FizzBuzz_Test.js                 # FizzBuzz problem solution
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

### Chapter 04 — JavaScript Concepts (Variables, Scope & Hoisting)
- `var`, `let`, and `const` — differences and when to use each
- Function declarations vs function expressions
- Deep dive into `var` behaviour and quirks
- Why developers prefer `let` over `var`
- Understanding `const` and immutability
- Function scope with `var`
- Block scope with `let`
- Variable hoisting — how JS moves declarations to the top
- Function hoisting — how entire functions are hoisted
- `let` hoisting and the Temporal Dead Zone (TDZ)
- Junior QA practice exercises

### Chapter 05 — Literals
- Introduction to JavaScript literals
- `null` vs `undefined` — what they mean and when to use each
- Deep dive into `null`
- All literal types in JavaScript
- All number types: Integer, Float, Exponential, Binary, Octal, Hex, BigInt, NaN, Infinity
- String literals and string methods
- Template literals with `${}` expressions
- Backtick vs single quote vs double quote — key differences

### Chapter 06 — Operators
- Introduction to JavaScript operators
- Arithmetic operators: `+`, `-`, `*`, `/`, `%`
- Modulus operator deep dive
- Exponentiation operator `**`
- Operator IQ practice
- Comparison operators: `>`, `<`, `>=`, `<=`
- Strict (`===`) vs loose (`==`) equality
- Confusing `==` and `===` edge cases (null, NaN, [], {})
- Logical operators: `&&`, `||`, `!`
- String concatenation with `+`
- Ternary operator: `condition ? true : false`
- `typeof` operator
- Increment (`++`) and decrement (`--`) operators
- Post-increment operator deep dive
- Nullish coalescing operator `??`
- IQ practice: increment/decrement
- Advanced increment/decrement challenges

### Chapter 07 — If / Else (Conditional Statements)
- Basic `if` and `if/else` statements
- `if / else if / else` chains
- Real-world scenarios with `if/else`
- Conditional logic with API responses
- Standalone `if` statement
- Even or odd number check
- Student grade calculator
- Leap year program
- IQ practice exercises

### Chapter 08 — Switch Statement
- Basic `switch` syntax
- Switch without `break` (fall-through behaviour)
- `default` case usage
- Real-world switch examples
- Grouped cases in switch
- IQ practice (multiple sets)

### Chapter 09 — User Input (Node.js)
- Reading input from the terminal/console
- Using the built-in `node:readline` module
- Using the `prompt-sync` package for synchronous input

### Chapter 10 — Loops
- `for` loop fundamentals and patterns
- `for...of`, `for...in`, and `forEach`
- `while` loop
- `do...while` loop
- Loop IQ practice exercises

### Chapter 11 — Arrays
- Creating arrays and zero-based indexing
- Arrays holding mixed data types
- Accessing elements with `[]` and `at()` (including negative indices)
- Adding & removing elements: `push`, `pop`, `shift`, `unshift`
- Real-world array scenarios
- Searching arrays: `indexOf`, `lastIndexOf`, `includes`
- Iterating with `for`, `for...of`, `forEach`, and `for...in`
- Transforming arrays: `map`, `filter`, `reduce`, `flat`
- Slicing arrays with `slice()` and editing arrays with `splice()`
- Combining arrays with `concat()`
- Checking arrays with common validation patterns

```js
// Transforming arrays (chapter_11_Arrays/91_Transform_Array.js)
let scores = [45, 83, 46, 74, 98, 24, 65];

// map  -> transform every element, returns a new array of the same length
let grades = scores.map(s => s > 70 ? "Pass" : "Fail");
// ['Fail', 'Pass', 'Fail', 'Pass', 'Pass', 'Fail', 'Fail']

// filter -> keep only the elements that pass the condition
let passing = scores.filter(s => s > 70); // [83, 74, 98]

// reduce -> accumulate the array down to a single value
let total = scores.reduce((a, b) => a + b, 0); // 435

// flat -> flatten a nested array into one array
let nested = [[1, 2], [3, 4], [5, 6]];
console.log(nested.flat()); // [1, 2, 3, 4, 5, 6]
```

### Chapter 12 — Functions
- Function declarations and basic syntax
- Function parameters and return values
- Function expressions
- Template literals inside functions
- Arrow functions and short syntax
- Difference between functions and methods

```js
// Arrow functions (chapter_12_Functions/103_Arrow_Function.js)
const greet = function (name) {
  return `Hello, ${name}`;
};

const greet2 = (name) => `Hello, ${name}`;
console.log(greet2("Saksham")); // Hello, Saksham

let doubleIt = n => n * 2;
console.log(doubleIt(10)); // 20

const printIt = name => console.log(name);
printIt("Singh");
```

### Task — 20th May (If/Else Practice)
- HTTP status code classifier (1xx/2xx/3xx/4xx/5xx)
- Test case pass/fail verdict
- Bug severity classifier (Critical / High / Medium / Low)
- Build health reporter
- Login lockout after multiple failed attempts

### Task — 22nd May
- Triangle classifier (Equilateral / Isosceles / Scalene)
- FizzBuzz problem

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
