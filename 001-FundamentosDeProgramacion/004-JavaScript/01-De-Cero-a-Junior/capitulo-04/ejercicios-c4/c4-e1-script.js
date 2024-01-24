class Calculadora {
  constructor(){}

  sumar(num1,num2) {
    return parseInt(num1) + parseInt(num2);
  }
  restar(num1,num2) {
    return parseInt(num1) - parseInt(num2);
  }
  multiplicar(num1,num2) {
    return parseInt(num1) * parseInt(num2);
  }
  dividir(num1,num2) {
    return parseInt(num1) / parseInt(num2);
  }
  potenciar(num,exp) {
    return num**exp;
  }
  raizCuadrada(num) {
    return Math.sqrt(num);
  }
  raizCubica(num) {
    return Math.cbrt(num);
  }
}

const calc = new Calculadora();

alert("Qué operación deseas realizar?");
let operacion = prompt("1: suma,  2: resta,  3: multiplicación,  4: división,  5: potenciación,  6: raíz cuadrada,  7: raíz cúbica");

if(operacion == 1) {
  let numero1 = prompt("Primer número para sumar");
  let numero2 = prompt("Segundo número para sumar");
  let resultado = calc.sumar(numero1,numero2);
  alert(`Tu resultado es ${resultado}`);
}
else if(operacion == 2) {
  let numero1 = prompt("Primer número para restar");
  let numero2 = prompt("Segundo número para restar");
  let resultado = calc.restar(numero1,numero2);
  alert(`Tu resultado es ${resultado}`);
}
else if(operacion == 3) {
  let numero1 = prompt("Primer número para multiplicar");
  let numero2 = prompt("Segundo número para multiplicar");
  let resultado = calc.multiplicar(numero1,numero2);
  alert(`Tu resultado es ${resultado}`);
}
else if(operacion == 4) {
  let numero1 = prompt("Primer número para dividir");
  let numero2 = prompt("Segundo número para dividir");
  let resultado = calc.dividir(numero1,numero2);
  alert(`Tu resultado es ${resultado}`);
}
else if(operacion == 5) {
  let numero1 = prompt("Número a potenciar");
  let numero2 = prompt("Exponente");
  let resultado = calc.potenciar(numero1,numero2);
  alert(`Tu resultado es ${resultado}`);
}
else if(operacion == 6) {
  let numero1 = prompt("Conocer la raíz cuadrada de");
  let resultado = calc.raizCuadrada(numero1);
  alert(`Tu resultado es ${resultado}`);
}
else if(operacion == 7) {
  let numero1 = prompt("Conocer la raíz cúbica de");
  let resultado = calc.raizCubica(numero1);
  alert(`Tu resultado es ${resultado}`);
}
else{
  alert("No se ha encontrado la operación");
}