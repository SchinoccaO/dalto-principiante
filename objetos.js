"better-comments.multilineComments"; true


class animal {
    constructor(especie,edad,color) {
        this.especie = especie;  //this == OBJETO.
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} years old 
        soy de color ${this.color}.`;
    }    
    // NO se pueden usar funciones flechas, asique debe ser a la antigua. 
    verInfo() {
        document.write(this.info + '<br>');
    }
    ladrar() { //hago una funcion pq no tiene sentido hacer una clase pq no todos los animales ladran.  
        if(this.especie == 'perro') {
            document.write('waow')
    }else {
        document.write(`no puede ladrar porque es un ${this.especie}`);
    }
}

let perro = new animal('perro', '5', 'rojo');
let gato = new animal('gato', '2', 'negro');
let pajaro = new animal('pajaro', '1', 'rojo');

// document.write(perro.info + '<br>');
// document.write(gato.info + '<br>');
// document.write(pajaro.info + '<br>');

perro.ladrar();
gato.ladrar();
pajaro.ladrar();
// Crear un MÉTODO: Es una funciónd dentro del objeto que se llama utilizandolo como .metodo.

/* Conceptos de la POO:
1. ABASTRACCIÓN: 
Se inteta reducir lo más posible el objeto, haciendolo menos complejo. 
Ej. PERRO: raza, color, años. No se crea, color de iris, cantidad de pelos.
Lo fundamental del obj. 

    2. MODULARIDAD:
Separar el problema en varias partes para resolverlo mejor. 

3. ENCAPSUILAMIENTO:
poner los datos en privado asi el usuario no puede acceder tan facilmente: encriptarlos. 

4. POLIMORFIMOS: 
Capacidad que tiene un obj. de comportarse distinto del resto ante un metodo por sus propiedades. 
*/


/* CONCEPTOS: con cambios visuales en el codigo. 

- HERENCIA: referencia en código linea:  extend
- METODOS ESTATICOS: static
-
 


*/