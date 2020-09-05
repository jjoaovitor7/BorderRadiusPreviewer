const inputBorder   = document.getElementById("vborder");
const previewBorder = document.querySelector(".preview");
const code          = document.querySelector(".code");
const chkCss3       = document.getElementById("css3");
const chkMoz        = document.getElementById("moz");
const chkWebkit     = document.getElementById("webkit");


function keyEnter(e) {
    let key = e.keyCode;
    let keyEnterPressed = (key == 13);

    let inputBorderValue = inputBorder.value
    let veryHighValue = inputBorderValue > 9999;
    let veryLowValue  = inputBorderValue < -9999;

    let css3Checked   = chkCss3.checked == true
    let mozChecked    = chkMoz.checked == true
    let webkitChecked = chkWebkit.checked == true

    let css3NotChecked   = chkCss3.checked == false
    let mozNotChecked    = chkMoz.checked == false
    let webkitNotChecked = chkWebkit.checked == false

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
            
            if (css3Checked && mozNotChecked && webkitNotChecked) 
            {
                previewBorder.style.borderRadius = inputBorderValue + "px";
                code.innerHTML = "border-radius: " + inputBorderValue + "px;";
            }

            else if (mozChecked && css3NotChecked && webkitNotChecked)
            {
                previewBorder.style.borderRadius = inputBorderValue + "px";
                code.innerHTML = "-moz-border-radius: " + inputBorderValue + "px;";
            }

            else if (webkitChecked && mozNotChecked && css3NotChecked)
            {
                previewBorder.style.borderRadius = inputBorderValue + "px";
                code.innerHTML = "-webkit-border-radius: " + inputBorderValue + "px;";            
            }

            else if (css3Checked && mozChecked && webkitNotChecked)
            {
                previewBorder.style.borderRadius = inputBorderValue + "px";
                code.innerHTML = "border-radius: " + inputBorderValue + "px;";
                code.innerHTML += "<br/>-moz-border-radius: " + inputBorderValue + "px;";
            }
        }
    }
}

inputBorder.addEventListener("keydown", keyEnter);
