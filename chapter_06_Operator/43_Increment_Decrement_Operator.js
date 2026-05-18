// Pre-Increment Operator
let a = 10;
let b = ++a; // a is incremented first, then assigned to b
console.log(a); // Output: 11
console.log(b); // Output: 11

// Post-Increment Operator
let x = 5;
let y = x++;    // y is assigned the value of x (5), then x is incremented to 6
console.log(x); // Output: 6 (x is incremented after the value is assigned to y)
console.log(y); // Output: 5 (y gets the original value of x before increment)  

// Pre-Decrement Operator
let m = 20;
let n = --m; // m is decremented first, then assigned to n
console.log(m); // Output: 19
console.log(n); // Output: 19 

// Post-Decrement Operator
let p = 15;
let q = p--;
console.log(p); // Output: 14 (p is decremented after the value is assigned to q)
console.log(q); // Output: 15 (q gets the original value of p before decrement) 

let z = 5;
console.log(z++ + ++z - --z + z-- + ++z);
console.log(z); // Output: 6 (final value of z  after all increments and decrements)