console.log(c); // TDZ for c starts here
// ReferenceError: Cannot access 'c' before initialization
console.log("Hi");
console.log("Hi");
console.log("Hi");
console.log("Hi");
console.log("Hi");
console.log("Hi");
console.log("Hi");

const c = "Saksham"; //TDZ for c ends here
console.log(c); // Output: "Saksham"