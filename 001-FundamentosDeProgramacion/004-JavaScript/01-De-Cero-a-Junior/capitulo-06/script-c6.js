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

// getElementsByTagName() - selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada

// querySelector() - devuelve el primer elemento que coincida con el grupo especificado de selectores

// querySelectorAll() - devuelve todos los elementos que coincidan con el grupo especificado de selectores


let parrafo = document.getElementById("parrafo");
document.write(parrafo);
document.write("<br>");
document.write("<hr>");

parrafo = document.getElementsByTagName("p");
document.write(parrafo); // devuelve una lista de elementos
document.write("<br>");
document.write(parrafo[0]);
document.write("<br>");
document.write(parrafo[1]);
document.write("<br>");
document.write("<hr>");

parrafo = document.querySelector(".parrafo3");
document.write(parrafo);
document.write("<br>");
parrafo = document.querySelector("#parrafo2"); // document.getElementById() es más óptimo cuando se trata de seleccionar por ID
document.write(parrafo);
document.write("<br>");
document.write("<hr>");

parrafo = document.querySelectorAll(".parrafo3");
document.write(parrafo);
document.write("<br>");
document.write(parrafo[3]);
document.write("<br>");