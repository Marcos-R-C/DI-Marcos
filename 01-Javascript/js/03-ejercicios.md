# 📝 Ejercicios de Módulos en JavaScript

### 1. Exportar e importar constantes
Crea un archivo `constantes.js` que contenga varias constantes como el nombre de la app, la versión y el autor.  
Importa esas constantes en `app.js` y muéstralas en consola.  

```js
export const nombreApp = "Prueba 1"
export const versionApp = "1.0"
export const nombreAutorApp = "Marcos Regueiro"

import { nombreApp, versionApp, nombreAutorApp } from "./constantes";
console.log(nombreApp)
console.log(versionApp)
console.log(nombreAutorApp)
```

---

### 2. Funciones matemáticas
En `operaciones.js` crea y exporta funciones para sumar, restar, multiplicar y dividir.  
En `main.js` importa esas funciones y prueba varias operaciones.  
```js
export function sumar(a, b){
    return a+b;
}

export function restar(a,b){
    return a-b;
}

export function multiplicar(a,b){
    return a*b;
}

export function dividir(a,b){
    return a/b;
}

import { sumar, restar, multiplicar, dividir } from "./operaciones.js";
console.log(sumar(2,2))
console.log(restar(3,2))
console.log(multiplicar(2,4))
console.log(dividir(8,2))
```

---

### 3. Exportación por defecto  
Crea un archivo `saludos.js` que tenga una exportación por defecto con una función `saludar(nombre)`.  
Importa esa función en `index.js` y úsala con tu nombre.  
```js
export default function saludar(nombre){
    console.log("Buenos días, " + nombre)
}

import saludar from "./saludos.js";
saludar("Marcos")
```
---

### 4. Combinar exportaciones  
En `utils.js` exporta:
- Una constante llamada `APP_NAME`.  
- Una función `mayusculas(texto)` que convierta un string a mayúsculas.  
Haz una exportación por defecto con una función que reciba un array de strings y devuelva el primero.  
En `app.js` importa todo y pruébalo.  
```js
export const APP_NAME = "Prueba 2"
export function mayusculas(texto){
    return texto.toUpperCase()
}
export default function devolverPrimero(arrayStrings){
    return arrayStrings[0]
}

import { nombreApp, versionApp, nombreAutorApp } from "./constantes.js";
import devolverPrimero, { APP_NAME, mayusculas } from "./utils.js";
console.log(nombreApp)
console.log(versionApp)
console.log(nombreAutorApp)
console.log(APP_NAME)
console.log(mayusculas("Casita"))
console.log(devolverPrimero(["Avion","Pepe","Ferrocarril"]))
```
---

### 5. Importar con alias  
En `matematicas.js` exporta dos funciones: `areaCirculo(radio)` y `areaCuadrado(lado)`.  
En `main.js` importa esas funciones con alias (`circulo`, `cuadrado`) y calcula las áreas de un círculo de radio 5 y un cuadrado de lado 4.  
```js
export function areaCirculo(radio){
    return Math.PI*radio*radio;
}
export function areaCuadrado(lado){
    return lado*lado;
}

import { sumar, restar, multiplicar, dividir } from "./operaciones.js";
import { areaCirculo as circulo,  areaCuadrado as cuadrado} from "./matematicas.js";
console.log(sumar(2,2))
console.log(restar(3,2))
console.log(multiplicar(2,4))
console.log(dividir(8,2))
console.log(circulo(5))
console.log(cuadrado(4))
```
---

### 6. Importar todo con `* as`
En `personas.js` exporta varias constantes con nombres de personas.  
En `main.js` impórtalas todas bajo un objeto:  

```js
export const persona1 = "Jaime"
export const persona2 = "Asier"
export const persona3 = "Rebeca"
export const persona4 = "Pepito"

import { sumar, restar, multiplicar, dividir } from "./operaciones.js";
import { areaCirculo as circulo,  areaCuadrado as cuadrado} from "./matematicas.js";
import * as nombres from "./personas.js";
console.log(sumar(2,2))
console.log(restar(3,2))
console.log(multiplicar(2,4))
console.log(dividir(8,2))
console.log(circulo(5))
console.log(cuadrado(4))
console.log(nombres.persona1)
```