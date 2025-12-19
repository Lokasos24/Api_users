import renderUsers from "./renderUi.js"

let userState

export function stateToUsers(data){
    userState = [{users: data}]
    renderUsers(userState)
}