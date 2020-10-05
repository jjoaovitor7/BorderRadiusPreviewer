///// imports /////
import codeBox from "../codeBox.js";
///////////////////


function resetAll(e) {
  /**
   * Função responsável por resetar todos os valores, em outras palavras,
   * setar os inputs para o valor 0, setar o border-radius do preview pa-
   * ra 0 e setar um código de implementação com os valores setados em 0.
   */

  document.getElementById("border-top-left").value = 0;
  document.getElementById("border-bottom-left").value = 0;
  document.getElementById("border-top-right").value = 0;
  document.getElementById("border-bottom-right").value = 0;

  document.querySelector(".preview").style.borderRadius = "0px";

  codeBox(0, 0, 0, 0);
}

export default resetAll;
