const h3 = document.querySelector(".result");
const val1 = +prompt("Enter first number");
const val2 = +prompt("Enter second number");

const operator = prompt("Choose operator");
if (operator === "+") {
  h3.textContent = val1 + val2;
} else if (operator === "-") {
  h3.textContent = val1 - val2;
} else if (operator === "*") {
  h3.textContent = val1 * val2;
} else if (operator === "/") {
  h3.textContent = val1 / val2;
}
