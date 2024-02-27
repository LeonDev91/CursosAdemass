// window

// open() - carga un recurso en el contexto de un nuevo navegador o uno que ya existe
let youtubeURL = "https://youtube.com";
let ventanaYoutube = window.open(youtubeURL);

// close() - cierra la ventana actual, o la ventana en la que se llamó
//wYoutube.close();

// closed - indica si la ventana referenciada está cerrada o no
console.log(ventanaYoutube.closed);

// stop() - detiene la carga de recursos en el contexto de navegación actual
let facebookURL = "https://facebook.com";
let ventanaFacebook = window.open(facebookURL);
ventanaFacebook.stop();

// alert() - muestra un cuadro de alerta con el contenido especificado y un botón aceptar
window.alert("Mensaje de prueba - window.alert()"); // o simplemente alert()

// print() - abre el cuadro de diálogo imprimir para imprimir el documento actual
//window.print(); // o simplemente print()