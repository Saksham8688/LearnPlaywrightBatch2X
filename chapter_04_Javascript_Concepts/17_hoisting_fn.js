function getUserStatus() {
    // var statusCode; JS engine (optimize the code)
    console.log(statusCode);
    var statusCode = 200;
    console.log(statusCode);
}

getUserStatus();

// Note : Var is function scoped, so the statusCode variable
// is hoisted to the top of the function, but its value is not assigned
// until the line where it is declared. Therefore,
// the first console.log(statusCode) will output undefined,
// and the second console.log(statusCode) will output 200.

