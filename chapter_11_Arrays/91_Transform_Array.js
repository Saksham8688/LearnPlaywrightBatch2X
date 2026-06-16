let scores = [45, 83, 46, 74, 98, 24, 65];

//map - Transfom every element and returns a new array
// It will always return same number of element that you have but based on conditions there value will change. 
let grades = scores.map(s => s > 70 ? "Pass" : "Fail");
console.log(grades);
//['Fail', 'Pass','Fail', 'Pass','Pass', 'Fail','Fail']

//filter - keeps elements that pass the condition
let passing = scores.filter(s => s > 70);
console.log(passing); //[ 83, 74, 98 ]

// reduce - accumaltes to a single value.

let total = scores.reduce((a, b) => a + b, 0); //it will take two element from the array (a,b)
// and do the sum as mentioned in the condition a +b and convert all of  them into a single value. 
console.log(total);
// 435

//flat - flattens the nested array (convert multiple array into One array)

let nested = [[1, 2], [3, 4], [5, 6]];
console.log(nested.flat());
//[ 1, 2, 3, 4, 5, 6 ]