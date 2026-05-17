// number == string 

// console.log(5 == '5'); // Output: true (loose equality allows type coercion)
// console.log(0 == false); // Output: true (0 is falsy, so it is coerced to false)
// console.log(null == undefined); // Output: true (null and undefined are considered equal in loose equality)

// console.log(5 === '5'); // Output: false (strict equality does not allow type coercion)

// console.log(0 == ''); // Output: true (0 is falsy, '' is also falsy, 
// // so they are considered equal in loose equality)
console.log(true == 1); // Output: true (true is coerced to 1 in loose equality)
console.log(false == 0); // Output: true (false is coerced to 0 in loose equality)
console.log(true == '1'); // Output: true (true is coerced to 1, '1' is coerced to 1 in loose equality)
console.log(true == 2); // Output: false (true is coerced to 1, 2 is not equal to 1)
console.log(false == '0'); // Output: true (false is coerced to 0, '0' is coerced to 0 in loose equality)

console.log(5 != '5'); // Output: false , 5 = int , "5" string, both are not equal
console.log(5 !== '5'); // Output: true (strict inequality does not allow type coercion,
//  different types)

// !=== does not exists