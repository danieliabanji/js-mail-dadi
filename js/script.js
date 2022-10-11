"use strict";

// chiedi all'utente la sua email
// controlla che sia nella lista di chi può accedere
// stampa un messaggio appropriato sull'esito di controllo




const listaEmail = ['daniel.iabanji@yahoo.com', 'mariorossi@gmail.com', 'paolobiaggi@gmail.com', 'anonymous@gmail.com'];
console.log(listaEmail);

let btn =document.querySelector('button');

let risp = document.getElementById('risposta');


let mailRegistered;

const check = function(){
    let email = document.getElementById('mail');
    let mailRegistered;

    for(let i = 0; i < listaEmail.length; i++){
        if (email.value === listaEmail[i]){
            mailRegistered = true
        }
    }

    risp.innerHTML = '';
    let answer = '';
    if(mailRegistered === true){
        answer = document.createElement('a');
    } else{
        answer = document.createElement('div')
    }
    if(mailRegistered){
        answer.className = "fs-3 text-decoration-none text-danger";
        answer.setAttribute('href', "./dadi.html")
        answer.textContent = "Benvenuto!!! Clicca qui!!!";
        
    }else{
        answer.className = "fs-3";
        answer.textContent = "Non sei registrato";
    };

    risp.append(answer);

    let gioco = document.createElement('a');

}

btn.addEventListener('click', check);














