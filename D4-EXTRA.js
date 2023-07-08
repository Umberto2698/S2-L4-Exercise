// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const checkArray = function (arr) {
  if (typeof arr !== "object") {
    alert("Inserisci un'array");
    return;
  } else {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= 5) {
        console.log("1E) il numero ", arr[i], " non è maggiore di 5");
        break;
      } else {
        sum += arr[i];
        console.log("1E) il numero ", arr[i], " è maggiore di 5");
        break;
      }
    }
    console.log("1E) Questa è la somma dei numeri maggiori di 5 ", sum);
  }
};

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const shoppingCartTotal = function (arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    let price = arr[i].price;
    let quantity = arr[i].quantity;
    total += price * quantity;
  }
  console.log("2E) Il totale è", total);
};

const shoppingCart = [
  {
    price: 7,
    name: "meat",
    id: 2836744,
    quantity: 2,
  },
  {
    price: 15.99,
    name: "umbrella",
    id: 7949212,
    quantity: 1,
  },
  {
    price: 0.26,
    name: "potato",
    id: 467298289,
    quantity: 5,
  },
  {
    price: 54.99,
    name: "profume",
    id: 3682821,
    quantity: 1,
  },
];

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const addToShoppingCart = function (ogg) {
  if (typeof ogg !== "object") {
    alert("Inserisci un oggetto");
    return;
  } else if (typeof ogg === "object") {
    if (ogg.length !== undefined) {
      alert("Inserisci un oggetto, non un array");
      return;
    } else {
      let arr = shoppingCart;
      arr.push(ogg);
      console.log(arr);
      let totalObject = 0;
      for (let i = 0; i < arr.length; i++) {
        let quantity = arr[i].quantity;
        totalObject += quantity;
      }
      console.log("3E) Stai acquistando", totalObject, "prodotti");
    }
  }
};

const ogg = {
  price: 24.99,
  name: "jeans",
  id: 3819981,
  quantity: 1,
};

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const maxShoppingCart = function (arr) {
  if (typeof arr !== "object") {
    alert("Inserisci un'array");
    return;
  } else {
    let maxPrice = [];
    for (let i = 0; i < shoppingCart.length; i++) {
      for (let j = 0; j < shoppingCart.length; j++) {
        if (shoppingCart[i].price >= shoppingCart[j].price) {
          maxPrice.splice(0, 1, shoppingCart[i].price);
          break;
        } else {
          j = shoppingCart.length;
        }
      }
    }
    console.log("4E) ", maxPrice);
  }
};

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const latestShoppingCart = function (arr) {
  if (typeof arr !== "object") {
    alert("Inserisci un'array");
    return;
  } else {
    console.log("5E) ", shoppingCart.slice(-1));
  }
};

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const loopUntil = function (x) {
  if (typeof x !== "number") {
    alert("Inserisci due numeri");
    return;
  } else if (x === NaN) {
    alert("Questo valore non è consentito");
    return;
  } else if (x <= 0 || x >= 9) {
    alert("Inserisci un numero intero compreso tra 0 e 9 esclusi");
    return;
  } else {
    let index = 0;
    let n = 0;
    let iterazioni = 0;
    while (index < 3) {
      while (x >= n) {
        n = Math.floor(Math.random() * 10);
        console.log(n);
        iterazioni++;
      }
      console.log("--------");
      n = 0;
      index++;
    }
    console.log("6E) Numero di iterazioni =", iterazioni);
  }
};

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const average = function (arr) {
  let sum = 0;
  let numberOfAddend = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && arr[i] !== NaN) {
      sum += arr[i];
      numberOfAddend++;
    }
  }
  let average = sum / numberOfAddend;
  console.log("7E) ", average);
};
let example = [21, " ", "ciao", 3, 32.6, true];

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const longest = function (arr) {
  if (typeof arr !== "object") {
    alert("Inserisci un'array");
    return;
  } else {
    let onlyString = [];
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "string") {
        onlyString.push(arr[i]);
      }
    }
    console.log(onlyString);
    let stringLength = [];
    for (let i = 0; i < onlyString.length; i++) {
      stringLength.push(onlyString[i].length);
    }
    console.log(stringLength);
    let biggest = Math.max(...stringLength);
    console.log(biggest);
    for (let i = 0; i < stringLength.length; i++) {
      if (stringLength[i] == biggest) {
        console.log("8E) Questa è la stringa più lunga: ", onlyString[i]);
      }
    }
  }
};

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
