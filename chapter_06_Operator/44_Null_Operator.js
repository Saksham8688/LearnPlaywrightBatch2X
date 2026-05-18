console.log(null >= 0); // Output: true (null is coerced to 0, so the comparison is true)
console.log(null > 0);  // Output: false (null is coerced to 0, so the comparison is false)
console.log(null <= 0); // Output: true (null is coerced to 0, so the comparison is true)

console.log(null === 0); // Output: false (strict equality does not allow type coercion, different types)

// nullish operator (??) - returns the right-hand side operand
//  when the left-hand side operand is null or undefined, 
// otherwise returns the left-hand side operand.

let a = null;
let b = a ?? "Default Value";
console.log(b); // Output: "Default Value" (because a is null)

a = "Hello";
b = a ?? "Default Value";
console.log(b); // Output: "Hello" (because a is not null or undefined)