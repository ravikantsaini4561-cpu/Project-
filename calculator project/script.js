const input = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

let string = "";

// Helper function to safely process and evaluate math expressions
function calculateResult(expression) {
    try {
        if (!expression) return "";

        // Convert display symbols into valid JS math operators
        let sanitized = expression
            .replace(/×/g, '*')
            .replace(/÷/g, '/');

        // Remove trailing dangling operators before evaluating (e.g., "5+" -> "5")
        if (/[+\-*/.]$/.test(sanitized)) {
            sanitized = sanitized.slice(0, -1);
        }

        // Safe evaluation alternative to direct eval()
        const result = new Function(`return ${sanitized}`)();

        if (!isFinite(result)) return "Error"; // Handles division by zero (Infinity)

        // Fix decimal floating-point precision issues (e.g., 0.1 + 0.2)
        return String(Math.round(result * 1e8) / 1e8);
    } catch (err) {
        return "Error";
    }
}

// Button Click Handling
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        // e.currentTarget grabs the button even if internal <span> icons are clicked
        // .trim() removes hidden spaces that break matching 'AC'
        const btnText = e.currentTarget.innerText.trim();

        switch (btnText) {
            case 'AC':
            case 'C':
                string = "";
                input.value = "";
                break;

            case '=':
                string = calculateResult(string);
                input.value = string;
                break;

            case 'DEL':
            case '⌫':
                string = string.slice(0, -1);
                input.value = string;
                break;

            case '+/-':
            case '±':
                if (string) {
                    if (string.startsWith('-')) {
                        string = string.slice(1);
                    } else {
                        string = '-' + string;
                    }
                }
                input.value = string;
                break;

            case '%':
                if (string && !isNaN(string)) {
                    string = String(parseFloat(string) / 100);
                }
                input.value = string;
                break;

            default:
                // Prevent starting expressions with multiplication, division, or percentage
                if (string === "" && ['+', '*', '/', '%', '×', '÷'].includes(btnText)) return;

                // Clear "Error" state automatically on new keypress
                if (string === "Error") string = "";

                string += btnText;
                input.value = string;
                break;
        }
    });
});

// Keyboard Handling
document.addEventListener('keydown', (e) => {
    const key = e.key;

    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.'].includes(key)) {
        if (string === "Error") string = "";
        string += key;
    } else if (key === 'Enter' || key === '=') {
        e.preventDefault();
        string = calculateResult(string);
    } else if (key === 'Backspace') {
        string = string.slice(0, -1);
    } else if (key === 'Escape') {
        string = "";
    }

    input.value = string;
});