const buttons = document.querySelectorAll(".importantBtn");

const randomBtn1 = document.getElementById("randombtn1");
const randomBtn2 = document.getElementById("randombtn2");

for (let i = 0; i < buttons.length; i++) {

  switch (buttons[i].id) {
    case "hellobtn":
      buttons[i].addEventListener("click", () => {
        console.log("Hello button is clicked");
      });
      break;

    case "byebtn":
      buttons[i].addEventListener("dblclick", () => {
        buttons[i].style.backgroundColor = "yellow";
      });
      break;
  }
}

randomBtn1.addEventListener("mouseover", () => {
  randomBtn1.style.color = "purple";
});

shiftKeyIsPressed = false;
//hides randomBtn2 from screen when SHIFT+E
window.addEventListener("keydown", (someKey) => {
  if (someKey.code === "ShiftLeft" || someKey.code === "ShiftRight") {
    shiftKeyIsPressed = true;
  }

  if (someKey.code === "KeyE" && shiftKeyIsPressed) {
    randomBtn2.style.display = 'none';
  }
});

window.addEventListener("keyup", (someKey) => {
    if (someKey.code === "ShiftLeft" || someKey.code === "ShiftRight") {
        shiftKeyIsPressed = false;
      }
});


