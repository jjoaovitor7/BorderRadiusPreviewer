///// imports /////
import changeBorder from "./changeBorder.js";
import resetAll from "./buttons/reset.js";
import codeBox from "./codeBox.js";
import copyCode from "./buttons/copy.js";
///////////////////

class BorderRadiusPreviewer {
  constructor() {
    ///// inputs /////
    this.inputBorder1 = document.getElementById("border-top-left");
    this.inputBorder2 = document.getElementById("border-bottom-left");
    this.inputBorder3 = document.getElementById("border-top-right");
    this.inputBorder4 = document.getElementById("border-bottom-right");
    //////////////////

    ///// botões /////
    this.btnReset = document.getElementById("btn-reset");
    this.btnCopy = document.getElementById("btn-copy");
    //////////////////

    ///// checkboxes /////
    this.chkCSS3 = document.getElementById("css3");
    this.chkMOZ = document.getElementById("moz");
    this.chkWEBKIT = document.getElementById("webkit");
    //////////////////////
  }

  process(e) {
    /**
     * Função responsável pelo processamento das funções changeBorder e codeBox.
     */

    let _instance = new BorderRadiusPreviewer();
    let inputBorderValue1 = _instance.inputBorder1.value;
    let inputBorderValue2 = _instance.inputBorder2.value;
    let inputBorderValue3 = _instance.inputBorder3.value;
    let inputBorderValue4 = _instance.inputBorder4.value;

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

  observers(e) {
    ///// inputs event /////
    this.inputBorder1.addEventListener("change", this.process);
    this.inputBorder2.addEventListener("change", this.process);
    this.inputBorder3.addEventListener("change", this.process);
    this.inputBorder4.addEventListener("change", this.process);
    ////////////////////////

    ///// botões event /////
    this.btnReset.addEventListener("click", resetAll);
    this.btnCopy.addEventListener("click", copyCode);
    ////////////////////////

    ///// checkboxes event /////
    this.chkCSS3.addEventListener("click", this.process);
    this.chkMOZ.addEventListener("click", this.process);
    this.chkWEBKIT.addEventListener("click", this.process);
    ////////////////////////////
  }
}

let main = new BorderRadiusPreviewer();
main.observers();
