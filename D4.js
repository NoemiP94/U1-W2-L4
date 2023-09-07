/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

const area = function (l1, l2) {
  let result = l1 * l2
  return result
}
console.log("L'area del rettangolo è " + area(20, 15))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function (x, y) {
  if (x === y) {
    return (x + y) * 3
  } else {
    return x + y
  }
}

console.log(crazySum(7, 2))

/* ESERCIZIO 3  
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (x, y = 19) {
  if (x > y) {
    const diff1 = x > y ? (x - y) * 3 : x - y
    return diff1
  } else {
    return y - x
  }
}

console.log(crazyDiff(18))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true
  } else {
    return false
  }
}

console.log(boundary(24))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function (s) {
  if (s.startsWith('EPICODE')) {
    return s
  } else {
    return 'EPICODE' + ' ' + s
  }
}

console.log(epify('Buongiorno'))

/* ESERCIZIO 6  
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (c) {
  if (c <= 0) {
    return false
  } else if (c % 3 === 0 || c % 7 === 0) {
    return true
  } else {
    return false
  }
}
console.log(check3and7(21))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString = function (r) {
  return r.split('').reverse().join('') //spilt() trasforma in array, reverse() lo inverte e join() lo ritrasform in stringa
}
console.log(reverseString('ciao'))

/* ESERCIZIO 8 
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst = function (s1) {
  let newS1 = s1.charAt(0).toUpperCase()
  for (let i = 0; i < s1.length - 1; i++) {
    if (s1.charAt(i) === ' ') {
      newS1 += s1.charAt(i + 1).toUpperCase()
    } else {
      newS1 += s1.charAt(i + 1)
    }
  }
  return newS1
}

console.log(upperFirst('ciao ciao ciao'))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = function (str) {
  let cut

  if (typeof str === 'string') {
    cut = str.substring(1, str.length - 1) // toglie il primo e con str.length - 1 toglie la lunghezza della stringa - 1 cioè l'ultimo carattere
  } else {
    console.log('Inserisci una stringa')
  }
  return cut
}
console.log(cutString('buongiorno'))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

const giveMeRandom = function (n) {
  const random = []
  for (let i = 0; i < n; i++) {
    random.push(Math.ceil(Math.random() * 10 + 1))
  }
  return random
}

console.log(giveMeRandom(4))
