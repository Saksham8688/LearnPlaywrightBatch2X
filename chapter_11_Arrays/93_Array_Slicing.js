//Slicing & Combining

let arr = [1, 2, 3, 4, 5];
//Rule -> slice (start ,end ) -> retruns a New array, does not mutate the exisiting array
// uses this formula (start , end-1) because index start from 0.

console.log(arr.slice(1, 3)); //[ 2, 3 ]
// start from 1st index and end at (3-1)= 2th index
// So the value will return for the 1st index and 2th Index - which is [ 2, 3 ].

console.log(arr.slice(2, 4)); //[3,4]
console.log(arr.slice(2, 5)); // [3,4,5]

console.log(arr.slice(2)); // If the end is not given , only start is mentioned in that case
// It will give all the values from the start index to the last index as an output
//[3,4,5]


// it will start from reverse -1 and -2 , will print (-2 and -1 th) index
//print will always happend from left to right
// In reverse also it won't go to -2,-3, instead it will go -2 to -1. (left to right order) 
console.log(arr.slice(-2)); //[4,5]


//It will take all the elements 
console.log(arr.slice(0));


// ============================================
// SPLICE vs SLICE - Difference
// ============================================

console.log("\n--- SPLICE vs SLICE ---\n");

// SPLICE - Mutates the original array, returns removed elements
// Syntax: arr.splice(start, deleteCount, item1, item2, ...)
console.log("===== SPLICE =====");
let array1 = [1, 2, 3, 4, 5];
console.log("Original array:", array1); // [1, 2, 3, 4, 5]

let removed = array1.splice(1, 2); // Remove 2 elements starting at index 1
console.log("Removed elements:", removed); // [2, 3]
console.log("Array after splice:", array1); // [1, 4, 5] - ORIGINAL MODIFIED!


// SPLICE - Add elements without removing
console.log("\n===== SPLICE - Add Elements =====");
let array2 = [1, 2, 3, 4, 5];
array2.splice(2, 0, 'a', 'b'); // Start at index 2, remove 0 elements, add 'a' and 'b'
console.log("After splice(2, 0, 'a', 'b'):", array2); // [1, 2, 'a', 'b', 3, 4, 5]


// SPLICE - Replace elements
console.log("\n===== SPLICE - Replace Elements =====");
let array3 = [1, 2, 3, 4, 5];
array3.splice(1, 2, 'x', 'y'); // Start at index 1, remove 2 elements, add 'x' and 'y'
console.log("After splice(1, 2, 'x', 'y'):", array3); // [1, 'x', 'y', 4, 5]


// SLICE - Does NOT mutate the original array
// Syntax: arr.slice(start, end)
console.log("\n===== SLICE =====");
let array4 = [1, 2, 3, 4, 5];
console.log("Original array:", array4); // [1, 2, 3, 4, 5]

let sliced = array4.slice(1, 3); // Extract elements from index 1 to 2 (3 excluded)
console.log("Sliced elements:", sliced); // [2, 3]
console.log("Array after slice:", array4); // [1, 2, 3, 4, 5] - ORIGINAL UNCHANGED!


// Comparison Summary
console.log("\n===== SUMMARY =====");
console.log("SLICE:");
console.log("  - Returns new array (does NOT modify original)");
console.log("  - Syntax: arr.slice(start, end)");
console.log("  - end parameter is EXCLUDED");

console.log("\nSPLICE:");
console.log("  - Modifies original array");
console.log("  - Returns array of removed elements");
console.log("  - Syntax: arr.splice(start, deleteCount, item1, item2, ...)");
console.log("  - Can remove, add, or replace elements");