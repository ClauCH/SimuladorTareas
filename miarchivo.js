
class usuario {
    constructor(usuario, contraseña) {
        this.usuario = usuario;
        this.contraseña = contraseña;
    }

}


class Tarea {
    constructor(nombre, descripcion, fechaLimite, estado, tipo, importante) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fechaLimite = fechaLimite;
        this.estado = estado;
        this.tipo = tipo;
        this.importante;
    }


    terminarUnaTarea() {

        this.estado = "Finalizada";
        return console.log(`Tarea:${this.nombre} se encuentra ${this.estado}`);

    }



}
function listarTodaslastareas() {
    console.log(`${usuario1.usuario} se muestran todas tus tareas:`);
    console.log(`Nombre de la tarea:${Tarea1.nombre} Estado:${Tarea1.estado}`);
    console.log(`Nombre de la tarea:${Tarea2.nombre} Estado:${Tarea2.estado}`);
    console.log(`Nombre de la tarea:${Tarea3.nombre} Estado:${Tarea3.estado}`);
}

function listarTareasFinalizadas() {
    console.log(`${usuario1.usuario} se muestran tus tareas finalizadas:`);
    if (Tarea1.estado == "Finalizada") {
        console.log(`Nombre de la tarea:${Tarea1.nombre}`);
    }

    if (Tarea2.estado == "Finalizada") {
        console.log(`Nombre de la tarea:${Tarea2.nombre}`);
    }
    if (Tarea3.estado == "Finalizada") {
        console.log(`Nombre de la tarea:${Tarea3.nombre}`);
    }
}

function listarTareasPendientes() {
    console.log(`${usuario1.usuario} se muestran tus tareas pendientes:`);
    if (Tarea1.estado == "Pendiente") {
        console.log(`Nombre de la tarea:${Tarea1.nombre}`);
    }
    if (Tarea2.estado == "Pendiente") {
        console.log(`Nombre de la tarea:${Tarea2.nombre}`);
    }
    if (Tarea3.estado == "Pendiente") {
        console.log(`Nombre de la tarea:${Tarea3.nombre}`);
    }
}




let Tarea1 = new Tarea("Estudiar matematicas", "Estudiar modulo 1 y 2 de ecuaciones", new Date("01/04/2022"), "Pendiente", "Estudio", true);
let Tarea2 = new Tarea("Pintar las rejas", "Ver que no llueva",new Date("20/04/2022"), "Finalizada", "Tareas del hogar", false);
let Tarea3 = new Tarea("Estudiar biologia", "Descripcion objeto3", new Date("12/04/2022"), "Pendiente", "Estudio", true);
let usuario1 = new usuario("Clau12", "1234");

let usuarioIngresado = prompt("Ingresa tu usuario:");
let contrasenaIngresada = prompt("Ingresa tu contraseña:");

if (usuario1.usuario == usuarioIngresado && contrasenaIngresada == usuario1.contraseña) {
    alert("Podes ingresar y por consola vas a poder ver el listado de tareas");
    console.log(`Bienvenida:${usuario1.usuario}`);
    listarTodaslastareas()
    console.log(" ");
    listarTareasFinalizadas();
    console.log(" ");
    listarTareasPendientes();
    console.log(" ");
    //finalizo la tarea 1
    Tarea1.terminarUnaTarea();
    console.log(" ");
    listarTareasFinalizadas();

}
else {
    alert("No podes ingresar a ver tus tareas");
}


