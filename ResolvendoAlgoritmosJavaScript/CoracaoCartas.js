const calc = (n) => n % 3 === 0 ? true : false;

const verificarInstancia = (a, b, c) => {
    let arrAux = '';
    arrAux = arrAux.concat(a).concat(b).concat(c);

    let x = arrAdicionarCartas.get(arrAux);
    if (x > 0) return x === 1 ? true : false;

    if (a === b && b === c && c === quantLinhas) return true;

    if (calc(cartas[0][a]) && verificarInstancia(a + 1, b, c)) return true;
    if (calc(cartas[1][b]) && verificarInstancia(a, b + 1, c)) return true;
    if (calc(cartas[2][c]) && verificarInstancia(a, b, c + 1)) return true;
    if (calc(cartas[0][a] + cartas[1][b]) && verificarInstancia(a + 1, b + 1, c)) return true;
    if (calc(cartas[0][a] + cartas[2][c]) && verificarInstancia(a + 1, b, c + 1)) return true;
    if (calc(cartas[1][b] + cartas[2][c]) && verificarInstancia(a, b + 1, c + 1)) return true;
    if (calc(cartas[0][a] + cartas[1][b] + cartas[2][c]) && verificarInstancia(a + 1, b + 1, c + 1)) return true;

    arrAdicionarCartas.set(arrAux, 2);
    return false;
}

while ((quantLinhas = parseInt(gets())) !== 0) {
    arrAdicionarCartas = new Map();
    cartas = Array.from(new Array(3)).map(x => new Array(quantLinhas));
    for (let i = 0; i < quantLinhas; i++)[cartas[0][i], cartas[1][i], cartas[2][i]] = gets().split(" ");
    console.log(verificarInstancia(0, 0, 0) ? 1 : 0);
}
