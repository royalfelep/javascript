console.log(5 / 0) // Retorna infinito
console.log ('10'/ 2) // Converte string para número e efetua a divisão
console.log(0.1 + 0.7) // Não retorna 0.8 devido a imprecisões do javascript (precisão maior implica menor velocidade)
console.log('teste' * 2) // Nan - Not a Number
console.log(10.23.toFixed(2)) // Função direto no número, sem precisar da variável
console.log('3' + 2) // Concatena pois string tem a prioridade e o operador '+' concatena
console.log('3' - 2) // Subtrai. Mesmo a string tendo prioridade, não é possível subtrair strings. Portanto, ocorre a conversão e o retorno da subtração.
