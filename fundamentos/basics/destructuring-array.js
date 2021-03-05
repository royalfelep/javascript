// declarando variaveis e atribuindo valores respectivamente
const [e, f, g, h, i, j] = [2, 3, 4, 5, 6, 7]
console.log([e, f, g, h, i, j])

// multiplos elementos a partir de um array com valores atribuidos
const [v1, , v3, , v5, v6 = 0] = [4, 3, 7, 5]
console.log(v1, v3, v5, v6)

const [a] = [a1 = 30, a2 = 40]
console.log(a)
console.log(a1, a2)

const [b] = [0, 1]
console.log(typeof(b))
console.log(b)

const x = [0,2,3]
console.log(typeof(x))