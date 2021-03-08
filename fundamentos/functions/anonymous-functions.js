const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b)) // chamando funcao passada ao parametro 'operacao'
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) { // parametro 'operacao' assume a função anonima
    return x - y
})

imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function () {
        console.log('Hi, gorgeous!')
    }
    /* também pode ser escrita como:
        falar(){
        console.log('Hi, gorgeous')
        }
    */
}

pessoa.falar()