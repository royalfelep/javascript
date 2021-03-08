function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()) // this pegando parâmetro de escopo mais abrangente (global)
console.log(produto.getPreco()) // chamando função a partir do objeto

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro)) // passando escopo para a função (this)
console.log(getPreco.apply(carro)) // passando escopo para a função (this)

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(global, [0.17, '$'])) // parâmetros dento de um array