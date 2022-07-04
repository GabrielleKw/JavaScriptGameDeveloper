const verificarMenorString = (str, strA, strB) => {
    for (let i = 0; i < (index = Math.min(strA.length, strB.length)); i++) str += strA[i] + strB[i];    
    return [str, strA, strB];
}

const saidaDados = (str, strA, strB) => {
    console.log(str += strA.length > strB.length ? strA.substring(index) : strB.substring(index));
}

(function entradaDados(num) {
    while (num--) {
        str = '';       
        let [strA, strB] = gets().split(' '); 
        [str, strA, strB] = verificarMenorString(str, strA, strB);
        saidaDados(str, strA, strB);
    }
})(gets());
