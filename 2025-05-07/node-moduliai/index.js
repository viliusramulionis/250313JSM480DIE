import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));

console.log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

console.log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

// while(true) {
//     console.log('Labas Pasauli');
// }

// setInterval(() => {
//     console.log('Labas Pasauli');
// }, 1000);

// Grąžina atgal kiek simbolių galima sutalpinti vienoje terminalo eilutėje
console.log(process.stdout.columns);

// Grąžina kiek eilučių talpinama terminale
console.log(process.stdout.rows);

console.log('Failas buvo modifikuotas');




