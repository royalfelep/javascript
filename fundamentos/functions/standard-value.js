//STANDARD VALUE

// INEFFICIENT WAY
function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

// SOME OTHER WAYS
function soma2(a, b, c){
    // MODOS DE VERIFICAR VALIDADE DO PARÂMETRO
    a = a !== undefined ? a : 1 // apenas undefined
    b = 1 in arguments ? b : 1 // existe indice 1 nos argumentos???
    c = isNaN(c) ? 1 : c // melhor para soma
    return a + b + c
}

// NEW ES2015 WAY (BEST)
function somar(a = 1, b = 1, c = 1){
    return a + b + c
}