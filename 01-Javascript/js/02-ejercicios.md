# EJERCICIOS

## Arrays y métodos básicos
1. Declara un array con al menos 5 nombres de personas.
    - Añade un nombre al final.
    - Elimina el primero.
    - Busca si existe un nombre concreto con includes().
```js
    let nombres = ["Marcos","Joerik","Ernest","Samer","Adrian"]
    console.log(nombres.toString())
    nombres.push("Pepito")
    console.log(nombres.toString())
    nombres.splice(0,1)
    console.log(nombres.toString())
    if(nombres.includes("Marcos")){
        console.log("Marcos está en el array")
    }
```
2. Declara un array con al menos 5 nombres de personas.
    - Añade un nombre al final.
    - Elimina el primero.
    - Busca si existe un nombre concreto con includes().
```js
    let nombres = ["Marcos","Joerik","Ernest","Samer","Adrian"]
    console.log(nombres.toString())
    nombres.push("Pepito")
    console.log(nombres.toString())
    nombres.splice(0,1)
    console.log(nombres.toString())
    if(nombres.includes("Marcos")){
        console.log("Marcos está en el array")
    }
```
3. Ordena el array [4, 1, 9, 3, 7] de forma ascendente y descendente.
```js
    let numeros = [4,1,9,3,7]
    numeros.sort((a,b) => a-b)
    console.log(numeros.toString())
    numeros.sort((a,b) => b-a)
    console.log(numeros.toString())
```

## Desestructuración de arrays
1. Dado el array ["manzana", "pera", "plátano", "naranja"]:
    - Extrae en variables fruta1 y fruta2 los dos primeros.
    - Usa el operador rest para guardar el resto en un nuevo array.
```js
    let frutas = ["manzana", "pera", "plátano", "naranja"]
    const [fruta1, fruta2, ...otras ] = frutas
    console.log(fruta1)
    console.log(fruta2)
    console.log(otras.toString())
```
2. Intercambia los valores de dos variables usando desestructuración
```js
let a = 100;
let b = 200;
[a, b] = [b, a]
console.log(a)
console.log(b)
```
3. Extrae el color azul del array anidado:
```js
let colores = ["rojo", ["verde", "azul", "amarillo"]];
const [,[,color]] = colores
console.log(color)
```


## Recorrido de arrays con for

1. Crea un array con los números del 1 al 5 y muéstralos en consola con:
    - Un for clásico.
    - Un for...of.
    - Un for...in.
```js
let numeros = [1, 2, 3, 4, 5];
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}
for (const numero of numeros) {
    console.log(numero)
}
numeros.forEach(numero => {
    console.log(numero)
});
```
2. Recorre el array ["HTML", "CSS", "JavaScript", "React"] con un for clásico e imprime "Posición X: Valor Y"
```js
let palabras = ["HTML", "CSS", "JavaScript", "React"];
for (let i = 0; i < palabras.length; i++) {
    console.log("Posición: " + i + ", Valor: " + palabras[i])
}
```
3. Recorre un array al revés (for con decremento).
```js
let numeros = [1, 2, 3, 4, 5];
for (let i = numeros.length-1; i >= 0; i--) {
    console.log(numeros[i])
}
```

## Recorridos con forEach, filter y map

1. Dado el array ["Ana", "Luis", "Marta", "Pedro"], recórrelo con forEach e imprime un saludo para cada nombre.
```js
let nombres = ["Ana", "Luis", "Marta", "Pedro"];
nombres.forEach(nombre => {
    console.log("Buenas, " + nombre)
});
```
2. Crea un array de números [2, 4, 6, 8] y usa forEach para mostrar el doble de cada número.
```js
let numeros = [2, 4, 6, 8];
numeros.forEach(numero => {
    console.log(numero*2)
});
```
3. Dado el array [5, 12, 8, 130, 44], usa filter para obtener solo los números mayores que 10.
```js
let numeros = [5, 12, 8, 130, 44];
let numerosGrandes = numeros.filter(numero => numero>10)
console.log(numerosGrandes.toString())
```
4. Crea un array con nombres ["Ana", "Alberto", "Bea", "Carlos"] y filtra los que empiecen por la letra A.
```js
let nombres = ["Ana", "Alberto", "Bea", "Carlos"];
let nombresSinA = nombres.filter(nombre => !nombre.startsWith("A"))
console.log(nombresSinA.toString())
```
5. Dado un array de edades [15, 18, 21, 12, 30], usa filter para obtener solo las que representen mayores de edad (≥18).
```js
let edades = [15, 18, 21, 12, 30];
let mayoresDeEdad = edades.filter(edad => edad>=18)
console.log(mayoresDeEdad.toString())
```
6. Dado el array [1,2,3,4,5], usa map para obtener un nuevo array con los números elevados al cuadrado
```js
let numeros = [1,2,3,4,5];
let cuadrados = numeros.map(numero => numero*numero)
console.log(cuadrados.toString())
```
7. Crea un array con precios [10, 20, 30] y usa map para calcular el precio con IVA (21%) incluido
```js
let precios = [10, 20, 30];
let preciosConIva = precios.map(precio => precio+(precio*0.21))
console.log(preciosConIva.toString())
```
8. Dado el array ["html", "css", "javascript"], usa map para poner en mayúsculas cada palabra.
```js
let palabras = ["html", "css", "javascript"];
let mayusculas = palabras.map(palabra => palabra.toUpperCase())
console.log(mayusculas.toString())
```
9. Dado el array [3, 8, 12, 5, 7, 20]:
    - Usa filter para quedarte con los pares.
    - Luego, usa map para multiplicarlos por 10
```js
let numeros = [3, 8, 12, 5, 7, 20];
let paresMultiplicados = numeros.filter(numero => numero%2==0).map(numero => numero*10)
console.log(paresMultiplicados.toString())
```
10. Dado el array de objetos:
```js
let alumnos = [
  { nombre: "Ana", nota: 7 },
  { nombre: "Luis", nota: 4 },
  { nombre: "Marta", nota: 9 }
];

```
- Filtra solo los alumnos con nota ≥ 5.
- Usa map para obtener un array solo con sus nombres.
-   Recorre el resultado con forEach e imprime: "Alumno aprobado: NOMBRE"
```js
let alumnos = [
  { nombre: "Ana", nota: 7 },
  { nombre: "Luis", nota: 4 },
  { nombre: "Marta", nota: 9 }
];
let alumnosAprobados = alumnos.filter(alumno => alumno.nota>=5).map(alumno => alumno.nombre)
alumnosAprobados.forEach(alumno => {
    console.log("Alumno aprobado: " + alumno)
});
```