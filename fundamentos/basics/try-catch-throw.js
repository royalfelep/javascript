var crypto = require("crypto"); // módulo para gerar string hex
const secret = 'felipeobrabo';
const hash = crypto.createHmac('sha256', secret)
                   .update('I love cupcakes')
                   .digest('hex');
console.log(hash);

const empresaInfo = () => {
    console.log("Empresa do brabo (All right reserved.)") // selo
}

function tratarErro(erro){
    this.erroID = crypto.randomBytes(5).toString('hex'); // gerando string de 5 hex
    throw{
        erroID: erroID,
        name: erro.name,
        message: erro.message,
        date: new Date
    }
}

function screaming (pessoa){
    try{
        // Erro na chamada de parâmetro do objeto. (Trocar 'name' para 'nome')
        console.log(pessoa.name.toUpperCase()) 
    }
    catch (error){ // captura o erro
        tratarErro(error)
    }
    finally { // sempre executa, funcionando ou não
        empresaInfo()
     }
}

const pessoa = {
    nome: 'Felipe',
    idade: '21',
    adjetivo: 'O brabo'
}

screaming(pessoa)