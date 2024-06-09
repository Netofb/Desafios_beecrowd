
// export function problem(lines){
//     const [num1] = lines[0];
//     const num = parseInt(num1);

// if(num % 4 === 0 || num % 100 !== 0 || num % 400 === 0){
//     console.log('This is leap year.');
    
// }else if (num % 15 === 0){
//     console.log('This is huluculu festival year.');

// }else if(num % 55 === 0){
//     console.log('This is bulukulu festival year.');

// }else {
//     console.log('This is an ordinary year.');
// }
// }
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let firstOutput = true;

rl.on('line', function(line) {
    const num = parseInt(line.trim(), 10);
    let isLeap = false;
    let isHuluculu = false;
    let isBulukulu = false;

    if ((num % 4 === 0 && num % 100 !== 0) && (num % 400 === 0)) {
        isLeap = true;
    }
    if (num % 15 === 0) {
        isHuluculu = true;
    }
    if (isLeap && num % 55 === 0) {
        isBulukulu = true;
    }

    if (!firstOutput) {
        console.log('');
    }
    firstOutput = false;

    if (isLeap) {
        console.log('This is leap year.');
    }
    if (isHuluculu) {
        console.log('This is huluculu festival year.');
    }
    if (isBulukulu) {
        console.log('This is bulukulu festival year.');
    }
    if (!isLeap && !isHuluculu && !isBulukulu) {
        console.log('This is an ordinary year.');
    }
});


/*
ano que é divisível por 4 e não é divisível por 100
divisíveis por 400 são também anos bissextos.
acontece em anos divisíveis por 15
acontece em anos divisíveis por 55 desde que também seja um ano bissexto





This is leap year.

This is leap year.
This is huluculu festival year.

This is huluculu festival year.

This is an ordinary year.
*/
