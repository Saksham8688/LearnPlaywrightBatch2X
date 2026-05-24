let isLoggedIn = true;
let userRole = "editor";

if (isLoggedIn) {

    console.log("Welcome back!, You are logged in.");
    if (userRole === "admin") {
        console.log("Admin can do all the things");
    }
    else if (userRole === "editor") {
        console.log("Editor has the edit access");
    }
    else if (userRole === "viewer") {
        console.log("Viewer has the read-only access");
    }
    else {
        console.log("Unknown role");
    }

}
else {
    console.log("Please log in to access the system.");
}