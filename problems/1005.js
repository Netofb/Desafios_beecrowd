

export function problem(lines){

    const [A, B] = lines;
    
    const pesoA = 3.5;
    const pesoB = 7.5;
    const pesos = pesoA + pesoB;

    const Media = (Number(A)*pesoA + Number(B)*pesoB)/pesos;
    console.log(`MEDIA = ${Media.toFixed(5)}`);

}
