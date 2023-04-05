"better-comments.multilineComments"; true


class Animal {
    constructor(especie,edad,color) {
        this.especie = especie;  //this == OBJETO.
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} years old, soy de color ${this.color}.`;
    }    
    // NO se pueden usar funciones flechas, asique debe ser a la antigua. 
    verInfo() {
        document.write(this.info + '<br>');
    // } SE UTILIZA PARA EL POLIMORFISMO: los obj se comportan dif. porq tienen distintas propiedades. 
    // ladrar() { //hago una funcion pq no tiene sentido hacer una clase pq no todos los animales ladran.  
    //     if(this.especie == 'perro') {
    //         document.write('waow' + '<br>');
    // }else {
    //     document.write(`no puede ladrar porque es un ${this.especie}`+ '<br>');
    //     }
    }
};

//le digo: la clase perro va a tener todo lo que tiene en animal
// pero le agrego cosas en específico. 
// H E R E N C I A: 
class Perro extends Animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = null;  //con este constructor, lo HEREDA.
    }
    set setRaza(newName){
        this.raza = newName; // lo igualo al parametro. 
    }
    get getRaza(){
        return this.raza;
    }
}
// NO! se puede tener una clase con el mismo nombre 
// q un OBJETO. 

// LOS OBJETOS SE DEFINEN CON const. 



const perro = new Perro('perro', '5', 'rojo', 'dobberman');
const gato = new Animal('gato', '2', 'negro');
const pajaro = new Animal('pajaro', '1', 'rojo'); 


perro.setRaza = 'Pedro';

//perrito.modificarRaza = 'Pedro'; //lo llamo como si fuera una PROPIEDAD . 
document.write(perro.getRaza)


//perrito.verInfo();  
// Perro.ladrar();    //SE UTILIZÓ para POLIMORFISMO. 
// gato.verInfo();
// pajaro.verInfo();

// // Crear un MÉTODO: Es una funciónd dentro del objeto que se llama utilizandolo como .metodo.

// /* Conceptos de la POO:
// 1. ABASTRACCIÓN: 
// Se inteta reducir lo más posible el objeto, haciendolo menos complejo. 
// Ej. PERRO: raza, color, años. No se crea, color de iris, cantidad de pelos.
// Lo fundamental del obj. 
//     2. MODULARIDAD:
// Separar el problema en varias partes para resolverlo mejor. 
// 3. ENCAPSUILAMIENTO:
// poner los datos en privado asi el usuario no puede acceder tan facilmente: encriptarlos. 
// 4. POLIMORFIMOS: 
// Capacidad que tiene un obj. de comportarse distinto ante un  mismo metodo debido a sus sus propiedades. 
// */


// /* CONCEPTOS: con cambios visuales en el codigo. 
// - HERENCIA: referencia en código linea:  extend
// - METODOS ESTATICOS: static
// -
//  */


// // static = se usa cuando no estamos utilizando nignuna propiedad de la clase, ej. linea '32'.