
let a = [1, 2];
let b = [3, 4];
// let c = a + b; We should not do concat in this way
let c = a.concat(b); // This is the correct way to concat
console.log(c); //[ 1, 2, 3, 4 ]


//spread (modern way) - concatenation, (...)
// ...a -> means all element of a
// ...b -> means all element of b 
let d = [...a, ...b];
console.log(d); // [ 1, 2, 3, 4 ]


// join
let s = ["pass", "fail", "skip"].join("|");
console.log(s);

