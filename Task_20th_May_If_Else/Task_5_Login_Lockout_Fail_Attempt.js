let numberOfTimeLoginAttempted = -1;

if (numberOfTimeLoginAttempted === 3) {
    console.log("🔒 Account Locked. Please contact support team.");
}
else if (numberOfTimeLoginAttempted === 2) {
    console.log("1 attempt left before lockout.");
}
else if (numberOfTimeLoginAttempted === 1) {
    console.log("2 attempt left before lockout.");
}
else if (numberOfTimeLoginAttempted < 1 && numberOfTimeLoginAttempted >= 0) {
    console.log("Login Successful.")
}
else {
    console.log("Invalid Attempt.")
}