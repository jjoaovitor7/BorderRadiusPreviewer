const imgHelp  = document.querySelector(".img-help");
const spanHelp = document.querySelector(".span-help");

function showText(e) {
    spanHelp.style.display = "block";
}

imgHelp.addEventListener("click", showText);