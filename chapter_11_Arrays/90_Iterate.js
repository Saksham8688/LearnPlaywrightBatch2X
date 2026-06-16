// Iterate from one to another

let tests = ["login", "checkout", "search"];

// for loop - - (Mostly Used)
for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}

console.log("------------------------------");

// for...of (cleanest for the value)  - (Mostly Used)
for (test of tests) {
    console.log(test);
}

console.log("------------------------------");

// forEach - If you want value with it's index also. (Used sometimes)
tests.forEach((test, index) => {
    console.log(test, index);
});

console.log("------------------------------");

let students = ["soumya", "saksham", "aditi", "aman"];

for (let student in students) {
    console.log(student, " -> ", students[student]);
}

console.log("------------------------------");

