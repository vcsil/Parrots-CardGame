/* Pergunta o total de cartas    */
let totalDeCartas = prompt("Com quantas cartas você quer jogar?");

/* Verifica se o total de cartas escolhido é correto */
while (totalDeCartas % 2 !== 0 || totalDeCartas < 4 || totalDeCartas > 14) {
  totalDeCartas = prompt("Insira um número par entre 4 e 14!");
}

/* Criando lista com imagens duplicadas para facilitar a criar as imagens */
let cards = [
  "midia/bobrossparrot.gif",    "midia/bobrossparrot.gif",
  "midia/explodyparrot.gif",    "midia/explodyparrot.gif",
  "midia/fiestaparrot.gif",     "midia/fiestaparrot.gif",
  "midia/metalparrot.gif",      "midia/metalparrot.gif",
  "midia/revertitparrot.gif",   "midia/revertitparrot.gif",
  "midia/tripletsparrot.gif",   "midia/tripletsparrot.gif",
  "midia/unicornparrot.gif",    "midia/unicornparrot.gif"
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
    <li class="container">
    <div class="carta atras"></div>
    <div class="carta frente">
    <img src="${escolhendoCarta[i]}">
    </div>
    </li>`;
  }
}

adicionaCartas();
