
export function problem(lines){

    const [R] = lines[0];
    const pi = 3.14159;

    const total = (4/3) * pi * Number(R) * Number(R) * Number(R);

    console.log(`VOLUME = ${total.toFixed(3)}`);
}




