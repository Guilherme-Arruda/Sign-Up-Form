let btn = document.getElementById("show_and_hide");
let btnText = document.getElementById("btn-text");
let icon = document.getElementById("eye-icon");
let input = document.getElementById("password");

btn.addEventListener("click", function () {
  if (input.getAttribute("type") == "password") {
    input.setAttribute("type", "text");
    icon.setAttribute("class", "far fa-eye-slash");
    btnText.innerHTML = "Hide";
  } else {
    input.setAttribute("type", "password");
    icon.setAttribute("class", "far fa-eye");
    btnText.innerHTML = "Show";
  }
});
