

#include <stdio.h>

int main() {
    int edad = 20;
    int ingresos = 5000;

    if (edad >= 18) {
        if (ingresos >= 4000) {
            printf("Eres elegible para un crédito.\n");
        } else {
            printf("No cumples con los ingresos requeridos.\n");
        }
    } else {
        printf("Debes ser mayor de edad para solicitar un crédito.\n");
    }

    return 0;
}
