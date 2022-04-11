/* Pergunta o total de cartas    */
let totalDeCartas = prompt("Com quantas cartas você quer jogar?");

/* Verifica se o total de cartas escolhido é correto */
while (totalDeCartas % 2 !== 0 || totalDeCartas < 4 || totalDeCartas > 14) {
  totalDeCartas = prompt("Insira um número par entre 4 e 14!");
}

/* Criando lista com imagens duplicadas para facilitar a criar as imagens */
let cards = [
  "midia/bobrossparrot.gif",
  "midia/bobrossparrot.gif",
  "midia/explodyparrot.gif",
  "midia/explodyparrot.gif",
  "midia/fiestaparrot.gif",
  "midia/fiestaparrot.gif",
  "midia/metalparrot.gif",
  "midia/metalparrot.gif",
  "midia/revertitparrot.gif",
  "midia/revertitparrot.gif",
  "midia/tripletsparrot.gif",
  "midia/tripletsparrot.gif",
  "midia/unicornparrot.gif",
  "midia/unicornparrot.gif"
];

/* Selecionando as imagens */
let escolhendoCarta = cards.slice(0, totalDeCartas);

function comparador() {
  return Math.random() - 0.5;
}

/* Embaralhando as imagens */
escolhendoCarta.sort(comparador);

/* Função para adicionar bloco de html com a imagem. Adiciona o total de imagens pedido */
function adicionaCartas() {
  let ul = document.querySelector("ul");
  for (let i = 0; i < escolhendoCarta.length; i++) {
    ul.innerHTML += `
    <li class="container" onclick="turnSelectedCard(this)">
    <div class="carta atras"></div>
    <div class="carta frente">
    <img src="${escolhendoCarta[i]}">
    </div>
    </li>`;
  }
}

adicionaCartas();

let plays = 0;
let matches = 0;

function turnSelectedCard(element) {
  let selectedCardBack = document.querySelector(".atras_para_frente");
  let selectedCardFront = document.querySelector(".frente_para_atras");
  element.querySelector(".atras").classList.add("frente_para_atras");
  element.querySelector(".frente").classList.add("atras_para_frente");

  if (selectedCardBack !== null) {
    if (
      element.querySelector(".frente").innerHTML === selectedCardBack.innerHTML
    ) {
      element.querySelector(".atras").classList.add("matchFrontFace");
      element.querySelector(".frente").classList.add("matchBackFace");
      selectedCardFront.classList.add("matchFrontFace");
      selectedCardBack.classList.add("matchBackFace");
      matches++;
    }
    setTimeout(function () {
      element.querySelector(".atras").classList.remove("frente_para_atras");
      element.querySelector(".frente").classList.remove("atras_para_frente");
      document
        .querySelector(".atras_para_frente")
        .classList.remove("atras_para_frente");
      document
        .querySelector(".frente_para_atras")
        .classList.remove("frente_para_atras");
    }, 1000);
  }
  plays++;

  if (matches === totalDeCartas / 2) {
    setTimeout(function () {
      let win = true;
      alert(`Você ganhou em ${plays} jogadas!`);
    }, 50);
  }
}
