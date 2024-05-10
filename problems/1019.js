export function problem(lines){
    const segundo = parseInt(lines[0]);


    let hora = Math.floor(segundo / 3600);
    let minuto = Math.floor((segundo % 3600)/60);
    let segundosTotais = segundo % 60; 

    console.log(`${hora.toFixed()}:${minuto.toFixed()}:${segundosTotais.toFixed()}`);
};

