function comprar(salario1, salario2) {
    const comprarSorvete = salario1 || salario2 // soma
    const comprarTV = salario1 && salario2 // multiplicação
    const comprarGeladeira = salario1 != salario2 // diferença
    const dieta = !comprarSorvete // not
    return { comprarSorvete, comprarTV, comprarGeladeira, dieta }
}

console.log(comprar(true, true))
console.log(comprar(true, false))
console.log(comprar(false, true))
console.log(comprar(false, false))