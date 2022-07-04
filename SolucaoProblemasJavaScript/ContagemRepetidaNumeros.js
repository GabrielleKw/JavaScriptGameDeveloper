const contagemDeNumerosRepetidos = (arrNum) => {
    const arrResultado = arrNum.sort((a, b) => a - b)
                        .reduce((init, current) => {
                            (current in init) ? init[current]++ : init[current] = 1;
                            return init;
                        }, []);
    return arrResultado;
}; 

const imprimirResultado = (arrResultado) => {
    for (let i in arrResultado) console.log(i + ' aparece ' + arrResultado[i] + ' vez(es)');
}

(function quantValoresLidos(num){
    let arrayNumeros = [];
    while (num--) arrayNumeros.push(gets()); 
    imprimirResultado(contagemDeNumerosRepetidos(arrayNumeros));
})(gets());
