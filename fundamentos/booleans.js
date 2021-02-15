console.log('verdadeiros')
teste = 1
console.log(!!3) // Números inteiros com excessão do 0 são verdadeiros
console.log(!!-3)
console.log(!!' ') // String
console.log(!![]) // Arrays
console.log(!!{}) // Objetos
console.log(!!Infinity) // Infinito
console.log(!!(teste = true)) // Atribuições verdadeiras

console.log('falsos')
console.log(!!'') // String vazia
console.log(!!null) // Null
console.log(!!NaN) // NaN
console.log(!!undefined) // Undefined
console.log(!!(teste = false)) // Atribuição falsa

console.log('extras')
console.log(!!(0 || '' || null || 3)) // Ao menos um termo true, portanto retorna true
console.log((0 || '' || null || 3)) // Retorna o primeiro termo verdadeiro encontrado

let nome = ''
console.log(nome || 'Desconhecido') // Printa o nome. Caso nome seja 'falso', printa o segundo parâmetro.