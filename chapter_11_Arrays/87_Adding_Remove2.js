let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);

//arr =[1,2,3,4,5,6]
//index=0,1,2,3,4,5

//splice (start, deletecount , ....ItemsToAdd)
// arr.splice(2, 1);
// console.log(arr);//3 (it will delete 1 value from the 2nd Index)

//arr.splice(2, 0, 99);
//console.log(arr); // [ 1, 2, 99, 3, 4, 5,  6](it will not delete any value as it is 0, but replace the index -2 with - 99)

//arr.splice(1, 2, 10, 20);
//console.log(arr);// [ 1, 10, 20, 4, 5, 6 ] (from index 1 remove 2 values and add 10,20 in place of them)

arr.splice(1, 3, 10);
console.log(arr); // [1,10,5,6]
