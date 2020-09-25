/** pt_BR
 * Este é o arquivo principal da aplicação, é nele que está
 * a declaração dos inputs e da função process, (com exceç-
 * ão do reset, que o arquivo responsável é o reset.js), o
 * acionamento das funções changeBorder(params) do mesmo arqu-
 * ivo e codeBox(params) do arquivo code.js e também adici-
 * onando os eventos nos inputs.
 */

const inputBorder1 = document.getElementById("vTopLeft");
const inputBorder2 = document.getElementById("vTopRight");
const inputBorder3 = document.getElementById("vBottomLeft");
const inputBorder4 = document.getElementById("vBottomRight");

const preview = document.querySelector(".preview");
function changeBorder(input1, input2, input3, input4) {
  /**
   * Função responsável pela alteração do border-radius do preview.
   */
  preview.style.borderTopLeftRadius = input1 + "px";
  preview.style.borderBottomLeftRadius = input3 + "px";
  preview.style.borderTopRightRadius = input2 + "px";
  preview.style.borderBottomRightRadius = input4 + "px";
}

function process(e) {

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

inputBorder1.addEventListener("change", process);
inputBorder2.addEventListener("change", process);
inputBorder3.addEventListener("change", process);
inputBorder4.addEventListener("change", process);
