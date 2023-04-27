const gradientBox = document.querySelector(".gradient-box");
const selectMenu = document.querySelector(".select-box select");
const colorInputs = document.querySelectorAll(".colors input");
const textarea = document.querySelector("textarea");
const refreshButton = document.querySelector(".refresh");
const copyButton = document.querySelector(".copy");

// Função que gera cores randômicas
function getRadomColor() {
  const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${randomHex}`;
}

function generateGradient(isRandom) {
  // Verifica se o botão refresh foi clicado, se isRadom == true atualiza cores randomicamente
  if (isRandom) {
    colorInputs[0].value = getRadomColor();
    colorInputs[1].value = getRadomColor();
  }

  // Criando as cores em gradientes
  const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
  gradientBox.style.background = gradient;
  textarea.value = `background: ${gradient};`;
}

// Função que copia o hexadecimal das cores
function copyCode() {
  navigator.clipboard.writeText(textarea.value);
  copyButton.innerText = "Code Copied!";
  setTimeout(() => {
    copyButton.innerText = "Copy Code";
  }, 1600);
}

colorInputs.forEach((input) => {
  // chama a função generateGradient
  input.addEventListener("input", () => generateGradient(false));
});

selectMenu.addEventListener("change", () => generateGradient(false));
refreshButton.addEventListener("click", () => generateGradient(true));
copyButton.addEventListener("click", copyCode);
