const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

criarPessoa('João').falar() // método 1
const joao = criarPessoa('João') // metódo 2
joao.falar()