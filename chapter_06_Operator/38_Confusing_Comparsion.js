// ============================================
// Confusing Comparisons in JavaScript
// == (Loose Equality) vs === (Strict Equality)
// ============================================

// -----------------------------------------------
// BASICS RECAP
// == checks VALUE only (does type coercion)
// === checks VALUE + TYPE (no coercion)
// -----------------------------------------------

// -----------------------------------------------
// CASE 1: Number vs String
// -----------------------------------------------
console.log(1 == "1");   // true  ← "1" is converted to number 1
console.log(1 === "1");  // false ← number vs string, different types

// -----------------------------------------------
// CASE 2: Boolean vs Number
// -----------------------------------------------
console.log(true == 1);   // true  ← true is converted to 1
console.log(false == 0);  // true  ← false is converted to 0
console.log(true === 1);  // false ← boolean vs number, different types
console.log(false === 0); // false ← boolean vs number, different types

// -----------------------------------------------
// CASE 3: null and undefined
// -----------------------------------------------
console.log(null == undefined);  // true  ← special JS rule
console.log(null === undefined); // false ← different types
console.log(null == 0);          // false ← null only equals undefined loosely
console.log(null == false);      // false ← null does NOT equal false
console.log(null == "");         // false ← null does NOT equal empty string

// -----------------------------------------------
// CASE 4: NaN — the most confusing one
// -----------------------------------------------
console.log(NaN == NaN);   // false ← NaN is NOT equal to itself!
console.log(NaN === NaN);  // false ← same result, NaN never equals NaN
console.log(isNaN(NaN));   // true  ← use isNaN() to check for NaN

// -----------------------------------------------
// CASE 5: Empty string, 0, false — all "falsy"
// -----------------------------------------------
console.log(0 == false);   // true  ← 0 and false are both falsy
console.log("" == false);  // true  ← empty string and false are both falsy
console.log(0 == "");      // true  ← 0 converts "" to 0
console.log(0 === false);  // false ← number vs boolean
console.log("" === false); // false ← string vs boolean
console.log(0 === "");     // false ← number vs string

// -----------------------------------------------
// CASE 6: String vs Boolean via coercion chain
// -----------------------------------------------
console.log("1" == true);   // true  ← "1" → 1, true → 1, so 1 == 1
console.log("0" == false);  // true  ← "0" → 0, false → 0, so 0 == 0
console.log("1" === true);  // false ← string vs boolean
console.log("0" === false); // false ← string vs boolean

// -----------------------------------------------
// CASE 7: null vs 0 and null vs ""
// -----------------------------------------------
console.log(null == 0);    // false ← null does not coerce to 0
console.log(null == "");   // false ← null does not coerce to ""
console.log(null >= 0);    // true  ← CONFUSING! relational operators coerce null to 0
console.log(null > 0);     // false
console.log(null <= 0);    // true  ← CONFUSING! but null == 0 is still false

// -----------------------------------------------
// CASE 8: Objects and Arrays
// -----------------------------------------------
console.log([] == false);   // true  ← [] → "" → 0, false → 0
console.log([] == 0);       // true  ← [] → "" → 0
console.log([] == "");      // true  ← [] → ""
console.log([] === false);  // false ← object vs boolean
console.log({} == false);   // false ← {} → "[object Object]" → NaN ≠ 0
console.log([] == ![]);     // true  ← ![] is false, [] == false is true (VERY confusing!)

// -----------------------------------------------
// CASE 9: Two separate objects/arrays are never equal
// -----------------------------------------------
console.log([] == []);   // false ← different references in memory
console.log({} == {});   // false ← different references in memory
console.log([] === []);  // false ← different references
console.log({} === {}); // false ← different references

// -----------------------------------------------
// GOLDEN RULE
// -----------------------------------------------
// Always use === (strict equality) to avoid unexpected coercion bugs.
// Only use == when you explicitly want type coercion (rare cases).

// Safe comparison examples:
var x = "5";
var y = 5;

if (x == y) console.log("Loose: They are equal");   // runs (coercion)
if (x === y) console.log("Strict: They are equal");   // does NOT run

// -----------------------------------------------
// QUICK REFERENCE SUMMARY
// -----------------------------------------------
// Expression           ==       ===
// ------------------   ------   ------
// 1 == "1"             true     false
// true == 1            true     false
// false == 0           true     false
// null == undefined    true     false
// null == 0            false    false
// NaN == NaN           false    false
// [] == false          true     false
// [] == []             false    false
// {} == {}             false    false
// [] == ![]            true     false  ← most confusing!
