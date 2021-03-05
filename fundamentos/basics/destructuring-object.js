const pessoa = {
    nome: 'Felipe',
    idade: 21,
    endereço: {
        estado: 'DF',
        cidade: 'Brasilia'
    }
}
// const nome = pessoa.nome | metodo tradicional
const { nome, idade } = pessoa // extraindo variáveis direto do objeto

console.log(nome, idade)

// extraindo as variaveis alterando o nome
const { nome: meuNome, idade: minhaIdade } = pessoa

console.log(meuNome, minhaIdade)

// extraindo variaveis do objeto que não existem e atribuindo valor (atributos undefined por padrão)
const { sobrenome, bemHumorado = true } = pessoa
console.log(sobrenome, bemHumorado)

// extraindo variaveis de um objeto dentro de outro objeto
const { endereço: { estado, cidade }} = pessoa
console.log(estado, cidade)