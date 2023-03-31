arrays = ['hola', 23, '23']
//document.write(arrays)

//arrays asociativos --> OBJETOS
//mas parecidos al formaso JSON. 

let pc1 = {
    nombre: 'oripc',
    procesador: 'intel Core 17',
    ram: '16gb',
    espacio: '2TB'
 
}

let pc2 = ['ORIANApc', 'intel', '16gb','1tb'];

let nombre = pc1['nombre'];
let procesador = pc1['procesador'];
let ram = pc1['ram'];
let espacio = pc1['espacio'];

frase  = `El nombre de la pc es <b> ${nombre}</b>, <br>
su procesador es  <b>${procesador}</b>, <br>
la memoria RAM es de  <b>${ram}</b> <br>
y el espacio es de  <b>${espacio}</b>.`

document.write(frase)

// * B U C L E S *

let numeroSumar = 0;
if (numeroSumar < 10) {
    numeroSumar ++;
    document.write(numeroSumar);
}