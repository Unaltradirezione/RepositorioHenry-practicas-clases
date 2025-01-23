function sumaTres (x) {
    console.log(x + 3);
} 

sumaTres(5);


'Funciones Equivalentes'

// Formas de definir funciones

//primera
function sumaTres(x) {
    return x + 3;
}

// segunda
    var sumaTres = function (x) {
        return x + 3;
    }

// Tercero
var sumaTres = (x) => { //  =>se llama funcon de flecha
    return x + 3;
}

//las tres formas cumplen la misma funcionalidad



                                        'Error con console.log; y return'

'console.log ();'
// imrpime el valor de la variable en la terminal
// da una ayuda visual para saber cual es el valor de una variable o el valor que devuerle una linea de codigo

        'Ejemplo'
        var animal = `caballo`;

        console.log(animal);
        // esto imprime en la terminal el valor de la variable que en este caso el valor es caballo

'return'

function ciudadoConElConsoleLog(nombre) {
    console.log (nombre);
}
