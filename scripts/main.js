import { usersApis } from "./services/users.js";
import renderUsers from "./services/renderUi.js";

async function main(){
    const data = await usersApis()
    renderUsers(data)
}

main()