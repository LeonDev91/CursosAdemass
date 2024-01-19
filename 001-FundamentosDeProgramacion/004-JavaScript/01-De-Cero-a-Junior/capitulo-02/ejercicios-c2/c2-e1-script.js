let free = false;

const validarCliente = (time) => {
  let edad = prompt("¿Cuál es tu edad?");
  if(edad >= 18){
    if(time >= 2 && time < 7 && free == false) {
      alert("Puedes pasar gratis porque sos la primer persona después de las 2 AM");
      free == true;
    }
    else{
      alert(`Son las ${time}:00Hs y puedes pasar pero debes pagar la entrada`);
    }
  }
  else{
    alert("Eres menor de edad, no puedes pasar.");
  }
}

validarCliente(23);
validarCliente(24);
validarCliente(10);
validarCliente(9);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);