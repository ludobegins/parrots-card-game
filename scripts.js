let n_cartas = 1;

while (((n_cartas % 2 == 0) && (typeof(n_cartas) == 'number') && (n_cartas >= 4) && (n_cartas <= 14)) == false){
    n_cartas = prompt('Com quantas cartas quer jogar? (números pares de 4 a 14)');
    n_cartas = Number(n_cartas);
}

const cartas = [];
let i = 0;

card_html =
`<div class='card'>
<img src='img/back_face.png'>
</div>`;

cards_container = document.querySelector(".cards-container")

while (i < n_cartas){
    cards_container.innerHTML += card_html;
    i++;
}