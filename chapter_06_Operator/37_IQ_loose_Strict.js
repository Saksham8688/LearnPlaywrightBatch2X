console.log("" == "0"); // transitive comparison
// Output : false (both are strings, but they are not equal)
console.log(0 == ""); // Output: true (0 is falsy, '' is also falsy, so they are considered equal in loose equality)
console.log(0 === ""); // Output: false (strict equality does not allow type coercion, different types)

console.log(0 === false); // Output: false (0 is a number, false is a boolean, different types)
console.log(null === undefined); // Output: false (different types: null is an object, undefined is undefined) 
console.log(null == 0); // Output: false (null is only loosely equal to undefined, not to 0 or any other value)
console.log(undefined == 0); // Output: false (undefined is only loosely equal to null, not to 0 or any other value)
console.log(null === undefined); // Output: false (strict equality does not allow type coercion, different types)
