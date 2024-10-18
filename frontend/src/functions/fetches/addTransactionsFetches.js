export const addExpense = async (values) => {
    const responseExpense = await fetch(import.meta.env.VITE_BACKEND_URL + '/user/addExpense', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values),
        credentials: 'include'
    })
}

export const addIncome = async (values) => {
    const responseIncome = await fetch(import.meta.env.VITE_BACKEND_URL + '/user/addIncome', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values),
        credentials: 'include'
    })
}