const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // para cada elemento em fabricantes, chama função imprimir
fabricantes.forEach(fabricante => console.log(fabricante))