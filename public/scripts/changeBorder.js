function changeBorder(input1, input2, input3, input4) {
  /**
   * Função responsável pela alteração do border-radius do preview.
   */

  const preview = document.querySelector(".preview");
  preview.style.borderTopLeftRadius = input1 + "px";
  preview.style.borderBottomLeftRadius = input3 + "px";
  preview.style.borderTopRightRadius = input2 + "px";
  preview.style.borderBottomRightRadius = input4 + "px";
}

export default changeBorder;
