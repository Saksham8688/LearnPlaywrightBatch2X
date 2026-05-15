console.log(greeting); // Output: undefined - due to hoisting, the declaration of greeting is 
// moved to the top, but not the assignment

var greeting = "Hello, World!";
console.log(greeting); // Output: Hello, World! - now the greeting variable has been assigned a value

// behind the scenes,

// var greeting;  <-- hoisted with undefined
// console.log(greeting); // Output: undefined
// greeting = "Hello, World!"; <-- assignment happens here
// console.log(greeting); // Output: Hello, World!