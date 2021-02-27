let teste
console.log (teste) // undefined (não inicializada)

teste = null // sem valor (nulo)
// console.log(teste.toString()) // Erro (acessar algo nulo)

const produto = {}
console.log(produto.preco) // undefined (objeto definido porém valor não)

produto.preco = 5.00 // valor atribuido
console.log(produto.preco)

produto.preco = undefined
console.log(!!produto.preco) // false (undefined)

produto.preco = null
console.log(!!produto.preco) // false (null)
console.log(produto)
