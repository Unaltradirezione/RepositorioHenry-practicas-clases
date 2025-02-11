// Esto es una forma de sumar, lo que se va a hacer es usar el bucle For
// Para poder sumar cuando ya no es del 1 al 4 como en la parte de abajo
// Sino cuando, ejemplo se tienen 100 lineas que son 1, 2, 3, 4 ... hasta llegar al 100 

var suma = 0; 
suma = suma +1;
suma = suma +2;
suma = suma +3;
suma = suma +4;

console.log(suma)


//Uso de bucles







                                                    //Bucle For

//Sintaxis para el bucle for

var suma = 0; // Declaramos e inicializamos suma

for (var i = 0; i < 10; i++) {
    suma = suma + 1; // O También se puede escribir como suma++
    console.log(suma); // Imprimimos el valor de suma en cada iteración
}


    //var = variable de iteracion
        //permitira tener un pibote o iterador en cada bucle 
        // i=0 ;   para poder ejecutar acciones
    
    //   i<10 ;  segundo valor, es una condicion de cumplimeinto
            //mientras esta condicion sea verdadera el bucle seguira ejecutandose

    //i++) 
        //esto significa que se va a repetir una ves por cada iteracions











                                                    //ejemplo 2 


            //sumar variable de iteracion

        var suma = 0; // Declaramos e inicializamos suma

        for (var i = 0; i <5 ; i++) {
            suma = suma + i; // O también se puede escribir como suma++
            console.log('variable de iteracion:' , i); // Imprimimos el valor de suma en cada iteración        
        }
        console.log('Variable Suma:' , suma)





                                                //Bucle while
        //este permite repetir una accion siempre y cuando una ondicion sea verdadera

        //Sintaxis
        while (condición) {
            // código a ejecutar mientras la condición sea true
        }
        