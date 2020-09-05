const inputBorder   = document.getElementById("vborder");
const previewBorder = document.querySelector(".preview");
const code          = document.querySelector(".code");

function keyEnter(e) {
    let key = e.keyCode;
    let keyEnterPressed = (key == 13);

    let inputBorderValue = inputBorder.value
    let veryHighValue = inputBorderValue > 9999;
    let veryLowValue  = inputBorderValue < -9999;

    if(keyEnterPressed) {
        // console.log(inputBorder.value);
        // console.log(previewBorder)

        if (veryHighValue) {
            previewBorder.style.borderRadius = 9999 + "px";
            code.innerHTML = "border-radius: " + 9999 + "px" + ";";
        }
        else if (veryLowValue) {
            previewBorder.style.borderRadius = -9999 + "px";
            code.innerHTML = "border-radius: " + -9999 + "px" + ";";
        }
        else {
            previewBorder.style.borderRadius = inputBorderValue + "px";
            code.innerHTML = "border-radius: " + inputBorderValue + "px" + ";";
        }

    }
}

inputBorder.addEventListener("keydown", keyEnter);
