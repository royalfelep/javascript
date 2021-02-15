// Bháskara

function bhaskara(a,b,c){
let delta = Math.pow(b,2) - 4 * (a * c) // Cálculo do Delta
let x1 = (-b + Math.sqrt(delta,2)) / 2 * a // x1
let x2 = (-b - Math.sqrt(delta,2)) / 2 * a // x2
return console.log('x1 = ' +x1 + '\n' + 'x2 = ' +x2)
}

bhaskara(1,-1,-6) // parâmetros