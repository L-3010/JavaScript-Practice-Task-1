let userName = prompt("Enter your Name:");
let userAge = prompt("Enter your Age:");
let userCity = prompt("Enter your City:");
let message = `Hello ${userName}! 
You are ${userAge} years old and you live in ${userCity}.`;

alert(message);

console.log(message);

document.write(`
    <div class="info-card">
        <h2>User Profile</h2>
        <p style="font-size: 1.5rem;">Hello <span class="highlight">${userName}</span>!</p>
        <p>You are <span class="highlight">${userAge}</span> years old and you live in <span class="highlight">${userCity}</span>.</p>
    </div>
`);