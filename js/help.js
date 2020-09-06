const imgHelp  = document.querySelector(".img-help");
const spanHelp = document.querySelector(".span-help");

function showText(e) {
    spanHelp.style.display = "flex";
}

function hiddenText(e) {
    spanHelp.style.display = "none";
}

imgHelp.addEventListener("mouseover", showText);
imgHelp.addEventListener("mouseout", hiddenText);