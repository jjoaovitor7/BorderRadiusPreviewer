class ButtonCopy {
  copyCode(e) {
    /**
     * Função responsável pela criação de uma textarea para que então seja
     * adicionada no documento para a seleção e cópia do conteúdo do códi-
     * go e logo após removida do documento.
     */

    const code = document.querySelector(".code");

    let text = code.innerText;
    let elem = document.createElement("textarea"); // elem -> element

    document.body.appendChild(elem);
    elem.value = text;

    elem.select();
    document.execCommand("copy");

    document.body.removeChild(elem);
  }
}

export default ButtonCopy;
