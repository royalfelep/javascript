function randomNumber([ min = 0, max = 1000 ]){
    // se minimo for maior que maximo, atribua maximo ao minimo e minimo ao maximo.
    if (min > max) [min, max] = [max, min] 
    const numberValue = Math.random() * (max-min) + min
    return numberValue.toFixed()
}

console.log(randomNumber([20, 50])) // min 20 e max 50
console.log(randomNumber([80, 20])) // min 80 e max 20, porém invertidos na função
console.log(randomNumber([50])) // min 50 e max pré-definido na função
console.log(randomNumber([, 100])) // max 100 e min pré-definido na função