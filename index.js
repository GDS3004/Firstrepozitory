//первое изменение..
let buttonPlus = document.getElementById("buttonPlus");
let buttonMinus = document.getElementById("buttonMinus");
let buttonMultiPly = document.getElementById("buttonMultiPly");
let buttonDevide = document.getElementById("buttonDevide");

let input1 = document.getElementById("number1");
let input2 = document.getElementById("number2");

function makeOperation(operationCode) {
  var number1 = Number(input1.value);
  var number2 = Number(input2.value);
  if (operationCode === "+") {
    var result = number1 + number2;
  } else if (operationCode === "-") {
    var result = number1 - number2;
  } else if (operationCode === "*") {
    var result = number1 * number2;
  } else if (operationCode === "/") {
    var result = number1 / number2;
  } else {
    window.alert("unknown");
  }
  window.alert(result);
}

// function onButtonPlusClick() {
//   makeOperation("+");
// }

// function onButtonMinusClick() {
//   makeOperation("-");
// }

// function onButtonMultiPlyClick() {
//   makeOperation("*");
// }

// function onButtonDevideClick() {
//   makeOperation("/");
// }

function onOperationButtonClick(eventObject) {
  var clickedElement = eventObject.currentTarget;
  var operation = clickedElement.innerHTML;
  makeOperation(operation);
}

var operationButton = [buttonPlus, buttonMinus, buttonMultiPly, buttonDevide];

for (let i = 0; i < operationButton.length; i++) {
  operationButton[i].addEventListener("click", onOperationButtonClick);
}
