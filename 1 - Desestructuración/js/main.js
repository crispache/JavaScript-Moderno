
// 1 - Desestructurando matrices
const data = ['Vue', 'JavaScript', 'Laravel', 'CSS'];

// OLD 
// var vue = data[0];
// var javascript = data[1];
// var laravel = data[2];
// var css = data[3];

// NEW 
var [vue, javascript, laravel, css] = data;



// 2 - Desestructurar strings
var direccion = "Calle San Almagro, 22, 3º puerta 5, 46006, Valencia";
// var [calle, numero, piso, cp, ciudad] = direccion.split(',');



// 3 - Desestructurando objetos
const gato = {
    nombre: "Guizmo",
    raza: "europea",
    color: "negro",
    edad: 2,
    hermano: {
        nombre: "Rouco",
        raza: "europea",
        color: "blanco y negro"
    },
};

// var nombre = gato.nombre; // old
var { nombre, raza, color } = gato; // new
var { nombre: nombreHermano, edad: edadHermano = 'desconocida', color: colorHermano } = gato.hermano; // new


// 3 - Reemplazo de los parámetros por defecto

// function saludar(saludo, nombre = "Juan", momento) {
//     alert(`${saludo} ${nombre}, feliz ${momento}`);
// }

// saludar("Hola", undefined, "tarde");

// NEW
function saludar({saludo, nombre = 'Juan', momento = 'día'}) {
     alert(`${saludo} ${nombre}, feliz ${momento}`);
}

saludar({saludo: 'Hola !!'})