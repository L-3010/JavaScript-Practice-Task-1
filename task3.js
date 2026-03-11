function calculateCircle() {
    const PI = 3.14159; 
    
    const radiusElement = document.getElementById('radiusInput');
    const outputElement = document.getElementById('output');
    let r = Number(radiusElement.value);

    if (radiusElement.value === "" || r < 0) {
        outputElement.innerHTML = "Please enter a valid positive radius.";
        return;
    }

    let area = PI * (r * r);

    console.log("--- New Calculation ---");
    console.log("Radius provided: " + r);
    console.log("Equation: " + PI + " * (" + r + " * " + r + ")");
    console.log("Resulting Area: " + area.toFixed(4));

    outputElement.innerHTML = `
        Area = <b>${area.toFixed(2)}</b> <br>
        <small>(Check console for full detail)</small>
    `;
}