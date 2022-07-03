let totalItems = parseInt(gets());
let pares = [];
let impares = [];

for (let i = 0; i <   totalItems       ; i = i + 1) {
  let number = parseInt(gets());
  if (number % 2 === 0){
    pares.push(number);
  }
  else {
    impares.push(number);
  }
}

pares.sort((a, b) =>   a - b );
impares.sort((a, b) =>  b - a );

for(e of [...pares,...impares]){
  print(e)
}
