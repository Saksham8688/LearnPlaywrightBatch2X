// ============================================
// null vs undefined in JavaScript
// ============================================

// -----------------------------------------------
// UNDEFINED
// -----------------------------------------------
// undefined means a variable has been declared
// but has NOT been assigned any value yet.
// JavaScript sets it automatically.

var a;
console.log(a);           // Output: undefined  (declared but no value)
console.log(typeof a);    // Output: "undefined"

// undefined in function arguments
function greet(name) {
    console.log(name);    // Output: undefined (no argument was passed)
}
greet();

// undefined when accessing a non-existent object property
var user = { age: 25 };
console.log(user.name);   // Output: undefined (property does not exist)

// undefined as a function return value
function doNothing() {
    // no return statement
}
console.log(doNothing()); // Output: undefined

// -----------------------------------------------
// NULL
// -----------------------------------------------
// null means a variable has been deliberately
// assigned an EMPTY or NO value by the developer.
// It is intentional — you are saying "no value here".

var b = null;
console.log(b);           // Output: null  (intentionally empty)
console.log(typeof b);    // Output: "object"  (known JS quirk/historical bug)

// Real-world example: a user is not logged in yet
var loggedInUser = null;  // no user logged in right now
console.log(loggedInUser); // Output: null

// Later when user logs in:
loggedInUser = { name: "Saksham", role: "Admin" };
console.log(loggedInUser); // Output: { name: "Saksham", role: "Admin" }

// -----------------------------------------------
// COMPARISON: null vs undefined
// -----------------------------------------------

console.log(null == undefined);   // Output: true  (loose equality — both mean "no value")
console.log(null === undefined);  // Output: false (strict equality — different types)

console.log(typeof null);         // Output: "object"    (JS quirk)
console.log(typeof undefined);    // Output: "undefined"

// -----------------------------------------------
// PRACTICAL DIFFERENCE
// -----------------------------------------------

// undefined — JS assigned it automatically
var x;
if (x === undefined) {
    console.log("x was never given a value"); // This runs
}

// null — Developer assigned it intentionally
var y = null;
if (y === null) {
    console.log("y is intentionally empty"); // This runs
}

// -----------------------------------------------
// SUMMARY
// -----------------------------------------------
// undefined → JS set it automatically → variable exists but has no value
// null      → Developer set it manually → intentional absence of value
// null == undefined  → true  (loose check)
// null === undefined → false (strict check — they are different types)
