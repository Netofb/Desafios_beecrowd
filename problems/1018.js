export function problem(lines){

    const valor = parseInt(lines[0]);
    console.log(valor);
    
    let resto = valor;
    
    const notas = [100, 50, 20, 10, 5, 2, 1];
    
    for (let nota of notas) {
        const quantidade = parseInt(resto / nota);
        console.log(`${quantidade} nota(s) de R$ ${nota},00`);
        resto = resto % nota;
    }
    
   
}