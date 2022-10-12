/* JSON = javascript object notation. como su nombre lo indica, es una sintaxis
para redactar y utilizar objetos de javascript */ 
let persona = {
    nombre: "Alejandro Sanchez",
    edad: 25,
    genero: 'masculino',
    email: "sanchez.alejandro0603@gmail.com"
}

persona.nombre
persona.edad
persona.email

//de un objeto, no se puede crear un set
//el set es un conjunto iterable

miSet = [1,2,3]
miSet  = new Set(miSet)

/* es importante entender el anidamiento basico de acuerdo al tipo de palabra de variable declarada*/
var t = 'soy la primera variable'
let u = 'soy la segunda variable'
{
    let v = 'soy la tercera variable'
    let w = 'soy la cuarta variable'
    {
        const x = 'soy la quinta variable'
        var y = 'soy la sexta variable'
        {
            z = 'soy la ultima variable'
        }
    }
}

/* para el caso anterior, el garbage collector limpia const y let por fuera de la identación donde estan declaradas las variables
en cambio, var siempre seguirá existiendo en toda la extensión del codigo, es decir, se convierte en variable global, y eso va a 
ocasionar que 1) la memoria se llene innecesariamente, y 2) que pongas en riesgo la integridad del programa entero si modificas la
variable en algún punto del codigo, ya que puede depender de dicha variable la estabilidad del codigo. Es por eso que es considerado
como buena practica usar let y const en lugar de var */

/*logica de funciones*/
function sumar(num1, num2){
    console.log(arguments) //para visualizar los argumentos que van a estar utilizandose para la funcion 
    //las variables de la funcion num1 y num2 funcionan como let y const, porque solo pueden aplicarse dentro de la función
    const resultado = num1 + num2
    //si no retorno la variable final de la función en el scope {} de la función, no puedo utilizarla en el scope principal
    return resultado;
}

/* de igual forma, se puede utilizar una función con objetos */
function sumaobj({num1, num2}) {
    console.log(arguments)
    const resobj = num1 + num2
    return resobj
}
//funciones combinadas
function sumacomb(numeros, r) {
    console.log(arguments)
    const rescomb = numeros.num1 + numeros.num2
    return rescomb
}

//y para declarar el uso de la función previamente creada es simplemente así:
sumar(1,2)

//si le pongo más argumentos, los recibirá todos, pero solo utilizará los que se hayan declarado
sumar(1,2,3)

//si quiero almacenar y reusar lo que una funcion arroja, lo meto a una variable
const r = sumar(3,2)
const s = sumar(4,5)

//y se pueden utilizar variables dentro de una variable
const y = sumar(r,s)

//para el caso de suma de objetos
const o = sumaobj({num1: 4, num2: 4})

//para el caso de funciones combinadas
const c = sumacomb({num1:o, num2: o})

/* METODOS: utilicemos formas de crear metodos*/

const people = {
    nombre: 'Melissa',
    apellido: 'Cetina',
    id: 5,
    email: 'meli.j.c.d@gmail.com',
    //el metodo no es más que una forma de conseguir un resultado a través de una funcion interna de un objeto
    nombreCompleto: function() {
        return `${this.nombre} ${this.apellido}`
    }
}

/* ITERADORES: son formas de acceder a diferentes elementos de un iterable */

const myArray = [1,2,3, 'jelow', 29, {obj1:1}]
//recordar que los dos parentesis al final de algo, indican que ese algo se va a comportar como una funcion
var iterador = myArray[Symbol.iterator]();

//se repite la misma instruccion para que en consola se impriman consecutivamente los valores del array
iterador.next().value
iterador.next().value
iterador.next().value

//nota: igual se puede hacer con un Set

//para agregar elementos a un array ya creado, se utiliza push
myArray.push(10)
//para llamar a un elemento en especifico de un array, se utiliza el bracket
myArray[6]