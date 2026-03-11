let input = prompt("Please enter your age:");
let age = Number(input);
let category;

if (input === "" || isNaN(age) || age < 0) {
    category = "Invalid Age";
} else if (age < 13) {
    category = "Child";
} else if (age >= 13 && age <= 19) {
    category = "Teenager";
} else if (age >= 20 && age <= 59) {
    category = "Adult";
} else {
    category = "Senior";
}

let message = `You are a ${category}`;

alert(message);
console.log(message);