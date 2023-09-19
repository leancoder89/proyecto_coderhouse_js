const arrayDeportista = [];
const claseAgendada = [];
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

let actividadSeleccionada;
let diaSeleccionado;
let horaSeleccionada;

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    nombreDeportista = document.getElementById("nombre").value;
    apellidoDeportista = document.getElementById("apellido").value;

    sessionStorage.setItem("nombre", nombreDeportista);
    sessionStorage.setItem("apellido", apellidoDeportista);

    agregarDeportista(nombreDeportista, apellidoDeportista);
});

function agregarDeportista(nombre, apellido) {
    const deportista1 = {
        nombre,
        apellido,
    };
    arrayDeportista.push(deportista1);
    claseAgendada.push(deportista1);
    mostrarActividades();

    let displayLista = document.getElementById("lista");
    displayLista.style.display = "flex";
}

function mostrarActividades() {
    if (arrayDeportista.length > 0 && claseAgendada.length > 0) {
        let ulActividad = document.getElementById("listaActividad");
        let spanActividad = document.getElementById("spanActividad");

        spanActividad.innerHTML = `Bienvenido <strong>${nombreDeportista.toUpperCase()} ${apellidoDeportista.toUpperCase()}</strong>, seleccione una actividad para la que necesite gestionar una clase<br><br>`;

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
        let displayForm = document.getElementById("datosDeportista");
        displayForm.style.display = "none";
    }
}

function agregarActividad(actividadSeleccionada) {
    const clase = {
        deportista: `${nombreDeportista} ${apellidoDeportista}`,
        actividad: actividadSeleccionada,
    };
    claseAgendada.push(clase);
    seleccionDia();
}

function seleccionDia() {
    if (actividadSeleccionada != undefined) {
        let ulDia = document.getElementById("listaDias");

        let spanDia = document.getElementById("spanDia");
        spanDia.innerHTML = `Por favor seleccione un Dia disponible para realizar <strong>${actividadSeleccionada}</strong> <br><br>`;

        dias.forEach(function (dia, index) {
            let selectDia = document.createElement("input");
            selectDia.type = "radio";
            selectDia.name = "dias";
            selectDia.id = "dias" + index;
            selectDia.value = `${dia}`;

            let label = document.createElement("label");
            label.setAttribute("for", "dias" + index);
            label.textContent = dia;

            ulDia.appendChild(selectDia);
            ulDia.appendChild(label);
            ulDia.appendChild(document.createElement("br"));
        });

        let seleccion2 = document.querySelectorAll(
            'input[type="radio"][name="dias"]'
        );

        seleccion2.forEach(function (radio) {
            radio.addEventListener("change", function () {
                if (radio.checked) {
                    diaSeleccionado = radio.value;
                }
                agregarDia(diaSeleccionado);
            });
        });
        let displayActividad = document.getElementById("listaActividad");
        displayActividad.style.display = "none";
    }
}

function agregarDia(diaSeleccionado) {
    const clase = {
        deportista: `${nombreDeportista} ${apellidoDeportista}`,
        actividad: actividadSeleccionada,
        dia: diaSeleccionado,
    };
    claseAgendada.push(clase);
    seleccionHora();
}

function seleccionHora() {
    if (diaSeleccionado != undefined) {
        let ulHora = document.getElementById("listaHorarios");

        let spanHora = document.getElementById("spanHora");
        spanHora.innerHTML = `Por favor seleccione un Horario disponible para su clase del dia <strong>${diaSeleccionado}</strong> en <strong>${actividadSeleccionada}</strong> <br><br>`;

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
        let displayDias = document.getElementById("listaDias");
        displayDias.style.display = "none";
    }
}

function agregarHora(horaSeleccionada) {
    const clase = {
        deportista: `${nombreDeportista} ${apellidoDeportista}`,
        actividad: actividadSeleccionada,
        dia: diaSeleccionado,
        hora: horaSeleccionada,
    };
    claseAgendada.push(clase);
    claseFinal();

    let claseAString = JSON.stringify(claseAgendada);
    sessionStorage.setItem("claseStoreado", claseAString);
}

function claseFinal() {
    if (sessionStorage.getItem("claseStoreado")) {

        let claseRecuperado = JSON.parse(sessionStorage.getItem("claseStoreado"))
        let entrenadorFiltrado = entrenadores.filter(
            (entrenadores) => entrenadores.Actividad === actividadSeleccionada
        );

        let entrenador = entrenadorFiltrado.map((entrenadores) => entrenadores.Entrenador);

        let textoFinal = document.getElementById("clase");
        textoFinal.innerHTML = `${nombreDeportista.toUpperCase()} ${apellidoDeportista.toUpperCase()}, su clase quedo agendada con: ${entrenador} de ${actividadSeleccionada} el dia ${diaSeleccionado} a las ${horaSeleccionada}hs.`;

        let displayHoras = document.getElementById("listaHorarios");
        displayHoras.style.display = "none";
    } else {
        window.location.href = "../index.html"
    }
}

// Función para eliminar una clase
function eliminarClase(index) {
    claseAgendada.splice(index, 1); // Eliminar la clase del arreglo
    actualizarListaClases(); // Actualizar la lista de clases agendadas
}

// Agregar un evento de click al botón "Consultar clases agendadas"
let btnConsultarClases = document.getElementById("btnConsultarClases");
btnConsultarClases.addEventListener("click", function () {
    mostrarClasesAgendadas();
});

// Función para mostrar las clases agendadas
function mostrarClasesAgendadas() {
    let ulListaClases = document.getElementById("listaClases");
    ulListaClases.innerHTML = ""; // Limpiar la lista

    if (claseAgendada.length === 0) {
        let mensajeNoClases = document.createElement("li");
        mensajeNoClases.textContent = "No tienes clases agendadas.";
        ulListaClases.appendChild(mensajeNoClases);
    } else {
        claseAgendada.forEach(function (clase, index) {
            let liClase = document.createElement("li");
            liClase.textContent = ` ${clase.deportista}: Tu clase de ${clase.actividad} quedo agendada el día ${clase.dia} a las ${clase.hora}hs`;

            let btnEliminar = document.createElement("button");
            btnEliminar.textContent = "Eliminar";
            btnEliminar.addEventListener("click", function () {
                eliminarClase(index);
            });

            liClase.appendChild(btnEliminar);
            ulListaClases.appendChild(liClase);
        });
    }
}