//Todo: Características de let:
//Todo: 1. Ámbito de bloque:
//Todo: Las variables declaradas con let solo están disponibles dentro del bloque {} donde se definieron,
//Todo:  lo que ayuda a evitar errores relacionados con el alcance de variables.

//Todo: Ejemplo


let nombre = "Juan";
console.log(nombre); // "Juan"

//Todo: Cambiamos el valor de la variable
nombre = "María";
console.log(nombre); // "María"

//Todo: Uso recomendado:
//Todo: Utiliza let para variables que necesiten cambiar su valor, y const para aquellas que no lo harán. Esto mejora la claridad y la seguridad del código.



