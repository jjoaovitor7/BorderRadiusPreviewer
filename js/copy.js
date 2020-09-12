function copyCode() {
  let text = code.innerText;
  let elem = document.createElement("textarea"); // elem -> element

  document.body.appendChild(elem);
  elem.value = text;

  elem.select();
  document.execCommand("copy");

  document.body.removeChild(elem);
}
