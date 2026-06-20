// Type 4 Function
function greet1(name) {
    return `Hello, ${name}!`;
}
let r = greet1("Saksham");
console.log(r);


// Function as Expression -> You can store function into a varaible and that varaible will 
// be the name of the function.
const greet2 = function (name) {
    return `Hello, ${name}!`;
}

let s = greet2("Saksham");
console.log(s);

// Both Type 4 and Function as expression as same. Just two other way to write the same thing

console.log(greet1("Aditi"));
console.log(greet2("Aditi"));