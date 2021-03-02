let numero = prompt('Escolha um número:')

function fizzBuzz(numero) {
    // Loop de 1 ao número escolhido
    for(let i = 1; i<=numero; i++){
        // Verificações
        if(i % 3 == 0 && i % 5 == 0) console.log('FizzBuzz')
        else if(i % 3 == 0) console.log('Fizz')
        else if(i % 5 == 0) console.log('Buzz')
        else console.log(i);
    }
}

fizzBuzz(numero);
