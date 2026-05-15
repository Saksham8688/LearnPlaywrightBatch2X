var v = 10;
let l = 20;
const c = 3.14;

var browser = "Chrome";
var browser = "Firefox"; // Allowed - var allows redeclaration
browser = "Edge"; // Allowed - var allows reassignment
console.log(browser); // Output: "Edge"

var testcases = ["login", "signup", "logout"]; // Allowed - var allows redeclaration

for (var i = 0; i < testcases.length; i++) {
    console.log("Running test case: ", testcases[i]);
}

console.log("Loop counter leaked outside loop: ", i);
// Output: 3 - var is function-scoped, not block-scoped
// ideally i should not be accessible outside the loop, but with var it is accessible due to function scope.    

console.log("Hi");
console.log("Hi");
console.log("Hi");

function say() {
    console.log("Hi from say function");
}

say();
say();