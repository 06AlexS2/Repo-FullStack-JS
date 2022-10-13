const promiseFactory = (index) => 
    new Promise((resolve, reject) => {
        
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

/*let myPromises = []

for(let i=0; i<10; i++){
    myPromises = [...myPromises, promiseFactory(i)]
}


myPromises.forEach(currPromise =>
    currPromise
        .then((respuesta) => console.log(respuesta))
        .catch((razon) => console.log(razon))
)
*/

/**async function: 
 * 
*/
//la funcion myAsyncFunction devuelve una promesa
//la funciones async son mejores porque, para el caso de la funcion de abajo, siempre devuelve de primero
//el valor promise y luego el console.log, esto quiere decir que no tenemos que definir un then en la respuesta del Promise
//lo que hace que las funciones asincronas sean similares a una funcion normal
//await solo se puede usar en una funcion que tenga la palabra reservada async antes de function
async function myAsyncFunction (){
    const myPromise1 = await promiseFactory(1)
    console.log('this is the value of my promise 1:', {myPromise1})
}

//esto devuelve lo que una funcion normal
//cual es la diferencia entre esta funcion y la anterior?
//la funcion myNormalFunction devuelve primero el console log y luego verifica si se cumplió o no la promesa
//la funcion myAsyncFunction devuelve primero el estado pending de la promesa y, dependiendo si se cumpió o no,
//devuelve un resultado de esa promesa, imprimiendo posteriormente el console.log
function myNormalFunction(){
    const myPromise2 = promiseFactory(1)
    console.log('this is the value of my promise 2:', {myPromise2})
}

//mejoremos la funcion myAsyncFunction con la sintaxis trycatch
//que es trycatch? es una doble red en donde puede caer una respuesta satisfactoria o un error
//es decir, try intenta hacer el codigo que queremos que se implemente, y catch atrapa un error en caso que lo que está
//en try falle
async function my2AsyncFunction () {
    try {
        const myPromise3 = await promiseFactory(1)
        console.log('this is the value of my promise 3:', {myPromise3})
    } catch (error) {
        console.log('there was an error:', error);
    }
}

function my2NormalFunction () {
    const myPromise4 = promiseFactory(2)
        .then((result) => console.log(result))
        .catch((reason) => console.log(reason))
}

//y si hicieramos un ciclo for para promesas
async function my3AsyncFunction () {
    try {
        let myPromises = []
        for(let i=0; i< 10; i++) {
            myPromises = [...myPromises, await promiseFactory(i)]
        }
        console.log(
            'variable myPromises al interior del async function:',
            myPromises);
        return myPromises
    } catch (error) {
        throw error
    }
}

function my3NormalFunction() {
    return promiseFactory(2)
}
//y luego llamemos a esas funciones
my3AsyncFunction()
    .then(result => console.log('el resultado de mi async function es: ===>', result))
    .catch((reason) => console.log('razon ===>', reason))

//lo que hace es actuar como un promise.all, es decir, una vez que se obtiene la resolucion de 
//todas las promesas involucradas, se entregan los resultados, es por eso que en el then,
//el codigo del console.log se muestra como si fuera codigo sincrono, codigo que ocurre al momento de la 
//ejecucion