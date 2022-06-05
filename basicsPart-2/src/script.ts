//nome da variavel: tipagem
//a tipagem deve ser em minusculo
let nome:string = "Fabricio"
let idade:number = 90
let programador: boolean = true


let nomes: string[] = ["Joao", "Fabricio"]
let idade2: number[] = [0, 1]
let nomes2: any[] = ["Joao", 0, {}, null]

//tipificar paramentro em funcoes
function firstLetterUpperCase(name:string):string {
    let firstLetter = name.charAt(0).toUpperCase()
    return firstLetter+name.substring(1)
}


nome = firstLetterUpperCase("oi")

//funcoes anonimas
let names = ["Joao", "Renan",90]

names.forEach(function(nome){
    if(typeof nome === "string"){
        console.log(nome.toUpperCase);
    } else {
        console.log(nome);
    }
    
    
})

//tipagem de objs
function resumo(usuario: {nome:string,idade:number}):string {
    return `Ola ${usuario.nome}, vc tem ${usuario.idade} anos de vida`

}


let u = {nome:"Fabricio", idade:90}
console.log(u)

//multiplas tipagen
let age: string | number = 90







