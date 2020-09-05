const inputBorder   = document.getElementById("vborder");
const previewBorder = document.querySelector(".preview");
const code          = document.querySelector(".code");

function keyEnter(e) {
    let key = e.keyCode;

    if(key == 13) {
        // console.log(inputBorder.value);
        // console.log(previewBorder)
        previewBorder.style.borderRadius = inputBorder.value + "px";

        code.innerHTML = "border-radius: " + inputBorder.value + "px" + ";";
    }
}

inputBorder.addEventListener("keydown", keyEnter);
