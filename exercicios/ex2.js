/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */

const triangleType = (side1, side2, side3) => {
    if(side1 == side2 && side1 == side3) return console.log('Triângulo equilátero')
    if(side1 == side2 || side2 == side3 || side1 == side3) return console.log('Triângulo isósceles')
    else return console.log('Triângulo escaleno')
}

triangleType(5, 5, 5)
triangleType(2, 2, 3)
triangleType(2, 3, 2)
triangleType(3, 2, 2)
triangleType(1, 2, 3)