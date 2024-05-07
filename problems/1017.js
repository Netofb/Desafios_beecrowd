export function problem(lines){
    const [T, V] = lines.map(Number);
    const C = 12;
    const total = (T * V) / C;
    console.log(`${total.toFixed(3)}`)
}