
export function problem(lines){

    const valor = parseFloat(lines[0]);

    console.log('NOTAS:')
    let resto = valor;

    const notas = [100, 50, 20, 10, 5, 2];
    const moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01];

    for (let nota of notas) {
        const quantidade = parseInt(resto / nota);
        console.log(`${quantidade} nota(s) de R$ ${nota.toFixed(2)}`);
        resto = resto % nota;
    }

    

    console.log('MOEDAS:')

    for (let moeda of moedas) {
        const quantidade = parseInt(resto / moeda);
        console.log(`${quantidade} moeda(s) de R$ ${moeda.toFixed(2)}`);
        resto = resto % moeda;
    }

}
/*
NOTAS:
5 nota(s) de R$ 100.00
1 nota(s) de R$ 50.00
1 nota(s) de R$ 20.00
0 nota(s) de R$ 10.00
1 nota(s) de R$ 5.00
0 nota(s) de R$ 2.00
MOEDAS:
1 moeda(s) de R$ 1.00
1 moeda(s) de R$ 0.50
0 moeda(s) de R$ 0.25
2 moeda(s) de R$ 0.10
0 moeda(s) de R$ 0.05
3 moeda(s) de R$ 0.01
*/
