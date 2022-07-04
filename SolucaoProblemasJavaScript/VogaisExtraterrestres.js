const validadorCaracter = (caracter) => (!(/^(?=(?:.*?[]){0})[]*$/).exec(caracter) ? false : true);
const imprimirResultado = (resultado) => console.log(resultado);
const compararStrings = (a, b) => {
    let textoUm = a.split('');
    let textoDois = b.split('');
    let contador = 0;
    textoUm.forEach((element1) => {
        textoDois.forEach((element2) => {
            if (element2 != '' && element1 == element2) contador++;
        })
    });
    return contador;
}

(function entradaDeDados(textoUm){
  let textoDois, resultadoTextoUm, resultadoTextoDois;
  while (textoUm !== '') {
    resultadoTextoUm = validadorCaracter(textoUm);
    textoDois = gets();
    if (textoDois !== "") resultadoTextoDois = validadorCaracter(textoDois);
    if (resultadoTextoUm == false && resultadoTextoDois == false) imprimirResultado(compararStrings(textoUm, textoDois));
    textoUm = gets();
  }
})(gets());
