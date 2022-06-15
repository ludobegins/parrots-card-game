let n_cartas = prompt('Com quantas cartas quer jogar? (de 4 a 14)');

const cartas = [];
let i = 0;

card_html = "<div class='card'></div>";

cards_container = document.querySelector(".cards-container")

while (i < n_cartas){
    cards_container.innerHTML += card_html;
    i++;
}