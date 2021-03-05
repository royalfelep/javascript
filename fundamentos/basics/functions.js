// Função sem retorno
function soma(a,b){
    console.log (a+b)
}
soma(4,5) // Execita a função com os parãmetros passados
soma(2) // NaN
soma(4,5,6,7,8) // Pega só o necessário (2 primeiros) e ignora o resto
soma() // NaN

function multiplicacao(a = 0, b = 0){
    return a * b
}
multiplicacao (2,3) // Acontece nada. A função roda porém não printa
console.log(multiplicacao(2,3)) // printa o que a função retornou

// Armazenando função em variável
const imprimedivisao = function (a,b = 1) {
    console.log(a/b)
}
imprimedivisao(4,2)

// Armazenando função arrow em variável
const multiplicar = (a, b) => {
    console.log(a*b)
}
multiplicar(5, 5)

// retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(10, 6))