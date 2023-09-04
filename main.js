// let credencialesValidas = false;
// do {
//     let usuario = prompt("ingrese su usuario");
//     let password = prompt("ingrese su contraseña")
//     if (usuario === "Sandman" && password === "coderhouse") {
//         credencialesValidas = true
//     } else {
//         alert("credenciales invalidas")
//     }
// } while (!credencialesValidas)
// alert("Bienvenido a THEEDGEFITNESS")

let nombreDeportista = prompt("Ingresa tu nombre").toUpperCase();

let apellidoDeportista = prompt("Ingresa tu apellido").toUpperCase()


const dias = [
    {
        dia: "Lunes",
    },
    {
        dia: "Martes",
    },
    {
        dia: "Miercoles",
    },
    {
        dia: "Jueves",
    },
    {
        dia: "Viernes",
    },
    {
        dia: "Sabado",
    },


]

const horarios = [
    {
        hora: `8.00`,
    },
    {
        hora: "10.00",
    },
    {
        hora: "12.00",
    },
    {
        hora: "14.00",
    },
    {
        hora: "16.00",
    },
    {
        hora: "18.00",
    },
    {
        hora: "20.00",
    },
]

const entrenadores = [
    {
        Entrenador: "Michael Phelps",
        Actividad: "NATACION",
    },
    {
        Entrenador: "Rocky Balboa",
        Actividad: "GIMNASIO",
    },
    {
        Entrenador: "Jen Smith",
        Actividad: "CROSSFIT",
    },
]

const actividades = [
    {
        nombre: "NATACION",
        id: 1,
    },
    {
        nombre: "GIMNASIO",
        id: 2,
    },
    {
        nombre: "CROSSFIT",
        id: 3,
    },
]

function claseAgendada() {
    alert(`${nombreDeportista} ${apellidoDeportista} su clase quedo agendada con el profesor ${Entrenador} de ${seleccionActividad} el dia ${seleccionDia} a las ${seleccionHora}`);
};

function actividadDia(valor) {
    return (`Seleccione una opcion de su preferencia: \n\n${valor}`);
}


let listaActividades = actividades.map((el) => `${el.nombre}`).join("\n")

let listaDias = dias.map((el) => `${el.dia}`).join("\n");

let listaHorarios = horarios.map((el) => `${el.hora} hs.`).join("\n");

let seleccionActividad = prompt(`Bienvenido ${nombreDeportista} ${apellidoDeportista} estas son nuestras actividades:\n\n${listaActividades} \n\nSeleccione una actividad:`).toUpperCase();



switch (seleccionActividad) {
    case "NATACION":
        seleccionActividad = "NATACION"
        seleccionDia = prompt(actividadDia(listaDias)).toUpperCase();
    case "GIMNASIO":
        seleccionActividad = "GIMNASIO"
        seleccionDia = prompt(actividadDia(listaDias)).toUpperCase();
    case "CROSSFIT":
        seleccionActividad = "CROSSFIT"
        seleccionDia = prompt(actividadDia(listaDias)).toUpperCase();
    default:
        alert(`Lo lamento ${seleccionActividad} no es una de nuestras actividades disponibles. Para volver a empezar seleccione F5`);
        break;
}

const entrenadorFiltrado = entrenadores.filter(entrenadores => entrenadores.Actividad === seleccionActividad);

const Entrenador = entrenadorFiltrado.map(entrenadores => entrenadores.Entrenador);


switch (seleccionDia) {
    case "LUNES":
        seleccionDia = "LUNES"
        seleccionHora = prompt(actividadDia(listaHorarios)).toUpperCase();
        break;

    case "MARTES":
        seleccionDia = "MARTES"
        seleccionHora = prompt(actividadDia(listaHorarios)).toUpperCase();
        break;

    case "MIERCOLES":
        seleccionDia = "MIERCOLES"
        seleccionHora = prompt(actividadDia(listaHorarios)).toUpperCase();
        break;

    case "JUEVES":
        seleccionDia = "JUEVES"
        seleccionHora = prompt(actividadDia(listaHorarios)).toUpperCase();
        break;

    case "VIERNES":
        seleccionDia = "VIERNES"
        seleccionHora = prompt(actividadDia(listaHorarios)).toUpperCase();
        break;

    case "SABADO":
        seleccionDia = "SABADO"
        seleccionHora = prompt(actividadDia(listaHorarios)).toUpperCase();
        break;

    default:
        alert("Lo lamento debe seleccionar algun dia de la lista. Para volver a empezar seleccione F5")
        break;
}


const errorHorario = horarios.some(incluye => incluye.hora.includes(seleccionHora));

if (errorHorario) {
    claseAgendada()
} else {
    alert("Lo lamento debe seleccionar algun horario de la lista. Para volver a empezar seleccione F5")
}
