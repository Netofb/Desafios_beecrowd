export function problem(lines){
    const numero = lines[0];
    const horas = lines[1];
    const salario = lines[2];

    const produto = Number(horas)*Number(salario);

    console.log(`NUMBER = ${numero}`)
    console.log(`SALARY = U$ ${produto.toFixed(2)}`);
}