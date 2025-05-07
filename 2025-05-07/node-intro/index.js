//commonjs importavimo būdas, naudojant jau integruotą require() funkciją
// const os = require('node:os'); 

// Kuomet kreipiamės į modulį užtenka nurodyti tik jo pavadinimą (jei modulis sisteminis, prirašome priekyje "node:"")
import os from 'node:os'; 

// Kuomet modulis yra lokalus (mūsų sukurtas) turime nurodyti kelią iki jo priskiriant direktoriją ir pilną failo pavadinimą
import Televizorius from './televizorius.js'

// Kuomet importuojame ne pagal nutylėjimą (default) eksportuojamus modulius
import { sum, divide } from './pirmas/aritmetika.js';

// Kuomet importuojama reikšmė eksportuota pagal nutylėjimą, galime jai nurodyti norimą pavadinimą
import skaicius from './antras/pagalbines-funkcijos.js';

import { digit, replaceAllSpaces, capitalizeWords } from './antras/pagalbines-funkcijos.js';

// Node aplinkoje document bei window kintamieji neegzistuoja

console.log('Labas Pasauli');

// console.log(os.cpus());
console.log(os.totalmem());

console.log(new Televizorius('LG'));

console.log(sum(15, 12));

console.log(divide(15, 3));

console.log(skaicius);

console.log(digit);

console.log(replaceAllSpaces('Labas Pasauli', '*'));

console.log(capitalizeWords('labas pasauli'));