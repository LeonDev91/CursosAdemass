let materias = {
  fisica: ["perez","pedro","pepe","cofla","maria"],
  programacion: ["rodriguez","pedro","juan","pepe",],
  logica: ["hernandez","pedro","juan","pepe","cofla","maria"],
  quimica: ["diaz","pedro","juan","pepe","cofla","maria"],
}

const inscribir = (alumno,materia)=>{
  let personas = materias[materia];
  let alumnos = personas;

  if(personas.length >= 21) {
    document.write(`Lo siento ${alumno}, las clases de ${materia} ya están llenas<br>`)
  }
  else{
    personas.push(alumno);
    if(materia == "fisica"){
      materias = {
        fisica: personas,
        programacion: materias['programacion'],
        logica: materias['logica'],
        quimica: materias['quimica'],
      }
    }
    else if(materia == "programacion"){
      materias = {
        fisica: materias['fisica'],
        programacion: personas,
        logica: materias['logica'],
        quimica: materias['quimica'],
      }
    }
    else if(materia == "logica"){
      materias = {
        fisica: materias['fisica'],
        programacion: materias['programacion'],
        logica: personas,
        quimica: materias['quimica'],
      }
    }
    else if(materia == "quimica"){
      materias = {
        fisica: materias['fisica'],
        programacion: materias['programacion'],
        logica: materias['logica'],
        quimica: personas,
      }
    }
    document.write(`Felicidades ${alumno} te has inscrito a ${materia} correctamente<br>`);
  }
}

document.write(materias['fisica'] + "<br>");
inscribir("pablo","fisica");
inscribir("andres","fisica");
inscribir("sergio","fisica");
inscribir("orlando","fisica");
inscribir("pablo","fisica");
inscribir("andres","fisica");
inscribir("sergio","fisica");
inscribir("orlando","fisica");
inscribir("pablo","fisica");
inscribir("andres","fisica");
inscribir("sergio","fisica");
inscribir("orlando","fisica");
inscribir("pablo","fisica");
inscribir("andres","fisica");
inscribir("sergio","fisica");
inscribir("orlando","fisica");
inscribir("pablo","fisica");
inscribir("andres","fisica");
inscribir("sergio","fisica");
inscribir("orlando","fisica");
inscribir("pablo","fisica");
inscribir("andres","fisica");
inscribir("sergio","fisica");
inscribir("orlando","fisica");

document.write("<br>" + materias['fisica'] + "<br>");
