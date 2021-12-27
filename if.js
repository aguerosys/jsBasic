if (true){
    console.log('Soy verdadero');
}else{
    console.log('Soy falso');
}


let edad = 18;

if(edad === 18){
    console.log('Estas apto para votar, y será tu primer votación');
} else if (edad > 18){
    console.log('Estas apto para votar')
}else{
    console.log('No estas en la edad para votar');
}

//reto

piedra = 'Piedra';
papel = 'Papel';
tijera = 'Tijera';

resultado = function (userSelection, cpuSelection){
    if (userSelection != cpuSelection){
        if (userSelection === piedra && cpuSelection === tijera){
            console.log('El ganador es el usuario que escogió '+ piedra);
        }else if (userSelection === papel && cpuSelection === piedra ){
            console.log('El ganador es el usuario que escogió '+ papel);
        }else if (userSelection === tijera && cpuSelection === papel){
            console.log('El ganador es el usuario que escogió '+ tijera);
        }else{
            console.log('Gana la CPU');
        }
    }else{
        console.log('Empate');
    }
}