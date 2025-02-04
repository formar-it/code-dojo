# Code Dojo - Forit

Este es el repositorio para el Code Dojo de Forit

## Principios

Estos son los principios que guían el Code Dojo de Forit

### Para ir rápido hay que ir bien

No hay que apurarse, hay que hacer las cosas bien. Si no se hace bien, se va a tener que hacer de nuevo. Si no sabemos algo hay que tomarse el tiempo de aprenderlo.

### Ir de a poco

Aprender algo debería forzarte a frenar y pensar. Uno puede acelerar en la medida que va aprendiendo. No hay que apurarse, no hay que hacer todo de una vez.

### Aprender de nuevo

Para aprender algo de nuevo, hay que olvidar lo que ya sabemos.

### Aprender de los demás

Si prestamos atención podemos aprender de alguien que esta haciendo algo por primera vez. Podemos aprender de los errores de otros si escuchamos con atención.

### Dominando un tema

Si es fácil para vos, explicáselo a alguien que le resulte difícil. Explicalo hasta que deje de resultarle difícil. En este proceso vas a aprender más sobre el tema.

## Práctica deliberada

No es lo mismo que aprender mientras trabajamos. Una práctica deliberada es cuando buscamos nuevas experiencias que pongan a prueba nuestras habilidades lo justo y te den retroalimentación que te permita aprender y mejorar.

La practica deliberada funciona en largos periodos de tiempo, y es está en el corazón de conseguir pericia en algo.

### TDD es la forma correcta de programar

No se puede discutir forma sin código, y uno no puede mostrar código sin tests. Este es un lugar de aprendizaje, donde aceptamos que "el diseño es el código" y el código sin tests no existe.

## TDD

Para aprender TDD, vamos a seguir las siguientes reglas, que no es necesariamente la manera en la que trabajaríamos en un proyecto real.

### Pasos de bebé

El siguiente paso a tomar siempre tiene que ser el más pequeño posible. Si procedemos asi, podemos mantener los próximos pasos siempre triviales.

### Unidad bajo prueba (Unit under test)

La unidad bajo prueba es la clase o función que estamos testeando. Al escribir tests siempre deberíamos focalizarnos en una sola unidad bajo prueba.

### Ritmo de los tests primero

- Escribimos un test para un paso de bebé de la unidad de prueba
- Corremos todos los tests y vemos que el nuevo test falla
  - Si no está fallando, revisar el test
- Los tests escritos deberían generar una interface
- Implementamos el código necesario para que el test pase
- Corremos todos los tests y vemos que todos pasan
- Avanzamos al siguiente paso de bebé
