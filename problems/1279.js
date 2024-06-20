var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

// Função para verificar se um ano é bissexto
function isLeapYear(year) {
    return (year % 4n === 0n && year % 100n !== 0n) || year % 400n === 0n;
}

// Função para verificar se um ano é divisível por um número
function isDivisibleBy(year, divisor) {
    return year % divisor === 0n;
}

// Processar cada ano
let first = true;
lines.forEach((line) => {
    const year = BigInt(line.trim()); // Converter para BigInt para manipular anos com muitos dígitos
    let isLeap = isLeapYear(year);
    let isHuluculu = isDivisibleBy(year, 15n);
    let isBulukulu = isDivisibleBy(year, 55n) && isLeap;
    let result = [];

    if (isLeap) {
        result.push("This is leap year.");
    }
    if (isHuluculu) {
        result.push("This is huluculu festival year.");
    }
    if (isBulukulu) {
        result.push("This is bulukulu festival year.");
    }
    if (!isLeap && !isHuluculu && !isBulukulu) {
        result.push("This is an ordinary year.");
    }

    if (!first) {
        console.log('');
    }
    console.log(result.join('\n'));
    first = false;
});
