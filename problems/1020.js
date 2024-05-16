

export function problem(lines){

    const valor = parseInt(lines[0]);
    const valores = [365, 30, 1];

    let resto = valor;


    let quantidade1 = parseInt(resto / valores[0]);
    console.log(`${quantidade1} ano(s)`);
    resto = parseInt(resto % valores[0]);
    let quantidade2 = parseInt(resto / valores[1]);
    console.log(`${quantidade2} mes(es)`);
    resto = parseInt(resto % valores[1]);
    let quantidade3 = parseInt(resto / valores[2]);
    console.log(`${quantidade3} dia(s)`);

    
}








	
// 1 ano(s)
// 1 mes(es)
// 5 dia(s)