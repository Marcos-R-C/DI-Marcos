# Ejercicios: `fetch` + Promesas + `async/await` + métodos de arrays

## 1) Filtra y transforma posts

**Enunciado:** Descarga los posts y quédate solo con los de
`userId = 1`. Devuelve un array de títulos en mayúsculas.

``` js
async function getUppercaseTitlesByUser(userId = 1) {
  try{
    const llamada = await fetch("https://jsonplaceholder.typicode.com/posts");
    // 2) json
    const datos = await llamada.json();
    // 3) filter por userId
    const datosFiltrados = datos.filter(post => post.userId===1);
    // 4) map a títulos en mayúsculas
    const titulosEnMayusculas = datosFiltrados.map(post => post.title.toUpperCase());
    console.log(titulosEnMayusculas.toString());
  } catch(error){
    console.error("Ha habido un error en la obtención de datos")
  }
}
getUppercaseTitlesByUser(1);
```

------------------------------------------------------------------------

## 2) Suma de precios (reduce)

**Enunciado:** Descarga los productos de Fake Store API y calcula el
**precio total** de los productos con `category = 'electronics'`.

``` js
async function totalElectronics() {
  try{
  // GET https://fakestoreapi.com/products
  const llamada = await fetch("https://fakestoreapi.com/products");
  // filter por category === 'electronics'
  const datos = await llamada.json();
  const datosFiltrados = datos.filter(producto => producto.category==='electronics');
  // reduce sumando price
  let precioTotal = 0;
  precioTotal = datosFiltrados.reduce((precioTotal,producto) => precioTotal + producto.price,0);
  console.log(precioTotal)
  } catch(error){
    console.error("No se han podido obtener los datos")
  }
}
console.log(totalElectronics());
```

------------------------------------------------------------------------

## 3) Combinación con `Promise.all`

**Enunciado:** Descarga **usuarios** y **posts** en paralelo. Devuelve
una lista de objetos `{ userName, postsCount }`, ordenada
descendentemente por `postsCount`.

``` js
async function usersWithPostCount() {
  // Promise.all([fetch users, fetch posts])
  // Para cada usuario, cuenta cuántos posts tiene
  // Devuelve [{ userName, postsCount }] ordenado por postsCount desc
}
```

## 4) Pipeline: buscar, filtrar, normalizar, ordenar

**Enunciado:** De JSONPlaceholder, toma **comments**, filtra los que
contengan la palabra `'qui'` en `body`, normaliza `email` a minúsculas,
y ordénalos por `postId` asc y después por `email` asc.

``` js
async function cleanComments() {
  // GET /comments
  const llamada = await fetch("https://jsonplaceholder.typicode.com/comments");
  // filter body includes 'qui' (case-insensitive)
  const datos = await llamada.json();
  const datosFiltrados = datos.filter(comment => comment.body.includes("qui"));
  // map: email a minúsculas
  const emailsMinusculas = datosFiltrados.map(c => ({
    postId: c.postId,
    body: c.body,
    email: c.email.toLowerCase()
  }));
  // sort por postId, luego email
  emailsMinusculas.sort((a,b) => {
    if(a.postId == b.postId){
      return a.email.localeCompare(b.email);
    }
    return a.postId - b.postId;
  })
  console.log(emailsMinusculas.toString());
}
cleanComments();
```
