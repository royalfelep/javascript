//Estudar Regex 

const meuNome = 'Felipe'
const meuSobrenome = 'Correa'

console.log(meuNome.charAt(4)) // Caracter no indice 4
console.log(meuNome.indexOf('F')) // Indice do caracter F
console.log(meuNome.charCodeAt(0)) // Código na tabela ASCII/Unicode
console.log(meuNome.substring(1,5)) // Indice 1 ao indice 4
console.log(meuNome+' '.concat(meuSobrenome)) // Função .concat concatena ou usando o caracter '+'
console.log(meuNome.replace('F','C')) // Função .replace substitui elemento pelo elemento especificado
console.log('1,2,3,4,5'.split(',')) // Função .split dividi no elemento especificado (cria array)

//templateString
const teste1 = `Teste com
quebras de
linha e meu nome é ${meuNome}.` // A crase permite escrever livremente um texto, considerando inclusive quebras de linha. Para acessar variáveis, faz-se o uso da seguinte estrutura: ${variavel}
console.log(teste1)

console.log(`10 + 20 = ${10+20}`) // Não executa a primeira expressão devido as crases, apenas a segunda pois está sendo acessada com a estrutura ${}

const teste2 = 'qwerty'
console.log(teste2.toUpperCase()) // Transforme em letra maiúscula

const Upper = texto => texto.toUpperCase() // Forma alternativa de criar função
console.log(`Meu nome é ${Upper('felipe')}`) // Função que converte parâmetro em letra maiúscula usando o objeto .toUpperCase