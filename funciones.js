// function saludar (){
//     respuesta = prompt('Holaa! como estas?')
//     if (respuesta == 'bien'){
//         alert('me alegro')
//         return 'la funcion se ejecuto correctamente'
//     }else{
//         alert('una pena');
//     }
// }


// /* return, para que devuelva un VALOR, se vuelva un tipo de dato. 
// let saludo = saludar();
// // como dentrod de la funcion coloque RETURN, 'saludo' va
// // a ser igual a lo que retorne dentro de la función. */

// // document.write(saludo); //muestra por pantalla: 'la funcion se ejecuto correctamente'

// // parametros

// let num1 = 32;
// let num2 = 12;

// let res = num1 + num2;

// function suma(num1, num2){
//     let resp = num1 + num2;
//     document.write(resp);
//     document.write('<br>')
// }

// (suma(43,45));


// funcion saludar

// function saludar(nombre){
//     let frase = `¡Hola! ${nombre}! Como estas? Cara e pingo`;
//     document.write(frase); 
//}

// const saludar = function(nombre) {
//     let frase = `¡Hola! ${nombre}! Como estas? Cara e pingo`;
//     document.write(frase); 
// }
// //function se convierte en la flechita

const saludar = (nombre) => {
    let frase = `¡Hola! ${nombre}! Como estas? Cara e pingo`;
    document.write(frase); 

}

saludar('pedro')