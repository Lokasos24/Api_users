import createCards from "./createCards.js"

export default function renderUsers(data){
    const divUsers = document.getElementById('users')
    createCards(data, divUsers)
}