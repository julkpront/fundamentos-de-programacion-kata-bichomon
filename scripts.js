//Lectura
/*console.log("hola mundo");
console.log(document.getElementById("titulo"));
console.log(document.getElementById("titulo").innerText);
console.log(document.getElementById("titulo").innerHTML);


// Escritura
document.getElementById("titulo").innerText = "<span>Patata</span>";
document.getElementById("titulo").innerHTML = "<span>Patata</span>";
console.log(document.getElementById("titulo").innerText);
console.log(document.getElementById("titulo").innerHTML);

document.getElementById ("parrafo").style.color = "green";
document.getElementById ("parrafo").style.backgroundColor = "yellow";
document.getElementById ("parrafo").style.fontSize = "22";

//QuerySelector

console.log(document.querySelector("titulo").innerHTML);

//QuerySelectorAll

console.log(document.querySelectorAll("p.frases"));
console.log(document.querySelectorAll("p.frases")[2]);

const frase = document.querySelectorAll("p.frases");

for (let index = 0; index < frase.length; index++) {
    console.log("Elemento: " + frase[i].innerHTML);
    
    
}

Un matiz de buenas prácticas: 
Para texto plano se suele preferir textContent en vez de innerText. La diferencia:
textContent devuelve/asigna el texto tal cual está en el DOM, sin mirar estilos CSS, 
y es más rápido (no obliga al navegador a recalcular el layout).
innerText sí tiene en cuenta cómo se renderiza visualmente 
(por ejemplo, ignora texto de elementos con display: none), 
lo que lo hace más lento y con comportamientos algo inconsistentes entre navegadores.
*/
console.log(document.title);

//Iteración 1: Cambiar el texto "Generation 1 Pokémon" por "Generasión 1 Pokimon"
//RUTA: <h2 id="gen-1">Generation 1 Pokémon</h2>

document.getElementById("gen-1").textContent = "Generasión 1 Pokimon";

//Iteración 2: Cambiar el color de fondo de la sección de la Generación 1.
//RUTA: infocard-list.infocard-list-pkmn-lg

//document.querySelector(".infocard-list.infocard-list-pkmn-lg").style.backgroundColor = "yellow";
//let pokimonGen1 = document.querySelectorAll("#gen-1 + .infocard-list.infocard-list-pkmn-lg");
//for (let i = 0; i < pokimonGen1.length; i++){
//    pokimonGen1[i].style.backgroundColor = "#800020";
//}
const fotos = document.querySelectorAll("body > main > div:nth-child(6) > div")
console.log(document.querySelectorAll("body > main > :nth-child(6)"));


for (let i = 0; i < fotos.length; i++) {
    fotos[i].style.backgroundColor = "red"
}
//Iteración 3: imprimir por consola la URL de la página.

console.log(window.location.href);

//Iteración 4: imprimir por consola el dominio de la página (no la URL completa, solo el dominio, ej. pokemondb.net).

console.log(window.location.hostname);

//Iteración 5: imprimir por consola todos los nodos de imagen (todas las etiquetas <img> de la página).

console.log(document.querySelectorAll("img"));

//Iteración 6: sustituir el atributo src de todas las imágenes
// por https://media.giphy.com/media/2v170e71aanfi/giphy.gif.

const imagenes = document.querySelectorAll("img");

for (let i = 0; i < imagenes.length; i++) {
    console.log(imagenes[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif");
}

//Iteración 7: cambiar el fondo de todos los infocard-lg-data text-muted para los Pokémon voladores (itype flying).

const voladores = document.querySelectorAll(".itype.flying");

for (let i = 0; i < voladores.length; i++) {
    voladores[i].closest(".infocard-lg-data.text-muted").style.backgroundColor = "blue";
    }