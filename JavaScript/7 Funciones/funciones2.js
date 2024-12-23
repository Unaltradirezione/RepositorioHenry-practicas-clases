                                
                                
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