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
      if (answer.innerHTML === "0") {
        answer.innerHTML = "";
      }
      answer.innerHTML = answer.innerHTML + buttonArray[i].innerHTML;
    });
  } else {
    buttonArray[i].addEventListener("click", function () {
      function saveData() {
        firstNumber = parseFloat(answer.innerHTML);
        action = buttonArray[i].id;
        answer.innerHTML = "0";
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
          firstNumber = 0;
          secondNumber = 0;
          answer.innerHTML = "0";
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
