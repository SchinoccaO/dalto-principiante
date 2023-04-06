// problema de los ceulares. 

class Celular{
    constructor(color, peso, tamano, rdc, ram){
        this.color = color;
        this.peso = peso;
        this.tamano = this.tamano;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false
    }
    presionarBotonEncedido(){
        if (this.encendido == false){
            alert('celular prendido');
            this.encendido = true;
        }else {
            alert('celular apagado. ');
            this.encendido = false;
        }
    }
    reiniciar(){
        if (this.encendido == true) {
            alert('reiniciando el celular')
        }else{
            alert('el celular esta apagado.')
        }
    }
    tomarFoto(){
        alert(`se ha tomado la foto en una resolución de: ${this.resolucionDeCamara}`)
    }
    grabarVideo(){
        alert(`se ha tomado el video en una resolución de ${this.resolucionDeCamara}`)
    }
    mobileInfo(){
        return `
        Color: <b>${this.color}</b></br> 
        Peso: <b>${this.peso}</b></br>
        Tamaño: <b>${this.tamano}</b></br>
        Resolución de video: <b>${this.resolucionDeCamara}</b></br>
        Memoria ram: <b>${this.memoriaRam}</b></br>`
    }
}

class CelularAltaGama extends Celular {
    constructor(color, peso, tamano, rdc, rcde, ram){
        super(color, peso, tamano, rdc, rcde, ram);
        this.resolucionDeCamarExtra = rcde;
    }
    grabarVideoLEnto(){
        alert('estas grabando en camara lenta');
    }
    reconocimientoFacial(){
        alert('se inicia el reconocimiento facial');
    }
    infoAltaGama(){
       return this.mobileInfo + `Resolución de camara Extra: ${this.resolucionDeCamarExtra}`
        }
}   


// celular1 = new Celular('rojo', '150 grm', '6 pulgadas', 'HD.', '2gb.');
// celular2 = new Celular('rojo', '155 grm', '6.5 pulgadas', 'FULL HD.', '6gb.');
// celular3 = new Celular('rojo', '160 grm', '7 pulgadas', 'HD ULTRA K.', '8gb.');

// document.write(`
// ${celular1.infoAltaGama()} <br>
// ${celular2.infoAltaGama()} <br>
// ${celular3.mobileInfo()} <br> `)

// celular1.presionarBotonEncedido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncedido();

celular1 = new CelularAltaGama('rojo', '130gr', '5.3"', '4K', '3gb', 'full hd');
celular2 = new CelularAltaGama('negro', '120gr', '5.0"', '4k', '4GB', 'hd ultra k');
document.write(`
${celular1.infoAltaGama()} <br>
${celular2.infoAltaGama()} <br>`)
 