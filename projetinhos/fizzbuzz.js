let numero = prompt('Escolha um número:')
function fizzBuzz(numero) {
    let resultado = ''
    // Loop de 1 ao número escolhido
    for(let i = 1; i<=numero; i++){
        // Verificações
        if(i % 3 == 0 && i % 5 == 0) resultado += 'FizzBuzz\n'
        else if(i % 3 == 0) resultado += 'Fizz\n'
        else if(i % 5 == 0) resultado += 'Buzz\n'
        else resultado += (i+'\n')
    }
  return alert(resultado)
}

fizzBuzz(numero);
