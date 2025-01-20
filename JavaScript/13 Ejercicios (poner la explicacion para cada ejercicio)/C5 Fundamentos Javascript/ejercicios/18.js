function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:
  if (typeof letra === 'string' && letra.length === 1) {
    // Convertimos a minúscula para aceptar tanto mayúsculas como minúsculas
    letra = letra.toLowerCase();
    
    // Verificamos si la letra es una vocal
    if ('aeiou'.includes(letra)) {
      return "Es vocal";
    }
  }
  // Si no es una vocal o no es un solo caracter, retornamos "Dato incorrecto"
  return "Dato incorrecto";
}

module.exports = esVocal;
