// ============================================
// JavaScript Number Types - Complete Lab
// ============================================

// -----------------------------------------------
// 1. INTEGER (Whole Numbers)
// -----------------------------------------------
var intPositive = 42;
var intNegative = -15;
var zero = 0;

console.log("Integer Positive:", intPositive);   // Output: 42
console.log("Integer Negative:", intNegative);   // Output: -15
console.log("Zero:", zero);                       // Output: 0

// -----------------------------------------------
// 2. FLOATING POINT (Decimal Numbers)
// -----------------------------------------------
var price = 99.99;
var temperature = -3.5;
var pi = 3.14159265358979;

console.log("Price:", price);           // Output: 99.99
console.log("Temperature:", temperature); // Output: -3.5
console.log("Pi:", pi);                 // Output: 3.14159265358979

// -----------------------------------------------
// 3. EXPONENTIAL / SCIENTIFIC NOTATION
// -----------------------------------------------
var bigNumber = 5e6;    // 5 × 10^6 = 5000000
var smallNumber = 1.5e-3; // 1.5 × 10^-3 = 0.0015

console.log("Big Number (5e6):", bigNumber);       // Output: 5000000
console.log("Small Number (1.5e-3):", smallNumber); // Output: 0.0015

// -----------------------------------------------
// 4. BINARY (Base 2) — prefix: 0b
// -----------------------------------------------
var binary1 = 0b1010;  // 10 in decimal
var binary2 = 0b1111;  // 15 in decimal
var binary3 = 0b0001;  // 1 in decimal

console.log("Binary 0b1010:", binary1); // Output: 10
console.log("Binary 0b1111:", binary2); // Output: 15
console.log("Binary 0b0001:", binary3); // Output: 1

// -----------------------------------------------
// 5. OCTAL (Base 8) — prefix: 0o
// -----------------------------------------------
var octal1 = 0o10;  // 8 in decimal
var octal2 = 0o17;  // 15 in decimal
var octal3 = 0o77;  // 63 in decimal

console.log("Octal 0o10:", octal1);  // Output: 8
console.log("Octal 0o17:", octal2);  // Output: 15
console.log("Octal 0o77:", octal3);  // Output: 63

// -----------------------------------------------
// 6. HEXADECIMAL (Base 16) — prefix: 0x
// -----------------------------------------------
var hex1 = 0xFF;   // 255 in decimal
var hex2 = 0x1A;   // 26 in decimal
var hex3 = 0x0F;   // 15 in decimal

console.log("Hex 0xFF:", hex1);  // Output: 255
console.log("Hex 0x1A:", hex2);  // Output: 26
console.log("Hex 0x0F:", hex3);  // Output: 15

// -----------------------------------------------
// 7. BIGINT — for very large integers beyond Number.MAX_SAFE_INTEGER
// -----------------------------------------------
var bigInt1 = 9007199254740991n;     // Number.MAX_SAFE_INTEGER as BigInt
var bigInt2 = 900719925474099199n;   // Beyond safe integer range
var bigInt3 = BigInt(12345678901234567890);
// cannot mix BigInt with regular numbers in operations
//  (e.g., bigInt1 + 1 would throw an error)

console.log("BigInt 1:", bigInt1);   // Output: 9007199254740991n
console.log("BigInt 2:", bigInt2);   // Output: 900719925474099199n
console.log("BigInt 3:", bigInt3);

// -----------------------------------------------
// 8. INFINITY and NEGATIVE INFINITY
// -----------------------------------------------
var posInfinity = Infinity;
var negInfinity = -Infinity;
var divByZero = 1 / 0;      // Results in Infinity
var negDivByZero = -1 / 0;    // Results in -Infinity

console.log("Infinity:", posInfinity);           // Output: Infinity
console.log("-Infinity:", negInfinity);           // Output: -Infinity
console.log("1 / 0:", divByZero);                // Output: Infinity
console.log("-1 / 0:", negDivByZero);            // Output: -Infinity
console.log("isFinite(Infinity):", isFinite(posInfinity)); // Output: false
console.log("isFinite(100):", isFinite(100));              // Output: true

// -----------------------------------------------
// 9. NaN (Not a Number)
// -----------------------------------------------
var notANumber1 = NaN;
var notANumber2 = "hello" * 2;      // Invalid math → NaN
var notANumber3 = parseInt("abc");  // Parsing non-numeric string → NaN

console.log("NaN:", notANumber1);             // Output: NaN
console.log('"hello" * 2:', notANumber2);     // Output: NaN
console.log('parseInt("abc"):', notANumber3); // Output: NaN
console.log("isNaN(NaN):", isNaN(NaN));       // Output: true
console.log("isNaN(42):", isNaN(42));         // Output: false
console.log("typeof NaN:", typeof NaN);       // Output: "number" (JS quirk!)

// -----------------------------------------------
// 10. NUMBER LIMITS & SPECIAL VALUES
// -----------------------------------------------
console.log("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);   // 9007199254740991
console.log("MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);   // -9007199254740991
console.log("MAX_VALUE:", Number.MAX_VALUE);                 // 1.7976931348623157e+308
console.log("MIN_VALUE:", Number.MIN_VALUE);                 // 5e-324 (smallest positive)
console.log("EPSILON:", Number.EPSILON);                     // 2.220446049250313e-16

// -----------------------------------------------
// 11. NUMERIC SEPARATOR (ES2021) — underscore for readability
// -----------------------------------------------
var million = 1_000_000;
var salary = 75_000.50;
var hexColor = 0xFF_EC_D8;
var binaryMask = 0b1111_0000;

console.log("Million:", million);         // Output: 1000000
console.log("Salary:", salary);           // Output: 75000.5
console.log("Hex Color:", hexColor);      // Output: 16771288
console.log("Binary Mask:", binaryMask);  // Output: 240

// -----------------------------------------------
// SUMMARY TABLE
// -----------------------------------------------
// Type                 Example              Description
// -------------------  -------------------  --------------------------------
// Integer              42, -15              Whole numbers
// Float                3.14, -0.5           Decimal numbers
// Exponential          5e6, 1.5e-3          Scientific notation
// Binary (0b)          0b1010               Base 2
// Octal  (0o)          0o17                 Base 8
// Hexadecimal (0x)     0xFF                 Base 16
// BigInt (n)           900n                 Very large integers
// Infinity             Infinity, -Infinity  Overflow or divide by zero
// NaN                  NaN                  Invalid number result
// Numeric Separator    1_000_000            Readable large numbers (ES2021)
