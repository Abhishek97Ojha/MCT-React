//allGender action
export const allGender = (data) =>{
    return{
        type:"ALL",
        payload: data
    }
}

//maleGender action
export const maleGender = (data) =>{
    return{
        type:"MALE",
        payload: data
    }
}

////femaleGender action
export const femaleGender = (data) =>{
    return{
        type:"FEMALE",
        payload: data
    }
}