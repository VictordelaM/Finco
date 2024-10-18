



//*es muss ein username im cookies.token gespeichert sein
//* im parameter (values) können {categoryName, color, imgUrl} übergeben werden um eine IncomeKategorie hinzuzufügen
export const addIncomeCategory = async(values)=>{
    try{
        const responseIncomeCategory = await fetch(import.meta.env.VITE_BACKEND_URL + '/user/addIncomeCategory', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(values),
            credentials: 'include'
        })
    }catch(error){
        console.error(error);
    }
}

//*es muss ein username im cookies.token gespeichert sein
//* im parameter (values) können {categoryName, color, imgUrl} übergeben werden um eine EpenseKategorie hinzuzufügen
export const addExpenseCategory = async(values)=>{
    try{
        const responseExpenseCategory = await fetch(import.meta.env.VITE_BACKEND_URL + '/user/addExpenseCategory', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(values),
            credentials: 'include'
        })
    }catch(error){
        console.error(error);
    }
}