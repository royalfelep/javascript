function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = () => {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro // passando função 'Carro' em forma de objeto para variavel 'uno' ('uno' passa a ser objeto pois recebe um objeto)
uno.acelerar() // chamando função anônima do parâmetro 'acelerar' de dentro do objeto 'uno'
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20) // instanciando 'Ferrari a partir de 'Carro', passando parâmetros. No primeiro exemplo, foi usado os parâmetros padrões definidos na função 'Carro'
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(uno)
console.log(ferrari)
console.log(typeof uno)
console.log(typeof ferrari)