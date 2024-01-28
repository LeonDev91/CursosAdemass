// DOM (Document Object Model)

// Nodo: un nodo en el DOM es cualquier etiqueta del cuerpo
// como un párrafo, el mismo body o incluso las etiquetas de una lista
// a veces suelen ser otro tipo de elementos

// una etiqueta crea un nodo, pero no todos los nodos son etiquetas

// document: es el nodo raíz, a partir del cual derivan el resto de nodos
// element: nodos difinidos por etiquetas html
// text: el texto dentro de un nodo element, se considera un nuevo nodo hijo de tipo texto
// attribute: los atributos de las etiquetas definen nodos (en JS no los veremos como nodos, sino como información asociada al nodo de tipo element)
// comentarios y otros: los comentarios y otros elementos como las declaraciones doctype en la cabecera de los elementos html generan nodos


// document - Métodos de selección de elementos

// getElementById() - selecciona un elemento por ID
let parrafo = document.getElementById("parrafo");
document.write(parrafo);
document.write("<br>");
document.write("<hr>");

// getElementsByTagName() - selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada
parrafo = document.getElementsByTagName("p");
document.write(parrafo); // devuelve una lista de elementos
document.write("<br>");
document.write(parrafo[0]);
document.write("<br>");
document.write(parrafo[1]);
document.write("<br>");
document.write("<hr>");

// querySelector() - devuelve el primer elemento que coincida con el grupo especificado de selectores
parrafo = document.querySelector(".parrafo3");
document.write(parrafo);
document.write("<br>");
parrafo = document.querySelector("#parrafo2"); // document.getElementById() es más óptimo cuando se trata de seleccionar por ID
document.write(parrafo);
document.write("<br>");
document.write("<hr>");

// querySelectorAll() - devuelve todos los elementos que coincidan con el grupo especificado de selectores
parrafo = document.querySelectorAll(".parrafo3");
document.write(parrafo);
document.write("<br>");
document.write(parrafo[3]);
document.write("<br>");
document.write("<hr>");


// Elementos

// Métodos para definir, obtener y eliminar atributos

const rangoEdad2 = document.querySelector(".rangoEdad2");
document.write(rangoEdad2);
document.write("<br>");
document.write("<hr>");

// setAttribute() - modifica el valor de un atributo
rangoEdad2.setAttribute("type","text");

const rangoEdad3 = document.querySelector(".rangoEdad3");
rangoEdad3.setAttribute("type","color");

// getAttribute() - obtiene el valor de un atributo
document.write(rangoEdad3.getAttribute("type"));
document.write("<br>");
document.write("<hr>");

// removeAttribute() - remueve el valor de un atributo
const checkbox = document.querySelector(".only-check");
checkbox.removeAttribute("type");


// Atributos globales
const tituloH1 = document.querySelector(".titulo-h1");

// contentEditable: indica si el elemento puede ser modificable por el usuario (bool)
tituloH1.setAttribute("contenteditable","true");

// dir: indica la direccionalidad del texto (hacerlo preferiblemente desde CSS)
tituloH1.setAttribute("dir", "ltr"); // ltr y rtl

// hidden: indica si el elemento aún no es, o ya no es, relevante
const tituloH2 = document.querySelector(".titulo-h2");
tituloH2.removeAttribute("hidden");

// tabIndex: indica si el elemento puede obtener un focus de input
const enlace = document.querySelector(".enlace");
enlace.setAttribute("tabindex","0");

// title: contiene un texto con información relacionada al elemento al que pertenece
const tituloH3 = document.querySelector(".titulo-h3");
tituloH3.setAttribute("title","descripción del titulo cambiada desde JS");


// Atributos de inputs
const input = document.querySelector(".input-normal");

// className
document.write(input.className);

// value
document.write(input.value);

// type
input.type = "password";

// accept
const archivo = document.querySelector(".input-file");
archivo.accept = "image/png";

// form
const submit = document.querySelector(".btn-submit");
submit.form = "formulario";

// minLength
const inputForm = document.querySelector(".input-form");
inputForm.minLength = 5;

// placeholder

// required


// Atributo style
const tituloStyle = document.querySelector(".titulo-h2-style");
tituloStyle.style.color = "red";
tituloStyle.style.backgroundColor = "yellow";
tituloStyle.style.padding = "30px";


// Clases, classList y métodos de classList
const tituloClase = document.querySelector(".titulo-clase");

// add(): añade una clase
tituloClase.classList.add("grande");

// remove(): remueve una clase
tituloClase.classList.remove("otra-clase");

// item(): devuelve la clase del indice especificado
console.log(tituloClase.classList.item(2));

// contains(): verifica si el elemento posee o no, la clase especificada
console.log(tituloClase.classList.contains("rojo"));

// toggle(): si no tiene la clase especificada, la agrega, si ya la tiene, la elimina
tituloClase.classList.toggle("blanco");
tituloClase.classList.toggle("negro",false); // forza a que se elimine o se agregue la clase

// replace(): reemplaza una clase por otra
tituloClase.classList.replace("blanco","azul");


// Obtención y modificación de elementos
const tituloMod = document.querySelector(".titulo-mod");

// textContent - devuelve el texto de cualquier nodo sin incluir el html
let resultado = tituloMod.textContent;
console.log(resultado);

// innerText - devuelve el texto visible de un node element
// ya no se usa mas

// outerText - devuelve el texto de las etiquetas html incluidas las etiquetas
// ya no se usa mas

// innerHTML - devuelve el contenido html de un elemento
resultado = tituloMod.innerHTML;
console.log(resultado);

// outerHTML - devuelve el código html completo del elemento
resultado = tituloMod.outerHTML;
console.log(resultado);