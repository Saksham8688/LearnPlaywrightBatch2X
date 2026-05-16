let x = "greet";

if (true) {
    // TDZ for block-scoped variable x starts here
    //  console.log(x); // ReferenceError: Cannot access 'x' before initialization


    let x = "hello";  // TDZ ENDS here for this x
    console.log(x); // Output: "hello"

}