const prompt = require("prompt-sync")();
//Pedir lista (array) de nombre al usuario
const names = []

let indicador = "si"
//Ingresados indeterminadamente
while (indicador != "no") {
//Ingresados por el usuario
    const name = prompt("Ingresa un nombre (cuando ya no quieras ingresar mas nombres, escribe 'alto'): ")
    if (name === "alto") {
        indicador = "no";
    } else {
        names.push(name)
    }    
}

console.log(names)
console.log("La cantidad de nombres que ingresatse es de: ", names.length)

const repNames = names.filter((item, index, array) => array.indexOf(item) === index);
if (repNames.length != names.length) {
    console.log ("Hubo nombres repetidos en la lista.");
} else {
    console.log ("No hubo nombres repetidos en la lista.");
} 

//Nombre mas largo y nombre mas corto = ""
let longerName = ""
let shorterName= ""
for (let index = 0; index < names.length; index++) {
    const nombre = names[index];
    if (nombre.length > longerName.length) {
        longerName = nombre
    }
    if (index == 0) {
        shorterName = nombre
    } else if (nombre.length < shorterName.length) {
        shorterName = nombre
    }
}
console.log ("El nombre mas largo es: ", longerName)
console.log ("El nombre mas corto es: ", shorterName)