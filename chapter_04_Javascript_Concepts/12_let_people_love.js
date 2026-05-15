// let - blocked scope variable declaration
// let allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used.
// let is similar to var but with block scope, which means it is only accessible within the block it is defined in, such as within a function, loop, or if statement.

// Example of let in a block scope
function testLet() {
    let x = 10; // x is only accessible within this function
    console.log(x); // Output: 10
}

let retrycount = 0;
retrycount = retrycount + 1; // Allowed - let allows reassignment
retrycount = retrycount + 1;
console.log("Retry attempt: ", retrycount); // Output: 1

// let retrycount = 5;
// Error - let does not allow redeclaration in the same scope
// SyntaxError: Identifier 'retrycount' has already been declared

let testStatus = "passed";

if (testStatus === "passed") {
    let executionTime = 1200;
    console.log(executionTime); // Output: 1200
}

// console.log(executionTime);
// Error - executionTime is not defined outside the if block - ReferenceError: executionTime is not defined