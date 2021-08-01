let moduloTareas = require("./tareas"); // TRAE EL MODULO TAREAS
let process = require("process"); //PARA PODER LEER LOS PARAMETROS QUE SE PASEN POR CONSOLA
let comando = process.argv[2]; //ESTABLECER METODO ARGV

//ESTRUCTURA PARA MOSTRAR YA EL LISTADO YA PARCEADO
console.log("Tus comandos son  listar,agregar,deshacer y filtrar")
console.log("°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°")
switch (comando) {
  case "listar":
    let tareas = moduloTareas.leerJSON(); //traer lo que procesamos tareas
    if (tareas.length === 0) {
      console.log("la lista de tareas esta vacia");
    } else {
      console.log(
        "°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°"
      );
      console.log(
        "               ESTA ES TU LISTA DE LIBROS CON SU ESTADO DE LECTURA                                "
      );
      console.log(
        "°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°"
      );
      for (let i = 0; i < tareas.length; i++) {
        console.log(
          "Titulo del libro(autor):" +
            tareas[i].titulo +
            " ||Estado de lectura:" +
            tareas[i].estado +
            "."
        );
      }
    }

    break;
  case "agregar":
    let titulo = process.argv[3];
    let estado = "pendiente";
    moduloTareas.escribirJSON(titulo, estado);
    break;
  case "deshacer":
    moduloTareas.deshacer();
    break;

  case "filtrar":
    let estado2 = process.argv[3];
    let tareasFiltradas = moduloTareas.filtrar(estado2);
    if (tareasFiltradas.length === 0) {
      console.log("la lista de tareas esta vacia");
    } else {
      console.log("°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°");
      console.log("    Esta es tu lista de libros  filtrados ");
      console.log("======================================================================================================")
      console.log("Podes filtrar tus libros para ver tu estado de lectura con  (leido,en proceso e inconcluso)")
      console.log("°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°");
      for (let i = 0; i < tareasFiltradas.length; i++) {  console.log( "Titulo del libro(autor):" +  tareasFiltradas[i].titulo +" ||Estado de lectura:" +  tareasFiltradas[i].estado + "."
        );
      }
    }
    break;
  case undefined:
    console.log("         Atencion!!Tienes que pasar una accion de la lista de comandos                    ");
    console.log("°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°");
    break;
  default:
    console.log("Atencion-Ingreso una accion no valida ");
}
