# Sesión 01

Para la primera sesión vamos a utilizar la Kata "FizzBuzz" con el objetivo de aprender TDD.

## FizzBuzz

Fizzbuzz es un juego norteamericano que se juega con los niños para enseñarles sobre la división. El juego es simple, los jugadores se paran en un círculo y cuentan en voz alta comenzando desde 1. Sin embargo, si el número es divisible por 3, el jugador debe decir "Fizz" en lugar del número. Si el número es divisible por 5, el jugador debe decir "Buzz" en lugar del número. Si el número es divisible por 3 y 5, el jugador debe decir "FizzBuzz".

### Primera etapa

- Escriba un programa que imprima los números del 1 al 100,
- para los múltiplos de 3 imprima “Fizz” en lugar del número
- para los múltiplos de 5 imprima “Buzz” en lugar del número.
- Para los números que sean múltiplos de 3 y de 5 imprima “FizzBuzz”.

### Segunda etapa

- Un numero es Fizz si es divisible por 3 o si tiene un 3 en el número
- Un numero es Buzz si es divisible por 5 o si tiene un 5 en el número

Por ejemplo:

- 53 debería devolver "FizzBuzz" (contiene 5 y 3)
- 35 debería devolver "FizzBuzzBuzz" (contiene 3 y 5 y es divisible por 5)
