let totalItems = gets();
for (var i = 0; i < totalItems; i++) {
    let itensLinha = gets().split(" ");
    let semItensRepetidos = itensLinha.filter((elem, index, self) => {
        return index === self.indexOf(elem);
    });
    console.log(semItensRepetidos.sort().join(" "));
}
