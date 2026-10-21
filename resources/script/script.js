// function digaOla(){
//     return "Olá mundo";
// }

// let mensagem = digaOla();

// console.log(mensagem);

// -a- e -b- são variaveis, porém váriaveis diferentes, elas são chamadas de parametros
// function multiply(a, b) {
//   return a * b;
// }

// let fato1 = Number(prompt("Digite o primeiro número"))
// let fato2 = Number(prompt("Digite o segundo número"))

// // -n1- e -n2- são chamados de argumentos
// let produto = multiply(fato1,fato2);
// console.log(produto);

let numero = Number(prompt("Digite um número:"))
function verificarPar(numero){
    if(numero  % 2 === 0){
        return "Par"
    }
    else{
        return "Impar"
    }
    let resultado = verificarPar(numero);
    console.log(resultado);

}
