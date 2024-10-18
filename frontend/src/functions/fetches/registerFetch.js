export const register = async (values) => {
    let status
    //! ENV
    const responseRegister = await fetch(import.meta.env.VITE_BACKEND_URL + '/user/register', { 
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values),
        credentials: 'include'
    })
    .then(async(response)=>{
        status = await response
    })
    return status
}

console.log('test:',import.meta.env.VITE_BACKEND_URL)