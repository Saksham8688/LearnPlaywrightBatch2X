// you are working with api

let resposneStatus = 404;

switch (resposneStatus) {
    case 200:
        console.log("Success");
        break;
    case 400:
        console.log("Bad Request");
        break;
    case 404:
        console.log("Not Found");
        break;
    case 500:
        console.log("Internal Server Error");
        break;
    default:
        console.log("Unknown Status");
}