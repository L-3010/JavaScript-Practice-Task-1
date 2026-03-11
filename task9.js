let user = prompt("Enter Username:");
let pass = prompt("Enter Password:");
let message;

if (user === "admin" && pass === "1234") {
    message = "Login Successful";
} else {
    message = "Invalid Username or Password";
}

alert(message);
console.log("Login Attempt Status: " + message);