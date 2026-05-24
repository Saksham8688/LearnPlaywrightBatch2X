if ("hello") console.log("String is Truthy");
// Output: "String is Truthy" (non-empty strings are truthy)
if (42) console.log("Number is Truthy");
// Output: "Number is Truthy" (non-zero numbers are truthy)
if (true) console.log("Boolean true is Truthy");
// Output: "Boolean true is Truthy" (true is truthy)
if (false) console.log("Boolean false is falsy");
// No output (false is falsy)
if (0) console.log("Zero is falsy");
// No output (0 is falsy)
if (null) console.log("Null is falsy");
// No output (null is falsy)
if (undefined) console.log("Undefined is falsy");
// No output (undefined is falsy)
if (NaN) console.log("NaN is falsy");
// No output (NaN is falsy)
if ({}) console.log("Empty object is Truthy");
// Output: "Empty object is Truthy" (objects are truthy)
if ([]) console.log("Empty array is Truthy");
// Output: "Empty array is Truthy" (arrays are objects and thus truthy)
if ("") console.log("Empty string is falsy");
// No output (empty string is falsy)

let name = undefined;
if (name) {
    console.log("Hi!");
}
else {
    console.log("Bye!");
}