/** pt_BR
 * Esse arquivo é responsável pela manipulação do botão enviar,
 * é adicionado um evento de clique que ao clicar no botão ele
 * irá chamar a função process do arquivo main.js.
 */

/** en
 * This file is responsible for manipulation of the send button,
 * a click event is added that to click on the button it will
 * call the process function from the main.js file.
 */

const buttonSend = document.getElementById("btn-send");
buttonSend.addEventListener("click", process);
