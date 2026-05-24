let statusCode = 200;

if (statusCode === 2000) {
    console.log("API's are working fine");
}
else if (statusCode === 404) {
    console.log("Not Found");
}
else if (statusCode === 500) {
    console.log("Internal Server Error");
}
else {
    console.log("Unknown Status Code");
}