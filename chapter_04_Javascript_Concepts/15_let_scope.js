let a = 10; // global scope variable

console.log(a);

function printHello() {
    console.log("Hello The TestingAcademy");

    let a = 20; // local scope varaible 
    console.log(a); // Output: 20 - this a is different from the global a due to function scope

    if (true) {
        let a = 30; // this a is also in function scope, so it will overwrite the previous a in the same function scope
        console.log(a); // Output: 30
    }

    console.log("F ->", a); // Output: 20 - due to block scope, the a inside the if block does not affect the previous a in the same function scope
}

console.log("G ->", a); // Output: 10 - this is the global a, which is not affected by the function scope variables

printHello();