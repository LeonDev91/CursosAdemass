class App {
  constructor(descargas,puntuacion,peso) {
    this.descargas = descargas;
    this.puntuacion = puntuacion;
    this.peso = peso;
    this.iniciada = false;
    this.instalada = false;
  }

  abrir() {
    if(this.iniciada == false && this.instalada == true) {
      this.iniciada = true;
      alert("App iniciada");
    }
  }
  cerrar() {
    if(this.iniciada == true  && this.instalada == true) {
      this.iniciada = false;
      alert("App cerrada");
    }
  }
  instalar() {
    if(this.instalada == false) {
      this.instalada = true;
      alert("App instalada correctamente");
    }
  }
  desinstalar() {
    if(this.instalada == true) {
      this.instalada = false;
      alert("App desinstalada correctamente");
    }
  }
  appInfo(){
    return `
    Descargas: ${this.descargas} <br>
    Puntuación: ${this.puntuacion} <br>
    Peso: ${this.peso} <br>
    `
  }
}

const app = new App("16000","5 estrellas","900MB");

// app.instalar();
// app.abrir();
// app.cerrar();
// app.desinstalar();

const app1 = new App("16000","5 estrellas","900MB");
const app2 = new App("1000","4 estrellas","400MB");
const app3 = new App("6000","5 estrellas","100MB");
const app4 = new App("23000","4 estrellas","1GB");
const app5 = new App("900","5 estrellas","250MB");
const app6 = new App("180","3 estrellas","522MB");
const app7 = new App("42000","2 estrellas","700MB");

document.write(`
${app1.appInfo()} <br>
${app2.appInfo()} <br>
${app3.appInfo()} <br>
${app4.appInfo()} <br>
${app5.appInfo()} <br>
${app6.appInfo()} <br>
${app7.appInfo()} <br>
`)