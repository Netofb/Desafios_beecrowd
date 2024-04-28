
export function problem(lines){

    const raio = lines[0];
    const n = 3.14159;
    const area = Number(raio * raio) * n;

    console.log(`A=${area.toFixed(4)}`)
}