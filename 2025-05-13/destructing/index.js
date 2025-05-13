const objektas = {
    vardas: "Jonas",
    pavarde: "Jonaitis",
    gimimoMetai: 1980
}

console.log(objektas.vardas, objektas.pavarde, objektas.gimimoMetai);
console.log(objektas['vardas'], objektas['pavarde'], objektas['gimimoMetai']);

// const vardas = objektas.vardas;

const { vardas, pavarde, gimimoMetai } = objektas;
 
console.log(vardas, pavarde, gimimoMetai);

const masyvas = [25, 30];

// const pirma = masyvas[0];
// const antra = masyvas[1];

const [pirma, antra] = masyvas;

console.log(pirma, antra);