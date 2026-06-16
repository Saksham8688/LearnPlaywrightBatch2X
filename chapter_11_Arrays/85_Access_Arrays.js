// Accessing & Modifying 

let status = ["fail", "pass", "skip"];
// accessing
console.log(status[0]);
console.log(status[1]);

//accessing form left [ 0,1,2] , 
// while from right [-3,-2,-1] we need to use a function 'at'
console.log(status.at(-1));
console.log(status.at(-2));
console.log(status.at(-3));
console.log(status.at(-4)); // undefined


// Modify
status[1] = "blocked";
console.log(status);