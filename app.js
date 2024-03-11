

function getComputerChoice()
{   
    // Esta función devuelve Piedra, Papel o Tijera de manera aleatoria
    
      return Math.round(Math.random() * 4);
    
    
}

var opcion= getComputerChoice()
console.log(opcion);