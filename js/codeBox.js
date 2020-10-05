function codeBox(input1, input2, input3, input4) {
  /**
   * Função responsável por gerar o código do preview do border-radius,
   * essa função tem 4 params, input1, input2, input3, input4, que são
   * os inputs do Border Radius Previewer e nessa função são verificad-
   * os checkboxes inseridos no index.html e logo após é gerado o códi-
   * go do preview do Border Radius Previewer.
   */

  ///// checkboxes /////
  const css3Checked = document.getElementById("css3").checked == true;
  const mozChecked = document.getElementById("moz").checked == true;
  const webkitChecked = document.getElementById("webkit").checked == true;
  const allCheckboxesChecked = css3Checked && mozChecked && webkitChecked;
  //////////////////////

  const code = document.querySelector(".code");

  if (input1 == ""){
    input1 = 0;
  }
  
  if (input2 == ""){
    input2 = 0;
  }

  if (input3 == ""){
    input3 = 0;
  }

  if (input4 == ""){
    input4 = 0;
  }

  // se o checkbox do css3 estiver checkado
  if (css3Checked && !mozChecked && !webkitChecked) {
    code.innerHTML =
      "border-radius: " +
      input1 +
      "px " +
      input2 +
      "px " +
      input3 +
      "px " +
      input4 +
      "px;";
  }

  // se o checkbox do moz estiver checkado
  else if (mozChecked && !css3Checked && !webkitChecked) {
    code.innerHTML =
      "-moz-border-radius: " +
      input1 +
      "px " +
      input2 +
      "px " +
      input3 +
      "px " +
      input4 +
      "px;";
  }

  // se o checkbox do webkit estiver checkado
  else if (webkitChecked && !mozChecked && !css3Checked) {
    code.innerHTML =
      "-webkit-border-radius: " +
      input1 +
      "px " +
      input2 +
      "px " +
      input3 +
      "px " +
      input4 +
      "px;";
  }

  // se o checkbox do css3 e do moz estiverem checkados
  else if (css3Checked && mozChecked && !webkitChecked) {
    code.innerHTML =
      "border-radius: " +
      input1 +
      "px " +
      input2 +
      "px " +
      input3 +
      "px " +
      input4 +
      "px;";
    code.innerHTML +=
      "<br/>-moz-border-radius: " +
      input1 +
      "px " +
      input2 +
      "px " +
      input3 +
      "px " +
      input4 +
      "px;";
  }

  // se o checkbox do css3 e do webkit estiverem checkados
  else if (css3Checked && !mozChecked && webkitChecked) {
    code.innerHTML =
      "border-radius: " +
      input1 +
      "px " +
      input2 +
      "px " +
      input3 +
      "px " +
      input4 +
      "px;";
    code.innerHTML +=
      "<br/>-webkit-border-radius: " +
      input1 +
      "px " +
      input2 +
      "px " +
      input3 +
      "px " +
      input4 +
      "px;";
  }

  // se o checkbox do moz e do webkit estiverem checkados
  else if (!css3Checked && mozChecked && webkitChecked) {
    code.innerHTML =
      "-moz-border-radius: " +
      input1 +
      "px " +
      input2 +
      "px " +
      input3 +
      "px " +
      input4 +
      "px;";
    code.innerHTML +=
      "<br/>-webkit-border-radius: " +
      input1 +
      "px " +
      input2 +
      "px " +
      input3 +
      "px " +
      input4 +
      "px;";
  }

  // se todos os checkboxes estiverem checkados
  else if (allCheckboxesChecked) {
    code.innerHTML =
      "border-radius: " +
      input1 +
      "px " +
      input2 +
      "px " +
      input3 +
      "px " +
      input4 +
      "px;";
    code.innerHTML +=
      "<br/>-moz-border-radius: " +
      input1 +
      "px " +
      input2 +
      "px " +
      input3 +
      "px " +
      input4 +
      "px;";
    code.innerHTML +=
      "<br/>-webkit-border-radius: " +
      input1 +
      "px " +
      input2 +
      "px " +
      input3 +
      "px " +
      input4 +
      "px;";
  }
  else {
    code.innerHTML = '&nbsp;';
  }
}

export default codeBox;
