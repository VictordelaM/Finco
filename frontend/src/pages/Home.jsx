import React, { useContext, useEffect, useState } from 'react'
import imageTrendingUp from "@/assets/img/trending-up.png"
import imageTrendingDown from "@/assets/img/trending-down.png"
import imageHorizontal from "@/assets/img/more-horizontal.png"
import imageAlertTriangle from "@/assets/img/alert-triangle.png"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Toggle from '@/components/Toggle'
import NavBar from '@/components/NavBar'
import { mainContext } from '@/context/mainProvider'
import VictoryLineChart from '@/components/VictoryCharts/VictoryLine'
import HeaderNormal from '@/components/header/HeaderNormal'
import { useNavigate } from 'react-router-dom'
import { getUser } from '@/functions/fetches/userDataFetch'

const Home = () => {
    const {allIncome, allExpenses, user, setUser} = useContext(mainContext)
    const navigate = useNavigate()
    
    // useEffect(() => {
    //     const getUserData = async () => {
    //         const userData = await getUser()
    //         setUser(userData)
    //     }
    //     getUserData()
    // }, [])

    // useEffect(() => {
    //     if (!user) {
    //         navigate('/login')
    //     }
    // }, [])

    return (
        <>
        <HeaderNormal/>
        <section className='py-5 px-4 h-dvh flex flex-col gap-10'>
            <h1 className="text-2xl text-center font-bold pt-5 text-[#0097B2] dark:text-[#FFDE59]">Welcome {user?.username}</h1>
            <div className='p-2'>
                <VictoryLineChart/>
            </div>
            <Card className='flex flex-col gap-4 px-2 w-full pb-20'>
                <h2 className="text-xl font-bold self-start">Total Wallet</h2>
                <div className='flex justify-center gap-6'>
                    <CardContent className='bg-accent rounded-lg p-4 flex flex-col gap-7 w-full'>
                        <div className='w-12 h-12 rounded-full flex justify-center items-center bg-gradient-to-b from-[#FFDE59] to-[#FF9900]'>
                            <img src={imageTrendingUp}/>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h3>Income</h3>
                            <p className='text-xl'>+ $ {allIncome}</p>
                        </div>
                    </CardContent>
                    <CardContent className='bg-accent rounded-lg p-4 flex flex-col gap-7 w-full'>
                        <div className='w-12 h-12 rounded-full flex justify-center items-center bg-gradient-to-b from-[#44BBFE] to-[#1E78FE]'>
                            <img src={imageTrendingDown}/>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h3>Expense</h3>
                            <p className='text-xl'>- $ {allExpenses}</p>
                        </div>
                    </CardContent>
                </div>
            </Card>
        </section>
        <NavBar/>
    </>
    )


}

export default Home