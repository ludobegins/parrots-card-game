let n_cartas = 1;
let viradas_temp = [];
let viradas_def = [];
let back_img;
let front_img;

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
    console.log(viradas_temp);

    back_img = el.querySelector(".back-img");
    back_img.classList.add("hidden");
    front_img = el.querySelector(".front-img");
    front_img.classList.remove("hidden");

    viradas_temp.push(el);
    if (viradas_temp.length === 2){
        console.log('viradas 0', viradas_temp[0].querySelector('.front-img').classList[1]);
        console.log('viradas 1',viradas_temp[1].querySelector('.front-img').classList[1]);
        console.log('iguais',viradas_temp[0].querySelector('.front-img').classList[1] == viradas_temp[1].querySelector('.front-img').classList[1]);
        if (viradas_temp[0].querySelector('.front-img').classList[1] == viradas_temp[1].querySelector('.front-img').classList[1]){
            console.log('IGUAIS MANE');
            viradas_def.push(viradas_temp[0]);
            viradas_def.push(viradas_temp[1]);
            viradas_temp = [];
        } else {
            console.log(front_img.classList);
            console.log(back_img.classList);
            setTimeout(() => {
                front_img.classList.add("hidden");
                back_img.classList.remove("hidden");
                console.log('viradas_tempo', viradas_temp);
                viradas_temp[0].querySelector('.front-img').classList.add('hidden');
                viradas_temp[0].querySelector('.back-img').classList.remove('hidden');
                viradas_temp = [];
                console.log("Espera 2 segundo");
              }, 2000);
        }
    }

    console.log(viradas_temp);


}
