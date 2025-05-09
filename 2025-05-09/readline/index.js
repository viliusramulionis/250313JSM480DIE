import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import chalk from 'chalk';

// Terminalo vartotojo sąsajos sukūrimas
const rl = readline.createInterface({ input, output });

// Klausimo sukūrimas ir rezultato priskyrimas prie kintamojo:
const dydis = await rl.question('Įveskite kvadrato dydį: ');

for(let y = 0; y < dydis; y++) {
    let eilute = "";

    for(let x = 0; x < dydis; x++) {
        if(y === x || y === dydis - x - 1) {
            eilute += chalk.red('* ');
        } else {
            eilute += "* "
        }
    }

    console.log(eilute);
}

const eilutes = await rl.question("Įveskite eilučių kiekį: ");

for(let i = 0; i < eilutes; i++) {
    console.log("*".repeat(process.stdout.columns));
}

// Programos uždarymas
rl.close();