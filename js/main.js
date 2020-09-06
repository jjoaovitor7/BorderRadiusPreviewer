const inputBorder   = document.getElementById("vborder");
const previewBorder = document.querySelector(".preview");
const code          = document.querySelector(".code");

const chkCss3       = document.getElementById("css3");
const chkMoz        = document.getElementById("moz");
const chkWebkit     = document.getElementById("webkit");

const chkBorderTopLeft     = document.getElementById("topLeft");
const chkBorderBottomLeft  = document.getElementById("bottomLeft");
const chkBorderTopRight    = document.getElementById("topRight");
const chkBorderBottomRight = document.getElementById("bottomRight");

const imgHelp       = document.querySelector(".img-help");
const spanHelp      = document.querySelector(".span-help");


function keyEnter(e) {
    let key = e.which || e.keyCode;
    let keyEnterPressed = (key == 13);

    let inputBorderValue = inputBorder.value;
    let veryHighValue = inputBorderValue > 9999;
    let veryLowValue  = inputBorderValue < -9999;

    let css3Checked   = chkCss3.checked == true;
    let mozChecked    = chkMoz.checked == true;
    let webkitChecked = chkWebkit.checked == true;

    let borderTopLeftChecked     = chkBorderTopLeft.checked == true;
    let borderBottomLeftChecked  = chkBorderBottomLeft.checked == true;
    let borderBottomRightChecked = chkBorderBottomRight.checked == true;
    let borderTopRightChecked    = chkBorderTopRight.checked == true;

    let css3NotChecked   = chkCss3.checked == false;
    let mozNotChecked    = chkMoz.checked == false;
    let webkitNotChecked = chkWebkit.checked == false;

    let borderTopLeftNotChecked     = chkBorderTopLeft.checked == false;
    let borderBottomLeftNotChecked  = chkBorderBottomLeft.checked == false;
    let borderBottomRightNotChecked = chkBorderBottomRight.checked == false;
    let borderTopRightNotChecked    = chkBorderTopRight.checked == false;

    let AllBorderNotChecked = borderTopLeftNotChecked
                            && borderBottomLeftNotChecked
                            && borderTopRightNotChecked 
                            && borderBottomRightNotChecked;

    if(keyEnterPressed) {
        // console.log(inputBorder.value);
        // console.log(previewBorder)

        if (veryHighValue)
        {
            previewBorder.style.borderRadius = 9999 + "px";
            code.innerHTML = "border-radius: " + 9999 + "px;";
        }

        else if (veryLowValue)
        {
            previewBorder.style.borderRadius = -9999 + "px";
            code.innerHTML = "border-radius: " + -9999 + "px;";
        }

        else {
            if (AllBorderNotChecked)
            {
                previewBorder.style.borderRadius = inputBorderValue + "px;";
            }
            else if (!AllBorderNotChecked) {
                previewBorder.style.borderRadius = inputBorderValue + "px;";
            }

            else if (borderTopLeftChecked && borderTopRightNotChecked && borderBottomLeftNotChecked && borderBottomRightNotChecked){
                previewBorder.style.borderTopLeftRadius = inputBorderValue + "px;";
            }

            else if (borderTopLeftChecked && borderTopRightChecked && borderBottomLeftNotChecked && borderBottomRightNotChecked){
                previewBorder.style.borderTopLeftRadius  = inputBorderValue + "px;";
                previewBorder.style.borderTopRightRadius = inputBorderValue + "px;";
            }

            if (css3Checked && mozNotChecked && webkitNotChecked) 
            {
                code.innerHTML = "border-radius: " + inputBorderValue + "px;";
            }

            else if (mozChecked && css3NotChecked && webkitNotChecked)
            {
                code.innerHTML = "-moz-border-radius: " + inputBorderValue + "px;";
            }

            else if (webkitChecked && mozNotChecked && css3NotChecked)
            {
                code.innerHTML = "-webkit-border-radius: " + inputBorderValue + "px;";            
            }

            else if (css3Checked && mozChecked && webkitNotChecked)
            {
                code.innerHTML = "border-radius: " + inputBorderValue + "px;";
                code.innerHTML += "<br/>-moz-border-radius: " + inputBorderValue + "px;";
            }
            
            else if (css3Checked && mozNotChecked && webkitChecked)
            {
                code.innerHTML = "border-radius: " + inputBorderValue + "px;";
                code.innerHTML += "<br/>-webkit-border-radius: " + inputBorderValue + "px;";
            }

            else if (css3NotChecked && mozChecked && webkitChecked)
            {
                code.innerHTML = "-moz-border-radius: " + inputBorderValue + "px;";
                code.innerHTML += "<br/>-webkit-border-radius: " + inputBorderValue + "px;";
            }


            else if (css3Checked && mozChecked && webkitChecked)
            {
                code.innerHTML = "border-radius: " + inputBorderValue + "px;";
                code.innerHTML += "<br/>-moz-border-radius: " + inputBorderValue + "px;";
                code.innerHTML += "<br/>-webkit-border-radius: " + inputBorderValue + "px;";
            }
        }
    }
}

inputBorder.addEventListener("keydown", keyEnter);

imgHelp.addEventListener("click", function(e){
    spanHelp.style.display = "block";
});