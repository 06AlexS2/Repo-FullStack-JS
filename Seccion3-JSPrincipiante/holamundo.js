//una variable se declara con la palabra reservada var en js
var curso = 'bootcamp hablemos de programacion'
//las variables son dinamicas, es decir, no tienen un tipo predefinido, puede ser entero, caracter, booleano, etc.
var minumero = 6
//si corres este codigo, no hace nada, y te devuelve un "undefined", para que aparezca algo en consola, debes reiterar el uso de 
//cualquier variable
curso
//no puedes igualar una variable a otra sin haberla definido antes, ni haber creado una variable original de comparación
//curso = bootcamp
curso = 'bootcamp'
//si quisiera reiniciar una variable, debe precederla la palabra reservada var
var curso = 'hablando de programación'

//'use strict'; es para evitar que la variable se reinicie al avanzar el codigo
//eso era antes del 2015, ahora se utiliza const antes de una variable
const cursito = 'bootcamp'
//si yo escribiera despues "var curso = 6", me daría error porque diría que ya ha sido declarada"
//let igual permite redefinir una variable al avanzar en el codigo
let cursote = 'bootcamp de programación'
cursote = 1

//operaciones con variables en let
let numero1 = 1
let numero2 = 2
let suma = numero1 +  numero2
let resta = numero1 -  numero2
let mult = numero1 * numero2
let div = numero1 / numero2

/* cuando se recomienda var y cuando let? js respeta las opiniones del desarrollador 
se recomienda let y const para los loops */

//si fuera con strings sería así (concatenar)
let string1 = 'bootcamp'
let string2 = ' concatenar cadenas'
let resultado = string1 + string2
resultado
//o tambien se puede
//let resultado = string1 + 'lel' + string2

//si utilizamos operadores diferentes como "string literal ``"
//let resultado = `${string 1} ${string2}`

//para acceder a documentación sobre javascript, escribir
//mdn javascript + lo que necesites encontrar

/*javascript es bajamente tipado, es decir, solo tiene 7 tipos diferentes de variables*/

//el otro tipo de variable es object, que incluye propiedades dentro del objeto, o tambien otros objetos
let objeto1 = {propiedad1: 'texto1', 
               propiedad2: 2,
               propiedad3: {}
            }
//para acceder a una propiedad de objeto, es con la notacion de punto
objeto1.propiedad1
//typeof es para saber que tipo de variable es la que estas consultando
typeof objeto1.propiedad1

//el valor null es otra primitiva o tipo de variable
/*su caracteristica principal es typeof null es un objeto
esto se considera como un bug que sigue estando ahi a proposito */
let cosa = null


//undefined es otra primitiva
let indefinido = undefined

//booleanos, esto ya te la sabes
let encendido = true
let apagado = false

//si no declaras una variable, se vuelve undefined
let variable1

