/** pt_BR
 * Esse arquivo é responsável pela mudança no border-radius no preview,
 * essa função é chamada no arquivo main.js.
 */
const previewBorder = document.querySelector(".preview");

function changeBorder(input1, input2, input3, input4) {
  previewBorder.style.borderTopLeftRadius = input1 + "px";
  previewBorder.style.borderBottomLeftRadius = input3 + "px";
  previewBorder.style.borderTopRightRadius = input2 + "px";
  previewBorder.style.borderBottomRightRadius = input4 + "px";
}
