const body = document.getElementById("body");
const button = document.getElementById("btn");

let nightMode = false;

const toggleBackgroundColor = () => {
  if (!nightMode) {
    body.style.backgroundColor = "#05334a";
    body.style.color = "#edf7f6";
    button.style.backgroundColor = "#d6c8bf";
    button.style.color = "#161d5c";
    button.innerHTML = "Light Mode";
    nightMode = true;
  } else {
    body.style.backgroundColor = "#ecf3f470";
    body.style.color = "black";
    button.style.backgroundColor = "#054a5c";
    button.style.color = "white";
    button.innerHTML = "Night Mode";
    nightMode = false;
  }
};

button.onclick = toggleBackgroundColor;
