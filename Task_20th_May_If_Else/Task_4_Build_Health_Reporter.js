let buildScore = 50;

if (buildScore === 100) {
    console.log("Build Was Successful.")
}
else if (buildScore >= 90 && buildScore <= 99) {
    console.log("Build is Stable. Please Investigate the failures.")
}
else if (buildScore >= 70 && buildScore <= 89) {
    console.log("Build is UnStable.")
}
else {
    console.log("Build is Broken. Please block the deployment");
}