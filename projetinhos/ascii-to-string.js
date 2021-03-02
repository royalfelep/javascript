// Teste Nós Codamos - NUBANK

// EncodedString recebe como parâmetro frase formada por números da tabela ascii invertidos
encodedString = prompt('Qual código invertido ascii deseja converter?\n(Zeros a esquerda não são permitidos)'); // recebe parâmetro

decode(encodedString); // inicializa a função

function decode(encodedString) {

    encodedString = encodedString.split("").reverse().join(""); //desinverte a string recebida

    if(encodedString[0] === '0') return alert('Retire o 0 do início da string.'); // verifica se string começa com o número 0.

    let str = '';   // Inicialização da string que nos dará o resultado
    
    for(let a = 0; a < encodedString.length ; a){   //loop com final igual ao tamanho da string;
        
        // Concatenação dos elementos para validação em blocos de 2 e 3;
       let three = encodedString[a] + encodedString[a+1] + encodedString[a+2];
       let two = encodedString[a] + encodedString[a+1];
       
       // Validação 1: Se o bloco iniciar com o número '1', quer dizer que terá um valor de 3 dígitos na tabela ASCII.
       if(encodedString[a] === "1"){ 
            str += String.fromCharCode(three);
            a+=3; //Incremento de 3 digitos para mover ao próximo bloco.
       }
       
       // Validação 2: Se o bloco iniciar com valores diferentes de '1', quer dizer que terá um valor de 2 dígitos na tabela ASCII.
       else if(encodedString[a] !== "1"){
           str += String.fromCharCode(two);
           a+=2; //Incremento de 2 digitos para mover ao próximo bloco.
       }  
    }
 return console.log(str);
}
