/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer,
stabilire chi vince 
stampare messsaggio vittoria
*/


const btn = document.getElementById('click');
const risultato = document.getElementById('risultato');

let numeroPlayer1;
let numeroPlayer2;


const play = function() {
       
    let numeroPlayer1 = Math.floor(Math.random() * 6) + 1;
    console.log(numeroPlayer1);

    document.querySelector('.result_player_one').innerHTML = numeroPlayer1;


        
    let numeroPlayer2 = Math.floor(Math.random() * 6) + 1;
    console.log(numeroPlayer2);

    document.querySelector('.result_player_two').innerHTML = numeroPlayer2;


    // CONFRONTO TRA I DUE NUMERI USCITI + VINCE CHI HA IL NUMERO PIU ALTO
    if (numeroPlayer1 > numeroPlayer2) {

        risultato.innerHTML = ('Player One');

    } else if (numeroPlayer1 == numeroPlayer2){

        risultato.innerHTML = ('nessuno, entrambi i Players vincono!')

    } else {
        risultato.innerHTML = ('Player Two');
    }

}

btn.addEventListener('click', play);