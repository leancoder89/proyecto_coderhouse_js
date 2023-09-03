let credencialesValidas = false;
do {
    let usuario = prompt("ingrese su usuario");
    let password = prompt("ingrese su contraseña")
    if (usuario === "Sandman" && password === "coderhouse") {
        credencialesValidas = true
    } else {
        alert("credenciales invalidas")
    }
} while (!credencialesValidas)
alert("Bienvenido")

let nombreDeportista = prompt("Ingresa tu nombre");

let apellidoDeportista = prompt("Ingresa tu apellido");

let seleccionSede = parseInt(prompt("Bienvenido a THEEDGEFITNESS " + nombreDeportista + " " + apellidoDeportista + " selecciona una sede :\n\n1. theedgefitnes CENTRO\n2. theedgefitness NORTE\n3. theedgefitness SUR\n4. theedgefitness SHOPPING DEL SIGLO\n\nSelecciona usando el numero de lista que corresponda"));

let seleccionActividad

let seleccionDia

let seleccionHora

function claseAgendada() {
    alert(nombreDeportista + " " + apellidoDeportista + " tu clase de " + seleccionActividad + " quedo agendada el dia " + seleccionDia + " en el horario de " + seleccionHora + " en la sede " + seleccionSede);
};
function error() {
    alert(nombreDeportista + " " + apellidoDeportista + " lo lamento, el valor elegido no es valido. para volver a empezar oprima F5")
}

if (isNaN(seleccionSede)) {
    error();
} else {
    while (seleccionSede < 5) {
        switch (seleccionSede) {
            case 1:
                seleccionSede = "theedgefitnes CENTRO"
                seleccionActividad = parseInt(prompt(" Selecciona una actividad :\n\n1. GIMNASIO (musculacion)\n2. CROSSFIT\n3. NATACION\n\nSelecciona usando el numero de lista que corresponda"));
                break;
            case 2:
                seleccionSede = "theedgefitness NORTE"
                seleccionActividad = parseInt(prompt(" Selecciona una actividad :\n\n1. GIMNASIO (musculacion)\n2. CROSSFIT\n3. NATACION\n\nSelecciona usando el numero de lista que corresponda"));
                break;
            case 3:
                seleccionSede = "theedgefitness SUR"
                seleccionActividad = parseInt(prompt(" Selecciona una actividad :\n\n1. GIMNASIO (musculacion)\n2. CROSSFIT\n3. NATACION\n\nSelecciona usando el numero de lista que corresponda"));
                break;
            case 4:
                seleccionSede = "theedgefitness SHOPPING DEL SIGLO"
                seleccionActividad = parseInt(prompt(" Selecciona una actividad :\n\n1. GIMNASIO (musculacion)\n2. CROSSFIT\n3. NATACION\n\nSelecciona usando el numero de lista que corresponda"));
                break;
            default:
                alert("Lo lament, el valor elegido no es valido. Para volver a empezar seleccione F5");
                break;
        }
    };

    if (isNaN(seleccionActividad)) {
        error();
    } else {
        while (seleccionActividad < 4) {
            switch (seleccionActividad) {
                case 1:
                    seleccionActividad = "GIMNASIO (MUSCULACION)"
                    seleccionDia = parseInt(prompt("Selecciona un dia de tu preferencia:\n1. Lunes \n2. Martes \n3. Miercoles \n4. Jueves \n5. Viernes \n6. sabado"));
                    break;
                case 2:
                    seleccionActividad = "CROSSFIT"
                    seleccionDia = parseInt(prompt("Selecciona un dia de tu preferencia:\n1. Lunes \n2. Martes \n3. Miercoles \n4. Jueves \n5. Viernes \n6. sabado"));
                    break;
                case 3:
                    seleccionActividad = "NATACION"
                    seleccionDia = parseInt(prompt("Selecciona un dia de tu preferencia:\n1. Lunes \n2. Martes \n3. Miercoles \n4. Jueves \n5. Viernes \n6. sabado"));
                    break;
                default:
                    alert("Lo lamento, el valor elegido no es valido. Para volver a empezar seleccione F5");
                    break;
            }
        };


        if (isNaN(seleccionDia)) {
            error();
        } else {
            while (seleccionDia < 7) {
                switch (seleccionDia) {
                    case 1:
                        seleccionDia = "LUNES"
                        seleccionHora = parseInt(prompt("Selecciona un horario de tu preferencia:\n\n1. 8.00 a 10:00 \n2. 10.00 a 12:00 \n3. 12.00 a 14:00 \n4. 14.00 a 16:00 \n5. 16.00 a 18:00 \n6. 18.00 a 20:00 \n7. 20.00 a 22:00"));
                        break;

                    case 2:
                        seleccionDia = "MARTES"
                        seleccionHora = parseInt(prompt("Selecciona un horario de tu preferencia:\n\n1. 8.00 a 10:00 \n2. 10.00 a 12:00 \n3. 12.00 a 14:00 \n4. 14.00 a 16:00 \n5. 16.00 a 18:00 \n6. 18.00 a 20:00 \n7. 20.00 a 22:00"));
                        break;

                    case 3:
                        seleccionDia = "MIERCOLES"
                        seleccionHora = parseInt(prompt("Selecciona un horario de tu preferencia:\n\n1. 8.00 a 10:00 \n2. 10.00 a 12:00 \n3. 12.00 a 14:00 \n4. 14.00 a 16:00 \n5. 16.00 a 18:00 \n6. 18.00 a 20:00 \n7. 20.00 a 22:00"));
                        break;

                    case 4:
                        seleccionDia = "JUEVES"
                        seleccionHora = parseInt(prompt("Selecciona un horario de tu preferencia:\n\n1. 8.00 a 10:00 \n2. 10.00 a 12:00 \n3. 12.00 a 14:00 \n4. 14.00 a 16:00 \n5. 16.00 a 18:00 \n6. 18.00 a 20:00 \n7. 20.00 a 22:00"));
                        break;

                    case 5:
                        seleccionDia = "VIERNES"
                        seleccionHora = parseInt(prompt("Selecciona un horario de tu preferencia:\n\n1. 8.00 a 10:00 \n2. 10.00 a 12:00 \n3. 12.00 a 14:00 \n4. 14.00 a 16:00 \n5. 16.00 a 18:00 \n6. 18.00 a 20:00 \n7. 20.00 a 22:00"));
                        break;

                    case 6:
                        seleccionDia = "SABADO"
                        seleccionHora = parseInt(prompt("Selecciona un horario de tu preferencia:\n\n1. 8.00 a 10:00 \n2. 10.00 a 12:00 \n3. 12.00 a 14:00 \n4. 14.00 a 16:00 \n5. 16.00 a 18:00 \n6. 18.00 a 20:00 \n7. 20.00 a 22:00"));
                        break;

                    default:
                        alert("Lo lamento, elvalor elegido no es valido. Para volver a empezar seleccione F5")
                        break;
                }
            }

            if (isNaN(seleccionHora)) {
                error();
            } else {
                while (seleccionHora < 8) {
                    switch (seleccionHora) {
                        case 1:
                            seleccionHora = "8:00 a 10:00 hs"
                            break;
                        case 2:
                            seleccionHora = "10:00 a 12:00 hs"
                            break;
                        case 3:
                            seleccionHora = "12:00 a 14:00hs"
                            break;
                        case 4:
                            seleccionHora = "14:00 a 16:00 hs"
                            break;
                        case 5:
                            seleccionHora = "16:00 a 18:00 hs"
                            break;
                        case 6:
                            seleccionHora = "18:00 a 20:00 hs"
                            break;
                        case 7:
                            seleccionHora = "20:00 a 22:00 hs"
                            break;
                        default:
                            alert("Lo lamento, el valor elegido no es valido. Para volver a empezar seleccione F5")
                            break;
                    };
                    claseAgendada()
                }
            }
        };

        if (seleccionSede >= 5) { error() }
        else if (seleccionActividad >= 4) { error() }
        else if (seleccionDia = 7) { error() }
        else if (seleccionHora >= 8) { error() }
    }
};

