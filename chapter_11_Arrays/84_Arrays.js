// Creating Arrays // Arrray literals (preffered)
let browser = ["chrome", "edge", "firefox"];

//Array Constructor
let score = new Array(3); // here the 3 is length of the array
let score2 = new Array(1, 2, 3);
console.log(score); //[ <3 empty items> ]
score[0] = 1;
score[1] = 1;
score[2] = 1;
console.log(score); //[ 1, 1, 1 ]
console.log(score2); //[ 1, 2, 3 ]

let number = new Array(100, 200, 300, 400);
console.log(number);

//another way to create array

let test = Array.of(10, 20, 30, 40, 50);
console.log(test);

// another way to create array

let chars = Array.from("hello");
console.log(chars); //[ 'h', 'e', 'l', 'l', 'o' ]