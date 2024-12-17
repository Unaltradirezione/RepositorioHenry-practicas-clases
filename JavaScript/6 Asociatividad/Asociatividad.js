'La asociatividad en programación'

        'se refiere a la dirección en la que se evalúan los operadores cuando tienen la misma precedencia.'
        'Es un concepto fundamental en lenguajes como JavaScript, Java, Python, y muchos otros.'


       'Tipos de asociatividad'

                        '1 Asociatividad de izquierda a derecha:'
                        
                        'La evaluación se realiza de izquierda a derecha.'
                        'Ejemplo: operadores aritméticos +, -, *, /.'

                                console.log(10 - 4 - 2); // 4
                                // Se evalúa de izquierda a derecha: (10 - 4) - 2 = 4

                        '2 Asociatividad de derecha a izquierda:'
                        'La evaluación se realiza de derecha a izquierda.'
                        'Ejemplo: operador de asignación = y operador unario.'

                        let x = y = z = 5; // Asignación
                        console.log(x, y, z); // 5, 5, 5
                        // Se evalúa de derecha a izquierda: z = 5, y = z, x = y
                        
                        let a = 2 ** 3 ** 2; // Exponenciación
                        console.log(a); // 512
                        // Se evalúa de derecha a izquierda: 3 ** 2 = 9, 2 ** 9 = 512
                        


                'Ejemplo práctico con diferentes operadores'

                //En este ejemplo, combinamos operadores con diferentes niveles de precedencia y asociatividad:

                let result = 10 - 4 + 2; // Operadores con la misma precedencia
                console.log(result); // 8


                '+ y - tienen la misma precedencia y son asociativos de izquierda a derecha'
                'Por lo tanto: (10 - 4) + 2 = 8.'

                //Otro ejemplo con asociatividad de derecha a izquierda:

                'let result = a = b = c = 10;'
                console.log(result); // 10

                        //= tiene asociatividad de derecha a izquierda.
                        //Se evalúa así: c = 10, luego b = 10, y finalmente a = 10.


                        