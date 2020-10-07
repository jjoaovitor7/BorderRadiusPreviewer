///// imports /////
import codeBox from "../codeBox.js";
///////////////////

function resetAll(e) {
  /**
   * Função responsável por resetar todos os valores, em outras palavras,
   * setar os inputs para o valor 0, setar o border-radius do preview pa-
   * ra 0 e setar um código de implementação com os valores setados em 0.
   */
  ///// inputs /////
  const inputBorder1 = document.getElementById("border-top-left");
  const inputBorder2 = document.getElementById("border-bottom-left");
  const inputBorder3 = document.getElementById("border-top-right");
  const inputBorder4 = document.getElementById("border-bottom-right");
  //////////////////

  inputBorder1.value = 0;
  inputBorder2.value = 0;
  inputBorder3.value = 0;
  inputBorder4.value = 0;

  document.querySelector(".preview").style.borderRadius = "0px";

  codeBox(0, 0, 0, 0);
}

export default resetAll;
