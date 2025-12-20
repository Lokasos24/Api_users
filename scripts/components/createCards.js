
export default function createCards(data, divUsers){
    divUsers.replaceChildren()

    data.forEach((user, i) => {
        let createDiv = divUsers.appendChild(document.createElement('div'))
        createDiv.dataset.id = i
        createDiv.className = 'cards-container'

        let users = createDiv.appendChild(document.createElement('span'))
        users.textContent = `Nombre: ${user.name}`

        let email = createDiv.appendChild(document.createElement('span')) 
        email.textContent = `Email: ${user.email}`
    });
}