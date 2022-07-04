while ((senha = gets()) !== "") console.log("Senha " + (validadorDeSenha(senha) ? "valida." : "invalida."));

function validadorDeSenha(pw) {
    regex = /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[a-z]){1})(?=(?:.*?[0-9]){1})(?=(?:.*?[]){0})[0-9a-zA-Z]*$/;
    return (pw.length < 6 || pw.length > 32) ? false : (!regex.exec(pw) ? false : true);
}
