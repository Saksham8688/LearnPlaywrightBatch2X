let raj_age = 17;
let can_vote = (raj_age >= 18) ? "Yes, Raj can vote." : "No, Raj cannot vote yet.";

console.log(can_vote); // Output: "No, Raj cannot vote yet."

// Ternary operator is a concise way to write an if-else statement. 
// It takes three operands: a condition, a value if the condition is true, 
// and a value if the condition is false.

let actualstatusCode = 200;
let expectedStatusCode = 200;
let statusMessage = (actualstatusCode === expectedStatusCode) ? "PASS" : "FAIL";
console.log(statusMessage); // Output: "PASS"

let responseTime = 350; // in milliseconds
let SLA = 400; // Service Level Agreement in milliseconds
let performanceStatus = (responseTime <= SLA) ? "Within SLA" : "SLA Breached";
console.log(performanceStatus); // Output: "Within SLA"

// Nested Ternary Operator
// You can also nest ternary operators for multiple conditions, 
// but be cautious as it can reduce readability.

let age = 25;
let is_saksham_goa = age > 18 ? (age > 21 ? "He can drink" : "He cannot drink") : "He cannot go to Goa";
console.log(is_saksham_goa); // Output: "He can drink"

// maximum number between two numbers using ternary operator
let num1 = 10;
let num2 = 20;
let max = (num1 > num2) ? num1 : num2;
console.log(max); // Output: 20
let maxMessage = (num1 > num2) ? "Number 1 is greater" : "Number 2 is greater";
console.log(maxMessage); // Output: "Number 2 is greater"


//maximum number between three numbers using nested ternary operator
let a = 15;
let b = 40;
let c = 55;

let maxofThree = a > b ? (a > c ? a : c) : (b > c ? b : c);
console.log(maxofThree); // Output: 55