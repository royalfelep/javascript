console.log(soma(3, 4)) // possível chamar função padrão antes de declarar pois o Javascript primeiro carrega as funções depois executa o resto. APENAS PARA DECLARAÇÕES DE FORMA PADRÃO

// function declaration
function soma(x, y) { // declarando de forma padrão
return x + y
}

// function expression
const sub = function (x, y) { // função para uma variável
    return x - y
}
console.log(sub(3, 4))

// named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))