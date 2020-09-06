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

const buttonReset   = document.getElementById("reset-border");


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
    
    //border-top-left, border-bottom-left, border-top-right, border-bottom-right
    let AllBorderNotChecked = borderTopLeftNotChecked
                            && borderBottomLeftNotChecked
                            && borderTopRightNotChecked 
                            && borderBottomRightNotChecked;

    let borderTopLeftCheckedVar     = borderTopLeftChecked && borderTopRightNotChecked && borderBottomLeftNotChecked && borderBottomRightNotChecked;
    let borderTopRightCheckedVar    = borderTopLeftNotChecked && borderTopRightChecked && borderBottomLeftNotChecked && borderBottomRightNotChecked;
    let borderBottomLeftCheckedVar  = borderTopLeftNotChecked && borderTopRightNotChecked && borderBottomLeftChecked && borderBottomRightNotChecked;
    let borderBottomRightCheckedVar = borderTopLeftNotChecked && borderTopRightNotChecked && borderBottomLeftNotChecked && borderBottomRightChecked;

    let borderTopLeftTopRightCheckedVar    = borderTopLeftChecked && borderTopRightChecked && borderBottomLeftNotChecked && borderBottomRightNotChecked;
    let borderTopLeftBottomLeftCheckedVar  = borderTopLeftChecked && borderTopRightNotChecked && borderBottomLeftChecked && borderBottomRightNotChecked;
    let borderTopLeftBottomRightCheckedVar = borderTopLeftChecked && borderTopRightNotChecked && borderBottomLeftNotChecked && borderBottomRightChecked;

    let borderTopRightBottomLeftCheckedVar  = borderTopLeftNotChecked && borderTopRightChecked && borderBottomLeftChecked && borderBottomRightNotChecked;
    let borderTopRightBottomRightCheckedVar = borderTopLeftNotChecked && borderTopRightChecked && borderBottomLeftNotChecked && borderBottomRightChecked;

    let borderBottomRightBottomLeftCheckedVar = borderTopLeftNotChecked && borderTopRightNotChecked && borderBottomLeftChecked && borderBottomRightChecked;

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
                previewBorder.style.borderRadius = inputBorderValue + "px";
            }

            else if (borderTopLeftCheckedVar)
            {
                previewBorder.style.borderTopLeftRadius = inputBorderValue + "px";
            }

            else if (borderTopRightCheckedVar)
            {
                previewBorder.style.borderTopRightRadius = inputBorderValue + "px";
            }
            else if (borderBottomLeftCheckedVar)
            {
                previewBorder.style.borderBottomLeftRadius = inputBorderValue + "px";
            
            }
            else if (borderBottomRightCheckedVar)
            {
                previewBorder.style.borderBottomRightRadius = inputBorderValue + "px";
            }

            else if (borderTopLeftTopRightCheckedVar)
            {
                previewBorder.style.borderTopLeftRadius = inputBorderValue + "px";
                previewBorder.style.borderTopRightRadius = inputBorderValue + "px";
            }

            else if (borderTopLeftBottomLeftCheckedVar)
            {
                previewBorder.style.borderTopLeftRadius = inputBorderValue + "px";
                previewBorder.style.borderBottomLeftRadius = inputBorderValue + "px";
            }

            else if (borderTopLeftBottomRightCheckedVar)
            {
                previewBorder.style.borderTopLeftRadius = inputBorderValue + "px";
                previewBorder.style.borderBottomRightRadius = inputBorderValue + "px";
            }
            
            else if (borderTopRightBottomLeftCheckedVar)
            {
                previewBorder.style.borderTopRightRadius = inputBorderValue + "px";
                previewBorder.style.borderBottomLeftRadius = inputBorderValue + "px";
            }

            else if (borderTopRightBottomRightCheckedVar)
            {
                previewBorder.style.borderTopRightRadius = inputBorderValue + "px";
                previewBorder.style.borderBottomRightRadius = inputBorderValue + "px";
            }

            else if (borderBottomRightBottomLeftCheckedVar){
                previewBorder.style.borderBottomLeftRadius = inputBorderValue + "px";
                previewBorder.style.borderBottomRightRadius = inputBorderValue + "px";
            }


            if (css3Checked && mozNotChecked && webkitNotChecked && AllBorderNotChecked) 
            {
                code.innerHTML = "border-radius: " + inputBorderValue + "px;";
            }

            else if (mozChecked && css3NotChecked && webkitNotChecked && AllBorderNotChecked)
            {
                code.innerHTML = "-moz-border-radius: " + inputBorderValue + "px;";
            }

            else if (webkitChecked && mozNotChecked && css3NotChecked && AllBorderNotChecked)
            {
                code.innerHTML = "-webkit-border-radius: " + inputBorderValue + "px;";            
            }

            else if (css3Checked && mozChecked && webkitNotChecked && AllBorderNotChecked)
            {
                code.innerHTML = "border-radius: " + inputBorderValue + "px;";
                code.innerHTML += "<br/>-moz-border-radius: " + inputBorderValue + "px;";
            }
            
            else if (css3Checked && mozNotChecked && webkitChecked && AllBorderNotChecked)
            {
                code.innerHTML = "border-radius: " + inputBorderValue + "px;";
                code.innerHTML += "<br/>-webkit-border-radius: " + inputBorderValue + "px;";
            }

            else if (css3NotChecked && mozChecked && webkitChecked && AllBorderNotChecked)
            {
                code.innerHTML = "-moz-border-radius: " + inputBorderValue + "px;";
                code.innerHTML += "<br/>-webkit-border-radius: " + inputBorderValue + "px;";
            }


            else if (css3Checked && mozChecked && webkitChecked && AllBorderNotChecked)
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

buttonReset.addEventListener("click", function(e){
    previewBorder.style.borderRadius = "0px";
});