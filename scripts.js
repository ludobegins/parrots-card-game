let n_cartas = 1;

while (((n_cartas % 2 == 0) && (typeof(n_cartas) == 'number') && (n_cartas >= 4) && (n_cartas <= 14)) == false){
    n_cartas = prompt('Com quantas cartas quer jogar? (números pares de 4 a 14)');
    n_cartas = Number(n_cartas);
}

let front_cartas = ['bobross', 'explody', 'fiesta', 'metal', 'revertit', 'triplets', 'unicorn'];
front_cartas.sort(comparador);

// lista ta aleatoria. selecionar n_itens da lista = n_cartas/2
// criar lista de cartas ex. explody explody fiesta fiesta metal metal
// embaralhar
// fazer html/css genérico pra front carta, ideia: position absolute/relative, sepa z index
// pra ficar por cima do back. ou então fazer um display none no back algo assim
// card_html vai receber também a div com o gif, que vai estar hidden num primeiro momento

card_html =
`<div class='card'>
<img src='img/back_face.png'>
</div>`;

cards_container = document.querySelector(".cards-container")
let i = 0;

while (i < n_cartas){
    cards_container.innerHTML += card_html;
    i++;
}

function comparador() { 
    return Math.random() - 0.5; 
}
