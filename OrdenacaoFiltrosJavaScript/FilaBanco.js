let numeroDeCasos = gets();
while (numeroDeCasos--) {
    const totalClientes = gets();
    const senhas = gets();
    const filaOriginal = senhas.split(" ");
    const filaOrdenada = senhas.split(" ").sort((a, b) => a - b).reverse();
    console.log((filaOriginal.filter((elemAtual, indexAtual) => elemAtual === filaOrdenada[indexAtual])).length);
}
