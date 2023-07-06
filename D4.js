/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function (l1, l2) {
  if (typeof l1 !== "number" || typeof l2 !== "number") {
    alert("Inserisci due numeri maggiori o uguali a 0");
    return;
  } else if (l1 < 0 || l2 < 0) {
    alert("Inserisci due numeri maggiori o uguali a 0");
    return;
  } else if (l1 === NaN || l2 === NaN) {
    alert("Questo valore non è consentito");
    return;
  } else {
    let A = l1 * l2;
    console.log("1) ", A);
  }
};

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (int1, int2) {
  if (typeof int1 !== "number" || typeof int2 !== "number") {
    alert("Inserisci due numeri");
    return;
  } else if (int1 === NaN || int2 === NaN) {
    alert("Questo valore non è consentito");
    return;
  } else if (int1 === int2) {
    let crazy = (int1 + int2) * 3;
    console.log("2) This function is crazy!", crazy);
  } else {
    let sum = int1 + int2;
    console.log("2) Don't trust this function", sum);
  }
};

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (n1) {
  if (typeof n1 !== "number") {
    alert("Inserisci un numero");
    return;
  } else if (n1 === NaN) {
    alert("Questo valore non è consentito");
    return;
  } else if (n1 > 19) {
    let crazy = Math.abs(n1 - 19) * 3;
    console.log("3) This function is crazy!", crazy);
  } else {
    let diff = Math.abs(n1 - 19);
    console.log("3) Don't trust this function", diff);
  }
};

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n) {
  if (typeof n !== "number") {
    alert("Inserisci un numero");
    return;
  } else if (n === NaN) {
    alert("Questo valore non è consentito");
    return;
  } else if (n === 400 || (n > 20 && n <= 100)) {
    console.log("4) true");
    return true;
  } else {
    console.log("4) false");
    return false;
  }
};

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function (str) {
  if (typeof str !== "string") {
    alert("Inserisci una stringa");
    return;
  } else {
    let reference = "EPICODE";
    let lettersReference = reference.split("");
    let word = str.slice(0, 6);
    let letters = word.split("");
    for (let i = 0; i < letters.length; i++) {
      if (letters[i] === lettersReference[i]) {
        break;
        //} else if (letters[i] === lettersReference[i].toLowerCase) {
        // console.log("EPICODE va sempre scritto tutto maiuscolo.");
        // break;
      } else {
        let adjustedStr = reference.concat(" ", str);
        console.log("5) ", adjustedStr);
        return;
      }
    }
    console.log("5) ", str);
  }
};

epify("epicode è bello");

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function (n) {
  if (typeof n !== "number") {
    alert("Inserisci un numero maggiore o uguale a 0");
    return;
  } else if (n === NaN) {
    alert("Questo valore non è consentito");
    return;
  } else if (n % 3 === 0 && n % 7 === 0) {
    console.log("6) Il numero ", n, " è un multplo di 3 e di 7");
  } else if (n % 3 === 0) {
    console.log("6) Il numero ", n, " è un multplo di 3");
  } else if (n % 7 === 0) {
    console.log("6) Il numero ", n, " è un multplo di 7");
  }
};

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (str) {
  if (typeof str !== "string") {
    alert("Inserisci una stringa");
    return;
  } else {
    let inputLetter = str.split("");
    let letterReversed = inputLetter.reverse();
    let strReversed = letterReversed.join("");
    console.log("7) ", strReversed);
  }
};

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function (str) {
  if (typeof str !== "string") {
    alert("Inserisci una stringa");
    return;
  } else if (str.slice(-1) === " ") {
    alert("Togli gli spazi alla fine della tua stringa");
    return;
  } else {
    let inputLetter = str.split("");
    inputLetter.splice(0, 0, " ");
    for (let i = 0; i < inputLetter.length; i++) {
      if (inputLetter[i] === " ") {
        inputLetter.splice(i + 1, 1, inputLetter[i + 1].toUpperCase());
      }
    }
    let strUpperFirst = inputLetter.join("");
    console.log("8) ", strUpperFirst);
  }
};

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function (str) {
  if (typeof str !== "string") {
    alert("Inserisci una stringa");
    return;
  } else {
    let cuttedStr = str.slice(1, str.length - 1);
    console.log("9) ", cuttedStr);
  }
};

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function (n) {
  if (typeof n !== "number") {
    alert("Inserisci un numero maggiore o uguale a 0");
    return;
  } else if (n === NaN) {
    alert("Questo valore non è consentito");
    return;
  } else {
    let rndNumber = [];
    for (let i = 0; i < n; i++) {
      let x = Math.random() * 11;
      rndNumber.push(x);
    }
    console.log("10) ", rndNumber);
    return rndNumber;
  }
};
