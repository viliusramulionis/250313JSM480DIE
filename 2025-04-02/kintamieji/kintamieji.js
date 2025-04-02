// Norint atlikti išvestį
console.log("Sveiki Pasauli");

// Kintamieji negali prasidėti skaičiumi ir negali turėti tarpų
let pavadinimas = 10;

console.log(pavadinimas);

console.log("10");

// Duomens tipo tikrinimas
console.log(typeof pavadinimas);

let skaicius = 15;

console.log(skaicius);

skaicius = 25;

console.log(skaicius);

// Aritmetiniai veiksmai

let pirmasSkaicius = 18;
let antrasSkaicius = 42;
let rezultatas;

console.log(rezultatas); //Gauname undefined (reikšmė nebuvo priskirta)

rezultatas = pirmasSkaicius + antrasSkaicius;

console.log(rezultatas);

// Atimties operatorius
// rezultatas = rezultatas - 12;
rezultatas -= 12; // Ankstesnės eilutės sutrumpinimas

console.log(rezultatas);

// Sudėties operatorius
// rezultatas = rezultatas + 12;
rezultatas += 18;

console.log(rezultatas);

// Dalybos operatorius
// rezultatas = rezultatas / 2;
rezultatas /= 2;

console.log(rezultatas);

// Daugybos operatorius
// rezultatas = rezultatas * 2;
rezultatas *= 3;

console.log(rezultatas);

rezultatas = 100 / 3;

// Grąžinamas skaičius po kablelio
console.log(rezultatas);

rezultatas = 18.65;
console.log(rezultatas);

// Norint sumažinti iki dviejų skaičių po kablelio
rezultatas = 100 / 3;
console.log(rezultatas);

console.log(rezultatas.toFixed(2));

// STRINGAI:

// Stringo atspausdinimas
console.log(`UAB "Antakalnio ligoninė"`);

pavadinimas = '"Antakalnio ligoninė"';
let imonesTipas = "UAB";

console.log(imonesTipas + " " + pavadinimas);

// Naudojantis template literals sintakse
console.log(`${imonesTipas} ${pavadinimas}`);

let kiekis = 15;
let kaina = 19.99;
let pvm = 21;

console.log(`Užsakytas prekių kiekis: ${kiekis}, vieneto kaina: ${kaina}, PVM tarifas: ${pvm}`);
console.log("Užsakytas prekių kiekis: " + kiekis + ", vieneto kaina: " + kaina + ", PVM tarifas: " + pvm);

rezultatas = `Užsakytas prekių kiekis: ${kiekis}, vieneto kaina: ${kaina}, PVM tarifas: ${pvm}`;

// Norint tiesiog atsispausdinti reikšmes, jas galime rašyti per kablelį console.log() funkcijoje
console.log("Užsakytas prekių kiekis:", kiekis, "vieneto kaina:", kaina, "PVM tarifas:", pvm);

pavadinimas = "Kauno autobusai";

// Simbolio ištraukimas iš stringo
console.log(pavadinimas[0]) // K
console.log(pavadinimas[1]) // a
console.log(pavadinimas[2]) // u
console.log(pavadinimas[3]) // n
console.log(pavadinimas[4]) // o
// ...

// Norint susigrąžinti stringo ilgį naudojame savybę length

console.log("Simbolių kiekis:", pavadinimas.length); 
console.log("Pozicijų kiekis:", pavadinimas.length - 1);

// Paskutinės raidės paėmimas
console.log(pavadinimas[pavadinimas.length - 1]);

console.log(8 * (4 + 2));