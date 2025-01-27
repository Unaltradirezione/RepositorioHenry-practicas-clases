
                                                //operador AND


// && estos dos representan al operador AND (Conjuncion) 
    //&& llamados amperson

     // &&  Permite conjugar dos o mas condiciones al mismo tiempo


//EJemplo de como usarlo

function mayorYmenor(num){  //funcion llamada mayor y menor //se encargara de indicarnos si el numero es mayor a 10 pero menor a 5
    if(num > 5 && num < 10)console.log(true);
    else console.log(false);
};

mayorYmenor(2);
mayorYmenor(7);


// si se tienen mas de dos condicioenes unidas por operadores AND todas deben ser verdaderas para 
    // que la condicion final lo sea


  

 



                                                                             //operador  OR

    // se escribe repitiendo el simbolo pleca   
    // permite conjugar dos o mas condiciones 
    
    function operadorOr(str) {
        if(str === 'Henrry' || str.length<2 ) console.log(true);
        else console.log(false);
    };

    operadorOr('Henrry');  // en esta parte para que se cumpla la condicion en str.length<2 significa que si solo se coloca una letra el resultado sera True
                           //  si se pone la palabra completa, el resultado es true
                           // si se escribre otra palabra diferente o la primer letra diferente el resultado sera False




                                                                            // negacion NOT


    function negacion(permiso){
        if(permiso) console.log('Tiene permiso');

    };
     
    negacion(true);
    negacion(false);



                    // Se agrega signo de exclamacion
                    // esto preguntata por el valor opuesto del parametro
                    // se imprimira si el valor (tiene permiso) si el valor permiso es (false)
    
                        function negacion(permiso){
                            if(!permiso) console.log('Tiene permiso');

                        };
                        
                        negacion(true);
                        negacion(false);

                     //loanteiror es equivalete si se haca una comparacion de valores,  // Equivalencia con el signo de exclamacion

                        function negacion(permiso){
                            if(permiso === true) console.log('Tiene permiso');
                    
                        };
                        
                        negacion(true);

                        //aplicando la negacion
                        // se reemplaza el signo de igual por el deexclamacion
                        
                        function negacion(permiso){
                            if(permiso !== true) console.log('Tiene permiso');
                    
                        };
                        
                        negacion(false);

               