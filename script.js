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
            if (num1 !== 0) {
                return num1 / num2;
            } else {
                return "Error";
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

// const equals = document.querySelector("button.equals");
// equals.addEventListener("click", () => {
//     
// })

const opButtons = document.querySelectorAll("button.operand");
opButtons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(`Before: ${numbers}`);

        if (!opLastClick) {
            // Add display number to numbers array
            const displayNum = display.innerText;
            if (numbers[0] === 0 && numbers.length === 1) {
                numbers[0] = displayNum;
            } else {
                numbers.push(displayNum);
            }

            // Display result if there's two numbers in numbers array
            console.log(numbers.length === 2)
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
        console.log(`After: ${numbers}`);
    })
})

```
todo: equals, clear
```