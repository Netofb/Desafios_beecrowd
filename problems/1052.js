
export function problem(lines){
    const num = lines[0];
    let mes = Number(num);
    
    const meses = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    if (mes >= 1 && mes <= 12) {
        console.log(meses[mes - 1]);
    } else {
        console.log('Invalid month');
    }
    

}

 
 
 
 
 
 
 
 
