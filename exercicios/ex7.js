// 07)​Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três parâmetros, “a”, “b” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:“Delta é negativo”

function bhaskara(a, b, c){
    let results = []
    if(a == 0) return console.log('Primeiro termo nulo. Insira novos valores.')
    let delta = Math.pow(b,2) - (4 * (a * c)) // Cálculo do Delta (b^2-4*a*c)
    if (delta<0) return console.log("Delta negativo. Insira novos valores.")
    else{
        results[0] = ((-b) + Math.sqrt(delta,2)) / (2 * a) // x1 = (-b + sqrt(delta)) / 2*a
        results[1] = ((-b) - Math.sqrt(delta,2)) / (2 * a) // x2 = (-b - sqrt(delta)) / 2*a
        console.log(results)
    }
}

bhaskara(1,3,-4)
bhaskara(4,2,4)
bhaskara(0, 3, -4)