// OLD WAY
function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}
console.log(soma())
console.log(soma(1))
console.log(soma(1, 2, 3.3))
console.log(soma(3, 4, " teste"))
console.log(soma('Um, ', 'Dois, ', 'Tres'))

// NEW WAY ECMASCRIPT
function soma2(a, b, c){
    // MODOS DE VERIFICAR VALIDADE DO PARÂMETRO
    a = a !== undefined ? a : 1 // apenas undefined
    b = 1 in arguments ? b : 1 // existe indice 1 nos argumentos???
    c = isNaN(c) ? 1 : c // melhor para soma
    return a + b + c
}