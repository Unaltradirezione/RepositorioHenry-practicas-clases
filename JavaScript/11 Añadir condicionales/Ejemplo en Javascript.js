let edad = 20;
let ingresos = 5000;

if (edad >= 18) {
    if (ingresos >= 4000) {
        console.log("Eres elegible para un crédito.");
    } else {
        console.log("No cumples con los ingresos requeridos.");
    }
} else {
    console.log("Debes ser mayor de edad para solicitar un crédito.");
}
