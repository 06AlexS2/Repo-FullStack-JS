const userList = document.getElementById('user-list')
let user = {}

function getUserIndex () {
    return location.search.replace('?', '').split('=')[1]
}

function getUser(){
    fetch(`https://example.com/profile/users/${getUserIndex()}`)
    .then(response => response.json())
    .then(userResponse => {
        console.log('users response:', userResponse);
        user = userResponse
        render()
    })
}

function render() {
    const userRender =  `<tr><td class="user-field">Nombre</td><td>${user.name ? user.name : 'empty'}</td></tr>
                        <tr><td class="user-field">Apellido</td><td>${user.lastname ? user.lastname : 'empty'}</td></tr>
                        <tr><tdclass="user-field">País</td><td>${user.pais ? user.pais : 'empty'}</td></tr>`;
    console.log(userRender);
    userList.innerHTML = userRender
    
}

getUser()