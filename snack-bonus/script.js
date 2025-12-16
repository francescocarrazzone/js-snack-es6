/*
BONUS 
 
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/

// Creo array di zucchine
let zucchine = [
    { "lunghezza": 13, "peso": 10 },
    { "lunghezza": 15, "peso": 15 },
    { "lunghezza": 17, "peso": 15 },
    { "lunghezza": 10, "peso": 10 },
    { "lunghezza": 18, "peso": 15 },
    { "lunghezza": 15, "peso": 15 },
    { "lunghezza": 16, "peso": 15 },
    { "lunghezza": 12, "peso": 10 },
    { "lunghezza": 11, "peso": 10 },
    { "lunghezza": 16, "peso": 15 },
];

// Dichiaro variabili dei pesi dei due gruppi
let pesoCorte = 0;
let pesoLunghe = 0;
// Creo due array con zucchine che hanno lunghezza inferiore o superiore a 15 cm
let arrayCorte = [];
let arrayLunghe = [];

// Ciclo le zucchine per dividere le corte dalle lunghe
for (let i = 0; i < zucchine.length; i++) {
    if (zucchine[i].lunghezza < 15) { // Se sono meno lunghe di 15
        arrayCorte.push(zucchine[i]); // le aggiungo alle corte
        pesoCorte += zucchine[i].peso; // e aggiungo il loro peso al peso totale delle corte
    } else { // altrimenti le aggiungo alle lunghe e aggiungo il loro peso al peso totale delle lunghe
        arrayLunghe.push(zucchine[i]);
        pesoLunghe += zucchine[i].peso;
    }
}

// Stampo il peso totale dei due gruppi separatamente
console.log("Le zucchine corte sono: ", arrayCorte, "e il loro peso totale è: ", pesoCorte);
console.log("Le zucchine lunghe sono: ", arrayLunghe, "e il loro peso totale è: ", pesoLunghe);