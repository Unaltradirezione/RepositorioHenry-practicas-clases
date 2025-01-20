function esNumeroEntero(numero) {
  // La función recibe un argumento llamado numero.
  // Verifica si este es un número entero o no.
  // Retorna true si lo es, de lo contrario, retorna false.
  // Por ejemplo: 
  // 24 ---> true 
  // -1212 ---> true 
  // 121.212 ---> false 
  // Tu código:
  return Number.isInteger(numero);
  console.log(esNumeroEntero(24));         // true
  console.log(esNumeroEntero(-1212));      // true
  console.log(esNumeroEntero(121.212));    // false
  console.log(esNumeroEntero("Hola"));     // false
  console.log(esNumeroEntero(NaN));        // false

    
}

module.exports = esNumeroEntero;