import renderUsers from "../components/renderUi.js"

let userState = []

export function stateToUsers(data){
    userState = [{users: data}]
    renderUsers(userState)
}