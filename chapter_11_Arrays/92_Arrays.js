let fruits = ['banana', 'apple', 'cherry'];
fruits.sort();
console.log(fruits);

let number = [3, 1, 4];
number.sort();
console.log(number);

let nums = [1, 21, 10, 2];
nums.sort();
console.log(nums); // 1,10,2,21
//this is called Natural or Lexical sorting, that takes place on the basis of there first number.

nums.sort((a, b) => a - b); //Asecending order
console.log(nums); //[ 1, 2, 10, 21 ]

nums.sort((a, b) => b - a); //Descending order
console.log(nums);  //[ 21, 10, 2, 1 ]