// ARRAYS
let arr = ["juan", 32, "colombia"];
let carnes = ["res", "cerdo", "pollo", "pescado", "cuy", "conejo", "cordero"];
//alert(arr);
document.write(`<p>carnes</p>`);
let elemento = carnes[0];
document.write(`<p>${elemento}</p>`);

let varios = ["leonardo", 30, "argentina", "veronica", 25, "polonia"];
let nombre = varios[3];
document.write(`<p>${nombre}</p>`);

// Arrays asociativos
let pc = {
  nombre: "dell",
  procesador: "AMD Ryzen 5 3450u",
  ram: "16 GB",
  almacenamiento: "1 TB"
}

let componente = pc["procesador"];
document.write(`<p>${componente}</p>`);
document.write(`<hr>`);

// BUCLES

// while
// Primero se pregunta, luego se ejecuta
// bucle indeterminado: "no sabemos" cuantos ciclos va a realizar
let numero = 0;

while (numero < 10) {
  numero++;
  document.write(`<p>${numero}</p>`);
}

document.write(`<hr>`);

// do-while
// Primero se ejecuta, luego se pregunta
// bucle indeterminado: "no sabemos" cuantos ciclos va a realizar
numero = 0;

do {
  numero++;
  document.write(`<p>${numero}</p>`);
}
while(numero <5);

do{
  numero++; // numero incrementa a 6
  document.write(`<p>${numero}</p>`); // se muestra numero en pantalla
}
while(numero<5);

document.write(`<hr>`);

// for
// bucle determinado: sabemos cuantos ciclos va a realizar
// declaramos, inicializamos, comparamos, iteramos
for(let i = 0; i < 10; i++) {
  document.write(`<p>${i}</p>`);
}

let i = 6;
for(i; i >= 0; i--) {
  document.write(`<p>${i}</p>`);
}

document.write(`<hr>`);

// for in
// devuelve el índice
let animales = ["gato","perro","loro","hamster","tortuga"];

for(animal in animales) {
  document.write(`<p>${animal} - ${animales[animal]}</p>`);
}

document.write(`<br>`);

// for of
// devuelve el valor
for(animal of animales) {
  document.write(`<p>${animal}</p>`);
}

// break, continue, label
// label
arr1 = ["maria","josefa","roberta"];
arr2 = ["pedro","marcelo",arr1,"josefina"];

forLabel:
for(let array in arr2) {
  if(array == 2) {
    for(let array of arr1) {
      break forLabel;
      document.write(array + "<br>");
    }
  }else{
    document.write(arr2[array] + "<br>");
  }
}

document.write(`<br>`);


// FUNCIONES
// Una función es un bloque de código reutilizable
// Es específica en su acción
// definición, declaración, llamada
function saludar() {
  let respuesta=prompt("¿Cómo va tu día?");
  if(respuesta=="bien") {
    alert("Me alegro!");
  }else{
    alert("Que pena");
  }
}

saludar();

const saludo = function() {
  let respuesta=prompt("¿Cómo va tu día?");
  if(respuesta=="bien") {
    alert("Me alegro!");
  }else{
    alert("Que pena");
  }
}

saludo();

// return
function suma() {
  let num1 = parseInt(prompt("Dame el primer número a sumar:"));
  let num2 = parseInt(prompt("Dame el segundo número a sumar:"));
  let res = num1 + num2;
  return res;
}

let prueba1 = suma();
document.write(prueba1);

document.write(`<br>`);

// Parámetros
function resta(num1, num2) {
  let res = num1 - num2;
  return res;
}

// Argumentos
let resultado = resta(15,32);
document.write(resultado);

document.write(`<br>`);

// Funciones flecha (arrow functions)
const tocar1 = (nota) => {
  return `${nota}! ${nota}! ${nota}!`;
}

const tocar2 = nota => {
  return `${nota}! ${nota}! ${nota}!`;
}

const tocar3 = nota => `${nota}! ${nota}! ${nota}!`;

// sin parametros
const tocar4 = () => "Do! Re! Mi!";

alert(tocar1("Do"));
alert(tocar2("Re"));
alert(tocar3("Mi"));
alert(tocar4());