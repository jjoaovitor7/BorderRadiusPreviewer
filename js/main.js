///// imports /////
import ButtonReset from "./buttons/ButtonReset.js";
import CodeBox from "./CodeBox.js";
import ButtonCopy from "./buttons/ButtonCopy.js";
///////////////////

function changeBorder(input1, input2, input3, input4) {
  /**
   * Função responsável pela alteração do border-radius do preview.
   */

  const preview = document.querySelector(".preview");
  preview.style.borderTopLeftRadius = input1 + "px";
  preview.style.borderBottomLeftRadius = input3 + "px";
  preview.style.borderTopRightRadius = input2 + "px";
  preview.style.borderBottomRightRadius = input4 + "px";
}

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

    /////  instances /////
    let _instanceThis = new BorderRadiusPreviewer();
    let _instanceCodeBox = new CodeBox();
    //////////////////////

    ///// input values /////
    let inputBorderValue1 = _instanceThis.inputBorder1.value;
    let inputBorderValue2 = _instanceThis.inputBorder2.value;
    let inputBorderValue3 = _instanceThis.inputBorder3.value;
    let inputBorderValue4 = _instanceThis.inputBorder4.value;
    ////////////////////////

    changeBorder(
      inputBorderValue1,
      inputBorderValue2,
      inputBorderValue3,
      inputBorderValue4
    );

    _instanceCodeBox.generateCode(
      inputBorderValue1,
      inputBorderValue2,
      inputBorderValue3,
      inputBorderValue4
    );
  }

  observers(e) {
    ///// instances /////
    let _instanceButtonReset = new ButtonReset();
    let _instanceButtonCopy = new ButtonCopy();
    /////////////////////

    ///// inputs event /////
    this.inputBorder1.addEventListener("change", this.process);
    this.inputBorder2.addEventListener("change", this.process);
    this.inputBorder3.addEventListener("change", this.process);
    this.inputBorder4.addEventListener("change", this.process);
    ////////////////////////

    ///// botões event /////
    this.btnReset.addEventListener("click", _instanceButtonReset.resetAll);
    this.btnCopy.addEventListener("click", _instanceButtonCopy.copyCode);
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
