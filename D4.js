/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* let l1 = parseInt(prompt("Inserisci misura lato 1"))
let l2 = parseInt(prompt("inserisci misura lato 2"))

function area(l1, l2) {
    const areaDelRettangolo = l1 * l2;
    return areaDelRettangolo;
}

const risultato = area(l1, l2)
console.log("la misura del rettangolo associato è " + risultato) */



/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* let num1 = parseInt(prompt("inserisci primo numero"))
let num2 = parseInt(prompt("inserisci secondo numero"))


function crazySum(num1, num2) {
    if (num1 === num2) {
      return (num1 + num2) * 3;
    } else {
      return num1 + num2;
    }
  }

  const risultato = crazySum(num1, num2);
  console.log("il risultato è " + risultato) */



/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* let num5 = parseInt(prompt("Inserisci il numero"))

function crazyDiff(num5) {
    const differenza = Math.abs(num5 - 19);
  
    if (num5 > 19) {
      return differenza * 3;
    } else {
      return differenza;
    }
  }

  const risultato3 = crazyDiff(num5);
console.log("il risultato è " + risultato3); */



/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* let n = parseInt(prompt("Inserisci il numero"))

function boundary(n) {
    if ((n >= 20 && n <= 100) || n === 400) {
      return true;
    } else {
      return false;
    }
  }
  console.log(boundary(n)); */


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* let stringa = prompt("inserisci una frase breve")

function epify(stringa) {
      if (stringa.startsWith("EPICODE")) {
      return stringa; 
    } else {
      return "EPICODE " + stringa; 
    }
  }

  console.log(epify(stringa)) */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* let num8 = parseInt(prompt("Inserisci un numero"))

function check3and7(num8) {
    if (num8 <= 0) {
      return false; 
    }
  
    if (num8 % 3 === 0 || num8 % 7 === 0) {
      return true; 
    } else {
      return false; 
    }
  }
  
  console.log(check3and7(num8)); */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* let stringa2 = prompt("inserisci parola")

function reverseString(stringa2) {
    
    const stringaInvertita = stringa2.split("").reverse().join("");
    return stringaInvertita;
}

const stringaInvertita = reverseString(stringa2);
console.log(stringaInvertita); */


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* let stringa3 = prompt("Inserisci parole")

function upperFirst(stringa3) {
    const parole = stringa3.split(" ");
    const paroleConPrimaLetteraMaiuscola = parole.map(parola => {
      return parola.charAt(0).toUpperCase() + parola.slice(1);
    });
    const stringaModificata = paroleConPrimaLetteraMaiuscola.join(" ");
    return stringaModificata;
  }

  const stringaModificata = upperFirst(stringa3);
  console.log(stringaModificata) */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* let stringa4 = prompt("inserisci parola")

function cutString(stringa4) {
    if (stringa4.length < 2) {
      return ""; 
    }
  
    
    const nuovaStringa = stringa4.slice(1, -1);
    return nuovaStringa;
  }

  const stringaTagliata = cutString(stringa4);
  console.log(stringaTagliata)  */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

let n = parseInt(prompt("Inserisci numero"))

function giveMeRandom(n) {
    const numeriCasuali = [];
    for (let i = 0; i < n; i++) {
      const numeroCasuale = Math.floor(Math.random() * 11);
      numeriCasuali.push(numeroCasuale);
    }
    return numeriCasuali;
  }
  const numeriCasuali = giveMeRandom(n);
  console.log(numeriCasuali)