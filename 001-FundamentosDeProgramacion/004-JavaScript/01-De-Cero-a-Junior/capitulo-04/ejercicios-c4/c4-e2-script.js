const obtenerInformacion = (materia)=>{
  const materias = {
    fisica: ["perez","pedro","pepe","cofla","maria"],
    programacion: ["rodriguez","pedro","juan","pepe",],
    logica: ["hernandez","pedro","juan","pepe","cofla","maria"],
    quimica: ["diaz","pedro","juan","pepe","cofla","maria"],
  }

  if(materias[materia] !== undefined){
    return [materias[materia],materia,materias];
  }
  else{
    return materias;
  }
}

const mostrarInformacion = (materia)=>{
  let informacion = obtenerInformacion(materia);
  if(informacion !== false){
    let profesor = informacion[0][0];
    let alumnos = informacion[0];
    alumnos.shift();
    document.write(`El profesor de ${informacion[1]} es: ${profesor}<br>
    Los alumnos son: ${alumnos}<br><br>`);
  }
}

const cantidadDeClases = (alumno)=>{
  let informacion = obtenerInformacion();
  let clasesPresentes = [];
  let cantidadTotal = 0;
  for(info in informacion){
    if(informacion[info].includes(alumno)){
      cantidadTotal++;
      clasesPresentes.push(" " + info);
    }
  }
  return `${alumno} está en ${cantidadTotal} clases:${clasesPresentes}<br><br>
  `;
}

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");

document.write(cantidadDeClases("cofla"));
document.write(cantidadDeClases("pedro"));