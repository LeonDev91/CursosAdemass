let sospechoso1 = prompt("¿El sospechoso 1 mintió?");
let sospechoso2 = prompt("¿El sospechoso 2 mintió?");
let cofla = prompt("¿Cofla mintió?");

if(sospechoso1 == 1){
  alert("¡Sospechoso 1 mintió! ¡Dale la descarga eléctrica!");
}
else if(sospechoso1 == 2){
  alert("El sospechoso 1 no mintió. No darle la descarga eléctrica.");
}
else{
  alert("No sé si el sospechoso 1 mintió. Probemos de nuevo.");
}

if(sospechoso2 == 1){
  alert("¡Sospechoso 2 mintió! ¡Dale la descarga eléctrica!");
}
else if(sospechoso2 == 2){
  alert("El sospechoso 2 no mintió. No darle la descarga eléctrica.");
}
else{
  alert("No sé si el sospechoso 2 mintió. Probemos de nuevo.");
}

if(cofla == 1){
  alert("¡Cofla mintió! ¡Dale la descarga eléctrica!");
}
else if(cofla == 2){
  alert("Cofla no mintió. No darle la descarga eléctrica.");
}
else{
  alert("No sé si Cofla mintió. Probemos de nuevo.");
}