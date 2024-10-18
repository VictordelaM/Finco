

//*es muss in cookies.token ein username gespeichert sein
//*im ersten parameter (values)können {category, amount, description, date} im form übergeben werden um den jeweilgen wert zu ändern
//*als zweiter parameter (id) muss die id von der transaction übergeben werden 
export const editTransaction = async(values,id)=>{
    try{
        const resoponseEditTransaction = await fetch(import.meta.env.VITE_BACKEND_URL + '/user/editTransaction/'+ id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values),
            credentials: 'include'
        })
    }catch(error){
        console.error(error);
    }
}


//*es muss in cookies.token ein username gespeichert sein
//*als parameter (id) muss die id von der transaction übergeben werden 
export const removeTransaction = async(id)=>{
    try{
        const resoponseEditTransaction = await fetch(import.meta.env.VITE_BACKEND_URL + '/user/deleteTransaction/'+ id, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
        })
    }catch(error){
        console.error(error);
    }
}