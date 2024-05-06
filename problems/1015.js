
export function problem(lines){

    const [X1, Y1] = lines[0].split(' ').map(Number);
    const [X2, Y2] = lines[1].split(' ').map(Number);

    const p1 = (Number(X2) - Number(X1)) * (Number(X2) - Number(X1));
    const p2 = (Number(Y2) - Number(Y1)) * (Number(Y2) - Number(Y1));
    const total = Math.sqrt((p1) + (p2));
    console.log(`${total.toFixed(4)}`)
}