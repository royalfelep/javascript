const pessoa = {
    saudar: 'bom dia!!!!!!',
    falar() {
        console.log(this.saudar)
    }
}

pessoa.falar()
const falar = pessoa.falar // this com referencia a novo escopo (this.saudar undefined)
falar()

const falar2 = pessoa.falar.bind(pessoa) // .bind define objeto que o this se refere
falar2()