import { usersApis } from "./services/users.js";
import renderUsers from "./components/renderUi.js";
import { filterUsers } from "./dom/filterEvent.js";

async function main(){
    const data = await usersApis()
    renderUsers(data)
    filterUsers(data)
}

main()