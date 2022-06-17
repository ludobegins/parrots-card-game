let n_cartas = 1;

while (((n_cartas % 2 == 0) && (typeof(n_cartas) == 'number') && (n_cartas >= 4) && (n_cartas <= 14)) == false){
    n_cartas = prompt('Com quantas cartas quer jogar? (números pares de 4 a 14)');
    n_cartas = Number(n_cartas);
}

let front_cartas = ['bobross', 'explody', 'fiesta', 'metal', 'revertit', 'triplets', 'unicorn'];
front_cartas.sort(comparador);

const front = [];

for (let i=0; i < n_cartas/2; i++){
    front.push(front_cartas[i]);
    front.push(front_cartas[i]);
}

front.sort(comparador);

let card_html = [];

for (let i=0; i < front.length; i++){
    card_html.push(`<div class='card' onclick=turnCard(this)>
    <img src='img/back_face.png' class='back-img'>
    <img src='img/${front[i]}parrot.gif' class="front-img hidden">
    </div>`)
}

let cards_container = document.querySelector(".cards-container")
let i = 0;

while (i < n_cartas){
    cards_container.innerHTML += card_html[i];
    i++;
}

function comparador() { 
    return Math.random() - 0.5; 
}

function turnCard(el){
    let back_img = el.querySelector(".back-img");
    let front_img = el.querySelector(".front-img");
    back_img.classList.add("hidden");
    front_img.classList.remove("hidden");
}
