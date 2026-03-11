let x = Number(prompt("Enter the first number (x):"));
let y = Number(prompt("Enter the second number (y):"));

let finalMessage;

if (x > y) {
    finalMessage = "Hello World";
} else {
    finalMessage = "Goodbye";
}

alert(finalMessage);

console.log("Comparison result: " + finalMessage);

document.getElementById('page-output').innerText = finalMessage;