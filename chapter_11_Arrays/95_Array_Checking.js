//checking arrays

//Check If something Is an Array
let result = Array.isArray([1, 2, 4]);
console.log(result); //true
let result1 = Array.isArray("a");
console.log(result1); //false


//every and some

// every -> will check that all the elements present in the array
// fulfill the condition or not, If all the element fulfill the
//condition than it will return True or else it will return false.

let arr = [80, 75, 90];
console.log(arr.every(s => s >= 70)); // true

let arr1 = [80, 60, 76];
console.log(arr1.every(s => s >= 70)); //false

//some -> In some At Least one must pass , To make it PASS.
let arr2 = [80, 60, 85];
console.log(arr2.some(s => s < 70)); //true

let arr3 = [80, 90, 85];
console.log(arr3.some(s => s < 70)); //false