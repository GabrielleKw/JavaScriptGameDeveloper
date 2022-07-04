var quantAlunos = gets();
while (quantAlunos > 0) {
    var listaAlunos = [];
    for (i = 1; i <= quantAlunos; i++) {
        let leitura = gets();
        let arrayAux = leitura.split(' ');
        listaAlunos.push({ nome: arrayAux[0], valor: parseInt(arrayAux[1]) });
    }
    let contValorFicha = 0;
    let valorFicha = listaAlunos[0].valor;
    let arrQuantAlunoPorGrupo = listaAlunos.length;
    while (arrQuantAlunoPorGrupo > 1) {
        if (valorFicha % 2 == 1) {
            contValorFicha = (contValorFicha + valorFicha) % arrQuantAlunoPorGrupo;
        } else {
            contValorFicha = (contValorFicha - (valorFicha % arrQuantAlunoPorGrupo)) % arrQuantAlunoPorGrupo;
            if (contValorFicha < 0) contValorFicha = arrQuantAlunoPorGrupo + contValorFicha;
        }
        valorFicha = listaAlunos[contValorFicha].valor;
        listaAlunos.splice(contValorFicha, 1);
        if (valorFicha % 2 == 1) contValorFicha--;
        arrQuantAlunoPorGrupo--;
    }
    console.log("Vencedor(a): " + listaAlunos[0].nome);
    quantAlunos = gets();
}
