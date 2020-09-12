/** pt_BR
 * Esse arquivo é responsável pela manipulação do botão de resetar,
 * é adicionado um evento de clique que ao clicar os valores dos i-
 * nputs declarados no arquivo main.js são resetados, ou seja, os
 * valores dos inputs são setados para 0 e igualmente no preview do
 * border-radius.
 */

/** en
 * This file is responsible for the manipulation of the reset button,
 * is added an click event that when click the input values declared in
 * main.js file are reseted, in other words, the inputs values are
 * setted for 0 e equally in border-radius preview.
 */

const buttonReset = document.getElementById("btn-reset");

function reset(e) {
    inputBorder1.value = 0;
    inputBorder2.value = 0;
    inputBorder3.value = 0;
    inputBorder4.value = 0;
    previewBorder.style.borderRadius = "0px";

    code.innerHTML = "border-radius: "
                   + "0px "
                   + "0px "
                   + "0px "
                   + "0px;";
    code.innerHTML += "<br/>-moz-border-radius: "
                   + "0px "
                   + "0px "
                   + "0px "
                   + "0px;";
    code.innerHTML += "<br/>-webkit-border-radius: "
                   + "0px "
                   + "0px "
                   + "0px "
                   + "0px;";
}

buttonReset.addEventListener("click", reset);
