

// SPREAD
// Expande valores (string o matriz) allá donde se esperan argumentos(función) o elementos(matrices)

const numbers = [1,2,3,4,5]
console.log(...numbers);


const message = 'Hola mundo !!';
console.log(...message);

// Pasar matrices como argumentos
function name(a,b,c,d,e) {
    return a + b + c + d + e;
}

//console.log(sumar.apply(null, numeros));
console.log(sumar(...numeros));


// CLONAR - Matrices y objetos
const copy = [...numbers]
console.log(copy);

numbers.push(6)
console.log(numbers, copy);


const data = {
    name: 'Juan',
    city: 'Valencia'
};

const copyData = {...data}
console.log(copyData);



// Fusionar matrices y objetos
const prefs = {
    name: 'Andrés',
    beer: 'Judas',
    color: 'rojo'
};
const person = {...data, ...prefs}



// ------- REST ------------
// Representa un número infinito de argumentos como matriz

function suma(...args) {
	return args.reduce((actual, total) => actual + total);

}


// Se puede usar spread varias veces
const number2 = [21,22,66];
console.log(sumar(...numeros, ...[55], ...numeros2, 4, 88, 99));
