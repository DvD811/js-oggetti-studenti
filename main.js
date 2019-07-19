// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.Stampare a schermo attraverso il for in tutte le proprietà.
var bio = {
    "nome": "Davide",
    "cognome": "Gallizioli",
    "eta": "27"
};
for (var bioprint in bio) {
    console.log(bio[bioprint])
};
// - Creare un array di oggetti di studenti.Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
var biostudenti = [
    { "nome": "Daine", "cognome": "Gizioli", "eta": "65" },
    { "nome": "jojo", "cognome": "Gigio", "eta": "67" },
    { "nome": "Donato", "cognome": "Galli", "eta": "21" },
    { "nome": "Bart", "cognome": "Rossi", "eta": "24" },
    { "nome": "Johnny", "cognome": "Verdi", "eta": "37" },
]
for (var i = 0; i < biostudenti.length; i++) {

    console.log(biostudenti[i].nome, biostudenti[i].cognome);
}
//     - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var insertname = prompt("Inserisci qui il tuo nome:");
var insertsurname = prompt("Inserisci qui il tuo cognome:");
var insertage = prompt("Inserisci qui la tua eta:");
biostudenti.push({ "nome": insertname, "cognome": insertsurname, "eta": insertage });
var printd = document.getElementById("result").innerHTML;
for (var stud in biostudenti) {
    // document.getElementById("result").innerHTML = biostudenti[stud];
    console.log(biostudenti[stud]);
}

// * NOTE=* quindi repo con  cartella e  tre commentoni nello stesso JS che definisce i tre macrostep