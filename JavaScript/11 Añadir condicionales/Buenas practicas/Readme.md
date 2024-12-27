


# Buenas Prácticas al Anidar Condicionales

1.- Evitar demasiada profundidad:


Muchas capas de anidación pueden dificultar la lectura del código. Si es posible, utiliza funciones auxiliares o estructuras como elif en Python, else if en C/Java/C++, o combinaciones lógicas (&&, ||).

2.- Combinar condiciones si es adecuado: En lugar de anidar, algunas condiciones pueden combinarse para simplificar el código.


if edad >= 18 and ingresos >= 4000:
    print("Eres elegible para un crédito.")
elif edad >= 18:
    print("No cumples con los ingresos requeridos.")
else:
    print("Debes ser mayor de edad para solicitar un crédito.")


# Documentar: Si las condiciones anidadas son complejas, agrega comentarios para explicar cada nivel.

