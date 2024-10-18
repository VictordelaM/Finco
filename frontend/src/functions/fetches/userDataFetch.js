

export const getUser = async () => {
    const userData = await fetch(import.meta.env.VITE_BACKEND_URL + '/user/getUser', {
        credentials: 'include'
    })
    return await userData.json()
}
