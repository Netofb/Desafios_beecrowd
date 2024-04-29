

export function problem(lines){
    
    const [cod1, numP1, valP1] = lines[0].split(' ');
    const [cod2, numP2, valP2] = lines[1].split(' ');
    



    const total = (Number(numP1) * Number(valP1)) + (Number(numP2) * Number(valP2));

    console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);
}
