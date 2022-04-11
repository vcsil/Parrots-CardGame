let plays = 0;
let matches = 0;

function turnSelectedCard(element) {
    let selectedCardBack = document.querySelector(".atras_para_frente");
    let selectedCardFront = document.querySelector(".frente_para_atras");
    element.querySelector(".atras").classList.add("frente_para_atras");
    element.querySelector(".frente").classList.add("atras_para_frente");
  }