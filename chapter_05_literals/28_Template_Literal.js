let firstname = 'Saksham';
let fullname = `My  name is ${firstname}`; // Template literal with embedded expression
console.log(fullname); // Output: My name is Saksham

// Javascript allows multiline strings using template literals
let multilineString = `This is a
multiline string
using template literals.`;
console.log(multilineString);

// real life example of using template literals to construct a URL
let env = "production";
const endpoint = 8355;
const apiUrl = `https"//api.example.com/${env}/endpoint/${endpoint}`;
console.log(apiUrl); // Output: https"//api.example.com/production/endpoint/8355

// playwright example of using template literals to construct a selector
const rowIndex = 3;
const columnName = "email";
await page.locator(`table tr:nth-child(${rowIndex}) td[data-column="${columnName}"]`).click();

// logs 
const testName = "Login Test";
const status = "passed";
const duration = 1200;
console.log(`Test "${testName}" ${status} in ${duration}ms`);
// Output: Test "Login Test" passed in 1200ms

const testcase = "Search Functionality";
const timestamp = Date.now();
await page.screenshot({ path: `screenshots/${testcase}_${timestamp}.png` });
// Saves screenshot with dynamic filename

// Template literals are a powerful way to create dynamic 
// strings with embedded expressions and multi-line support, 
// making code cleaner and more readable.
