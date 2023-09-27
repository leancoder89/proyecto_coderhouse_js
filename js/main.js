const arrayDeportista = [];
const claseAgendada = {
    nombre: "",
    apellido: "",
    actividad: "",
    entrenador: "",
    fecha: "",
    hora: "",
};

const variasClases = [];

const actividades = [
    "NATACION",
    "GIMNASIO",
    "CROSSFIT",
];
const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const horarios = [
    "8.00",
    "10.00",
    "12.00",
    "14.00",
    "16.00",
    "18.00",
    "20.00",
];
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
];

let formulario = document.getElementById("datosDeportista");
let plantillaDeportista = document.getElementById("spanSeparador")
let actividadSeleccionada;
let diaSeleccionado;
let horaSeleccionada;
let fechaSinHorario;

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    nombreDeportista = document.getElementById("nombre").value;
    apellidoDeportista = document.getElementById("apellido").value;

    sessionStorage.setItem("nombre", nombreDeportista);
    sessionStorage.setItem("apellido", apellidoDeportista);

    agregarDeportista(nombreDeportista, apellidoDeportista);
    tagDeportista();
});

function agregarDeportista(nombre, apellido) {
    claseAgendada.nombre = nombre;
    claseAgendada.apellido = apellido;
}

function tagDeportista() {

    let displayLista = document.getElementById("lista1");
    displayLista.style.display = "flex";

    mostrarActividades();
}

function mostrarActividades() {

    if ((claseAgendada.nombre != undefined && claseAgendada.apellido != undefined)) {
        let ulActividad = document.getElementById("listaActividad");
        let spanActividad = document.getElementById("spanActividad");
        ulActividad.innerHTML = "";

        spanActividad.innerHTML = `<span class="loader"></span>`;

        setTimeout(() => {

            spanActividad.innerHTML = `Seleccione una Actividad:<br><br>`;

            actividades.forEach(function (actividad, index) {
                let selectActividad = document.createElement("input");
                selectActividad.type = "radio";
                selectActividad.id = `actividad` + index;
                selectActividad.name = "actividad";
                selectActividad.value = `${actividad}`;

                let label = document.createElement("label");
                label.setAttribute("for", "actividad" + index);
                label.textContent = actividad;

                ulActividad.appendChild(selectActividad);
                ulActividad.appendChild(label);
                ulActividad.appendChild(document.createElement("br"));
            });

            let seleccion1 = document.querySelectorAll(
                'input[type="radio"][name="actividad"]'
            );

            seleccion1.forEach(function (radio) {
                radio.addEventListener("change", function () {
                    if (radio.checked) {
                        actividadSeleccionada = radio.value;
                    }
                    agregarActividad(actividadSeleccionada);
                });
            });
        },1500 );

        let displayLista = document.getElementById("datosDeportista");
        displayLista.style.display = "none";
    }
}

function agregarActividad(actividadSeleccionada) {

    claseAgendada.actividad = actividadSeleccionada;
    seleccionDia();

    let loaderCal = document.getElementById("cajaLoader");
    loaderCal.style.display = "flex";

    setTimeout(() => {
        loaderCal.style.display = "none";
        let calendario = document.getElementById("calendarBox");
        calendario.style.display = "flex";
        calendar.updateSize();
    }, 1500)

}

function seleccionDia() {
    if (actividadSeleccionada != undefined) {

        let displayActividad = document.getElementById("lista1");
        displayActividad.style.display = "none";
    }
}


function agregarDia() {

    claseAgendada.fecha = fechaSinHorario;

    let displayHoras = document.getElementById("lista2");
    displayHoras.style.display = "flex";
    seleccionHora();

}


function seleccionHora() {

    let ulHora = document.getElementById("listaHorarios");
    let spanHora = document.getElementById("spanHora");
    ulHora.innerHTML = "";
    spanHora.innerHTML = `<span class="loader"></span>`

    setTimeout(() => {
        spanHora.innerHTML = `Por favor seleccione un Horario disponible para su clase del día <strong>${fechaSinHorario}</strong> de <strong>${actividadSeleccionada}</strong> <br><br>`;

        horarios.forEach(function (hora, index) {
            let selectHora = document.createElement("input");
            selectHora.type = "radio";
            selectHora.name = "hora";
            selectHora.id = "horas" + index;
            selectHora.value = `${hora}`;

            let label = document.createElement("label");
            label.setAttribute("for", "horas" + index);
            label.textContent = hora;

            ulHora.appendChild(selectHora);
            ulHora.appendChild(label);
            ulHora.appendChild(document.createElement("br"));
        });

        let seleccion3 = document.querySelectorAll(
            'input[type="radio"][name="hora"]'
        );

        seleccion3.forEach(function (radio) {
            radio.addEventListener("change", function () {
                if (radio.checked) {
                    horaSeleccionada = radio.value;
                }
                agregarHora(horaSeleccionada);
            });
        });
    }, 1500);
    let displayDias = document.getElementById("calendarBox");
    displayDias.style.display = "none";
}

function agregarHora(horaSeleccionada) {

    claseAgendada.hora = horaSeleccionada;

    let claseAString = JSON.stringify(claseAgendada);
    sessionStorage.setItem("claseStoreada", claseAString);
    claseFinal();
}

function claseFinal() {
    if (sessionStorage.getItem("claseStoreada")) {

        claseRecuperada = JSON.parse(sessionStorage.getItem("claseStoreada"))

        let entrenadorFiltrado = entrenadores.filter(
            (entrenadores) => entrenadores.Actividad === claseRecuperada.actividad
        );

        let entrenador = entrenadorFiltrado.map((entrenadores) => entrenadores.Entrenador);

        claseAgendada.entrenador = entrenador;

        let textoFinal = document.getElementById("clase");
        textoFinal.innerHTML = `${nombreDeportista.toUpperCase()} ${apellidoDeportista.toUpperCase()}, su clase quedo agendada con: ${entrenador} de ${actividadSeleccionada} el día ${fechaSinHorario} a las ${horaSeleccionada}hs.`;

        let displayHoras = document.getElementById("lista2");
        displayHoras.style.display = "none";
        let displayTurno = document.getElementById("claseFinal")
        displayTurno.style.display = "flex"

        const nuevaClase = { ...claseAgendada };
        variasClases.push(nuevaClase);
        localStorage.setItem("variasClases", variasClases)

        botonesDeTrunos();

    } else {
        window.location.href = "../index.html";
    };
}

function botonesDeTrunos() {

    let botones = document.getElementById("botones");
    botones.innerHTML = "";

    const boton1 = document.createElement("button");
    boton1.textContent = "Agendar otra clase";
    boton1.id = "nuevaClase";
    boton1.className = "nuevaClase submit btn btn-dark";
    boton1.onclick = volverArriba;

    const boton2 = document.createElement("button");
    boton2.textContent = "Ver clases agendadas";
    boton2.id = "todasLasClases";
    boton2.className = "todasLasClases submit btn btn-dark";
    boton2.onclick = mostrarClases;

    botones.appendChild(boton1);
    botones.appendChild(boton2);
}

function volverArriba() {

    let displayTurno = document.getElementById("claseFinal")
    displayTurno.style.display = "none"

    tagDeportista();
}

function mostrarClases() {

    let contenedorCard = document.getElementById("clasesAgendadas");

    variasClases.forEach(function (clase, index) {

        let card = document.createElement("div");
        card.className = "clase-card";
        card.textContent = `clase ${index + 1}: de ${clase.actividad} con ${clase.entrenador} el día ${clase.fecha} a ${clase.hora}`;

        contenedorCard.appendChild(card);

        let displayClase = document.getElementById("claseFinal")
        displayClase.style.display = "none"
    })
};


