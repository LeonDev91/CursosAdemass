let dinero = prompt("¿Cuánto dinero te dio Cofla?");
let boleto = prompt("¿Cuánto cuesta el boleto?");

if(dinero/boleto < 1){
	alert("No te alcanza para los boletos");
}
else if(dinero/boleto >= 1 && dinero/boleto < 2){
	let vuelto = dinero - boleto;
	alert("Compra 1 y el vuelto es: " + vuelto);
}
else if(dinero/boleto >= 2 && dinero/boleto < 3){
	let vuelto = dinero - boleto*2;
	alert("compra 2 y el vuelto es: " + vuelto);
}
else{
	vuelto = dinero - boleto*2;
	alert("Compra 2 y el vuelto es: " + vuelto + ", regalarlo");
}