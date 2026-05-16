// ============================================
// Backtick vs Single Quote vs Double Quote
// ============================================

var name = "Saksham";
var course = 'Playwright';

// Single Quote — basic string, no special features
var single = 'Hello, I am ' + name + ' and I am learning ' + course;
console.log(single); // Output: Hello, I am Saksham and I am learning Playwright

// Double Quote — same as single quote, just different wrapper
var double = "Hello, I am " + name + " and I am learning " + course;
console.log(double); // Output: Hello, I am Saksham and I am learning Playwright

// Backtick (Template Literal) — supports variables directly inside ${}
var backtick = `Hello, I am ${name} and I am learning ${course}`;
console.log(backtick); // Output: Hello, I am Saksham and I am learning Playwright

// -----------------------------------------------
// KEY DIFFERENCES
// -----------------------------------------------
// Single Quote  ' '  → basic string, use + to join variables
// Double Quote  " "  → same as single quote
// Backtick      ` `  → supports ${variable}, multi-line, expressions

// Backtick supports multi-line without \n
var multiLine = `Line 1
Line 2
Line 3`;
console.log(multiLine);

// Backtick supports expressions inside ${}
var a = 10;
var b = 20;
console.log(`Sum of ${a} + ${b} = ${a + b}`); // Output: Sum of 10 + 20 = 30
