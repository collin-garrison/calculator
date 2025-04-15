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

const numButtons = document.querySelectorAll("button.num")
numButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const num = button.innerText;
        if (display.innerText === "0") {
            display.innerText = num;
        } else {
            display.innerText += num;
        }
    })
})

let operator;
let numbers = [0];

const equals = document.querySelector("button.equals");
equals.addEventListener("click", () => {
    wip
})

const opButtons = document.querySelectorAll("button.operand");
opButtons.forEach((button) => {
    button.addEventListener("click", () => {
        wip
    })
})

```
[2] [4] [+] [-] [3] [5] [*] [2] [=]
when each number is pressed, add it to display
when operand is pressed, add display number to numbers array (replace 0)
highlight latest operand until a number is pressed, then store the operand
when another operand is pressed, add display number to numbers array
because there are now 2 numbers in array, operate on them and display it

```