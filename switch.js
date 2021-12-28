let rock = 'rock';
let paper = 'paper';
let sicissor = 'sicissor';


resultado = function(userOption, cpuOption){
    switch(true){
        case(userOption === cpuOption):
            console.log('Tie');
            break;
        case(userOption === rock && cpuOption === sicissor):
            console.log('Win');
            break;
        case(userOption === paper && cpuOption === rock):
            console.log('Win');
            break;
        case(userOption === sicissor && cpuOption === paper):
            console.log('Win');
            break;
        default:   
            console.log('Lose');
            
    }
    
}

resultado(rock, sicissor);

