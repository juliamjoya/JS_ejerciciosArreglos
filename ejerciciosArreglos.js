/*** 
1. Crear un array vacio, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array
***/

let arrayNumeros = [];

for (let index = 0; index < 10; index++) {
    let numAleatorio = Math.round(Math.random()*10);
    arrayNumeros.push(numAleatorio);
    console.log(arrayNumeros);
}

/*** 
2. El usuario deberiá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa:'1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.
***/

let textoUsuario = prompt("Digite palabras separadas por coma Ej: Lapiz, esfero, etc.");
textoUsuario = textoUsuario.split(","); //separa las palabras que estan dentro del string
let arregloTexto = [];
arregloTexto.push(textoUsuario);
console.log(arregloTexto);

/*** 
3. De acuerdo al array [10,40,30,20,15,5] imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el numero menor y el numero mayor. Tip: Busca en google los metodos JavaScript que regresan el mayor y menor elemento de un arreglo
***/

const arregloNumeros = [10,40,30,20,15,5];

arregloNumeros.sort(function(a, b){return a - b});
console.log(arregloNumeros);

console.log(Math.max(...arregloNumeros));
console.log(Math.min(...arregloNumeros));