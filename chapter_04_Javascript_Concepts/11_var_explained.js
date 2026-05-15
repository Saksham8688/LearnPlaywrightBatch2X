var a = 10; // global scope variable

console.log(a); // Output: 10

function printHello() {
    console.log("Hello The TestingAcademy");

    var a = 20; // local scope varaible 
    console.log(a); // Output: 20 - this a is different from the global a due to function scope

    if (true) {
        var a = 30; // this a is also in function scope, so it will overwrite the previous a in the same function scope
        console.log(a); // Output: 30
    }
}

printHello();