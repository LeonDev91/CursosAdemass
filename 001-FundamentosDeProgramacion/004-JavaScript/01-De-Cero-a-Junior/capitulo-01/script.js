alert("Hola mundo")

// VARIABLES
recipiente = "papel";

// Declaración de variable
// var, let, const - tienen que ver con el scope
// const se debe declarar e inicializar al mismo tiempo

// Declaración
let numero;

// CASOS ESPECIALES DE TIPOS DE DATOS: undefined, null, nan

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

// OPERADORES (básico)

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

// CONCATENACIÓN
let saludo = "hola ";
let pregunta = "cómo estás?";
let frase = saludo + pregunta;
document.write(frase);
document.write("<br>");

// Forzamos la concatenación de números
let a = 1;
let b = 2;
let c = "" + a + b;
document.write(c);
document.write("<br>");

// Uso del método concat
let d = "y entonces?";
let e = d.concat(a);
document.write(e);
document.write("<br>");

// Uso de template strings y backticks
let f = "qué";
let g = `${d} ahora ${f}? ${name}`;
document.write(g);

// OPERADORES (intermedio)

// Operadores de comparación

// Operadores lógicos

// CONDICIONALES
let n = "nombre random";

//if
if(n == "nombre"){
	alert("soy un nombre!");
}

// else if
else if(n == "random"){
	alert("soy un random!");
}

// else
else{
	alert("no soy ninguno :(");
}