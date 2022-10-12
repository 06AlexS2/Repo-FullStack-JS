/**destructuración
 * es acceder o desacoplar un objeto en variables mas simples
 */

let myObject = {
    a:1,
    b:2,
    c: 'hola',
    d: function(){
        console.log('soy una funcion');
    },
    e: true
}

//aqui obtengo los elementos a y b del objeto
let {a,b} = myObject

//hagamos lo mismo pero con un arrow function
let myArray = [1,2, 'hola', () => console.log('soy una funcion'), true]
myArray

//destructurando un array
let [numero1, numero2, palabra1, funcion1, booleano] = myArray
//sin crear una variable de array, puedo acceder a los elementos separados del array mediante destructuracion
numero2
palabra1
booleano

//si quisiera separar una funcion de un objeto, puedo usar el spread operator '...' de la siguiente forma
let {d, ...otros} = myObject
//entonces si llamo a d, solo será la función
d
//y si llamo a otros, serán todos los demás elementos o propiedades del objeto que NO son funciones
otros

//nota, el rest element o spread operator solo debe tener un elemento al final de  '...'
//si quisiera omitir el uno y el dos
let [uno, dos, ...resto] = myArray

//si haces destructuración, no puedes después modificar lo que destructuraste, ya que lo que en realidad
//se modifica, es una copia de los elementos originales
//la unica forma de cambiar una propiedad de objetos, es creando una copia y modificando esa copia
//a esto se le llama "mutación"
let myObject2 = myObject
myObject2.c = "otra cosa"
myObject2

//hacer una copia superficial y modificada de un objeto se llama inmutabilidad, porque el objeto original se mantiene igual
//creemos un objeto que tiene contenido otro objeto en uno de sus parametros
myObject3 = {
    a:1,
    b:2,
    c: 'hola',
    d: function(){console.log('soy una funcion')},
    e: true,
    f: {
        f1: 'soy f1',
        f2: 'soy f2',
        f3: () => {}
    }
}

myObject3
//y creemos una copia superficial de myObject3
let myObject4 = {...myObject3}
myObject4

//si modifico un parametro del objeto 4, el objeto 3 se mantiene igual
myObject4.a = 20
myObject3

//y verifico que pasa con objeto 4
myObject4

//ahora bien, si modifico el objeto interno de objeto 4 que pasa?
myObject4.f.f1 = 'ya cambié'

//tambien el objeto interno de objeto 3 se modifica, porque objeto 4 si guarda referencias al objeto original
myObject3.f.f1

//esto es, los cambios no se dan con los elementos más superficiales de un objeto, solo con los más internos

/**clonación superficial y profunda:
 * si quisiera que los cambios no afecten a ningun subobjeto del objeto 1, utilizo la librería lodash
 * la otra forma es usar la librería JSON.stringify(objeto), que vuelve caracteres todos los parametros o propiedades
 * de un objeto
 * y para revertir de string a propiedad, se utiliza JSON.parse(objeto)
 * un hack que se hace para eliminar todas las referencias de un json es implementar ambas funciones anteriores de json 
 */

myObject5 = {
    a:1,
    b:2,
    c: 'hola',
    d: function(){console.log('soy una funcion')},
    e: true,
    f: {
        f1: 'soy f1',
        f2: 'soy f2',
        f3: () => {}
    }
}
myObject5
//se aplica el hack de cambiar a string y luego revertir para quitar las referencias superficiales
myObject6 = JSON.parse(JSON.stringify(myObject5))

myObject6.f.f1 = 'ya no soy f1'
//al hacer esto, ya los cambios mas internos no se dan en el objeto original (objeto 5)
myObject5.f.f1

/** PROTOTIPOS: son enlaces a objetos en js
 * no existe una herencia directa entre prototipos o funciones
 */
//creemos una función que construya un tipo MyObject
function myNameAsObject(name, lastName) {
    this.name = name
    this.lastName = lastName
    this.getFullName = function() {
        return `${name} ${lastName}`
    }
}

let objectName = new myNameAsObject('Alejandro', 'Sánchez')
//esto crea un objeto de tipo myNameAsObject, con un prototipo de objeto

//es diferente a, por ejemplo, crear directamente un objeto JSON
let JSONobject = {
    name: 'Alejandro',
    lastName: 'Sánchez',
    getFullName(){}
}

//ahora, creemos objetos json a partir de funciones individuales para el nombre, con el fin de demostrar el prototype
function myNameIs() {
    this.getFullName = function() {
        return `${name} ${lastName}`
    }
    this.getName = function(name) {
        this.name = name
    }
    this.getLastName = function(lastName) {
        this.lastName = lastName
    }
}
myNameIs

//creemos un objeto
let miNombre = new myNameIs()

//le indicamos al prototype que setee siempre los parametros de nombre y apellido como "vacio"
myNameIs.prototype.name = 'vacio'
myNameIs.prototype.lastName = 'vacio'
//si verifico el nombre en miNombre, aparece como vacio, es porque en el prototipo ya tenemos seteadas las propiedades
//del objeto
miNombre.name
miNombre.lastName