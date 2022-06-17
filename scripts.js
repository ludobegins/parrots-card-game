let n_cartas = 1;
let viradas_temp = [];
let viradas_def = [];
let back_img;
let front_img;
let jogadas = 0;

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
    <img src='img/${front[i]}parrot.gif' class="front-img hidden ${front[i]}">
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
    el.classList.add('card-turn');

    back_img = el.querySelector(".back-img");
    back_img.classList.add("hidden");
    front_img = el.querySelector(".front-img");
    front_img.classList.remove("hidden");

    viradas_temp.push(el);
    if (viradas_temp.length === 2){
        if (viradas_temp[0].querySelector('.front-img').classList[1] == viradas_temp[1].querySelector('.front-img').classList[1]){
            viradas_def.push(viradas_temp[0]);
            viradas_def.push(viradas_temp[1]);
            viradas_temp = [];
        } else {
            setTimeout(() => {
                front_img.classList.add("hidden");
                back_img.classList.remove("hidden");
                viradas_temp[0].querySelector('.front-img').classList.add('hidden');
                viradas_temp[0].querySelector('.back-img').classList.remove('hidden');
                viradas_temp[0].classList.remove('card-turn');
                viradas_temp = [];
                el.classList.remove('card-turn');
              }, 1000);
        }
    }

    jogadas++;

    if(viradas_def.length === n_cartas){
        setTimeout(() => {
            alert(`Você ganhou em ${jogadas} jogadas!`);
          }, 2000);
    }


}
