

export function problem(lines){
    const [A, B, C, D] = lines;

    const diferencia = Number(A)*Number(B)-Number(C)*Number(D);
    console.log(`DIFERENCA = ${diferencia}`)
}