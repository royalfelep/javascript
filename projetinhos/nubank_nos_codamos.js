// Teste Nós Codamos - NUBANK

function decode(encodedString) {
    //reverte a string recebida
    encodedString = encodedString.split("").reverse().join("");
    
    //loop com final igual ao tamanho da string;
    for(let a = 0; a < encodedString.length ; a){
        
        // Concatenação dos elementos para validação em blocos de 2 e 3;
       var three = encodedString[a] + encodedString[a+1] + encodedString[a+2];
       var two = encodedString[a] + encodedString[a+1];
       // Inicialização da string que nos dará o resultado
       var str ="";
       
       // Validação 1: Se o bloco iniciar com o número '1', quer dizer que terá um valor de 3 dígitos na tabela ASCII.
       if(encodedString[a] === "1"){ 
            str += String.fromCharCode(three);
            //Incremento de 3 digitos para mover ao próximo bloco.
            a+=3;
       }
       
       // Validação 2: Se o bloco iniciar com valores diferentes de '1', quer dizer que terá um valor de 2 dígitos na tabela ASCII.
       else if(encodedString[a] !== "1"){
           str += String.fromCharCode(two);
           a+=2;
       }  
    }
 return (str);
}

console.log