/** pt_BR
 * Esse arquivo é responsável pela alteração do border-radius do
 * preview, contendo umma função que altera-o chamada
 * changeBorder(params), essa função é chamada no arquivo main.js.
 */

const preview = document.querySelector(".preview");

function changeBorder(input1, input2, input3, input4) {
  preview.style.borderTopLeftRadius = input1 + "px";
  preview.style.borderBottomLeftRadius = input3 + "px";
  preview.style.borderTopRightRadius = input2 + "px";
  preview.style.borderBottomRightRadius = input4 + "px";
}
