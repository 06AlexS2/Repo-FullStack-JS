/**promises: 
 * son proxys para un valor que no necesariamente se conoce  cuando la promesa es creada.
 * permite asociar manejadores o handlers con el eventual valor de exito o fracaso de una tarea asíncrona. entonces
 * ese valor es futuro. una promesa puede entregar:
 *  - pendiente: estado inicial, ni completado ni rechazado
 *  - satisfecho: la operación se completó satisfactoriamente
 *  -rechazado: la operación falló
 * mira las promises como ir a comprar una hamburguesa a carls jr. donde primero pides (request), te dan el ticket (promise)
 * y pueden o no darte la hamburguesa (fulfilled/rejected)
 * si una promesa se queda eternamente pendiente es que algo no se verificó
 * o a la mejor todavía no se ha resuelto la devolucion de la promise
 */


//que hace esto? crea dos tiempos aleatorios del 1 al 10 en segundos
//donde asigna cada tiempo a la respuesta de una promesa resolved o rejected
const promiseFactory = (index) => 
    new Promise((resolve, reject) => {
        //resolve es lo que se envia en caso de que se logre satisfacer
        //resolve('la promesa fue resuelta');
        //reject('no se pudo entregar la promesa')
        const randTimerRejected = Math.floor(Math.random() * 10000) + 1000;
        const randTimerResolved = Math.floor(Math.random() * 10000) + 1000;
        //console logs para ver cuanto tiempo se asignó a rechazos y resoluciones
        //console.log('Rejection Time:', randTimerRejected);
        //console.log('Resolve Time:', randTimerResolved);
        setTimeout(() => {
            reject(`promise ${index} rejected`)
        }, randTimerRejected)

        setTimeout(() => {
            resolve(`promise ${index} resolved`)
        }, randTimerResolved)
    });

//a partir de aqui, creamos un array de promesas
let myPromises = []

//a cada elemento del array le asignamos una promesa con el ciclo for
for(let i=0; i<10; i++){
    myPromises = [...myPromises, promiseFactory(i)]
}

//y asignamos las respuestas en caso de que
//then: se cumpla
//catch: falle
myPromises.forEach(currPromise =>
    currPromise
        .then((respuesta) => console.log(respuesta))
        .catch((razon) => console.log(razon))
)

//y asi como asi asignamos promesas

//notas: existen varios tipos de verificadores de promesas, entre los cuales hay:

// - promise.all permite verificar si todas las promesas se cumplen, o si una sola se rechaza
// - promise.race verifica cualquier promesa que se cumpla primero
// - promise.