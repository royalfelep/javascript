// Bháskara

let variavel = {
    a: prompt('Insira o valor de A:'),
    b: prompt('Insira o valor de B:'),
    c: prompt('Insira o valor de C:')
}

function bhaskara(variavel){
let delta = Math.pow(variavel.b,2) - (4 * (variavel.a * variavel.c)) // Cálculo do Delta (b^2-4*a*c)
let x1 = ((-variavel.b) + Math.sqrt(delta,2)) / (2 * variavel.a) // x1 = (-b + sqrt(delta)) / 2*a
let x2 = ((-variavel.b) - Math.sqrt(delta,2)) / (2 * variavel.a) // x2 = (-b - sqrt(delta)) / 2*a
return console.log(`x1 = ${x1} e x2 = ${x2}`)
}

bhaskara(variavel) // parâmetros