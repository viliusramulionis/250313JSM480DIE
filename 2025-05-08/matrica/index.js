import chalk from 'chalk';

console.log(chalk.red('Hello world!'));

// let dydis = 5;

// for(let y = 0; y < dydis; y++) {
//     let eilute = "";

//     for(let x = 0; x < dydis; x++) {
//         if(y === x || y === dydis - x - 1) {
//             eilute += chalk.red('*');
//         } else {
//             eilute += "*"
//         }
//     }

//     console.log(eilute);
// }

// Matrica
// process - globalus kintamasis

let dydis = process.stdout.columns
let eilute = "";

for(let x = 0; x < dydis; x++) {
    eilute += chalk.green('*');
}

console.log(eilute);