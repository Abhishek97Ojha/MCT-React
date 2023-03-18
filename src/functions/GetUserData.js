export async function getUserData(setUser,gender){
    const response = await fetch(`https://randomuser.me/api/?results=20&gender=${gender}`)
    const data = await response.json();
    setUser(data.results)
}  