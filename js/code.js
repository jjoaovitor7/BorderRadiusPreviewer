/** pt_BR
 * Esse arquivo tem o objetivo de gerar o código do preview do border-radius
 * através de uma função chamada code, que tem 4 parâmetros, inpu1, input2, 
 * input3 e input4 e nessa função são verificados os checkboxes que foram i-
 * nseridos no arquivo index.html e logo após gerado o código do preview do
 * border-radius.
 */

/** en
 * This file has the objective of gererate the border-radius preview code
 * though a function called code, that has 4 parameters, input1, input2,
 * input3 and input4 and in this function are checked the checkboxes that
 * were included in the index.html file and soon after generated the pre-
 * view code of the border-radius.
 * 
 */

const code = document.querySelector(".code");

const chkCss3 = document.getElementById("css3");
const chkMoz = document.getElementById("moz");
const chkWebkit = document.getElementById("webkit");

function codeBox (input1, input2, input3, input4) {
    
    const css3Checked = chkCss3.checked == true;
    const mozChecked = chkMoz.checked == true;
    const webkitChecked = chkWebkit.checked == true;

    const allCheckboxesChecked = css3Checked && mozChecked && webkitChecked

    // se o checkbox do css3 estiver checkado
    if (css3Checked && !(mozChecked) && !(webkitChecked)) 
    {
        code.innerHTML = "border-radius: "
                                + input1 + "px "
                                + input2 + "px "
                                + input3 + "px "
                                + input4 + "px;";
    }

    // se o checkbox do moz estiver checkado
    else if (mozChecked && !(css3Checked) && !(webkitChecked))
    {
        code.innerHTML = "-moz-border-radius: "
                                + input1 + "px "
                                + input2 + "px "
                                + input3 + "px "
                                + input4 + "px;";
    }

    // se o checkbox do webkit estiver checkado
    else if (webkitChecked && !(mozChecked) && !(css3Checked))
    {
        code.innerHTML = "-webkit-border-radius: "
                                + input1 + "px "
                                + input2 + "px "
                                + input3 + "px "
                                + input4 + "px;";           
    }

    // se o checkbox do css3 e do moz estiverem checkados
    else if (css3Checked && mozChecked && !(webkitChecked))
    {
        code.innerHTML = "border-radius: " 
                                + input1 + "px "
                                + input2 + "px "
                                + input3 + "px "
                                + input4 + "px;";
        code.innerHTML += "<br/>-moz-border-radius: "
                                + input1 + "px "
                                + input2 + "px "
                                + input3 + "px "
                                + input4 + "px;";
    }

    // se o checkbox do css3 e do webkit estiverem checkados
    else if (css3Checked && !(mozChecked) && webkitChecked)
    {
        code.innerHTML = "border-radius: " 
                                + input1 + "px "
                                + input2 + "px "
                                + input3 + "px "
                                + input4 + "px;";
        code.innerHTML += "<br/>-webkit-border-radius: "
                                + input1 + "px "
                                + input2 + "px "
                                + input3 + "px "
                                + input4 + "px;";
    }

    // se o checkbox do moz e do webkit estiverem checkados
    else if (!(css3Checked) && mozChecked && webkitChecked)
    {
        code.innerHTML = "-moz-border-radius: "
                                + input1 + "px "
                                + input2 + "px "
                                + input3 + "px "
                                + input4 + "px;";
        code.innerHTML += "<br/>-webkit-border-radius: "
                                + input1 + "px "
                                + input2 + "px "
                                + input3 + "px "
                                + input4 + "px;";
    }

    // se todos os checkboxes estiverem checkados
    else if (allCheckboxesChecked)
    {
        code.innerHTML = "border-radius: " 
                                + input1 + "px "
                                + input2 + "px "
                                + input3 + "px "
                                + input4 + "px;";
        code.innerHTML += "<br/>-moz-border-radius: "
                                + input1 + "px "
                                + input2 + "px "
                                + input3 + "px "
                                + input4 + "px;";
        code.innerHTML += "<br/>-webkit-border-radius: "
                                + input1 + "px "
                                + input2 + "px "
                                + input3 + "px "
                                + input4 + "px;";
    }
}
