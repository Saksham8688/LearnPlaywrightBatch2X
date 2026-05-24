let num = prompt("Enter a number:");
num = Number(num); // Convert the input to a number

if (num % 2 === 0) {
    console.log(num + " is an even number.");
}
else {
    console.log(num + " is an odd number.");
}