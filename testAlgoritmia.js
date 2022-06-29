// *** Test de algoritmia, Angela Duran Barajas ***



//Al tratarse de ejemplos, se establecen valores ficticios dentro de las funciones para poder mostrar resultados

console.log("**1. Leer un numero y, según sea par o impar, mostrar su listado descendiente")
var numero = leerNumero()
console.log("**2. Listado de personas según edad y género")
leerPersonas(crearListaPersonas(50))
console.log("**3. Calcular el salario de un trabajador en base a las horas trabajadas semanalmente")
var horasTrabajadas = leerHorasTrabajadas()
var tarifa = leerTarifa()
var sueldo = calcularSueldo(horasTrabajadas, tarifa)
console.log("El sueldo del empleado es de " + sueldo + "EUR/semana (por "+horasTrabajadas+" horas trabajadas)")




// EJERCICIO 1
// Leer numeros pares o impares e imprimirlos en consola
function leerNumero() {

    numero = aleatorio(0, 20)
    if (numero % 2 == 0) {
        console.log("Numero PAR: " + numero);
        for (let i = numero; i >= 0; i--) {
            if (i % 2 == 0) {
                console.log(i);
            }
        }
    } else {
        console.log("Numero IMPAR: " + numero);
        for (let i = numero; i >= 1; i--) {
            if (i % 2 != 0) {
                console.log(i);
            }
        }
    }
}

// EJERCICIO 2
// Leer lista de personas y clasificarlas por edad y genero

function leerPersonas(personas) {

    let mayoresEdad = 0;
    let menoresEdad = 0;
    let mascMayores = 0;
    let femMenores = 0;
    let mujeres = 0;
    let hombres = 0;

    personas.forEach(persona => {
        if (persona[1] >= 18) {
            // mayor de edad
            mayoresEdad++
            if (persona[0] == 0) {
                mascMayores++
            }
        } else {
            menoresEdad++
            if (persona[0] == 1) {
                femMenores++
            }
        }
        if (persona[0] == 0) {
            // persona es hombre
            hombres++
        } else {
            // persona es mujer
            mujeres++
        }
    });
    // calcular porcentajes
    let porcMujeres = (mujeres * 100) / personas.length
    let porcMayores = (mayoresEdad * 100) / personas.length

    console.log("Personas mayores de edad: " + mayoresEdad)
    console.log("Personas menores de edad: " + menoresEdad)
    console.log("Personas masculinas mayores de edad: " + mascMayores)
    console.log("Personas femeninas menores de edad: " + femMenores)
    console.log("Porcentaje que representan las personas mayores de edad respecto al total de personas :" + porcMayores + "%")
    console.log("Porcentaje que representan las mujeres respecto al total de personas :" + porcMujeres + "%")
}

// Funcion que guarda personas en un array bidimensional de longitud 50 para poder ejemplificarlo
function crearListaPersonas(numeroPersonas) {
    
    var personas = []
    for (let i = 0; i < numeroPersonas; i++) {
        // crear edad aleatoria de 0 a 100
        edad = aleatorio(0, 100)
        // crear genero aleatorio, donde 0=masculino; 1=femenino
        genero = aleatorio(0, 1)
        personas.push([genero, edad])

    }
    console.log("Posición 0:género(donde 0=masculino, 1=femenino), posición 1: edad")
    console.table(personas)
    return personas
}
// devolver aleatorio

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// EJERCICIO 3
// Calcular el sueldo de un trabajador
// Horas trabajadas
function leerHorasTrabajadas() {
    // se ejemplifican horas para poder mostrar el ejercicio
    let horas = 43
    return horas
}

function leerTarifa(tarifa) {
    // se ejemplifica tarifa por hora
    var tarifa = 10
    return tarifa
}

function calcularSueldo(horasTrabajadas, tarifa) {
    var sueldo
    let horasExtra = horasTrabajadas - 40
    let tarifaExtra = tarifa + tarifa * 0.5
    if (horasExtra <= 0) {
        sueldo = horasTrabajadas * tarifa
    } else {
        sueldo = 40 * tarifa + horasExtra * tarifaExtra
    }
    return sueldo
}