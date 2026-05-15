const baseURL = "https://api.example.com/data";
baseURL = "https://api.newexample.com/data"; // This will cause an error because baseURL is a constant
console.log(baseURL); // This line will not be executed due to the error above
//TypeError: Assignment to constant variable.
