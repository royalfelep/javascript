const notas = [7.8, 3.3, 8.1, 9.5] // declara array
console.log(notas[0], notas[3]) // printa primeiro e ultimo termo do array

notas[4] = 10 // adiciona um termo no index = 4
console.log(notas[4])

console.log(notas.length) // printa o tamanho do array

notas.push('colocando', 'termos', 'no', 'array') // adicionando termos no array

console.log(notas) // boas práticas (não colocar elementos de tipos variados no mesmo array)

console.log(notas.pop()) // função .pop remove o ultimo termo do array e retorna ele (neste casso está printando ele)

delete notas[6] // deleta termo do array especificado no index
console.log (notas)

console.log(typeof(notas)) // arrays no JS são tipo objeto
