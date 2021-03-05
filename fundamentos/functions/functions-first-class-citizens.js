function fun1(){} // função vazia

const var1 = function(){console.log('var1')} // função na variavel
// var1()

const arrayDeFuncao = [function(a,b){return a+b}, fun1, var1]
console.log(arrayDeFuncao[0](3,4))
arrayDeFuncao[2]()

const objeto = {}
objeto.frase = () => {console.log('frase do objeto')}
const { frase } = objeto
frase()

function somar(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
somar(5,7)(3)
const resultado = somar(20,30)
resultado(5)