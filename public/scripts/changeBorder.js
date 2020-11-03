function changeBorder(input1, input2, input3, input4) {
  /**
   * Função responsável pela alteração do border-radius do preview.
   */

  const previewStyle = document.querySelector(".preview").style;
  previewStyle.borderTopLeftRadius = `${input1}px`;
  previewStyle.borderBottomLeftRadius = `${input2}px`;
  previewStyle.borderTopRightRadius = `${input3}px`;
  previewStyle.borderBottomRightRadius = `${input4}px`;
}

export default changeBorder;
