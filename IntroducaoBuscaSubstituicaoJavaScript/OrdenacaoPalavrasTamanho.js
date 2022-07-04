let listaPalavras = [];
let entradaLinhas = gets();
const ordenarLista = (a, b) => (a.length > b.length) ? 1 : (a.length < b.length || a > b) ? -1 : 0;; 

while (entradaLinhas--) listaPalavras.push(gets().split(' ').sort(ordenarLista).reverse());

listaPalavras.forEach(item => console.log(item.join(" ")));
