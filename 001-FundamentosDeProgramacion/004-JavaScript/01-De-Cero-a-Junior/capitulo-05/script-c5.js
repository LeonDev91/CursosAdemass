// CONSOLE

// assert: aparece un mensaje de error en la consola si la afirmación es falsa.
// si la afirmación es verdadera, no aparece nada
console.assert(5>3);
console.assert(5<4);

// clear: limpia la consola
console.clear();

// error: muestra un mensaje de error en la consola
console.error("Hay un error");

// info: muestra un mensaje de información en la consola
console.info("Mensaje informativo");

// log: muestra un mensaje en la consola, se utiliza para depuración
console.log("Mensaje de depuración");

// table: toma un argumento obligatorio (data), que debe ser un array o un objeto
// y un parámetro adicional (columns) y muestra una tabla en consola
console.table([2,4,5,3,21,45,16,75,98,357,456,127,954,456]);

// warn: muestra un mensaje de advertencia en la consola
console.warn("Mensaje de advertencia");

// dir: despliega una lista interactiva de las propiedades del objeto JavaScript especificado
console.dir([1,3,"salud",4,7,0.9,'e']);