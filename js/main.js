/** pt_BR
 * Este é o arquivo principal da aplicação, é nele que está
 * a declaração dos inputs, do preview e da função process,
 * sendo a mesma que irá processar a alteração do preview,
 * (com exceção do reset, que o arquivo responsável é o reset.js),
 * verificando se a tecla pressionado foi o Enter/Return e
 * acionando a função codeBox(params) do arquivo code.js e
 * também adicionando os eventos de clique da tecla nos in-
 * puts.
 */

/** en
 * This is the main file of the app, is in this that is the
 * declaration of the inputs, of the preview and of the pr-
 * ocess function, being the same that will process the the
 * change of the preview (with except of the reset, that t-
 * he responsible file is the reset.js), checking if the k-
 * ey pressed is the Enter/Return and triggering the
 * codeBox(params) function of the code.js file and too ad-
 * ding keyboard click events in inputs.
 */

const inputBorder1 = document.getElementById("vTopLeft");
const inputBorder2 = document.getElementById("vTopRight");
const inputBorder3 = document.getElementById("vBottomLeft");
const inputBorder4 = document.getElementById("vBottomRight");

const previewBorder = document.querySelector(".preview");

function process(e) {
  let key = e.which || e.keyCode;
  let keyEnterPressed = key == 13;

  let inputBorderValue1 = inputBorder1.value;
  let inputBorderValue2 = inputBorder2.value;
  let inputBorderValue3 = inputBorder3.value;
  let inputBorderValue4 = inputBorder4.value;

  if (keyEnterPressed || e.buttons == 0) {
    previewBorder.style.borderTopLeftRadius = inputBorderValue1 + "px";
    previewBorder.style.borderTopRightRadius = inputBorderValue2 + "px";
    previewBorder.style.borderBottomLeftRadius = inputBorderValue3 + "px";
    previewBorder.style.borderBottomRightRadius = inputBorderValue4 + "px";

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
