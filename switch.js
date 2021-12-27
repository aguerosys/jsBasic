let piedra = 'Piedra';
let papel = 'Papel';
let tijera = 'Tijera';


resultado = function(userOption, cpuOption){
    switch(true){
        case(userOption === cpuOption):
            console.log('Empate');
            break;
        case(userOption === piedra && cpuOption === tijera):
            console.log('Ganaste');
            break;
        case(userOption === papel && cpuOption === piedra):
            console.log('Ganaste');
            break;
        case(userOption === tijera && cpuOption === papel):
            console.log('Ganaste');
            break;
        default:   
            console.log('Perdiste');
            
    }
    
}

resultado(piedra, tijera);

