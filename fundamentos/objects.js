const raça_cachorro = {} // Objeto declarado com chaves (objeto vazio)
// Adicionando valores ao objeto
raça_cachorro.nome = 'Yorkshire'
raça_cachorro.comportamento = "Divertido"
raça_cachorro.tamanho = "Pequeno"
raça_cachorro['Refeições por dia'] = 2 // evitar atributos com espaços

console.log(raça_cachorro)

const tenis = {
    //declarando valores dentro do objeto
    nome: 'Nike Air Jordan',
    preço: 1099.99,
    categoria: {
        // Nest em objetos
        sexo: 'Masculino',
        tipo: 'Retrô'
        }
}

console.log(tenis)