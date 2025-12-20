import renderUsers from "../components/renderUi.js";

export function filterUsers(data){
    const button = document.getElementById('sheared')
    const input = document.getElementById('find')

    button.addEventListener('click', () => {
        if(input.value.trim() === '') return renderUsers(data)

        const compares = {
            name: true,
            email: true,
        }

        const filter = data.filter(value => {
            return Object.keys(compares).some(key => {
                return value[key].toLowerCase().includes(input.value.toLowerCase())
            })
        })
    
        renderUsers(filter)
    })
}