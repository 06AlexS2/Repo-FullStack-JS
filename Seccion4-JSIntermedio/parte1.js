/** Booleanos: notación de algebra booleana, existe true, false, falsey y truthy, donde estos ultimos se llaman coerción */

f = false
t = true
!"" //esto es un falsy
!!"" //esto es un truthy
//que significa que un valor sea truthy o falsy? simplemente que, en notacion booleana, un valor es correspondiente a lo
//verdadero o a lo falso, respectivamente.

/** la cohersion mas que nada significa que javascript está tratando de interpretar lo que estás redactando en el codigo
 * entonces, eso significa que tienes un seguimiento de sintaxis continuo
 */

const persona = {
    nombre: 'Dave',
    apellido: 'Chappelle',
    edad: 49
}

const persona2 = {
    nombre: 'Billie',
    apellido: 'Eilish',
    edad: 17
}

//recordar que clg es la abreviatura para console.log
if(persona.edad < 18) {
    console.log("no puede ingerir alcohol")
} else {
    console.log("puede ingerir alcohol");
}

if(persona2.edad < 18) {
    console.log("no puede ingerir alcohol")
} else {
    console.log("puede ingerir alcohol");
}

//funcion condicional de los dos objetos creados
if(persona.nombre == 'Dave') {
    console.log('toma cuenta chistes');
} else if(persona2.nombre == 'Billie') {
    console.log('canta');
} else {
    console.log('ni canta ni cuenta chistes');
}

//existe el triple igual === para verificar

//esto verifica el valor uno de la propiedad del objeto
persona2.edad == '1'

//es el valor de persona2.edad igual al valor del string 1 ?
//es el type de persona2.edad igual al type del string 1 ?
persona2.edad === '1'

if(persona.apellido == 'Chappelle' && persona2.nombre == 'Billie') {
    console.log('Hola famosos');
} else {
    console.log('hola extraños');
}

/**loops: formas de hacer tareas repetidas */

let myArray = [];
//myArray.push(1,2,3,4,5)
//hacer lo anterior para una secuencia del 1 al 100 es demasiado extenso
//en vez de eso, se pone un loop for, que en js se realiza de la siguiente forma:

//recordar que se puede sustituir i++ por i = i + 1
for(let i = 0; i <= 10; i++) {
    myArray.push(i)
}

//el ciclo while en js se redacta de la siguiente forma:
let my2Array = []

let i = 0
while(i < 10) {
    my2Array.push(i)
    i++
}

//forEach: hace una función loop para cada elemento individual de un arreglo

let my3Array = ['hola', 'que tal', 'adios'];

function convertirMayusculas(phrase) {
    const response = phrase.toUpperCase()
    console.log(response);
}

//no es necesario poner aquí los parentesis despues de convertirMayusculas
//esto debido a que dicha funcion empieza como variable pero se vuelve función al
//declarar el function previamente
my3Array.forEach(convertirMayusculas)

//si tuvieras que desglosar la función forEach para obtener los mismos resultados anteriores, quedaria asi:
function myForEach(array, executingFunction) {
    executingFunction(array[0])
    executingFunction(array[1])
    executingFunction(array[2])
}

myForEach(my3Array, convertirMayusculas)

//funcion completa con indexacion
function convertWords(curr, index, fullArray) {
    const response = curr.toUpperCase()
    console.log(response);
    console.log(index);
    console.log(fullArray);
}

let myVar = my3Array.forEach(convertWords)

//array.map() crea un nuevo array poblado con los resultados de llamar una funcion provista en cada elemento en el arreglo llamado
const my4Array = [1,4,9,16]

const map1 = my4Array.map(x => x * 2)
console.log(map1);
//salida esperada: [2,8,18,32]

//array.filter permite filtrar elementos de un array
function onlyPairs(currentNumber) {
    return currentNumber % 2 === 0
}

let res2 = my4Array.filter(onlyPairs)
//salida esperada: res2 = [4, 16]

/**arrow functions */

function myFunction() {
    console.log('execute my function');
}

//si yo intento llamar a mi funcion de esta forma, no hace nada
myFunction

//aqui debo utilizar los parentesis para que la funcion se ejecute
myFunction()

//puedo crear una funcion adicional, y llamarla dentro de otra funcion
function my2Function() {
    console.log('la funcion 2 se ejecuta igual');
    myFunction()
}

my2Function()

//para declarar como tal una arrow function, la sintaxis de escritura es así:
//se declara como variable la definición y se apunta con una flecha la rutina de dicha funcion
const my3Function = () => {
    console.log('execute function 3');
}

//el hoisting es cuando js interpreta y ejecuta todo el script, leyendo las declaraciones primero y luego
//compila, es decir, es como si primero se definiera la funcion y luego se utilizara, incluso habiendolo redactado al reves
//por medio de motores de semantica
console.log(my4function);

function my4function() {
    return 100;
}

//el caso anterior NO ocurre con las arrow functions
console.log(my5function);

const my5function = () => {
    return 100
}

//creo la función
//que retorna este this, que es la función  6 como tal
function my6function() {
    this.my7funcion = function(){
        return this
    }
}

//a través de una nueva instancia objeto (constructor new = objeto) creo de nuevo un prototipo de objeto basado en la funcion 6
//es decir, es una función que puede considerarse como objeto tambien
//estoy creando un objeto de tipo my6function
const c = new my6function()

//que pasa si esto lo intento con un arrow function?
function my8Function() {
    this.my9Function = () => {
        return this
    }
}

//si se llama el contenido de la función
my8Function
//es diferente a llamar la ejecución de la función
//para este caso especifico, no retorna nada porque como tal, la identación 
//principal de funcion 8 no retorna ningun valor ni nada
my8Function()
//no se puede llamar a la funcion 9 porque no se llama al constructor que crea la funcion 9
//asi que esto va a dar error
my8Function().my9Function()

//esto es un prototipo que tiene acceso a mi funcion 9 por el constructor new
const d = new my8Function()
//si llamo a dicha función d, si accede
d
//y si llamo a la funcion 9, si accede

//este es el mismo caso que la funcion 8
const my10Function = () => {
    this.my11Function =  () => {
        return this
    }
}

//no puedo crear prototipos a partir de esta funcion 10

//creemos un objeto con una funcion dentro
const objeto2 = {
    metodo() {
        return this
    }
}

//si yo llamo a objeto, me devuelve el parametro metodo(), que es una funcion
objeto2

//si llamo al parametro metodo, me devuelve el contenido de la funcion como tal
objeto2.metodo

//y si invoco el uso del parametro metodo, me devuelve el objeto, ya no window, porque está contenida
//dentro de un objeto
objeto2.metodo()

//entonces, la diferencia entre llamar a una instancia 'objeto.instancia' e invocar a una instancia funcion 'objeto.instancia()'
//es que en uno llamo al contenido, y en el otro invoco el uso de la función

//y si hacemos el ejemplo anterior del objeto, pero con arrow function?
const objeto3 = {
    metodo2: () => {
        return this
    }
}

//si llamo al objeto 3, me devuelve el json de su contenido
objeto3
//si llamo al parametro metodo 2, me devuelve la funcion declarada
objeto3.metodo2
//y si invoco al parametro metodo 2, me devuelve window
objeto3.metodo2()

//nota: las arrow functions siempre devuelven a window, en caso de tener un objeto dentro de otro objeto
//devuelven al objeto padre
const my12function = () => {
    return function my13Function() {
        return this
    }
}
//si llamo a mi funcion 12, me retorna la declaracion de la funcion 12, porque ahi apunta la flecha
my12function
//si invoco a mi funcion 12, me devuelve la funcion 13 declarada
my12function()
//y si invoco dos veces a mi funcion 12, me devuelve  window
my12function()()