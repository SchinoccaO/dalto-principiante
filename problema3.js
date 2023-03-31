// Crear una calculadora que simplifique el trabajo de todo: suma, resta, multip, division. 

// paso 1: funciones 


const sumar = (num1, num2)=>{
    return parseInt(num1) + parseInt(num2);
}

const restar = (num1, num2)=>{
    return parseInt(num1) - parseInt(num2);
}
const dividir = (num1, num2)=>{
    return parseInt(num1) / parseInt(num2);
}
const multip = (num1, num2)=>{
    return parseInt(num1) * parseInt(num2);
}

alert('que operacion desea realizar? ')
let operacion = prompt('1. suma, 2.resta, 3. dividir, 4. multiplicar')

if (operacion == 1){
    let numero1 = prompt('primer numero apra sumar: ');
    let numero2 = prompt('segundo numero para sumar: ');
    resultado = sumar(numero1,numero2)
    alert(`tu resultado es: ${resultado}`)
} 
else if (operacion == 2) {
    let numero1 = prompt(' RESTA : ingrese el primer numero: ');
    let numero2 = prompt('ingrese el segundo numero p/ restar: ');
    resultado = restar(numero1, numero2)
    alert(`tu resultado es: ${resultado}`)

}
else if (operacion == 3) {
    let numero1 = prompt('ingrese el primer numero: ');
    let numero2 = prompt('ingrese el 2do numero pa dividir: ');
    resultado = dividir(numero1, numero2);
    alert(`tu resultado es: ${resultado}`)

}else if (operacion == 4) {
    let numero1 = prompt('ingrese el numero 1: ');
    let numero2 = prompt('ingrese el nro 2 para multiplicar: ');
    resultado = multip(numero1, numero2);
    alert(`tu resultado es: ${resultado}`)
}


else { 
    alert('esa operacion no esta mi reyyyyyy');
}
