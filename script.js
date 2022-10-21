const btnPlus = document.getElementById("btnPlus");
const btnMinus = document.getElementById("btnMinus");
const btnMultiply = document.getElementById("btnMultiply");
const btnDivide = document.getElementById("btnDivide");
const input1 = document.getElementById("number1");
const input2 = document.getElementById("number2");
const input3 = document.getElementById("number3");

function getResultElementPlus() {
  const number1 = Number(input1.value);
  const number2 = Number(input2.value);

  const result = number1 + number2;
  input3.value = result;
}
function getResultElementMinus() {
  const number1 = Number(input1.value);
  const number2 = Number(input2.value);

  const result = number1 - number2;
  input3.value = result;
}
function getResultElementMultiply() {
  const number1 = Number(input1.value);
  const number2 = Number(input2.value);

  const result = number1 * number2;
  input3.value = result;
}
function getResultElementDivide() {
  const number1 = Number(input1.value);
  const number2 = Number(input2.value);

  const result = number1 / number2;
  input3.value = result;
}

btnPlus.addEventListener("click", getResultElementPlus);
btnMinus.addEventListener("click", getResultElementMinus);
btnMultiply.addEventListener("click", getResultElementMultiply);
btnDivide.addEventListener("click", getResultElementDivide);
