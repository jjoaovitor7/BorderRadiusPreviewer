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

function resetValues(){
  resetAll();
}

///// inputs event /////
inputBorder1.addEventListener("change", process);
inputBorder2.addEventListener("change", process);
inputBorder3.addEventListener("change", process);
inputBorder4.addEventListener("change", process);
////////////////////////


///// botões event /////
btnReset.addEventListener("click", resetValues);
btnCopy.addEventListener("click", copyCode);
////////////////////////