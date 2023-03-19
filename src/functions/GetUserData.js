

export async function getUserData(setUser){
    const response = await fetch("https://randomuser.me/api/?results=20&gender=all")
    const data = await response.json();
    setUser(data.results)
   
}  