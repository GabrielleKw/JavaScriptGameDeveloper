const saidaDeDados = (str) => {
    let saidaDados = verificarCaracterRepetido(str.split(''), str);
    for(let index = saidaDados.length - 1; index >= 0; index--) console.log(saidaDados[index]);
}

const verificarCaracterRepetido = (arrCaracter, strOriginal) => {
  let strSaida = [];
  let strNaoRepetida = -1;
  let i = 0;
  let procura = arrCaracter[i = arrCaracter.length - 1];
  
  while (true) {
      if ((i - procura.length) >= 0) {
        if ((strOriginal.substring(i - procura.length, i)) == procura) strSaida.push(strOriginal.substring(0, strNaoRepetida = i));
        if (i-- >= 0) procura = arrCaracter[i] + procura;
      } else {
        break;
      }
  }
  if (strNaoRepetida == -1) strSaida.push(strOriginal);
  
  return strSaida;
}

(function entradaDeDados(str){
  while(str !== "") {
      saidaDeDados(str);
      str = gets();
  }
})(gets());
