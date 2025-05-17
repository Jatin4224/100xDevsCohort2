//task-create a html page with a button.when the button is clicked,change the text of a para element.

let btn = document.querySelector("button");
let p = document.querySelector("p");
btn.addEventListener("click", function () {
  p.textContent = "jatin";
});
