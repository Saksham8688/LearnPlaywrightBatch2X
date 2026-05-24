let year = 2020;

//rules for leap year
// divisible by 4 and not divisible by 100
// or divisible by 400


if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
}
else {
    console.log(year + " is not a leap year.");
}