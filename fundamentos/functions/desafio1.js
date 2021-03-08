// Criar Factory Functions que criam pessoas

// Método 1 - passando nome na hora de instanciar
function Pessoa (nome){
    this.falar = () => {
        console.log(`Meu nome é ${nome}`)
    }
}

const joao = new Pessoa('Joao')
joao.falar()
const maria = new Pessoa('Maria')
maria.falar()

// Método 2 - definindo nome usando propriedades do objeto instanciado
function construirPessoa (){
    let nome = ''
    this.nomeDaPessoa = (nomeRecebido) => {
        return nome = nomeRecebido
    }
    this.falar = () => {
        console.log(`Meu nome é ${nome}`)
    }
}

const pessoa1 = new construirPessoa
pessoa1.nomeDaPessoa('Fabricio')
pessoa1.falar()