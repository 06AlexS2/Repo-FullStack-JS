/**FETCH-API:  */
const userList = document.getElementById('user-list')
const button = document.getElementById("button")

let users = []


function render() {
    
    const usersRender = users
        //mapeas cada campo obtenido a la etiqueta table
        .map(user => `<tr><td>${user.name}</td></tr>`)
        //y les quitas las comas que separan cada campo obtenido
        .join('')
    console.log(usersRender);
    userList.innerHTML = usersRender
}

function sendData() {
    //se crea una variable para almacenar el nombre del input
    const name = document.getElementById('name')
    //se crea el JSON que se va a enviar
    const data = {name: name.value};
    
    //con el metodo fetch se envia ese json a la url solicitada
    fetch('https://example.com/profile', {
        //si no se pone el metodo, por defecto se vuelve GET
        method: 'POST', //puede ser tambien put
        //los headers son los titulos del metodo fetch que aparecerán en el request
        headers: {
            'Content-Type': 'application/json',
        },
        //se transforma ese json a string
        body: JSON.stringify(data),
        }) //el fetch retorna una promesa
        //si llama al callback de resolve, va a obtener una respuesta
        //misma que no llega en JSON, sino que llega con console.log
        //si la promesa se cumple, se envia como json
        .then((response) => {
            response.json()
        }) //aqui regresa como un readable stream, debemos convertirlo a json

        .then((response) => response.json())
        .then(JSONresponse => {
            console.log('JSON response:', JSONresponse)
            refresh();
        })
        // //y se hace un console.log de exito
        // .then((data) => {
        //     console.log('Success:', data);
        // })
        // //de lo contrario, atrapa el error y lo alerta
        // .catch((error) => {
        //     console.error('Error:', error);
        // });
}

//funcion para obtener nuevas consultas sin necesidad de recargar pagina completa
//con metodo fetch
function refresh(){
    fetch('https://example.com/profile')
    .then(response => response.json())
    .then(usersResponse => {
        console.log('users response:', usersResponse);
        users = usersResponse
        render()
    })
}

//automaticamente la funcion refresh va a enviar de una vez los datos ya almacenados
refresh()
//cuando se presione el boton, se envian los nuevos datos
button.onclick = sendData()