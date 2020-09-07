const buttonReset = document.getElementById("btn-reset");

buttonReset.addEventListener("click", function(e){
    inputBorder1.value = 0;
    inputBorder2.value = 0;
    inputBorder3.value = 0;
    inputBorder4.value = 0;
    previewBorder.style.borderRadius = "0px";
});
