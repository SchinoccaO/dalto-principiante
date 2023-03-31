let cantidad = prompt('cuantos alumnos son?');
let alumnosTotales = []; //Creamos un arreglo vacío. 


for (i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt('Nombre del alumno' +(i + 1) ),0] // 0 = cantid. de asitencias.
    //sub [i] porque son los datos del alumno que tengo que cargar al array.
}

const tomarLista = (nombre, p)=>{
    let presencia = prompt(nombre); //preguntamos: presente o ausente?
    if (presencia == 'p'|| presencia == 'P'){ // || = 'o'
        alumnosTotales[p][1]++; 
        // con el sub [p] selecciono todo el array, con el [1] la 2da parte del mismo.
    }
}

for (i = 0; i < 30; i++) { //Ejecutamos 30 veces pq hay q tomar asistencia 30 dias seguidos. 
    for (alumno in alumnosTotales) {
        tomarLista(alumnosTotales[alumno][0],alumno); // como es un IN nos pasa la posicion,por eso neceistamos el [ALUMNO]
    } //le pasamos el cero ya que accedemosd a la PRIMER posicion del arreglo nomas. 
}

for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}:<br
      ___________Presentes: ${alumnosTotales[alumno][1]}:<br>
      ___________Ausencias: ${30 - (alumnosTotales[alumno][1])}//restamos a los 30 menos la cantidad de qias q asistio.
    `;
    if (30 - alumnosTotales(alumno)[1] > 18) {
    resultado += `<b style= 'color:red'> reprobado por inasistencias </b><br><br>`;
    } else {
    resultado += '<br></br>'     
    }
    document.write(resultado)   
    document.write('la concha de tu madre river plateeee')

} 

// JA JA NO ANDA CAJETAAAAAAAAAAAA