/**FETCH-API:  */
    //se crean variables para almacenar el nombre del input
const userList = document.getElementById('user-list')
const button = document.getElementById("button")
const name = document.getElementById('name')
const lastname = document.getElementById('lastname')
const pais = document.getElementById('pais')

let users = []
let deleteBtns = null


function render() {
    
    const usersRender = users
        //mapeas cada campo obtenido a la etiqueta table
        //abajo, estas diciendo que reciba el nombre del usuario, y si no, que ponga vacio
        //la sintaxis va asi porque es operador ternario
        .map((user) => `<tr>
                        <td>${user.name ? user.name : 'empty'}</td>
                        <td>${user.lastname ? user.lastname : 'empty'}</td>
                        <td>${user.pais ? user.pais : 'empty'}</td>
                        <td><button class="deleteBtn" data-index=${index}>Eliminar</button></td>
                    </tr>`)
        //y les quitas las comas que separan cada campo obtenido
        .join('')
    console.log(usersRender);
    userList.innerHTML = usersRender
    deleteBtns = document.getElementsByClassName('delete')
    //aqui le decimos que, de acuerdo con el elemento que pertenezca al "array" de tipo HTML deleteBtns
    //elimine un solo usuario que corresponda al boton que se está presionando
    Array.from(deleteBtns).forEach(deleteBtn => {
        deleteBtn.onclick = deleteOneUser;
    });
}

function sendData(e) {
    e.preventDefault()
    //se crea el JSON que se va a enviar
    const data = {
        name: name.value, 
        lastname: lastname.value, 
        pais: pais.value
    };
    
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

function deleteOneUser(e) {
    e.preventDefault()
    console.log('deleteOneUser');
    //con el metodo fetch se envia ese json a la url solicitada
    //para eliminar un usuario
    fetch(`https://example.com/profile/${e.target.dataset.index}`, {
        //si no se pone el metodo, por defecto se vuelve GET
        method: 'DELETE', //puede ser tambien put
        
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