//task-create a form with input fields and a submit button.use js to valdiate the form and display an error message if the inpur is invalid.

//1-prevent form realoading using preventDefault();

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

//2) check inputs blank hain ky
