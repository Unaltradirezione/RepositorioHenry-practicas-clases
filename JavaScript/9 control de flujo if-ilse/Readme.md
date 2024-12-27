El control de flujo if/else permite ejecutar diferentes bloques de código en función de condiciones específicas. Su estructura básica es sencilla y varía según el lenguaje de programación. Aquí tienes un ejemplo general y algunos ejemplos prácticos en distintos lenguajes:

Estructura General

if (condición):
    // Código si la condición es verdadera
else:
    // Código si la condición es falsa


Ejemplos en diferentes lenguajes



Python

edad = 18

if edad >= 18:
    print("Eres mayor de edad.")
else:
    print("Eres menor de edad.")



Java
int edad = 18;

if (edad >= 18) {
    System.out.println("Eres mayor de edad.");
} else {
    System.out.println("Eres menor de edad.");
}



JavaScript
let edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}



C++

#include <iostream>
using namespace std;

int main() {
    int edad = 18;

    if (edad >= 18) {
        cout << "Eres mayor de edad." << endl;
    } else {
        cout << "Eres menor de edad." << endl;
    }

    return 0;
}


Variaciones del Control de Flujo
else if (o anidado): Para manejar múltiples condiciones.

nota = 85

if nota >= 90:
    print("Excelente")
elif nota >= 80:
    print("Muy bueno")
elif nota >= 70:
    print("Bueno")
else:
    print("Necesitas mejorar")


Condicionales en una línea (en lenguajes como Python o JavaScript):

mensaje = "Eres mayor de edad." if edad >= 18 else "Eres menor de edad."
print(mensaje)

    Anidación de condicionales: Evita abusar de ellos para no perder claridad en el código.

if condicion1:
    if condicion2:
        print("Ambas condiciones son verdaderas.")
