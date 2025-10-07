let nombre1 = String('Marcos');
let numero = Number(123);
let verdadero = Boolean(true);
let nulo = null;
let indefinido;

console.log(nombre1 + ' ' + typeof nombre1);
console.log(numero + ' ' + typeof numero);
console.log(verdadero + ' ' + typeof verdadero);
console.log(nulo + ' ' + typeof nulo);
console.log(indefinido + ' ' + typeof indefinido);

let cadena = String(123);
let number = Number(123);

let cadena2 = String(number);
let number2 = Number(cadena);

console.log(cadena2 + ' ' + typeof cadena2);
console.log(number2 + ' ' + typeof number2); 

let persona = {
    nombre: 'Marcos',
    ciudad: 'Oviedo',
    edad: 22
}

console.log(persona.nombre);
console.log(persona["nombre"]);

persona.pais='España';
console.log(persona.pais);

const { nombre, edad } = persona;
console.log(nombre);
console.log(edad);

function saludar(nombre){
    return "Hola, " + nombre;
}

console.log(saludar('Marcos'));

function sumar(a, b){
    return a + b;
}

console.log(sumar(2,7));

const multiplicar = (a,b) => a * b;
console.log(multiplicar(3,2));

function esMayorDeEdad(edad){
    return edad>=18;
}
console.log(esMayorDeEdad(19));
console.log(esMayorDeEdad(17));
