

//* in cookies.token muss ein username gespeichert sein
//* im user wird ein verficate code generiert
//* dem user wird an die email die in der DB gespeichert ist der verificate code geschickt
export const sendVerificationmail = async(values)=>{
    try{
        const responseVerificationMail = await fetch(import.meta.env.VITE_BACKEND_URL + '/user/sendMail', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(values),
            credentials: 'include'
        })
    }catch(error){
        console.error(error);
    }
}



//* in cookies.token muss ein username gespeichert sein
//* im parameter muss die eingabe des verificateCodes vom user sein ( {code} )
//* wenn der code richtig war kommt die response ({status:'ok'}) wenn nicht ({status:'Wrong Verificationcode'})
export const verificate = async(values)=>{
    try{
        const responseVerificate = await fetch(import.meta.env.VITE_BACKEND_URL + '/user/compareVerificationCode', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(values),
            credentials: 'include'
        })
    }catch(error){
        console.error(error);
    }
}