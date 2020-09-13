/** pt_BR
 * Este é o arquivo principal da aplicação, é nele que está
 * a declaração dos inputs e da função process, (com exceç-
 * ão do reset, que o arquivo responsável é o reset.js),
 * verificando se a tecla pressionado foi o Enter/Return e
 * acionando as funções changeBorder(params) do arquivo
 * change_border.js e codeBox(params) do arquivo code.js e
 * também adicionando os eventos de clique da tecla nos in-
 * puts.
 */

const inputBorder1 = document.getElementById("vTopLeft");
const inputBorder2 = document.getElementById("vTopRight");
const inputBorder3 = document.getElementById("vBottomLeft");
const inputBorder4 = document.getElementById("vBottomRight");

function process(e) {
  let key = e.which || e.keyCode;
  let keyEnterPressed = key == 13;

  let inputBorderValue1 = inputBorder1.value;
  let inputBorderValue2 = inputBorder2.value;
  let inputBorderValue3 = inputBorder3.value;
  let inputBorderValue4 = inputBorder4.value;

  if (keyEnterPressed || e.buttons == 0) {
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
}

inputBorder1.addEventListener("keydown", process);
inputBorder2.addEventListener("keydown", process);
inputBorder3.addEventListener("keydown", process);
inputBorder4.addEventListener("keydown", process);
