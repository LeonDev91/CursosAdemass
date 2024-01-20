// EJERCICIO 1
class Celular {
  constructor(color,peso,rdp,rdc,ram) {
    this.color = color;
    this.peso = peso;
    this.resolucionDePantalla = rdp;
    this.resolucionDeCamara = rdc;
    this.memoriaRam = ram;
    this.encendido = false;
  }

  presionarBotonEncendido() {
    if(this.encendido == false) {
      alert("Celular prendido");
      this.encendido = true;
    }
    else {
      alert("Celular apagado");
      this.encendido = false;
    }
  }
  reiniciar() {
    if(this.encendido == true) {
      alert("Reiniciando celular");
    }
    else {
      alert("El celular está apagado");
    }
  }
  mostrarInfo() {
    return `
    Color: ${this.color} <br>
    Peso: ${this.peso} <br>
    Memoria RAM: ${this.memoriaRam} <br>
    Resolución de pantalla: ${this.resolucionDePantalla} <br>
    Resulución de cámara: ${this.resolucionDeCamara} <br>
    `
  }
  tomarFoto() {
    alert(`Foto tomada en una resolución de: ${this.resolucionDeCamara}`);
  }
  grabarVideo() {
    alert(`Grabando video en ${this.resolucionDeCamara}`);
  }
}

const celular1 = new Celular("rojo","150g","5.0'","hd","2GB");
const celular2 = new Celular("blanco","155g","5.4'","full hd","4GB");
const celular3 = new Celular("negro","160g","5.8'","4k","8GB");

celular1.presionarBotonEncendido();
console.log(celular1.encendido);
celular1.tomarFoto();
celular1.grabarVideo();
celular1.reiniciar();
celular1.presionarBotonEncendido();
console.log(celular1.encendido);

document.write(`
${celular1.mostrarInfo()} <br>
${celular2.mostrarInfo()} <br>
${celular3.mostrarInfo()} <br>
`);

// EJERCICIO 2
class CelularAltaGama extends Celular {
  constructor(color,peso,rdp,rdc,ram,rdce){
    super(color,peso,rdp,rdc,ram);
    this.resolucionDeCamaraExtra = rdce;
  }

  mostrarInfoAltaGama(){
    return this.mostrarInfo() + `Resolución de cámara extra: ${this.resolucionDeCamaraExtra} <br>`
  }
  grabarVideoLento() {
    alert("Estas grabando en cámara lenta");
  }
  reconocimientoFacial() {
    alert("Vamos a iniciar un reconocimiento facial");
  }
}

const celular4 = new CelularAltaGama("rojo","130g","5.2'","4k","4GB","4K");
const celular5 = new CelularAltaGama("negro","140g","5.4'","full hd","8GB","4K");

document.write(`
${celular4.mostrarInfoAltaGama()} <br>
${celular5.mostrarInfoAltaGama()} <br>
`);
