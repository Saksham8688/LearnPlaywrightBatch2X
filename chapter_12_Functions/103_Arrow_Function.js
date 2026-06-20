const greet = function (name) {
    return `Hello, ${name}`;
}

let r = greet("Saksham");
console.log(r);

// Convert a normal function to arrow function then remove the keyword function, 
// remove the keyword return remove curly braces and only use =>
const greet2 = (name) => `Hello, ${name}`;
let r2 = greet2("Saksham");
console.log(r2);


let doubleIt = n => n * 2;
console.log(doubleIt(10));

const printIt = name => console.log(name);
printIt("Singh");

