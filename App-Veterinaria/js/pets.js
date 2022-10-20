/**codigo para guardar el listado de mascotas
 * dentro de un array, para hacer la lista
 * dinamica dentro de la pagina
 * pets: array de mascotas
 * pet: mascota singular
 */

const petList = document.getElementById("pet-list")
const petType = document.getElementById("pet-type")
const petName = document.getElementById("pet-name")
const petOwner = document.getElementById("pet-owner")
const petForm = document.getElementById("pet-form")
const petSaveBtn = document.getElementById("pet-savebtn")
const inputIndex = document.getElementById("pet-index")


let pets = [
    {
    petType: "Gato",
    petName : "Manchas",
    petOwner : "Miguel"
    }
]

function listPets() {
    const htmlPets = pets.map((pet, index) => 
    `<tr>
        <th scope="row">${index}</th>
        <td>${pet.petType}</td>
        <td>${pet.petName}</td>
        <td>${pet.petOwner}</td>
        <td>
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-info edit" data-index=${index}>Editar</button>
            <button type="button" class="btn btn-danger">Eliminar</button>
        </div>
        </td>
     </tr>`).join("");
     petList.innerHTML = htmlPets
     Array.from(document.getElementsByClassName('edit')).forEach((editBtn) => editBtn.onclick = edit)
}

function submitData(event) {
    event.preventDefault()
    const data = {
        petType: petType.value,
        petName: petName.value,
        petOwner: petOwner.value

    }
    pets.push(data)
    listPets()
}

function edit(event) {
    console.log(event);
}

listPets()

petForm.onsubmit = submitData
petSaveBtn.onclick = submitData