// 06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. Aprimeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.

function jurosSimples(capitalInicial, juros, tempo){
    if(capitalInicial<= 0 || juros <= 0 || tempo <= 0) return console.log('Valores menores ou iguais a zero não são permitidos.')
    return console.log((capitalInicial * (1 + juros) * tempo).toFixed(2))
}

function jurosCompostos(capitalInicial, juros, tempo){
    if(capitalInicial<= 0 || juros <= 0 || tempo <= 0) return console.log('Valores menores ou iguais a zero não são permitidos.')
    return console.log( (capitalInicial * Math.pow((1 + juros), tempo)).toFixed(2))
}

jurosSimples(1000, 0.05, 8)
jurosSimples(-1000, 0.05, 8)
jurosCompostos(1000, 0.05, 8)
jurosCompostos(-1000, 0.05, 8)