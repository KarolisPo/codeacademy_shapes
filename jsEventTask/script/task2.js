const allLinks = document.querySelectorAll(".mylink");

for (let i = 0; i < allLinks.length; i++) {
  switch (allLinks[i].id) {
    case "link1":
      allLinks[i].addEventListener("click", (firstLink) => {
        alert("First link is clicked");
        console.log("More details about listener:");
        console.log(firstLink);
      });
      break;

    case "link2":
      allLinks[i].addEventListener("dblclick", () => {
        alert("Second link is DOUBLE clicked");
      });
      break;

    case "link3":
      allLinks[i].addEventListener("mouseover", () => {
        console.log("A wild mouse appeared on third link");
      });
      break;

    case "link4":
      allLinks[i].addEventListener("mouseup", () => {
        allLinks[i].innerHTML = "DO NOT RELEASE ME";
      });

      allLinks[i].addEventListener("mousedown", () => {
        allLinks[i].innerHTML = "Link4";
      });
      break;
  }
}
