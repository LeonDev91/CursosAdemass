// PROGRAMACIÓN ORIENTADA A OBJETOS (POO)
// Es un paradigma de programación


// Conceptos básicos
/* 
  - Clase
  - Objeto
  - Atributo
  - Método
  - Constructor
  - Instanciación
*/

// Clase
class Animal {
  constructor(especie, edad, color) {
    // Atributos
    this.especie = especie;
    this.edad = edad;
    this.color = color;
    this.info = `Soy ${this.especie}, tengo ${this.edad} años, y soy de color ${this.color}`;
  }
  // Métodos
  verInfo() {
    document.write(this.info + "<br>");
  }
}

// Objeto
// Cuando usamos objetos los declaramos con const
const perro = new Animal("perro",5,"marrón");
const gato = new Animal("gato",2,"negro");
const pajaro = new Animal("pajaro",1,"verde");
console.log(perro);

// Acceso a sus propiedades
document.write(perro.info + "<br>");
//document.write(gato.info + "<br>");
//document.write(pajaro.info + "<br>");

// Ejecución de métodos
gato.verInfo();
pajaro.verInfo();


// Características
/*
  - Abstracción
  - modularidad
  - Encapsulamiento
  - Polimorfismo
*/

// Herencia
class Perro extends Animal {
  constructor(especie,edad,color,raza){
    super(especie,edad,color);
    this.raza = raza;
  }
  ladrar(){
    alert("waw!!!");
  }
  static morder(){
    alert("ñam, ñam");
  }
}

const lucas = new Perro("perro",6,"negro","pitbull");

// método heredado de Animal
lucas.verInfo();
// método propio
lucas.ladrar();


// Métodos estáticos
// Es un método que no necesita que la clase se defina para poder ser creado y
// y no necesita que el objeto se instancie ser ejecutado
Perro.morder();

// Métodos de acceso

// getters y setters
class Gato extends Animal {
  constructor(especie,edad,color,raza){
    super(especie,edad,color);
    this.raza = raza;
  }
  maullar(){
    alert("miau!!!");
  }
  // set para modificar información
  set setRaza(nuevaRaza){
    this.raza = nuevaRaza;
  }
  // get para obtener información
  get getRaza(){
    return this.raza;
  }
}

const evaristo = new Gato("gato",4,"blanco","persa");
console.log(evaristo);
evaristo.setRaza = "angora";
console.log(evaristo);
document.write(evaristo.getRaza + "<br>");