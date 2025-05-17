let btn = document.querySelector("button");
btn.textContent = "Starting…";
btn.addEventListener("click", function () {
  btn.textContent = "donwload";
  btn.style.backgroundColor = "red";
});

let h1 = document.querySelector("h1");
h1.style.color = "red";
h1.style.fontSize = "16px";

h1.classList.add(".makeitred");
