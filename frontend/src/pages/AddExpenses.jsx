import NavBar from "@/components/NavBar";
import React, { useContext, useEffect } from 'react'
import AddTransactionForm from "@/components/AddTransactionForm";
import HeaderAddExpense from "@/components/header/HeaderAddExpenses";
import { useNavigate } from "react-router-dom";
import { mainContext } from "@/context/mainProvider";

const AddExpenses = () => {
    // const {user} = useContext(mainContext)
    // const navigate = useNavigate()

    // useEffect(() => {
    //     if (!user) {
    //         navigate('/login')
    //     }
    // }, [])

    return (
        <>
            <HeaderAddExpense/>
            <section className='px-4 py-5 h-dvh'>
                <h1 className="text-2xl text-center font-bold pt-5 text-[#0097B2] dark:text-[#FFDE59]">Add Expense</h1>
                <AddTransactionForm type={'expense'}/>
            </section>
            <NavBar/>
        </>
    )  

}

export default AddExpenses;