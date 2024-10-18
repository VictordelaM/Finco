import React, { useContext, useEffect } from 'react'
import NavBar from "@/components/NavBar";
import TransactionsForm from '@/components/TransactionsForm';
import HeaderNormal from '@/components/header/HeaderNormal';
import { mainContext } from '@/context/mainProvider';
import { useNavigate } from 'react-router-dom';

const Transaction = () => {
    // const {user} = useContext(mainContext)
    // const navigate = useNavigate()

    // useEffect(() => {
    //     if (!user) {
    //         navigate('/login')
    //     }
    // }, [])

    return ( 
        <>
        <HeaderNormal/>
        <section className='py-5 px-4 h-dvh'>
            <h1 className="text-2xl text-center font-bold pt-5 text-[#0097B2] dark:text-[#FFDE59]">All Transactions</h1>
            <TransactionsForm/>
        </section>
        <NavBar/>
        </>
    );
}

export default Transaction;