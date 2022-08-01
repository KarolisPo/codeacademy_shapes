const clearBtn = document.getElementById("clear");
const multiplyBtn = document.getElementById("multiply");
const modBtn = document.getElementById("mod");
const divideBtn = document.getElementById("divide");
const sumBtn = document.getElementById("sum");
const minusBtn = document.getElementById("minus");
const numOne = document.getElementById("1");
const numTwo = document.getElementById("2");
const numThree = document.getElementById("3");
const numFour = document.getElementById("4");
const numFive = document.getElementById("5");
const numSix = document.getElementById("6");
const numSeven = document.getElementById("7");
const numEight = document.getElementById("8");
const numNine = document.getElementById("9");
const numZero = document.getElementById("0");

let answer = document.getElementById("answer");

const buttonArray = document.getElementsByTagName("button");

let firstNumber;
let secondNumber;
let action;

for (let i = 0; i < buttonArray.length; i++) {
  if (
    parseInt(buttonArray[i].id) ||
    buttonArray[i].id === "0" ||
    buttonArray[i].id === "dot"
  ) {
    buttonArray[i].addEventListener("click", function () {
      answer.innerHTML = answer.innerHTML + buttonArray[i].innerHTML;
    });
  } else {
    buttonArray[i].addEventListener("click", function () {
      function saveData() {
        firstNumber = parseFloat(answer.innerHTML);
        action = buttonArray[i].id;
        answer.innerHTML = "";
      }

      switch (buttonArray[i].id) {
        case "minus":
          saveData();
          break;
        case "sum":
          saveData();
          break;
        case "divide":
          saveData();
          break;
        case "multiply":
          saveData();
          break;
        case "mod":
          saveData();
          break;
        case "clear":
          saveData();
          break;
        case "equal":
          if (answer.innerHTML) {
            secondNumber = parseFloat(answer.innerHTML);
          } else {
            secondNumber = 0;
          }
          switch (action) {
            case "minus":
              answer.innerHTML = firstNumber - secondNumber;
              break;
            case "sum":
              answer.innerHTML = firstNumber + secondNumber;
              break;
            case "multiply":
              answer.innerHTML = firstNumber * secondNumber;
              break;
            case "mod":
              if (secondNumber === 0) {
                answer.innerHTML = "ERROR";
              } else {
                answer.innerHTML = firstNumber % secondNumber;
              }
              break;
            case "divide":
              if (secondNumber === 0) {
                answer.innerHTML = "ERROR";
              } else {
                answer.innerHTML = firstNumber / secondNumber;
              }
              break;
          }
      }
    });
  }
}

