let num1 = 15;
let num2 = 5;
let operador = "/";

switch (operador) {
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
        if (num2 !== 0) {
            console.log(num1 / num2);
        } else {
            console.log("n da pra dividir por zero");
        }
        break;

    default:
        console.log("error");
}