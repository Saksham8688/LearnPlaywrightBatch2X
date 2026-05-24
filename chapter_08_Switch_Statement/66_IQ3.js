let x = 10;

switch (x) {
    case 10:
        let b1 = 1;
        console.log(b1); // Output: 1
        break;
    case 10:
        let b2 = 2;
        console.log(b2); // Output: 2
        break;
    default:
        console.log("d");
}

// it will allow you to have duplicate cases but it will execute
// only the first case and ignore the second case because of the break
// statement in the first case. If you remove the break statement from
// the first case then it will execute both cases.