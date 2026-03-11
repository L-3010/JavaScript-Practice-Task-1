
let input1 = prompt("Enter the first number:");
let input2 = prompt("Enter the second number:");
let x = Number(input1);
let y = Number(input2);
let sum = x + y;
let multiplication = x * y;

console.log("Number 1: " + x);
console.log("Number 2: " + y);
console.log("Sum = " + sum);
console.log("Multiplication = " + multiplication);
document.write(`
    <div class="result-container">
        <h2>Calculation Results</h2>
        <p>Number 1: ${x}</p>
        <p>Number 2: ${y}</p>
        <hr style="border: 0.5px solid var(--accent-lavender); margin: 15px 0;">
        <p>Sum = <span class="val">${sum}</span></p>
        <p>Multiplication = <span class="val">${multiplication}</span></p>
    </div>
`);