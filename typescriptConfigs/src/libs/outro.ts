console.log(123)
//esse arquivo deve ser excluido da geracao de arquivo js ao compilar o typescript
//essa configuracao efeito no arquivo tsconfig.json
//por padrao o TS ja exclui da compilacao a pasta node_modules
/**
 * no caso do
 * 
 * "include":[
 *  //somente sera compilado esse arquivo em  especifo e todo o resto sera exclido
 * 
 * 
 * ]
 */

//entendendo Tragets
//versao do JS para os  arquivos js que serao criados ao ser compilados


//Libs
/**
 * sempre por padrao ele o TS adicionara essas libs ainda que a propriedade lib esteja comentada
 * 
 * 
 * "lib":[
 *      "DOM",
 *      "ES5",
 *      "DOM.Iterable",
 *      "ScriptHost"
 * ]
 */


//rootDir e outDir
/**
 * "outDir": "./public/assets/js"
 * para onde vao os arquivos js compilados
 * 
 * rootDir ira apontar para onde estar todos os arquivos ts que
 * precisam ser compilados
 */


//removeComments, noEmit e noEmitOnError
/**
 * removeComments > na gera os comentarios nos arquivos js
 * noEmit nao gera arquivos js
 * noEmitOnError  nao compilar os arquivos ts com errors
 */

//Configurações para Qualidade do código
/**
 * acoselha-se sempre usar:
 * "noUnusedLocals": true informara sobre variaveis locais ocisosas
 * 
 * "noUnusedParameters": true informara sobre paramentos ocisosas
 * 
 * OPCIONAL:
 * "noImplicitReturns": true > filtra o tipos de retornos
 */