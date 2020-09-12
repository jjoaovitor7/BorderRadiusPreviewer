/** pt_BR
 * Esse é um arquivo para a manipulação do botão de ajuda,
 * é adicionado 2 eventos, um evento que ao passar o mouse
 * na área do botão será exibida uma mensagem de ajuda, e
 * outro evento que ao retirar o mouse da área do botão a
 * mensagem desaparecerá.
 */

 /** en
  * This is a file for manipulation of the help button,
  * 2 events are added, one event that to hover the mouse 
  * in the button area a help message will apear, and an-
  * other event that to removing the mouse from the butt-
  * on area the message will disappear.
  */

const imgHelp = document.querySelector(".img-help");
const spanHelp = document.querySelector(".span-help");

function showText(e) {
  spanHelp.style.display = "flex";
}

function hiddenText(e) {
  spanHelp.style.display = "none";
}

imgHelp.addEventListener("mouseover", showText);
imgHelp.addEventListener("mouseout", hiddenText);
