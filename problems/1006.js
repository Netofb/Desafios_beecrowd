
export function problem(lines){

    const [A, B, C] = lines;
    const pesoA = 2;
    const pesoB = 3;
    const pesoC = 5;
    const pesos = pesoA + pesoB + pesoC;

    const media = (Number(A) * pesoA + Number(B) * pesoB + Number(C) * pesoC) / pesos;
    console.log(`MEDIA = ${media.toFixed(1)}`);
}