/** pt_BR
 * Esse é um arquivo responsável pela criação de uma textarea
 * para que então seja adicionada no documento para a seleção
 * e cópia do conteúdo do código e logo após removida do doc-
 * umento.
 */

/** en
 * This is a file that is responsible for creation of a text-
 * area for that so be added in the document for the selecti-
 * on and copy of the code content e soon after removed of t-
 * he document.
 */

function copyCode() {
  let text = code.innerText;
  let elem = document.createElement("textarea"); // elem -> element

  document.body.appendChild(elem);
  elem.value = text;

  elem.select();
  document.execCommand("copy");

  document.body.removeChild(elem);
}
