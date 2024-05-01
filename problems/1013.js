
export function problem(lines) {
    const [A, B, C] = lines[0].split().map(Number);

    let maior = (A + B + Math.abs(A - B)) / 2;
    maior = (maior + C + Math.abs(maior - C)) / 2;

    console.log(`${maior} eh o maior`);
}











