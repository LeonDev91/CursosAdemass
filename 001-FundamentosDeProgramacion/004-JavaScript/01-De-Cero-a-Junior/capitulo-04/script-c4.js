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

// Transformadores

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
