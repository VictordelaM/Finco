export const login = async (values) => {
    let status
    const responseLogin = await fetch(import.meta.env.VITE_BACKEND_URL + '/user/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values),
        credentials: 'include'
    }).then(async(response)=>{
        status = await response
    })
    return status
}