const inputBorder   = document.getElementById("vborder");
const previewBorder = document.querySelector(".preview");

function keyEnter(e) {
    let key = e.keyCode;

    if(key == 13) {
        // console.log(inputBorder.value);
        // console.log(previewBorder)
        previewBorder.style.borderRadius = inputBorder.value + "px";
    }
 
}

inputBorder.addEventListener("keydown", keyEnter);
