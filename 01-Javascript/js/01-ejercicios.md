# EJERCICIOS

## Declaración de variables

1. Declara una variable nombre y asígnale tu nombre. Muestra su valor en consola.

```js
    let nombre = 'Marcos'
    console.log(nombre)
```

2. Declara una constante PI con el valor 3.1416. Intenta reasignarla y observa el error.

```js
    const PI = 3.1416
    PI = 4
```

3. Declara una variable edad sin asignarle valor. Luego asígnale un número y muestra el resultado.
```js
    let edad;
    edad = 22;
    console.log(edad);
```

## Tipos de datos

1. Crea variables de tipo string, number, boolean, null y undefined. Imprime cada una junto con typeof
```js    
    let nombre = String('Marcos');
    let numero = Number(123);
    let verdadero = Boolean(true);
    let nulo = null;
    let indefinido;

    console.log(nombre + ' ' + typeof nombre1);
    console.log(numero + ' ' + typeof numero);
    console.log(verdadero + ' ' + typeof verdadero);
    console.log(nulo + ' ' + typeof nulo);
    console.log(indefinido + ' ' + typeof indefinido);
```
2. Convierte un número a cadena usando **String()** y una cadena a número usando **Number()**.
```js
     let cadena = String(123);
    let number = Number(123);

    let cadena2 = String(number);
    let number2 = Number(cadena);

    console.log(cadena2 + ' ' + typeof cadena2);
    console.log(number2 + ' ' + typeof number2); 
```
## Objetos

1. Crea un objeto persona con propiedades: nombre, edad, ciudad
```js
    let persona = {
        nombre: 'Marcos',
        ciudad: 'Oviedo',
        edad: 22
    }
```
2. Accede a las propiedades usando dot notation (obj.propiedad) y bracket notation (obj["propiedad"]).
```js
    console.log(persona.nombre);
    console.log(persona["nombre"]);
```
3. Añade una nueva propiedad profesion al objeto persona
```js
    persona.profesion='Carpintero';
    console.log(persona.profesion);
```
4. Usa desestructuración para extraer nombre y edad en variables e imprimelas
```js
    const { nombre, edad } = persona;
    console.log(nombre);
    console.log(edad);
```

## Funciones

1. Crea una función saludar(nombre) que devuelva "Hola, <nombre>".
```js
    function saludar(nombre){
        return "Hola, " + nombre;
    }

    console.log(saludar('Marcos'));
```
2. Crea una función sumar(a, b) que devuelva la suma de dos números.
```js
    function sumar(a, b){
        return a + b;
    }
    console.log(sumar(2,7));
```
3. Escribe una función flecha que multiplique dos números
```js
    const multiplicar = (a,b) => a * b;
    console.log(multiplicar(3,2));
```
4. Crea una función esMayorDeEdad(edad) que devuelva true si la edad es mayor o igual a 18, de lo contrario false.
```js
    function esMayorDeEdad(edad){
        return edad>=18;
    }
    console.log(esMayorDeEdad(19));
    console.log(esMayorDeEdad(17));
```






