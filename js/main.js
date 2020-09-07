const inputBorder1   = document.getElementById("vTopLeft");
const inputBorder2   = document.getElementById("vTopRight");
const inputBorder3   = document.getElementById("vBottomLeft");
const inputBorder4   = document.getElementById("vBottomRight");

const previewBorder = document.querySelector(".preview");

const code          = document.querySelector(".code");
const chkCss3       = document.getElementById("css3");
const chkMoz        = document.getElementById("moz");
const chkWebkit     = document.getElementById("webkit");

function keyEnter(e) {
    let key = e.which || e.keyCode;
    let keyEnterPressed = (key == 13);

    let inputBorderValue1 = inputBorder1.value;
    let inputBorderValue2 = inputBorder2.value;
    let inputBorderValue3 = inputBorder3.value;
    let inputBorderValue4 = inputBorder4.value;

    let css3Checked   = chkCss3.checked == true;
    let mozChecked    = chkMoz.checked == true;
    let webkitChecked = chkWebkit.checked == true;

    if(keyEnterPressed) {

        previewBorder.style.borderTopLeftRadius = inputBorderValue1  + "px";
        previewBorder.style.borderTopRightRadius = inputBorderValue2  + "px";
        previewBorder.style.borderBottomLeftRadius = inputBorderValue3  + "px";
        previewBorder.style.borderBottomRightRadius = inputBorderValue4  + "px";

        if (css3Checked && !(mozChecked) && !(webkitChecked)) 
        {
            code.innerHTML = "border-radius: "
                                    + inputBorderValue1 + "px "
                                    + inputBorderValue2 + "px "
                                    + inputBorderValue3 + "px "
                                    + inputBorderValue4 + "px;";
        }

        else if (mozChecked && !(css3Checked) && !(webkitChecked))
        {
            code.innerHTML = "-moz-border-radius: "
                                    + inputBorderValue1 + "px "
                                    + inputBorderValue2 + "px "
                                    + inputBorderValue3 + "px "
                                    + inputBorderValue4 + "px;";
        }

        else if (webkitChecked && !(mozChecked) && !(css3Checked))
        {
            code.innerHTML = "-webkit-border-radius: "
                                    + inputBorderValue1 + "px "
                                    + inputBorderValue2 + "px "
                                    + inputBorderValue3 + "px "
                                    + inputBorderValue4 + "px;";           
        }

        else if (css3Checked && mozChecked && !(webkitChecked))
        {
            code.innerHTML = "border-radius: " 
                                    + inputBorderValue1 + "px "
                                    + inputBorderValue2 + "px "
                                    + inputBorderValue3 + "px "
                                    + inputBorderValue4 + "px;";
            code.innerHTML += "<br/>-moz-border-radius: "
                                    + inputBorderValue1 + "px "
                                    + inputBorderValue2 + "px "
                                    + inputBorderValue3 + "px "
                                    + inputBorderValue4 + "px;";
        }
        
        else if (css3Checked && !(mozChecked) && webkitChecked)
        {
            code.innerHTML = "border-radius: " 
                                    + inputBorderValue1 + "px "
                                    + inputBorderValue2 + "px "
                                    + inputBorderValue3 + "px "
                                    + inputBorderValue4 + "px;";
            code.innerHTML += "<br/>-webkit-border-radius: "
                                    + inputBorderValue1 + "px "
                                    + inputBorderValue2 + "px "
                                    + inputBorderValue3 + "px "
                                    + inputBorderValue4 + "px;";
        }

        else if (!(css3Checked) && mozChecked && webkitChecked)
        {
            code.innerHTML = "-moz-border-radius: "
                                    + inputBorderValue1 + "px "
                                    + inputBorderValue2 + "px "
                                    + inputBorderValue3 + "px "
                                    + inputBorderValue4 + "px;";
            code.innerHTML += "<br/>-webkit-border-radius: "
                                    + inputBorderValue1 + "px "
                                    + inputBorderValue2 + "px "
                                    + inputBorderValue3 + "px "
                                    + inputBorderValue4 + "px;";
        }


        else if (css3Checked && mozChecked && webkitChecked)
        {
            code.innerHTML = "border-radius: " 
                                    + inputBorderValue1 + "px "
                                    + inputBorderValue2 + "px "
                                    + inputBorderValue3 + "px "
                                    + inputBorderValue4 + "px;";
            code.innerHTML += "<br/>-moz-border-radius: "
                                    + inputBorderValue1 + "px "
                                    + inputBorderValue2 + "px "
                                    + inputBorderValue3 + "px "
                                    + inputBorderValue4 + "px;";
            code.innerHTML += "<br/>-webkit-border-radius: "
                                    + inputBorderValue1 + "px "
                                    + inputBorderValue2 + "px "
                                    + inputBorderValue3 + "px "
                                    + inputBorderValue4 + "px;";        }
    }

}

inputBorder1.addEventListener("keydown", keyEnter);
inputBorder2.addEventListener("keydown", keyEnter);
inputBorder3.addEventListener("keydown", keyEnter);
inputBorder4.addEventListener("keydown", keyEnter);
