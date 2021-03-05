// parâmetro padrão 0 e 1000 caso o valor não esteja definido no objeto recebido
function randomNumber({ min = 0, max = 1000 }){
    const numberValue = Math.random() * (max-min) + min
    return numberValue.toFixed()
}

// declaração do objeto a ser usado na função
const numInput = { min: 30, max: 80 }
console.log(randomNumber(numInput))

// objeto vazio usará os valores padrões definidos na função
console.log(randomNumber({}))