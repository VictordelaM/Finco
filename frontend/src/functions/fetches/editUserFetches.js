


//*in cookies.token muss ein username gespeichert sein
//*als parameter (values) kann ein username oder eine email übergeben werden
//*es wird von checkRepeat geprüft und wenn fehler als status 409 
//*wenn nicht bereits vorhanden wird der jeweilige wert dann geändert
export const editUser = async(values)=>{
    try{
        const responseEditUser = await fetch(import.meta.env.VITE_BACKEND_URL + '/user/editUser', {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(values),
            credentials: 'include',
            withCredentials:true
        })
    }catch(error){
        console.error(error);
    }
}

//*in cookies.token muss ein username gespeichert sein
//*als parameter (values) kann als file.buffer ein bild übergeben werden
//*das bild wird bei cloudinary hochgeladen und die url wird beim user in pictureUrl gespeichert
export const addImage = async(values)=>{
    try{
        console.log(values)
        const formData = new FormData();
        formData.append('image', values);
        const responseAddImage = await fetch(import.meta.env.VITE_BACKEND_URL + '/user/uploadImage', {
            method: 'PATCH',
            body: formData,
            credentials: 'include'
        })
    }catch(error){
        console.error(error);
    }
}

//* in cookies.token muss ein username gespeichert sein
//* im parameter (values) wird ein {password} übergeben
//* das password wird als hash in der datenbank geupdatet
export const changePassword = async(values)=>{
    try{
        const responsechangePassword = await fetch(import.meta.env.VITE_BACKEND_URL + '/user/changePassword', {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(values),
            credentials: 'include'
        })
    }catch(error){
        console.error(error);
    }
}

//* in cookies.token muss ein username gespeichert sein
//* der jeweilige user wird aus der DatenBank gelöscht
export const removeUser = async(values)=>{
    try{
        const responseRemoveUser = await fetch(import.meta.env.VITE_BACKEND_URL + '/user/removeUser', {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(values),
            credentials: 'include'
        })
    }catch(error){
        console.error(error);    }
}
