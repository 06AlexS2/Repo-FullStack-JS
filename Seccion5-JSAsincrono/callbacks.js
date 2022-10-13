/** callbacks: funciones programadas para funcionar de forma posterior a su ejecución 
 * setTimeout es una función de callback, que permite delimitar cuanto tiempo debe transcurrir entre
 * la ejecución real de la función
*/

//despues de 3 segundos, se activa el console log en la consola
setTimeout(() => {
    console.log('me ejecuté después');
}, 3000)

//hagamos una función con esta funcion de callback
const ejecutarDespues = () => {
    console.log('me ejecuté despues');
}

setTimeout(ejecutarDespues, 3000)

//los callbacks tambien ocurren o se dan al llamar funciones dentro de funciones
function sumar(num1, num2) {
    return num1 + num2
}

function restar(num1, num2) {
    return num1 - num2
}

function multifuncion(num1, num2, operacion) {
    const resultado = operacion(num1, num2)
    console.log(resultado);
}
//para este caso, el callback se da en la funcion sumar, es decir
//lo que ocurre es que primero js lee el codigo, lo apila segun las declaraciones de funciones
//lo ejecuta, y luego cuando la funcion interna se de (operacion), llama de regreso a esa funcion
//que ya habia declarado antes en segundo plano
multifuncion(5,4, sumar)

//otro ejemplo de callback es cuando utilizas elementos interactivos en el frontend, como botones
const myButton = document.getElementById('myButton')
const executeWhenClicked = evento => {
    console.log(evento);
    alert('diste click bastardo')
}

myButton.addEventListener("click", executeWhenClicked)

//la otra forma es con el callback anidado

setTimeout(() => {
    console.log('ejecucion1');
    setTimeout(() => {
        console.log('ejecucion2');
        setTimeout(() => {
            console.log('ejecucion3');
            setTimeout(() => {
                console.log('ejecucion4');
            }, 500);
        }, 1000);
    }, 2000);
}, 3000);