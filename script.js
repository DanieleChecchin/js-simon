/* TRACCIA
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

/*
SCALETTA
- Creo 5 input diversi nel DOM con d-none -V-
- Genero 5 numeri casuali e li inserisco nel DOM -V-
- Creo un timer d 30 secondi -V-
- Faccio scomparire i numeri -V-
- Faccio comparire 5 input diversi vuoti dove inserirà i numeri l'utente -V-
- Faccio comparire il bottone per confermare -V-
- Prendo i valori degli input inseriti dall'utente -V-
- Comparo i numeri inseriti dall'utente con quelli usciti in precedenza -V-
- Creo un messaggio che indici quali numeri sono stati indovinati e quanti sono
*/


// Recupero gli elementi dal DOM
const countdownElement = document.getElementById('countdown');
const numbersElement = document.getElementById('numbers');
const inputsElement = document.getElementById('inputs');
const playButton = document.getElementById('start');
const numberField1 = document.getElementById('field1');
const numberField2 = document.getElementById('field2');
const numberField3 = document.getElementById('field3');
const numberField4 = document.getElementById('field4');
const numberField5 = document.getElementById('field5');
const message = document.getElementById('message');

// Funzione per prendere i numeri inseriti dall'utente

let userNumbers = [];
let correctNumbers = [];

const userChoices = () => {
    playButton.addEventListener('click', function () {
        // Prendo i numeri inseriti dall'utente
        const number1 = numberField1.value;
        const number2 = numberField2.value;
        const number3 = numberField3.value;
        const number4 = numberField4.value;
        const number5 = numberField5.value;
        // Li inserisco in un array
        userNumbers.push(number1, number2, number3, number4, number5);
        console.log('numeri utente ' + userNumbers);
    })
}

// Creo un array vuoto
let numbers = [];

// Genero i 5 numeri casuali e li inserisco nell'array
for (let i = 0; i < 5; i++) {
    let randomNumbers = Math.floor(Math.random() * 100) + 1;
    numbers.push(randomNumbers);
    console.log('numeri pc ' + numbers);
}
// Stampo i numeri in Pagina
numbersElement.innerText = numbers;

// Imposto i secondi da cui devo partire per il countdown
let time = 5;

// Creo una funzione per il countdown di 30 secondi
const countdown = setInterval(() => {
    --time; // Decremento di 1 ogni secondo
    countdownElement.innerText = time; // Aggiorno il valore di time in pagina
    //Creo un if per controllare la fine dei 30 secondi
    if (time <= 0) {
        clearInterval(countdown); // Fermo il countdown
        countdownElement.innerText = 'Tempo scaduto !'; // Stampo in pagina il messaggio di fine tempo
        numbersElement.classList.add('none'); // Faccio scomparire i 5 numeri da ricordare
        inputsElement.classList.remove('none');// Faccio comparire i 5 input in cui inserire i numeri 
        playButton.classList.remove('none'); // Faccio comparire il bottone per giocare
        userChoices();

        // Con un ciclo confronto i 2 array e inserisco quelli uguali in correctNumbers
        for (let i = 0; i < 5; i++) {
            if (numbers.includes(+ userNumbers[i])) {
                correctNumbers.push(userNumbers[i]);
                console.log(correctNumbers);

                // Creo il messaggio finale
                message.innerText = `Hai indovinato ${correctNumbers.length} numeri: ${correctNumbers} `
            }
        }
    }
}, 1000);


