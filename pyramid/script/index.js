const triangle = document.querySelector(".triangle");
const pyramid = document.querySelector(".pyramid");
const reversePyramid = document.querySelector(".pyramid-reverse");
const shapeSize = document.querySelector(".shape-size");
const shapeResult = document.querySelector(".shape-result");
const clear = document.querySelector(".clear")


triangle.addEventListener("click", () => {
    let myShape = "";
    for (let i = 1; i <= shapeSize.value; i++) {
      let str = "&nbsp".repeat(shapeSize.value - i);
      let str2 = "*".repeat(i * 2 - 1);
      let output = str2 + str + "<br>";
      myShape += output;
    }
    shapeResult.innerHTML = myShape;
  });

pyramid.addEventListener("click", () => {
  let myShape = "";
  for (let i = 1; i <= shapeSize.value; i++) {
    let str = "&nbsp".repeat(shapeSize.value - i);
    let str2 = "*".repeat(i * 2 - 1);
    let output = str + str2 + str + "<br>";
    myShape += output;
  }
  shapeResult.innerHTML = myShape;
});

reversePyramid.addEventListener("click", () => {
  let myShape = "";
  for (let i = 1; i <= shapeSize.value; i++) {
    let str = "*".repeat((shapeSize.value-i)*2+1);
    let str2 = "&nbsp".repeat(i);
    let output = str2 + str + str2 + "<br>";
    myShape += output;
  }
  shapeResult.innerHTML = myShape;
});

clear.addEventListener("click", () => {
    shapeResult.innerHTML = "";
    shapeSize.value = null;
})