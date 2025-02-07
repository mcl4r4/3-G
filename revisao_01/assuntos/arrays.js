// const array = [6, 2, 5, 3, 9, 7, 1];
// console.log(array)
// array.push(10) // adiciona elemento no final
// console.log(array)
// array.unshift(10) // adiciona elemento no inicio
// console.log(array) 
// array.pop() // Remove elemento no final
// console.log(array) 
// array.shift() // Remove elemento no início
// console.log(array) 

//Método FOREACH

// const numeros = [3, 6, 5, 4, 1, 8, 9];
// // 1º  - elemento / 2º? - indice/index / 3º? - array

// numeros.forEach((elemento, index, array) => {
//     console.log(`${index} - ${elemento} - ${array}`)
// })


// //MAP
// numeros.map((numero) => {
//     console.log(numero * 2)
// })


// Revisão

// const numeros = [3, 6, 5, 4, 1, 8, 9];


// const listaNumeros = numeros.forEach((numero) => {
    //     console.log(numero * 2);
    // });
    // console.log(listaNumeros);
    
    // const multiplicaPorDois = numeros.map((numeros) => {
        //     return numero * 2;
        // })
        
        // console.log(multiplicaPorDois);
        
        
  const numeros = [3, 6, 5, 4, 1, 8, 9];


  const maiorQueCinco = numeros.filter((numero) => {
    return numero > 5;
  })
  console.log(maiorQueCinco);
