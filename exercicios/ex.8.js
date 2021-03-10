// 08)​Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar umvetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu piorjogo. (Número do pior jogo) Obs.: O primeiro jogo não conta como novo recorde do melhor.Exemplo: String: “10 20 20 8 25 3 0 30 1” Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuaçãoaconteceu no sétimo jogo.).

let example1 = '10 20 20 8 25 3 0 30 1'
let example2 = '30 40 20 25 42 38 56 0'

let scoreList = example1
let scoreReturn = [0,0]

function ownRecord(scoreList){

    let splittedList = scoreList.split(' ')
    let bestScore = parseInt(splittedList[0])
    let worstScore = parseInt(splittedList[0])

    for(let i = 1; i < splittedList.length ; i++){
        if(parseInt(parseInt(splittedList[i])) > bestScore){
            bestScore = parseInt(splittedList[i])
            scoreReturn[0] += 1 
        }
        if(parseInt(splittedList[i]) < parseInt(worstScore)){
            worstScore = parseInt(splittedList[i])
            scoreReturn[1] = splittedList.indexOf(splittedList[i])
        }
    }

    return console.log(scoreReturn)
}

ownRecord(scoreList)