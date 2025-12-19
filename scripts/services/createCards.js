
export default function createCards(data, divUsers){
    divUsers.replaceChildren()

    data.forEach((user, i) => {
        let createSection = divUsers.appendChild(document.createElement('section'))
        createSection.dataset.id = i

        let users = createSection.appendChild(document.createElement('span'))
        users.textContent = user.name

        let email = createSection.appendChild(document.createElement('span')) 
        email.textContent = user.email
    });
}