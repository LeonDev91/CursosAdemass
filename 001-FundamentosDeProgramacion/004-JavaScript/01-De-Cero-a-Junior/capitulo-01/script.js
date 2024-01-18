alert("Hola mundo")

// Variables
recipiente = "papel";

// Declaración de variable
// var, let, const - tienen que ver con el scope
// const se debe declarar e inicializar al mismo tiempo

// Declaración
let numero;

// Casos especiales de tipos de datos: undefined, null, nan

// Undefined: la variable existe pero no tiene valor
alert(numero);

// Null: valor arbitrario, intencional, dado por el programador
numero = null;
alert(numero);

// NaN: el resultado de la operación no es un número
let num = 5;
let nom = "Pedro";
alert(num * nom);

// Inicialización
numero = 20;
alert(numero);

const nombre = "Juan";
alert(nombre);

// Tipos de variables
string = "cadena de texto";
number = 19;
boolean = true;

// prompt
let name = prompt("Hola, cual es tu nombre?");
alert("Hola " + name);

// Operadores en JavaScript (básico)

// Operadores de asignación
let number2 = 10;
// number = number + 5;
number2 += 5;
// Escribe el contenido de la variable en el documento HTML
document.write(number2);

// Operadores aritméticos
let number3 = 20;
let number4 = number2 + number3;
document.write(number4);