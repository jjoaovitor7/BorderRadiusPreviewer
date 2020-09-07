const inputBorder1   = document.getElementById("vTopLeft");
const inputBorder2   = document.getElementById("vTopRight");
const inputBorder3   = document.getElementById("vBottomLeft");
const inputBorder4   = document.getElementById("vBottomRight");

const previewBorder = document.querySelector(".preview");

function keyEnter(e) {
    let key = e.which || e.keyCode;
    let keyEnterPressed = (key == 13);

    let inputBorderValue1 = inputBorder1.value;
    let inputBorderValue2 = inputBorder2.value;
    let inputBorderValue3 = inputBorder3.value;
    let inputBorderValue4 = inputBorder4.value;

    if(keyEnterPressed) {

        previewBorder.style.borderTopLeftRadius = inputBorderValue1  + "px";
        previewBorder.style.borderTopRightRadius = inputBorderValue2  + "px";
        previewBorder.style.borderBottomLeftRadius = inputBorderValue3  + "px";
        previewBorder.style.borderBottomRightRadius = inputBorderValue4  + "px";

    }

}

inputBorder1.addEventListener("keydown", keyEnter);
inputBorder2.addEventListener("keydown", keyEnter);
inputBorder3.addEventListener("keydown", keyEnter);
inputBorder4.addEventListener("keydown", keyEnter);
