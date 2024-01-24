// MÉTODOS DE CADENAS
let cadena1 = "cadena de prueba";
let cadena2 = " soy otra cadena";
let cadena3 = "cadena";
let cadena4 = "de prueba";
let cadena5 = " de pru";
let cadena6 = "eba ";
let cadena7 = "esto.es.una.cadena.separada";
let cadena8 = "palabras rep que se rep ven bastante rep en este texto rep o no?";
let cadena9 = "CADENA DE PRUEBA";
let cadena10 = 32;
let cadena11 = 123456789;
let cadena12 = ["jairo", "ortiz"];
let cadena13 = "    este texto tiene 4 espacios antes y despues    ";

// concat: junta dos o mas cadenas y retorna una nueva
let resultado = cadena1.concat(cadena2);
document.write(resultado + "<br>");
document.write("<hr>");


// Buscar cadenas y devolver valor si existe

// startsWith: si una cadena comienza con los caracteres de otra cadena, devuelve true, sino devuelve false
resultado = cadena1.startsWith(cadena2);
document.write(resultado + "<br>");
resultado = cadena1.startsWith(cadena3);
document.write(resultado + "<br>");
document.write("<hr>");

// endsWith: si una cadena termina con los caracteres de otra cadena, devuelve true, sino devuelve false
resultado = cadena1.endsWith(cadena2);
document.write(resultado + "<br>");
resultado = cadena1.endsWith(cadena4);
document.write(resultado + "<br>");
document.write("<hr>");

// includes: si una cadena puede encontrarse dentro de otra cadena, devuelve true, sino devuelve false
resultado = cadena1.includes(cadena2);
document.write(resultado + "<br>");
resultado = cadena1.includes(cadena4);
document.write(resultado + "<br>");
resultado = cadena1.includes(cadena5);
document.write(resultado + "<br>");
document.write("<hr>");

// indexOf: funciona exactamente igual que la anterior (includes), pero se diferencia en que devuelve el indice del primer caracter de la cadena, y si no existe, devuelve -1
resultado = cadena1.indexOf(cadena2);
document.write(resultado + "<br>");
resultado = cadena1.indexOf(cadena4);
document.write(resultado + "<br>");
document.write("<hr>");

// lastIndexOf: devuelve el ultimo indice del primer caracter de la cadena, y si no existe, devuelve -1
resultado = cadena1.lastIndexOf(cadena2);
document.write(resultado + "<br>");
resultado = cadena1.lastIndexOf(cadena6);
document.write(resultado + "<br>");
document.write("<hr>");


// Modificar cadenas

// padStart: rellena la cadena al principio con los caracteres deseados
resultado = cadena6.padStart(8,"soy");
document.write(resultado + "<br>");
document.write("<hr>");

// padEnd: rellena la cadena al final con los caracteres deseados
resultado = cadena3.padEnd(15,"final");
document.write(resultado + "<br>");
document.write("<hr>");

// repeat: devuelve la misma cadena pero repetida la cantidad de veces que le indiquemos
resultado = cadena6.repeat(6);
document.write(resultado + "<br>");
document.write("<hr>");

// split: divide la cadena como le pidamos y la devuelve en un array
resultado = cadena7.split('.');
document.write(resultado + "<br>"); // muestra el contenido como un array
document.write(resultado[2] + "<br>");
document.write(resultado[4] + "<br>");

resultado = cadena8.split("rep");
document.write(resultado + "<br>");
document.write(resultado[2] + "<br>");
document.write(resultado[4] + "<br>");

document.write("<hr>");

// substring: nos devuelve un pedazo de la cadena que seleccionamos como una cadena nueva
// el primer parametro es inclusivo, el segundo parametro es exclusivo
resultado = cadena2.substring(3,7);
document.write(resultado + "<br>");
document.write("<hr>");

// toLowerCase: convierte una cadena a minúscula
resultado = cadena9.toLowerCase();
document.write(resultado + "<br>");
document.write("<hr>");

// toUpperCase: convierte una cadena a mayúscula
resultado = cadena7.toUpperCase();
document.write(resultado + "<br>");
document.write("<hr>");

// toString: convierte cualquier dato a cadena
resultado = cadena10.toString(2); //radix: util para convertir números con base n a cadena
document.write(resultado + "<br>");

resultado = cadena10.toString(8); //radix: util para convertir números con base n a cadena
document.write(resultado + "<br>");

resultado = cadena11.toString();
document.write(resultado + "<br>");

resultado = cadena12.toString();
document.write(resultado + "<br>");
document.write(resultado[1] + "<br>");
document.write(resultado[5] + "<br>");
document.write(resultado[6] + "<br>");

document.write("<hr>");

// trim: elimina los espacios en blanco al principio y al final de una cadena
resultado = cadena13.trim();
document.write(resultado + "<br>");
document.write("<hr>");

// trimStart: elimina los espacios en blanco al comienzo de una cadena
resultado = cadena13.trimStart();
document.write(resultado + "<br>");
document.write("<hr>");

// trimEnd: elimina los espacios en blanco al final de una cadena
resultado = cadena13.trimEnd();
document.write(resultado + "<br>");
document.write("<hr>");


// MÉTODOS DE ARRAYS

// Transformadores: modifican el array

// pop: elimina el ultimo elemento de un array y lo devuelve
let nombres = ["pedro","maria","jorge"];
document.write(nombres + "<br>");
let resultado1 = nombres.pop();
document.write(resultado1 + "<br>");
document.write(nombres + "<br>");
document.write("<hr>");

// shift: elimina el primer elemento de un array y lo devuelve
document.write(nombres + "<br>");
resultado1 = nombres.shift();
document.write(resultado1 + "<br>");
document.write(nombres + "<br>");
document.write("<hr>");

// push: agrega un elemento al array al final de la lista, devuelve la cantidad de elementos o la nueva posición del nuevo elemento
nombres = ["pedro","maria","jorge"];
document.write(nombres + "<br>");
resultado1 = nombres.push("javier");
document.write(resultado1 + "<br>");
document.write(nombres + "<br>");
resultado1 = nombres.push("andres","favio");
document.write(resultado1 + "<br>");
document.write(nombres + "<br>");
document.write("<hr>");

// reverse: invierte el orden de los elementos de un array
let numeros = [1,2,3,4,5];
document.write(numeros +"<br>");
let resultado2 = numeros.reverse();
document.write(numeros +"<br>");
document.write("<hr>");

// unshift: agrega uno o más elementos al inicio del array y devuelve la nueva longitud del array
document.write(nombres + "<br>");
resultado1 = nombres.unshift(1,3,7);
document.write(resultado1 + "<br>");
document.write(nombres + "<br>");
document.write("<hr>");

// sort: ordena los elementos de un array localmente de forma lexico-gráfica y devuelve el array ordenado
let numeros1 = [6,3,7,2,5,8,1];
let palabras = ["abece","manzana","naranja","pablo","dedo","barco"];
document.write(numeros1 + "<br>");
document.write(palabras + "<br>");
resultado2 = numeros1.sort();
resultado3 = palabras.sort();
document.write(resultado2 + "<br>");
document.write(resultado3 + "<br>");
document.write("<hr>");

// splice: cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos en las posiciones eliminadas
document.write(palabras + "<br>");
// elimina elementos
palabras.splice(1,3);
document.write(palabras + "<br>");
palabras = ["abece","manzana","naranja","pablo","dedo","barco"];
// agrega elementos
palabras.splice(1,3,"filemon","satanás");
document.write(palabras + "<br>");
palabras.splice(3,0,"aurelio","zenon");
document.write(palabras + "<br>");
document.write("<hr>");

// Accesores

// join: une todos los elementos de una matriz (u objeto similar) en una cadena y la devuelve
let resultado4 = palabras.join(" - ");
document.write(resultado4 + "<br>");
document.write("<hr>");

// slice: devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido)
resultado4 = palabras.slice(3,6);
document.write(resultado4 + "<br>");
document.write("<hr>");

// métodos ya vistos en cadenas: toString(), indexOf(), lastIndexOf(), includes()

// De repetición

// filter: crea un nuevo array con todos los elementos que cumplan la condición
palabras.filter(palabra => document.write(palabra + "<br>"));
document.write("<br>");
let resultado5 = palabras.filter(palabra => palabra.length > 6);
document.write(resultado5 + "<br>");
document.write("<hr>");

// forEach: ejecuta la función indicada una vez por cada elemento del array
palabras.forEach(palabra => document.write(palabra + "<br>"));
document.write("<hr>");


// OBJETO MATH (básico)
// Solo trabaja con números

// sqrt: devuelve la raíz cuadrada positiva de un número
let numero = Math.sqrt(25);
document.write(numero + "<br>");
document.write("<hr>");

//sbrt: devuelve la raíz cúbica de un númeroj
numero = Math.cbrt(-27);
document.write(numero + "<br>");
document.write("<hr>");

// max: devuelve el número mayor de entre cero o más números
numero = Math.max(4,1,6,12,63,243,90);
document.write(numero + "<br>");
document.write("<hr>");

// min: devuelve el número menor de entre cero o más números
numero = Math.min(4,1,6,12,63,243,90);
document.write(numero);
document.write("<hr>");

// random: devuelve un número pseudo-aleatorio entre 0 y 1
numero = Math.random();
document.write(numero + "<br>");
document.write("<hr>");

// round: devuelve el valor de un número redondeado al número entero más cercano
numero = Math.random()*100;
document.write(numero = Math.round(numero) + "<br>");
document.write("<hr>");

// fround: devuelve la representación flotante de precisión simple más cercana de un número
numero = Math.fround(5.99999999999999999999);
document.write(numero + "<br>");
numero = Math.fround(5.7777799999);
document.write(numero + "<br>");
document.write("<hr>");

// floor: devuelve el mayor entero, menor que o igual a un número
numero = Math.floor(5.7);
document.write(numero + "<br>");
document.write("<hr>");

// trunc: devuelve la parte entera del número x, y elimina los dígitos fraccionarios, no redondea
numero = Math.trunc(5.789);
document.write(numero + "<br>");
document.write("<hr>");

// Propiedades

// PI
document.write(Math.PI + "<br>");
document.write(Math.SQRT1_2 + "<br>");
document.write(Math.SQRT2 + "<br>");
document.write(Math.E + "<br>");
document.write(Math.LN2 + "<br>");
document.write(Math.LN10 + "<br>");
document.write(Math.LOG2E + "<br>");
document.write(Math.LOG10E + "<br>");
document.write("<hr>");