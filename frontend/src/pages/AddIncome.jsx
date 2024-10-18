import AddTransactionForm from "@/components/AddTransactionForm";
import NavBar from "@/components/NavBar";
import HeaderAddIncome from "@/components/header/HeaderAddIncome";
import { mainContext } from "@/context/mainProvider";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddIncome = () => {
    // const {user} = useContext(mainContext)
    // const navigate = useNavigate()

    // useEffect(() => {
    //     if (!user) {
    //         navigate('/login')
    //     }
    // }, [])

    return ( 
        <>
        <HeaderAddIncome/>
        <section className='py-5 px-4 h-dvh'>
            <h1 className="text-2xl text-center font-bold pt-5 text-[#0097B2] dark:text-[#FFDE59]">Add Income</h1>
            <AddTransactionForm type={'income'}/>
        </section>
        <NavBar/>
        </>
    );
}

export default AddIncome;