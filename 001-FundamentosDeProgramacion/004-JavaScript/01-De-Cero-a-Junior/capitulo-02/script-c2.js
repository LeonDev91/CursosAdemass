// Arrays
let arr = ["juan", 32, "colombia"];
let carnes = ["res", "cerdo", "pollo", "pescado", "cuy", "conejo", "cordero"];
//alert(arr);
document.write(`<p>carnes</p>`);
let elemento = carnes[0];
document.write(`<p>${elemento}</p>`);

let varios = ["leonardo", 30, "argentina", "veronica", 25, "polonia"];
let nombre = varios[3];
document.write(`<p>${nombre}</p>`);

// Arrays asociativos
let pc = {
  nombre: "dell",
  procesador: "AMD Ryzen 5 3450u",
  ram: "16 GB",
  almacenamiento: "1 TB"
}

let componente = pc["procesador"];
document.write(`<p>${componente}</p>`);