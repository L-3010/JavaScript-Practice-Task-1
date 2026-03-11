let input = prompt("Enter a number to check if it's Even or Odd:");
let num = Number(input);
if (num % 2 === 0) {
    alert(`The number ${num} is Even`);
    console.log(`The number ${num} is Even`);
} else {
    alert(`The number ${num} is Odd`);
    console.log(`The number ${num} is Odd`);
}