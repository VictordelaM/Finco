import React, { useContext, useEffect } from 'react'
import NavBar from '../components/NavBar'
import SettingsForm from '@/components/SettingsForm'
import HeaderNormal from '../components/header/HeaderNormal'
import { useNavigate } from 'react-router-dom'
import { mainContext } from '@/context/mainProvider'
import { Card, CardContent } from '@/components/ui/card'

const Settings = () => {
    const {user} = useContext(mainContext)
    // const navigate = useNavigate()

    // useEffect(() => {
    //     if (!user) {
    //         navigate('/login')
    //     }
    // }, [])

    return (
        <>
        <HeaderNormal/>
        <section className="py-5 px-4 h-dvh">
            <h1 className="text-2xl text-center font-bold pt-5 pb-5 text-[#0097B2] dark:text-[#FFDE59]">Settings</h1>
            <Card className='flex flex-col gap-4 px-2 w-full pb-10'>
                <CardContent className='bg-accent rounded-lg p-4 flex gap-5 w-full'>
                    <div>
                        <p>Username:</p>
                        <p>First Name:</p>
                        <p>Last Name:</p>
                        <p>Email:</p>
                    </div>
                    <div>
                        <h2>{user?.username}</h2>
                        <p>{user?.firstName}</p>
                        <p>{user?.lastName}</p>
                        <p>{user?.email}</p>
                    </div>
                </CardContent>
            </Card>
            <SettingsForm />        
        </section>
        <NavBar/>
        </>
    )
}

export default Settings