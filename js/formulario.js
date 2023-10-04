import { traerProfesores } from "./index.js";
//importo la función asíncrona

//traigo elementos del html y declaro variables necesarias para poder trabajar

let formulario = document.getElementById("formulario");
let nombreDeportista;
let dni;
let telefono;
let staffProfesores;

//inserto los datos de los profesionales en el formulario que voy a utilizar para que el deportista agendela clase

async function modificarFormulario() {
    const datos= await traerProfesores();
    if (datos){
        staffProfesores = document.getElementById("staffProfesores");
        for (let i = 0; i < datos.length; i++) {
            let option = document.createElement("option");
            option.innerHTML = datos[i].nombre;
            option.value= datos[i].id;
            staffProfesores.appendChild(option);
    }}
}
modificarFormulario();

//declaro un objeto para carga de los deportista
class Deportista {
    constructor(nombreDeportista, dni, telefono) {
        this.nombreDeportista = nombreDeportista;
        this.dni = dni;
        this.telefono = telefono;
    }
}

//declaro otras variables necesarias para trabajar en el evento del formulario
let agenda= [];
let profesorSeleccionado;
let fecha;
let fechaObjeto;
let fechaFormateada;
let hora;
let deportista1;

//genero el evento del formulario para que el deportista cargue sus datos.
//En el adquiero el valor del nombre, dni, telefono del deportista, y que selecciones fecha, hora y profesor.
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    nombreDeportista = document.getElementById("nombreDeportista").value;
    dni = document.getElementById("dni").value;
    telefono = document.getElementById("telefono").value;
    fecha=document.getElementById("fecha").value;
    fechaObjeto = moment(fecha);
    fechaFormateada = fechaObjeto.format("DD/MM/YYYY");
    hora=document.getElementById("hora").value;
    profesorSeleccionado= document.getElementById("staffProfesores").value;

    //con las reglas valido los datos que me ingresa el deportista
    let reglaNombreDeportista = isNaN(nombreDeportista);
    let reglaDni = Number(dni) > 0;
    let reglaTelefono = Number(telefono) > 0;
    if (reglaNombreDeportista === true && reglaDni === true && reglaTelefono === true) {
        deportista1 = new Deportista(nombreDeportista, dni, telefono); //genero el objeto deportista
        localStorage.setItem("deportista1", JSON.stringify(deportista1)) //interactúo con el local storage
        agregarClase(); //llamo a la función para agregar la clase
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Clase Agendada con éxito',
            showConfirmButton: false,
            timer: 1000
        });
        setTimeout(()=> {
            window.location.href = "/pages/clases.html";
        }, 1500);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Sus datos no fueron cargados correctamente, por favor realice nuevamente su selección'
        })
    }
    formulario.reset();
})

async function agregarClase (){
    agenda = JSON.parse(localStorage.getItem("clase"))||[];//evalúo si en el localstorage hay alguna clase almacenada, caso contrario la variable se encuentra vacía
    const profesores = await traerProfesores();
    const profesorElegido = profesores.find(profesor => profesor.id === parseInt(profesorSeleccionado));
    profesorElegido.fecha = fechaFormateada;
    profesorElegido.hora = hora;
    agenda.push(profesorElegido);
    localStorage.setItem("clase", JSON.stringify(agenda));//envío la nueva elección al localstorage
}