"use strict";
//type literal
//simple example
let nome1 = "fabricio";
//const sobrenome: string = "siqueira"
//type literal outros usos
function mostrarTexto(texto, alinhamento) {
    //....
    return `<div style='text-align: ${alinhamento}'>${texto}</div>`;
}
mostrarTexto("Fabricio", "left");
mostrarTexto("Fabricio", "right");
const somar = (n1, n2) => {
    return n1 + n2;
};
//retorno void
function removerElemento(el) {
    el.remove();
}
const algo = () => {
    //por ser usado um Type, ele ira ignora esse return, sem um determinacao obrigatoria
    return "Blablabla";
};
