const numeros = ['teste1', 'teste2', 'teste3']
//                  0          1         2
const pessoas = {
    nome: 'José',
    idade: 32,
    enderecos: [
        {
            rua: 'Rua A',
            cidade: 'Maceió',
            tipo: 'Residencial',
        },
        {
            rua: 'Rua B',
            cidade: 'Maceió',
            tipo: 'Comencial',
        },
    ],
};

console.log(pessoas.nome)
console.log(pessoas.enderecos[0].rua)
console.log(pessoas.enderecos.forEach((endereco) => {
    console.log(endereco.rua)
}))

