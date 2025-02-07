// let produto = "camisa" // escopo global
// const preco = 30.5

// function calcularPrecoComDesconto () {
//     const desconto = 0.1 // escopo de função ou local
//     const precoFinal = preco - preco * desconto
//     console.log(`Preço com desconto: ${precoFinal}`)
// }
// calcularPrecoComDesconto()
// console.log(produto) // escopo global - OK
// console.log(desconto) // escopo de função ou local - ERRO 


const prato = 'pizza'
const quantidade = 3

function calcularTotal() {
    const preco = 50.0
    const total = preco * quantidade
    console.log('Global ',prato)
    console.log('local: ',preco)
    if (quantidade > 2) {
        const desconto = 0.1
        console.log('Global: ',prato)
        console.log('local: ',preco)
        console.log('bloco: ',desconto)
        return  total * (1 - desconto)
    }
    console.log('bloco: ',desconto)
}

console.log(`Preço total com desconto: R${calcularTotal()}`)
console.log('Global: ',prato)
console.log('local: ',preco)
console.log('bloco: ',desconto)