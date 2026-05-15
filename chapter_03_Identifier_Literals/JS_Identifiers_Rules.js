// ============================================
// JAVASCRIPT IDENTIFIER RULES - ALL EXAMPLES
// ============================================

// RULE 1: Must start with a letter, underscore (_), or dollar sign ($)
var name = "John";        // Valid - starts with letter
var _age = 25;            // Valid - starts with underscore
var $price = 100;         // Valid - starts with dollar sign

// RULE 2: Cannot start with a digit
//var 2name = "John";      // INVALID - starts with digit
//var 5_value = 50;        // INVALID - starts with digit

// RULE 3: Subsequent characters can be letters, digits, underscores, or dollar signs
var firstName = "John";   // Valid - letters only
var user_name = "Alice";  // Valid - contains underscore
var $myVar = 10;          // Valid - starts with $ and contains letters
var count123 = 50;        // Valid - contains digits
var _$value_123 = 100;    // Valid - mix of _, $, letters, and digits

// RULE 4: Cannot contain spaces
//var my name = "John";    // INVALID - contains space
//var user name = "Alice"; // INVALID - contains space

// RULE 5: Cannot contain special characters (except _ and $)
//var my-name = "John";    // INVALID - contains hyphen
//var my@name = "Alice";   // INVALID - contains @
//var my.name = "Bob";     // INVALID - contains dot
//var my#name = "Charlie"; // INVALID - contains #
//var my&name = "Diana";   // INVALID - contains &

// RULE 6: Are case-sensitive
var myVar = "first";      // Different from myvar
var myvar = "second";     // Different from myVar
var MYVAR = "third";      // All three are different variables
console.log(myVar);       // Output: "first"
console.log(myvar);       // Output: "second"
console.log(MYVAR);       // Output: "third"

// RULE 7: Cannot be reserved keywords
// INVALID - Reserved keywords cannot be used as identifiers:
//var var = 10;            // INVALID - 'var' is a keyword
//var if = 20;             // INVALID - 'if' is a keyword
//var for = 30;            // INVALID - 'for' is a keyword
//var function = 40;       // INVALID - 'function' is a keyword
//var return = 50;         // INVALID - 'return' is a keyword
//var class = 60;          // INVALID - 'class' is a keyword
//var let = 70;            // INVALID - 'let' is a keyword
//var const = 80;          // INVALID - 'const' is a keyword

// RULE 8: Can contain Unicode characters
var ñame = "José";        // Valid - contains Unicode character
var café = "Coffee";      // Valid - contains Unicode character
var π = 3.14159;          // Valid - Greek letter pi

// RULE 9: Naming conventions (not rules but best practices)
var camelCaseExample = "myVariable";        // camelCase - most common
var PascalCaseExample = "MyVariable";       // PascalCase - for classes
var snake_case_example = "my_variable";     // snake_case - less common
var CONSTANT_VALUE = 100;                   // UPPERCASE - for constants

// RULE 10: Must be unique within their scope
var userAge = 25;
// var userAge = 30;      // INVALID in same scope - duplicate identifier

// ============================================
// SUMMARY OF VALID IDENTIFIERS
// ============================================
var firstName = "John";
var lastName = "Doe";
var _privateVar = 100;
var $jqueryStyle = "jQuery";
var count123 = 50;
var user_email = "john@example.com";
var getUserName = function() { return firstName; };
var MyClass = function() {};

// ============================================
// EXAMPLES OF INVALID IDENTIFIERS
// ============================================
// var 123abc = 50;              // Starts with digit
// var my-var = 10;              // Contains hyphen
// var my var = 20;              // Contains space
// var my@email = "test";        // Contains special char
// var if = 30;                  // Reserved keyword
// var function = 40;            // Reserved keyword
// var return = 50;              // Reserved keyword
// var my.name = "John";         // Contains dot
// var my&var = 100;             // Contains ampersand
