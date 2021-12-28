let rock = 'rock';
let paper = 'paper';
let sicissor = 'sicissor';


resultado = function(userOption, cpuOption){
    switch(true){
        case(userOption === cpuOption):
            console.log('Empate');
            break;
        case(userOption === rock && cpuOption === sicissor):
            console.log('Ganaste');
            break;
        case(userOption === paper && cpuOption === rock):
            console.log('Ganaste');
            break;
        case(userOption === sicissor && cpuOption === paper):
            console.log('Ganaste');
            break;
        default:   
            console.log('Perdiste');
            
    }
    
}

resultado(rock, sicissor);

