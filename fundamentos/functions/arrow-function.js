// exemplo 1
let dobro = function (a) { // declaração padrão
    return 2 * a
}

dobro = (a) =>{ // arrow function
    return 2 * a
}

dobro = a => 2 * a // retorno implícito

console.log(dobro(5))

// exemplo 2
let saudacao = function(){
    console.log('Olá, viajante.')
}

saudacao = () => {
    return 'Olá, viajante.'
}

saudacao = () => 'Olá, viajante.'
saudacao = _ => 'Olá, viajante.' // possui parâmetro, porém é ignorado
console.log(saudacao()) // constante com parenteses para chamar a função