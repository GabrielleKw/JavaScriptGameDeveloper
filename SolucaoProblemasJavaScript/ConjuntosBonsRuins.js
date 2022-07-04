const imprimirResultado = (resultado) => console.log(resultado ? 'Conjunto Ruim' : 'Conjunto Bom');

const verificarConjuntoString = (arrString) => {
  return verificarString = arrString.some((strAtual, index, arrString) => {
      for (let str of arrString) if (new RegExp(`^(${strAtual}).+`).test(str)) return true;
      return (arrString.reduce((total, w) => total += w === strAtual ? 1 : 0, 0)) > 1;
  });
}

(function entradaDeDados(numCasoTeste){
  let arrTexto = [];
  do {
    if (numCasoTeste === 0 || numCasoTeste < 1 || numCasoTeste > Math.pow(10, 5)) break;
    for (let i = 0; i < numCasoTeste; i++) arrTexto = [...arrTexto, gets()];
    let resultado = verificarConjuntoString(arrTexto);
    imprimirResultado(resultado);
    while(arrTexto.length) arrTexto.pop();
  }while (numCasoTeste = gets());
})(gets());
