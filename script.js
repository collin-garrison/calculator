function operate (numArray, operator) {
    const numbers = numArray.map((num) => parseFloat(num));
    const num1 = numbers[0];
    const num2 = numbers[1];
    switch (operator) {
        case "+": 
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 !== 0) {
                const answer = num1 / num2;
                return Math.round(answer * 10000) / 10000;
            } else {
                return undefined;
            }
    } 
}

const display = document.querySelector(".display");
let operator;
let numbers = [0];
let opLastClick = false;

const numButtons = document.querySelectorAll("button.num")
numButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Add pressed number to display
        if (opLastClick) {
            display.innerText = "";
        }
        const num = button.innerText;
        if (display.innerText === "0") {
            display.innerText = num;
        } else {
            display.innerText += num;
        }

        // Store latest operator
        operator = document.querySelector("button.highlighted").innerText;

        opLastClick = false;
    })
})

const opButtons = document.querySelectorAll("button.operand");
opButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (!opLastClick) {
            // Add display number to numbers array
            const displayNum = display.innerText;
            if (numbers[0] === 0 && numbers.length === 1) {
                numbers[0] = displayNum;
            } else {
                numbers.push(displayNum);
            }

            // Display result if there's two numbers in numbers array
            if (numbers.length === 2) {
                let result = operate(numbers, operator);
                display.innerText = result;
                numbers = [result];
            }
        }

        // Highlight latest clicked operator
        operator = button.innerText;
        const highlightedButton = document.querySelector("button.highlighted");
        if (!highlightedButton) {
            button.classList.add("highlighted");
        }
        else if (operator !== highlightedButton.innerText) {
            highlightedButton.classList.remove("highlighted");
            button.classList.add("highlighted");
        }

        opLastClick = true;
    })
})

const equals = document.querySelector("button.equals");
equals.addEventListener("click", () => {
    // Add display number to numbers array
    if (operator) {
        const displayNum = display.innerText;
        if (numbers[0] === 0 && numbers.length === 1) {
            numbers[0] = displayNum;
        } else {
            numbers.push(displayNum);
        }
        
        // Display result
        let result;
        if (numbers.length === 2) {
            result = operate(numbers, operator);
            display.innerText = result;              
        } else {
            result = display.innerText;
        }
        numbers = [result];

        const highlightedButton = document.querySelector("button.highlighted");
        highlightedButton.classList.remove("highlighted");
        operator = null;
        opLastClick = true;
    }
})

const clear = document.querySelector("button.clear");
clear.addEventListener("click", () => {
    display.innerText = "0";
    numbers = [0];
    operator = null;
    opLastClick = false;
    const highlightedButton = document.querySelector("button.highlighted");
    highlightedButton.classList.remove("highlighted");
})