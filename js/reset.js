const buttonReset   = document.getElementById("reset-border");
const previewBorder = document.querySelector(".preview");

buttonReset.addEventListener("click", function(e){
    previewBorder.style.borderRadius = "0px";
});
