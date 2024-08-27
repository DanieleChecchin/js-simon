/* TRACCIA
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

/*
SCALETTA
- Creo 5 input diversi nel DOM d-none V
- Genero 5 numeri casuali e li inserisco nel DOM
- Creo un timer d 30 secondi
- Faccio scomparire i numeri
- Faccio comparire 5 input diversi vuoti dove inserirà i numeri l'utente
- Comparo i numeri inseriti dall'utente con quelli usciti in precedenza
- Creo un messaggio che indici quali numeri sono stati indovinati e quanti sono
*/


// Recupero gli elementi dal DOM
const countdownElement = document.getElementById('countdown');
const numbersElement = document.getElementById('numbers');

// Creo un array vuoto
const numbers = [];

// Genero i 5 numeri casuali e li inserisco nell'array
for (let i = 0; i < 5; i++) {
    let randomNumbers = Math.floor(Math.random() * 100) + 1;
    numbers.push(randomNumbers);
}
// Stampo i numeri in Pagina
numbersElement.innerText = numbers;

// GENERO UN TIMER DA 30 SECONDI

// Imposto i secondi da cui devo partire per il countdown
let time = 30;

// Creo una funzione per il countdown
const countdown = setInterval(() => {
    --time; // Decremento di 1 ogni secondo
    countdownElement.innerText = time; // Aggiorno il valore di time in pagina
    //Creo un if per controllare la fine dei 30 secondi
    if (time <= 0) {
        clearInterval(countdown);
        countdownElement.innerText = 'Tempo scaduto !';
    }
}, 1000);


