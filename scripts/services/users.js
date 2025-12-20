const url = `https://jsonplaceholder.typicode.com/users`

export async function usersApis(){
    try{
        const response = await fetch(url);
        const data = await response.json()
        return data
    }catch(err){
        console.log(`An error has appear ${err}`)
    }
}