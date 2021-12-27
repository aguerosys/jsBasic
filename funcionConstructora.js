let autos = [];

function auto(marca, modelo, anio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}

for(i=0; i < 5; i++ ){
    marca = prompt('Escriba la marca');
    modelo = prompt('Escriba el modelo');
    anio = prompt('Escriba el año');

    autos.push(new auto(marca,modelo,anio));
}

for(i=0; i<autos.length; i++){
    console.log(autos[i]);
}