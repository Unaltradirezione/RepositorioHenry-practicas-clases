                                
                                
                                            "Particularidades de la instruccion return"


function ciudadoConElConsoleLog(nombre) {
    console.log (nombre);
    return nombre;
}

//si no se colota el return nombre; hara falta este valor y no se mostrara el valor de retorno
     "Ejemplo"
     function ciudadoConElConsoleLog(nombre) {
        console.log (nombre);        
    }
    

    //nueva funcion

    function ciudadoConElConsoleLog(nombre) {
        console.log (nombre);
        return nombre;
    }

    
    function otraFuncion () {
        return (
            "El nombre retornado por la funcion 'cuidadoConElConsoleLog' es: " +
            ciudadoConElConsoleLog('Victor')
        );
    }


    "otro ejemplo sobre las particularidades del return"
    //se va a cambiar el orden en el que se pone el return y el console.Log()

        function cuidadoConElReturn(nombre) {
            return nombre;
            console.log(nombre);    
        }
    //para este caso todo lo que se ejecuta por debajo del return no se va a jeecutar  y solo va dar un solo resutlado que viene de la
    //funcion nonbre 