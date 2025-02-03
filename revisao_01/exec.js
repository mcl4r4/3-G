//Exercírcio função 01
// let numero = 6

// const verificaNum = (num) => {
//     if(num > 0){
//         return 1;
//     }else{
//         return 0
//     }
// }
// console.log(verificaNum(numero))




//Exercío Função e Array 01


// const array = [21, 6, 84, 24, 86, 11, 39, 59, 96, 53];
// const dobraNumero = array.map((array) => {
//     console.log(array * 2)
//})


//Exercío Função e Array 02

const palavras = ["sol", "livro", "lua", "cadeira", "mesa", "mar"]

const maisDeTresLetras = palavras.filter((palavra) => {
    return palavra.length > 3;
})
console.log(maisDeTresLetras);


//Exercío Função e Array 03

// const numeros = [1, 2, 3, 4, 5]

// const somaNumeros = numeros.reduce((acc, curr) => {
//     return acc + curr;
// })
// console.log(somaNumeros)


//Exercío Função e Array 04

const dobro = (numero) => numero * 2
const triplo = (numero) => numero * 3

function dobroETriploDoNumero(fun1, fun2, num){
    console.log(`O dobro do ${num} é ${fun1(num)} e o triplo é ${fun2(num)}`)
}
dobroETriploDoNumero(dobro, triplo, 5)