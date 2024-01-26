// CONSOLE

// Métodos de registro

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


// Métodos de conteo

// count: registra el número de veces que se llama a count()
// esta función toma como argumento opcional una etiqueta
console.count();
console.count();
console.count();
console.count();
console.count();

// countReset: resetea el contador console.count()
console.countReset();
console.count();


// Métodos de agrupación

// group: crea un nuevo grupo en línea en el registro de la consola
// groupEnd: remueve un grupo en línea en el registro de la consola
// groupCollapsed: crea un grupo en línea pero contraido
console.group();
console.group("Segundo nivel");
console.log("Hola 1");
console.log("Hola 2");
console.groupEnd();
console.groupCollapsed("nuevo segundo nivel");
console.log("Hola 3");
console.log("Hola 4");
console.groupEnd();
console.groupEnd();


// Métodos de temporización

// time: inicia un temporizador
// timeLog: detiene un temporizador
// timeEnd: registra el valor actual del temporizador
console.time();
console.timeLog();
console.timeLog();
console.timeLog();
console.timeLog();
console.timeLog();
console.timeEnd();