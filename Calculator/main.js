let inputBox = document.getElementById('input-box');
let buttons = document.querySelectorAll('button');

let string = "";
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;

        if (value === '=') {
            try {
                string = eval(string).toString();
            } catch {
                string = "Error";
            }
        } else if (value === 'AC') {
            string = "";
        } else if (value === 'Del') {
            string = string.slice(0, -1);
        } else if (value === '.') {
            if (!string.split(/[\+\-\*\/]/).pop().includes('.')) string += value;
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (string && !['+', '-', '*', '/'].includes(string.slice(-1))) string += value;
        } else if (value === '%') {
            string += '*0.01';
        } else {
            string += value;
        }
        
        inputBox.value = string;
    });
});
