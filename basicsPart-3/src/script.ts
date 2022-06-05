//type literal
//simple example
let nome: "fabricio" = "fabricio"
let idade:number = 16
//const sobrenome: string = "siqueira"

//type literal outros usos
function mostrarTexto (texto:string, alinhamento: "left" | "right" | "center") {
    //....
    return `<div style='text-align: ${alinhamento}'>${texto}</div>`
}


mostrarTexto("Fabricio", "left")
mostrarTexto("Fabricio", "right")
//mostrarTexto("Fabricio", "blablabla")

//type em funcoes
type MathFunction = (n1:number,n2:number) => number

const somar:MathFunction = (n1,n2) => {
    return n1+n2
}


//retorno void
function removerElemento(el:HTMLElement):void {
    el.remove()
}

/*removerElemento(document.getElementById("teste"));*/

//type com retorno void
//
type QualquerFuncao = () => void

const algo: QualquerFuncao = () => {
    //por ser usado um Type, ele ira ignora esse return, sem um determinacao obrigatoria
    return "Blablabla"
}







