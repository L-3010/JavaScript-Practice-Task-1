function showResult() {
    let mark = document.getElementById('markInput').value;  
    mark = Number(mark);
    let grade;

    if (mark < 0 || mark > 100 || mark === "") {
        grade = "Invalid Entry";
    } else if (mark < 50) {
        grade = "FAIL";
    } else if (mark <= 59) {
        grade = "D";
    } else if (mark <= 69) {
        grade = "C";
    } else if (mark <= 79) {
        grade = "B";
    } else if (mark <= 89) {
        grade = "A";
    } else {
        grade = "A+";
    }

    document.write(`
        <div style="
            background: #F3E5F5; 
            height: 100vh; 
            display: flex; 
            flex-direction: column;
            justify-content: center; 
            align-items: center; 
            font-family: sans-serif;
            color: #4A4A4A;">
            
            <h1 style="color: #b19cd9;">Final Evaluation</h1>
            <p style="font-size: 24px;">Mark: <b>${mark}</b></p>
            <h2 style="font-size: 50px; margin: 0;">Grade: ${grade}</h2>
            
            <button onclick="location.reload()" style="
                margin-top: 20px; 
                padding: 10px 20px; 
                border-radius: 10px; 
                border: none; 
                background: #b19cd9; 
                color: white; 
                cursor: pointer;">Try Again</button>
        </div>
    `);
}

