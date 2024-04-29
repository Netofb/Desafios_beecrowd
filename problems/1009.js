export function problem(lines){

    const vendedor = lines[0];
    const salarioFixo = lines[1];
    const vendas = lines[2];
    const porcentagem = Number(vendas) * 0.15;
    const total = Number(salarioFixo) + porcentagem;
    console.log(`TOTAL = R$ ${total.toFixed(2)}`);

}