angular.module("listaTelefonica").filter("name", function () {

    return function (input) {
        var lista = input.split(" ");
        var cont = 1;
        var lisFormatada = lista.map(function (nome) {
            return nome.charAt(0).toUpperCase() + nome.substring(1);
        });
        return lisFormatada.join(" ");
    }
});