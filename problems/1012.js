


export function problem(lines){

    const A = lines[0];
    const B = lines[1];
    const C = lines[2];
    const pi = 3.14159;

    let TRIANGULO = (Number(A) * Number(C)) / 2;
    let CIRCULO = (Number(C) * Number(C)) * pi;
    let TRAPEZIO = (Number(A) + Number(B)) * Number(C) / 2;
    let QUADRADO = (Number(B) * Number(B));
    let RETANGULO = (Number(A) * Number(B));
    
    console.log(`TRIANGULO: ${TRIANGULO.toFixed(3)}`);
    console.log(`CIRCULO: ${CIRCULO.toFixed(3)}`);
    console.log(`TRAPEZIO: ${TRAPEZIO.toFixed(3)}`);
    console.log(`QUADRADO: ${QUADRADO.toFixed(3)}`);
    console.log(`RETANGULO: ${RETANGULO.toFixed(3)}`);
    

}






