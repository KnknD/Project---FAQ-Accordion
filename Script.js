let buttons = document.querySelectorAll(".btn");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    let plus = this.querySelector(".plus");
    let minus = this.querySelector(".minus");
    let description = this.nextElementSibling;

    plus.style.display = plus.style.display === "block" ? "none" : "block";
    minus.style.display = plus.style.display === "none" ? "block" : "none";
    description.style.display = plus.style.display === "none" ? "block" : "none";
  });
});