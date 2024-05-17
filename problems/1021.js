
export function problem(lines){

    const valor = parseFloat(lines[0]);

    console.log('NOTAS:');
    let resto = Math.floor(valor * 100); // Converter o valor para centavos
    
    const notas = [10000, 5000, 2000, 1000, 500, 200]; // Valores das notas em centavos
    const moedas = [100, 50, 25, 10, 5, 1]; // Valores das moedas em centavos
    
    for (let nota of notas) {
        const quantidade = Math.floor(resto / nota);
        console.log(`${quantidade} nota(s) de R$ ${(nota / 100).toFixed(2)}`);
        resto = resto % nota;
    }
    
    console.log('MOEDAS:');
    
    for (let moeda of moedas) {
        const quantidade = Math.floor(resto / moeda);
        console.log(`${quantidade} moeda(s) de R$ ${(moeda / 100).toFixed(2)}`);
        resto = resto % moeda;
    }
    

}

