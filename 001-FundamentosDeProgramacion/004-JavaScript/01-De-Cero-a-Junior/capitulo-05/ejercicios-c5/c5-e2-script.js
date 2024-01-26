let trabajo = "240 minutos de trabajo";
let estudio = "100 minutos de estudio";
let trabajoPractico = "100 minutos de trabajo práctico";
let tareasHogar = "30 minutos de tareas del hogar";
let descanso = "10 minutos de descanso";

console.log("TAREAS");
for(let i=0; i<14; i++){
  if(i == 0){
    console.group("SEMANA 1");
  }
  console.groupCollapsed("Día " + (i+1));
  console.log(trabajo);
  console.log(descanso);
  console.log(estudio);
  console.log(trabajoPractico);
  console.log(tareasHogar);
  console.groupEnd();
  if(i == 6){
    console.groupEnd();
    console.groupCollapsed("SEMANA 2");
  }
}
console.groupEnd();
console.groupEnd();