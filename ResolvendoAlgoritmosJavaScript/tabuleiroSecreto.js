
/*VERIFICA O TIPO DE OPERAÇÃO*/
const operacoes = (tipOper, tab, linCol, valorR) => {
    let saidaDados = '';
    if (tipOper == '1') for (let i = 0; i < tab.length; i++) tab[linCol - 1][i] = valorR;
    if (tipOper == '2') for (let i = 0; i < tab.length; i++) tab[i][linCol - 1] = valorR;
    if (tipOper == '3') saidaDados += lerRepeticoes(tab[linCol - 1]) + '\n';
    if (tipOper == '4') saidaDados += lerRepeticoes(tab.map(linha => linha[linCol - 1])) + '\n';
    return saidaDados;
}
    
/*VERIFICA QUANTIDADE DE VEZES QUE UM NUMERO SE REPETE NA COLUNA OU LINHA DO TABULEIRO*/
const lerRepeticoes = (tabuleiro) => {
    let array = [], numQueRepete = tabuleiro[0], contarRepeticoes = 0;
    for (num of tabuleiro) {
        (array[num] == null) ? array[num] = 0 : array[num]++;
        if (array[num] > contarRepeticoes) contarRepeticoes = array[numQueRepete = num];
        if (array[num] === contarRepeticoes) numQueRepete = Math.max(numQueRepete, num)
    }
    return numQueRepete;
}

/*CRIA TABULEIRO*/
const criarTabuleiro = (tamTabuleiro) => Array.from(Array(parseInt(tamTabuleiro)), () => new Array(parseInt(tamTabuleiro)).fill(0));
    
/*ENTRADA DE DADOS*/
(function main(entradaDados){
    while (entradaDados) {
        let [tamTabuleiro, quantOperacoes] = entradaDados.split(" ");
        let tabuleiro = criarTabuleiro(tamTabuleiro);
        while (quantOperacoes--) {
            let [tipoOperacao, LinhaColuna, valorR] = gets().split(" ")
            console.log(operacoes(tipoOperacao, tabuleiro, parseInt(LinhaColuna), parseInt(valorR)));
        }
    entradaDados = gets();
    }
})(gets());
