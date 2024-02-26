
let num1 = 10;
let num2 = 5;

operator = "+"

switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;

    case "-":
        console.log(num1 - num2);
        break;

    case "*":
        console.log(num1 * num2);
        break;

    case "/":
        if (num2 !=0){
            console.log(num1 / num2);
        } 
        else {
            console.log("Divide by zero error")
        } 
        break;

    default:
        console.log("Invalid operator");
    }