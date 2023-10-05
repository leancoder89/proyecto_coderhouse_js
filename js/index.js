//comienzo definiendo funciones asíncronas para traer a partir del json los datos de los profesores

async function traerProfesores() {
    const response = await fetch("./staff.json");
    const data = await response.json();
    return data;
}
//a partir de la función que empleo fetch la aplico en un evento para mostrar en el dom
async function obtenerDatos() {
    const datos = await traerProfesores();
    let contenedorProfesores = document.getElementById("contenedorProfesores");
    if (datos) {
        let profesores = document.getElementById("profesores");
        profesores.addEventListener("click", () => {
            contenedorProfesores.innerHTML = ""
            datos.forEach((profesor) => {
                let div = document.createElement("div");
                div.className = "tarjetas";
                div.innerHTML = `
                <img class="fotosProfesores" src="${profesor.imagen}">
                <h2>${profesor.nombre}</h2>
                <p>Clase de ${profesor.clase}</p>
                `;
                contenedorProfesores.appendChild(div);
            })
        })
    }
}

obtenerDatos();
//exporto la funcion asíncrona, ya que necesito los datos de los profesores para seguir trabajando en los otros archivos
export { traerProfesores };








