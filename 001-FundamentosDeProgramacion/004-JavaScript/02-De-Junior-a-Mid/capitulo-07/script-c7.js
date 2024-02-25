// window

// open()
let youtubeURL = "https://youtube.com";
let ventanaYoutube = window.open(youtubeURL);

// close()
//wYoutube.close();

// closed - verifica si la ventana está cerrada o no
console.log(ventanaYoutube.closed);

// stop() - para la carga de la ventana
let facebookURL = "https://facebook.com";
let ventanaFacebook = window.open(facebookURL);
ventanaFacebook.stop();