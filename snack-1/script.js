/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

// CREO ARRAY BICICLETTE
let biciclette = [
    {
        "nome": "E-bike",
        "peso": 15
    },
    {
        "nome": "Gravel",
        "peso": 20
    },
    {
        "nome": "Mountain Bike",
        "peso": 17
    },
    {
        "nome": "City Bike",
        "peso": 12
    }
];


// Dichiaro variabile della bici più leggera ipotizzando sia la prima
let biciLeggera = biciclette[0];

// Ciclo l'array delle bici per trovare quella con peso minore
for (let i = 0; i < biciclette.length; i++) {
    if (biciclette[i].peso < biciLeggera.peso) { // se il peso di una singola bici è minore del peso della prima bici
        biciLeggera = biciclette[i]; // allora la bici più leggerà sarà quella singola bici
    }
}

document.getElementById("risultato").innerText = ("La bici più leggera è: " + biciLeggera.nome);