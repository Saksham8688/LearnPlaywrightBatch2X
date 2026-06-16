let results = ["pass", "fail", "pass", "error", "fail"];

// indexof -returns first index or -1 if not found

results.indexOf("fail"); //1 (if we have duplicate in the array it will return the first elements index).
results.indexOf("skip"); //-1

// lastindexOf - It will return the last index of the value present in the array or -1 if not present.
results.lastIndexOf("fail"); //4

//includes - boolean
results.includes("error"); // true
results.includes("fail"); // true
results.includes("skip"); // false

//find - return first matching element
let nums = [10, 20, 25, 30];
console.log(nums.find(x => x > 20)); // 25

//findIndex - Returns first matching index
console.log(nums.findIndex(X => X > 20)); // 2

//findLast - Returns last value matching the condition
console.log(nums.findLast(x => x > 20)); // 30

//findLastIndex - Returns last index value matching the condition
console.log(nums.findLastIndex(X => X > 20)); // 3
