
export function problem(lines){

    const [A, B, C, D] = lines[0].split().map(Number);

    if (B > C && D > A && (C + D) > (A + B) && C > 0 && D > 0 && A % 2 === 0){
        console.log('Valores aceitos');
    }else{
        console.log('Valores nao aceitos');
        
    }

} 
//if (B > C && D > A && (C + D) > (A + B) && C > 0 && D > 0 && A % 2 === 0)


/*Leia 4 valores inteiros A, B, C e D. 

A seguir, se B for maior do que C ok 
e se D for maior do que A ok
soma de C com D for maior que a soma de A e B
e se C e D, ambos, forem positivos e se a variável A for par escrever a mensagem "Valores aceitos", senão escrever "Valores nao aceitos".



*/
