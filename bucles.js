
/* B U C L E S *

let numeroSumar = 0;

if (numeroSumar < 6) {
    numeroSumar++
    document.write(numeroSumar + "<br>");
}

while (numeroSumar < 6) {
    numeroSumar++
    document.write(numeroSumar + "<br>");
}


// BUCLES FOR.

//declarar las variables e incializarlas - condición - aumento o decremento. 

for (let i = 6; i >= 0; i--) {
    document.write(i + "<br>")
}

//definiendo por fuera del pero nadie lo usa

let i = 6;
for (i ; i >= 0; i--) {
    document.write(i + "<br>")
}
document.write(i)


// para hacer q termine por ej. en le 12.- 

for (let i = 0; i < 20; i++) {
    if (i == 12){
        break;
    }
    document.write(i + "<br>")
}

// para hacer q continue salteandose por ej el 12. 
for (let i = 0; i < 20; i++) {
    if (i == 12){
        continue;
    }
    document.write(i + "<br>")
}
*/
// for in: devuelve el INDICE. 

let animales = ['gato','perro', 't-rex'];
animales.edad = 20 //por ejemplo, {
    //el for in tmb recorre PROPIEDADES de objetos, en consola sale como = 'edad' 

for  (animal in animales){ // animal toma cada valor de cada INDICE del array 'animales'- 
    document.write(animal + '<br>');
}

// RTADO: nos da 0 - 1 - 2, ya que brinda la POSICIÓN. 
// SE UTILIZA PARA RECORRER INDICES, operar con ellos etc

// como hacer para que nos muestre las variables? definiendo animales[animal]
for  (animal in animales){ // animal toma cada valor de cada INDICE del array 'animales'- 
    document.write(animales[animal] + '<br>');
}


document.write('<br>');
// OF: nos guarda el VALOR  de la variable que recorremos. 

for (animal of animales) {
    document.write(animal+ '<br>' );
}
document.write(animales.edad)
/* RTADO. 
gato
perro
t-rex
20 */


//LABEL: sentencia que permita asociar cualquier bucle (no foreach) a una variable 
// para poder usarla despues,. 

array1 = ['maria', 'josefa', 'roberta'];
array2 = ['pedro', 'marcelo', array1, 'josefina'];

//podemos agregarle un level y darle finalizar a todo el ciclo con el.

forRancio:
for (array in array2){
    if (array == 2 ) {
        for(let array of array1){
            document.write(array+ '<br>');
            break forRancio;
        }
    }else {
        document.write(array2[array] + '<br>');
    }
}

forConitnue:
for (array in array2){
    if (array == 2 ) {
        for(let array of array1){
            document.write(array+ '<br>');
            continue forConitnue; //continua la iteración para TODO el bucle 'continue'
        }
    }else {
        document.write(array2[array] + '<br>');
    }
}