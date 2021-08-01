let fs = require("fs"); // SE ENCARGA DE LEER MI ARCHIVO
//MODULO  QUE ES UN OBJETO CON UN MONTON DE METODOS
module.exports = moduloTareas = {
  //LEER JSON Y DEVOLVERLO YA PARCEADO
  leerJSON: () => {
    let listaDeTareas = fs.readFileSync("./tareas.json", "utf-8"); //GUARDAR DENTRO DE UNA VARIABLE EL ARCHIVO JSON QUE SE TRAE
    return JSON.parse(listaDeTareas); // LISTA DE TAREAS YA PARCEADA
  },
  escribirJSON: (titulo, estado) => {
    let nuevaTarea ={
      titulo:titulo,
      estado:estado,
    }
    let tareasAnteriores = moduloTareas.leerJSON();
    tareasAnteriores.push(nuevaTarea);
    moduloTareas.guardarJSON(tareasAnteriores)

  },
  guardarJSON: (info) => {
      let nuevoJSON = JSON.stringify(info)
      fs.writeFileSync('./tareas.json', nuevoJSON, 'utf-8')
  },
  deshacerJSON: () => {
    let tareas =moduloTareas.leerJSON();
    tareas.pop();
    moduloTareas.guardarJSON(tareas)
  },
  filtrar:(estado) =>{
    let tareas = moduloTareas.leerJSON();
    let tareasFiltradas =tareas.filter(tarea => {
      return tarea.estado.toLowerCase() === estado.toLowerCase()
    })
      return tareasFiltradas
  }
};
