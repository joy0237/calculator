// Append value to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Delete the last character in the display
function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Backspace: remove one character from the display
function backspace() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Calculate the result based on the expression
function calculate() {
    let display = document.getElementById('display');
    let expression = display.value;

    // Replace specific operators or constants for evaluation
    expression = expression.replace(/π/g, 'Math.PI');     // Replace π with Math.PI
    expression = expression.replace(/√/g, 'Math.sqrt');    // Replace √ with Math.sqrt()
    expression = expression.replace(/\^/g, '**');          // Replace ^ with **
    
    // Handle scientific functions in degrees
    expression = expression.replace(/sin\(/g, 'Math.sin(degToRad(');
    expression = expression.replace(/cos\(/g, 'Math.cos(degToRad(');
    expression = expression.replace(/tan\(/g, 'Math.tan(degToRad(');
    
    // Handle natural log (ln) and log10
    expression = expression.replace(/ln\(/g, 'Math.log(');         // ln is natural logarithm
    expression = expression.replace(/log\(/g, 'Math.log10(');      // log is base-10 log

    try {
        // Evaluate the final expression
        display.value = eval(expression); 
    } catch (e) {
        display.value = 'Error';  // Handle invalid expressions
    }
}

// Convert degrees to radians
function degToRad(degrees) {
    return degrees * (Math.PI / 180);
}
