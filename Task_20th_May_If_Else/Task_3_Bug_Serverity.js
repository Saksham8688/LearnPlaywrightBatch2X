let bugScore = 11;

switch (bugScore) {
    case 10:
    case 9:
        console.log("Critical (Block Release)");
        break;
    case 8:
    case 7:
        console.log("High");
        break;
    case 6:
    case 5:
    case 4:
        console.log("Medium");
        break;
    case 3:
    case 2:
    case 1:
        console.log("Low");
        break;
    default:
        console.log("Invalid Bug Score");
}