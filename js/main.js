let pari_o_dispari = 0
let numeroUtente = 0
let x = prompt("inserisci parola palindroma")
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseX = (reverseString(x))

if (reverseX == x) {
    alert ("è palindroma")
    
} else {
    alert ("non è palindroma")
    
}

alert ("Giochiamo a Pari O Dispari")
while (pari_o_dispari != "pari" && pari_o_dispari != "dispari") {
    pari_o_dispari = prompt("pari o dispari?")
}
// while (numeroUtente >= "1" && numeroUtente <= "5") {
//     numeroUtente = prompt("Butta la mano! Inserisci un numero da 1 a 5")
// } NON FUNZIONA...

while (numeroUtente != "1" && numeroUtente != "2" && numeroUtente != "3" && numeroUtente != "4" && numeroUtente != "5" ) {
    numeroUtente = prompt("Butta la mano! Inserisci un numero da 1 a 5")
}

computerNumber = Math.floor(Math.random() * (6 - 1) + 1);

numeroDaVerificare = Number(numeroUtente) + Number(computerNumber)
numeroDaVerificare = numeroDaVerificare % 2
if (pari_o_dispari == "pari") {
    if (numeroDaVerificare = 0) {
        alert ("hai vinto")
        console.log ("hai vinto")
    }else {
        alert ("hai perso")
        console.log ("hai perso")
        
    }

}else if (pari_o_dispari == "dispari") {
    if (numeroDaVerificare = 1) {
        alert ("hai vinto")
        console.log ("hai vinto")

    }else {
        alert ("hai perso")
        console.log ("hai perso")

    }
}
