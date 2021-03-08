const valor = 'Global'

function minhaFuncao() {
    console.log(valor) // procura variavel local. se não encontrar, procura no contexto externo.
}

function exec() {
    const valor = 'Local'
    minhaFuncao() // embra a função seja chamada em outro local, ela sempre carrega consigo seus próprios parâmetros. Como a função 'minhaFuncao' usa a variavel 'valor' declarada fora dela, é essa que será executada.
}

exec()