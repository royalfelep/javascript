const altura1 = 1.70;
const altura2 = Number('1.81'); // converteu string em numeral
const altura3 = 2.0;
console.log(altura1, altura2);

//função .isInteger verifica se o número é inteiro.
console.log(Number.isInteger(altura1));
console.log(Number.isInteger(altura2));
console.log(Number.isInteger(altura3));

const nota1 = 7.55;
const nota2 = 9.3;
const peso1 = 1;
const peso2 = 1.3;
const total = (nota1 * peso1) + (nota2 * peso2);
const media = total/(peso1+peso2);
console.log('A média do aluno é: ' +media.toFixed(2)); // Função .toFixed limita número de casas decimais.
console.log('A média do aluno é: ' +media.toString(2)); // Converte para string (nesse caso transformou em binário devido ao parâmetro 2).
console.log('A média do aluno é: ' +media.toPrecision(3)); //Arredonda