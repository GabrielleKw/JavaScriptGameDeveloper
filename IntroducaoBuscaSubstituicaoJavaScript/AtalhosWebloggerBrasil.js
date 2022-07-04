const trocarCaracter = (texto) => {
    while((texto.indexOf("_")) != -1)  texto = texto.replace(/_(.*)/, "<i>$1").replace(/_(.*)/, "</i>$1");
    while ((texto.indexOf("*")) != -1) texto = texto.replace(/\*(.*)/, "<b>$1").replace(/\*(.*)/, "</b>$1");
    return texto;
}

(function casosDeTeste(num){    
    while(num !== "") {
        console.log(trocarCaracter(num));
        num = gets();
        if (num == "") num = gets();
    }
})(gets());
