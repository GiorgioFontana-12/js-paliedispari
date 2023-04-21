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
