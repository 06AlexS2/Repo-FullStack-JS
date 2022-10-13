/**AJAX: Asynchronous Javascript And XML, es un paradigma para hacer que una pagina web no necesite recargarse del todo
 * para recargar datos.
 * antes, cuando se hacian peticiones, la pagina se recargaba, ya no ocurre eso con AJAX
 * microsoft creo xmlhttprequest (XHR), puedes obtener datos de una url sin tener que hacer un refresh de la pagina completa 
 */


//supongase que esta funcion sirve, podria obtener en la consola de js del navegador los usuarios que estan loggeados en 
//la pagina que se muestra

//primero se crea la variable donde se almacenarán los usuarios listados
const userList = document.getElementById('user-list')

//en la funcion reqListener se transforma a JSON los usuarios que devuelva el metodo
//luego los mapea individualmente por medio de una etiqueta <li> a cada uno,
//y para borrarles las comas que aparecen ahi, se utiliza join(''), indicandole que
//donde hayan separacion de usuarios, lo cambie por texto en blanco
//finalmente, innerHTML adjunta esas etiquetas al html final

/**metodo GET: OBTENER datos a través de una función de XHR AJAX */
function reqListener() {
    const users = JSON.parse(this.responseText)
    console.log(users);
    usersRender = users
        //mapeas cada campo obtenido a la etiqueta <li>
        .map(user => `<li>${user.name}</li>`)
        //y les quitas las comas que separan cada campo obtenido
        .join('')
    console.log(usersRender);
    userList.innerHTML = usersRender
}

//esta es la peticion que se hace
//escuchar cada vez que cargue datos el objeto oreq
// y ejecute ese callback
//la peticion la hace en la url indicada
//que es un GET (obtener)
//y la envia al <ul> por medio del usersRender
var oReq = new XMLHttpRequest()
oReq.addEventListener("load", reqListener)
oReq.open("GET", "http://bootcamp-dia-3.camilomontoya.now.sh/usuarios")
oReq.send()

/**metodo POST: APLICA cambios o datos a través de una función XHR AJAX */

const button = document.getElementById("button")

function sendData() {
    oReq.open(
        "POST",
        "http://bootcamp-dia-3.camilomontoya.now.sh/usuarios",
        true //si quiero que sea asincrona la peticion le doy true
    );
    oReq.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
    );
    //recuerda que en las peticiones los parametros se separan con un ampersend &
    oReq.send("name=bill&lname=buttlicker")
    //despues de 3 segundos, se refresca el metodo y se obtienen los nuevos datos
    setTimeout(refresh, 3000)
}

//funcion para obtener nuevas consultas sin necesidad de recargar pagina completa
function refresh(){
    oReq.open("GET", "http://bootcamp-dia-3.camilomontoya.now.sh/usuarios")
    oReq.send()
}

//cuando se presione el boton, se envian los nuevos datos
button.onclick = sendData()

//IMPORTARTE VER REPASO DE SECCION PARA SABER SI NOS PERDIMOS DE ALGO