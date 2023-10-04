//comienzo trayendo del localstorage las clases y el deportista cargados previamente
let deportista1LS= localStorage.getItem("deportista1");
let agendaLS= localStorage.getItem("clase");
let clasesAgendadas = [];
agendaLS ? clasesAgendadas=JSON.parse(agendaLS): clasesAgendadas =[];//igual que en el archivo anterior, evalúo si hay clases en el localstorage, caso contrario se inicializa en cero
let deportista1=JSON.parse(deportista1LS);

//traigo elementos del html para interaccionar con el dom
let clasesAgendadasDom = document.getElementById("claseAgendada");

//muestro las clases agendadas, y en caso de existir muestro el resumen
function mostrarClasesAgendadas(agenda){  
    agenda.forEach(item => {
        let claseAgendada = document.createElement("div");
        claseAgendada.className="profesores1"
        claseAgendada.innerHTML= `
        <img class="fotosProfesores1" src="${item.imagen}">
        <h3>Actividad de ${item.clase}</h3>
        <p class="p">${item.nombre}</p>
        <p class="p">Honorarios a abonar: $${item.honorarios}</p>
        <p class="p">Fecha: ${item.fecha}</p>
        <p class="p">Hora: ${item.hora}</p>
        <button id="${item.id}" class="eliminar btn btn-danger">Eliminar</button>
        `;
        clasesAgendadasDom.appendChild(claseAgendada);
    });
    if (agenda.length>0){
        confirmarClases();
    }
}

mostrarClasesAgendadas(clasesAgendadas);

//botones
//botón para eliminar una clase en particular
let botonesEliminar= document.querySelectorAll(".eliminar");
Array.from(botonesEliminar).forEach(function(boton, indice){
    boton.addEventListener("click", ()=>{
        Swal.fire({
            title: '¿Esta seguro de eliminar la clase?',
            text: "No va a poder revertir esta opción",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, la elimino'
        }).then((result) => {
            if (result.isConfirmed) {
                let indiceClase = clasesAgendadas[indice];
                clasesAgendadas.splice(indice, 1);
                localStorage.setItem("clase", JSON.stringify(clasesAgendadas));
                location.reload();
                mostrarClasesAgendadas(clasesAgendadas);
                Swal.fire(
                    'Clase Eliminada',
                    'Su clase ha sido eliminada.',
                    'success'
                )
        }})
})
});

//función para mostrar el resumen de las clases
function confirmarClases(){
    let mostrarTotal=document.getElementById("mostrarTotal");
    let confirmacion=document.createElement("div");
    confirmacion.className="confirmacion";
    confirmacion.innerHTML= `
        <div class="total">
        <p id="totalClases"> El total a abonar es $ </p>
        </div>
        <div class="botonesClases">
        <button id="eliminarClases" class="btn btn-danger">Eliminar todas las clases</button>
        <button id="confirmarClases" class="btn btn-success">Confirmar Clases</button>
        <button id ="agregarClase" class="btn btn-info"> ¿Desea solicitar otra clase? </button>
        </div> `;
    mostrarTotal.appendChild(confirmacion);
    calcularTotal();
};

// //con esta función calculo el total a pagar
function calcularTotal(){
    let total = 0;
    clasesAgendadas.forEach(clase =>{
        total += clase.honorarios;
    });
    let totalAMostrar = document.getElementById("totalClases");
    totalAMostrar.innerHTML=`El total a abonar es $ ${total}`;
};

//función para eliminar todos las clases seleccionadas
function eliminarClases(){
    let eliminarClases=document.getElementById("eliminarClases");
    eliminarClases.addEventListener("click", ()=>{
        Swal.fire({
            title: '¿Esta seguro de eliminar sus clases?',
            text: "No va a poder revertir esta opción",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, las elimino'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.clear("clase");//si confirma la eliminacion vacío el local storage y el html también
                clasesAgendadasDom.innerHTML = "";
                let confirmacion = document.getElementsByClassName("confirmacion");
                confirmacion.innerHTML = "";
                Swal.fire(
                    'Clases Eliminadas',
                    'Sus clases han sido eliminadas.',
                    'success'
            )
            setTimeout(()=> {
                location.reload()
            }, 1500);
            }
        })
    })
}
eliminarClases();

//botón para agregar una clase más
let agregarClase=document.getElementById("agregarClase");
agregarClase.addEventListener("click", ()=>{
    setTimeout(function () {
        window.location.href = "../pages/reservar-clase.html";
    }, 1000);
});

//botón para confirmar la clase
let confirmarClase=document.getElementById("confirmarClases");
confirmarClase.addEventListener("click", ()=>{
    Swal.fire({
        text: `${deportista1.nombreDeportista}, nos comunicaremos contigo al ${deportista1.telefono} para más detalles sobre el pago. Muchas gracias`,
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar'
        }).then((result) => {
        if (result.isConfirmed) {
            localStorage.clear("clase");
            clasesAgendadasDom.innerHTML = "";
            let confirmacion = document.getElementsByClassName("confirmacion");
            confirmacion.innerHTML = "";
            setTimeout(()=> {
                location.reload()
            }, 500);
        }
    })
})
