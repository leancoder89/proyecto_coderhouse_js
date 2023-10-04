//comienzo definiendo funciones asíncronas para traer a partir del json los datos de los profesionales

async function traerProfesores() {
    const response = await fetch("../staff.json");
    const data = await response.json();
    return data;
}
//a partir de la función que empleo fetch la aplico en un evento para mostrar en el dom
async function obtenerDatos() {
    const datos = await traerProfesores();
    let contenedorProfesores = document.getElementById("contenedorProfesores");
    if (datos){
        let profesores = document.getElementById("profesores");
        profesores.addEventListener("click", () => {
            datos.forEach((profesor) => {
                let div = document.createElement("div");
                div.className = "cards";
                div.innerHTML = `
                <img class="fotosProfesores" src="${profesor.imagen}">
                <h2>Clase de ${profesor.clase}</h2>
                <p>${profesor.nombre}</p>
                <p>$${profesor.honorarios}</p>
            `;
                contenedorProfesores.appendChild(div);
            })
            document.getElementById("agendarClase").disabled = false;
            function redirigir(){
                location.href='#contenedorProfesores'
            }
            redirigir();
        })
    }
}

obtenerDatos();
//exporto la funcion asíncrona, ya que necesito los datos de los profesores para seguir trabajando en los otros archivos
export {traerProfesores};








