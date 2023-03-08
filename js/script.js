//chiedi al passeggero quanti km deve percorrere
const distance = parseFloat(prompt("Quanti chilometri devi percorrere?"))
console.log(distance);

//chiedi l'età del passeggero
const age = parseFloat(prompt("Quanti hanni hai?"))
console.log(age);

//calcola prezzo biglietto intero 0.21 x km
const priceKm = 0.21;
let fullPrice = (distance * priceKm);
console.log(fullPrice);

//se passeggero ha età strettamente minore di 18 il prezzo ha 20% di sconto
//se passeggero ha età strettamente superiore a 65 anni il prezzo ha 40% di sconto
//stampa prezzo finale con massimo due decimali
let result = ""

if (age < 18){
    const discount = (fullPrice * 20 / 100);
    result = (fullPrice - discount).toFixed(2);
    console.log(result);    
    
} else if (age > 65){100
    const discount = (fullPrice * 40 / 100);
    result = (fullPrice - discount).toFixed(2);
    console.log(result);
        
} else{
    result = fullPrice
    console.log(result);
}

document.getElementById("price").innerHTML = "Il prezzo del biglietto è " + result + "€";   
