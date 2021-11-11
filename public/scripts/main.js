///// imports /////
import changeBorder from "./changeBorder.js";
import resetAll from "./buttons/reset.js";
import codeBox from "./codeBox.js";
import copyCode from "./buttons/copy.js"
///////////////////


///// inputs /////
const inputBorder1 = document.getElementById("border-top-left");
const inputBorder2 = document.getElementById("border-bottom-left");
const inputBorder3 = document.getElementById("border-top-right");
const inputBorder4 = document.getElementById("border-bottom-right");
//////////////////


///// botões /////
const btnReset = document.getElementById("btn-reset");
const btnCopy  = document.getElementById("btn-copy");
//////////////////


///// checkboxes /////
const chkCSS3 = document.getElementById("css3");
const chkMOZ = document.getElementById("moz");
const chkWEBKIT = document.getElementById("webkit");
//////////////////////


function process(e) {
  /**
   * Função pelo processamento das funções changeBorder e codeBox.
   */

  let inputBorderValue1 = inputBorder1.value;
  let inputBorderValue2 = inputBorder2.value;
  let inputBorderValue3 = inputBorder3.value;
  let inputBorderValue4 = inputBorder4.value;

  changeBorder(
    inputBorderValue1,
    inputBorderValue2,
    inputBorderValue3,
    inputBorderValue4
  );

  codeBox(
    inputBorderValue1,
    inputBorderValue2,
    inputBorderValue3,
    inputBorderValue4
  );
}


///// inputs event /////
inputBorder1.addEventListener("input", process);
inputBorder2.addEventListener("input", process);
inputBorder3.addEventListener("input", process);
inputBorder4.addEventListener("input", process);
////////////////////////


///// botões event /////
btnReset.addEventListener("click", resetAll);
btnCopy.addEventListener("click", copyCode);
////////////////////////


///// checkboxes event /////
chkCSS3.addEventListener("click", process);
chkMOZ.addEventListener("click", process);
chkWEBKIT.addEventListener("click", process);
////////////////////////////
