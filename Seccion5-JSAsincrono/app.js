/** javascript asincrono: no funciona secuencialmente
 *  EN JS, la aplicación completa son una ejecución, llamada la ejecución principal
 * el call stack, o apilamiento de llamadas, se da cuando tienes funciones anonimas
 * y dichas funciones tienen un orden de entrada y salida
 */
function obtenerNombre() {
    return 'Camilo';
}

function obtenerApellido() {
    return 'Montoya';
}

function obtenerNombreCompleto() {
    const nombre = obtenerNombre()
    const apellido = obtenerApellido()
    return `${nombre} ${apellido}`
}

const nombreCompleto = obtenerNombreCompleto()

console.log('nombre completo:', nombreCompleto);