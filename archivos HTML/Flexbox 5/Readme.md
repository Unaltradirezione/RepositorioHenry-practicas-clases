Flexbox
    Es un valos dentro de CSS, destinado a la propiedad display.
    permite posicionar, alinear y direccionar los elementos HTML en la pantalla de una manera muy sencilla

Abreviatura de Flexible Box Layout, es un modelo de diseño utilizado en CSS para crear distribuciones de elementos más flexibles y alinearlos de manera eficiente dentro de un contenedor. Flexbox es ideal para la creación de diseños responsivos y facilita la alineación, el dimensionamiento y la distribución de elementos dentro de un contenedor, incluso si sus tamaños son dinámicos o desconocidos.

    Ordena alineando elementos

    Vertical
    Horizontal

Conceptos Clave de Flexbox

        1. Contenedor Flex: El contenedor donde se aplica el display: flex; y en el que los hijos (elementos 
           dentro del contenedor) se comportan de manera flexible.

        2. Ejes:
                . Eje principal (main axis): Es el eje principal a lo largo del cual los elementos son 
                  colocados. Por defecto, es horizontal.

                . Eje cruzado (cross axis): Es el eje perpendicular al eje principal. Si el eje principal es 
                  horizontal, el eje cruzado será vertical, y viceversa.


        3- Elementos Flex: Son los hijos directos del contenedor flexible, y su comportamiento es influenciado   
           por las propiedades de Flexbox.



Propiedades de Flexbox

Contenedor Flex (display: flex o display: inline-flex)

    . Display: flex;: Define un contenedor flexible.

    . Flex-direction: Define la dirección del eje principal.

        row (por defecto): Los elementos se colocan en fila.
        row-reverse: Inverso a row.
        column: Los elementos se colocan en columna.
        column-reverse: Inverso a column.
    
    . Ustify-content: Alinea los elementos a lo largo del eje principal.

        flex-start: Alinea los elementos al inicio del contenedor.
        flex-end: Alinea los elementos al final del contenedor.
        center: Centra los elementos en el eje principal.
        space-between: Distribuye los elementos con espacio igual entre ellos.
        space-around: Distribuye los elementos con espacio alrededor de ellos.

    . align-items: Alinea los elementos a lo largo del eje cruzado.

        stretch (por defecto): Estira los elementos para llenar el contenedor.
        flex-start: Alinea los elementos al inicio del eje cruzado.
        flex-end: Alinea los elementos al final del eje cruzado.
        center: Centra los elementos en el eje cruzado.
        baseline: Alinea los elementos según su línea base de texto.

    . flex-wrap: Controla si los elementos deben ajustarse cuando no caben en una sola línea.
        nowrap (por defecto): Todos los elementos permanecen en una línea.
        wrap: Los elementos se ajustan a múltiples líneas si es necesario.
        wrap-reverse: Igual que wrap, pero las líneas se ordenan en orden inverso.

Elementos Flex (propiedades que afectan a los elementos flexibles)

    . flex-grow: Define cómo los elementos deben crecer en relación a los demás.
    
        Ejemplo
             flex-grow: 1; hará que el elemento crezca para llenar el espacio disponible.

     
    . flex-grow: 1; hará que el elemento crezca para llenar el espacio disponible.
    
        Ejemplo
            flex-shrink: 1; permitirá que el elemento se reduzca si no hay suficiente espacio.

    . flex-basis: Define el tamaño inicial del elemento antes de distribuir el espacio sobrante.
    
        Ejemplo
            flex-basis: 200px; hará que el elemento tenga un tamaño inicial de 200px.


    . align-self: Permite a los elementos sobrescribir el comportamiento de align-items y alinearse individualmente a lo largo del eje cruzado.

        Ejemplo
            align-self: center; alinea ese elemento en el centro del eje cruzado.



                                          /Estructura basica de Flexbox/

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100vh;
        }

        .box {
            width: 100px;
            height: 100px;
            background-color: lightblue;
        }
    </style>
    <title>Flexbox Example</title>
</head>
<body>
    <div class="container">
        <div class="box">Box 1</div>
        <div class="box">Box 2</div>
        <div class="box">Box 3</div>
    </div>
</body>
</html>

-----------------------------------------------------------------------------------------------------------------

Explicacion

El contenedor .container tiene display: flex;, lo que lo convierte en un contenedor flex.
Los elementos dentro del contenedor .box son alineados con justify-content: space-between;, lo que distribuye los elementos con espacio igual entre ellos.
Los elementos también están centrados verticalmente con align-items: center;.


        Ventajas de Flexbox

- Manejo más simple y predecible de distribuciones complejas, especialmente para elementos responsivos.
- Alineación de elementos más sencilla en ambos ejes (horizontal y vertical).
- Mayor control sobre la distribución y el tamaño de los elementos en comparación con métodos anteriores como el 
  uso de floats o tablas.