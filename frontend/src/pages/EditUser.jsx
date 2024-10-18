import EditUserForm from '@/components/EditUserForm'
import NavBar from '@/components/NavBar'
import HeaderNormal from '@/components/header/HeaderNormal'
import React from 'react'

const EditUser = () => {
    return (
        <>
            <HeaderNormal/>
            <section className="py-5 px-4 h-dvh">
                <h1 className="text-2xl text-center font-bold pt-5 pb-5 text-[#0097B2] dark:text-[#FFDE59]">Edit Profile</h1>
                <EditUserForm/>
            </section>
            <NavBar/>
        </>
    )
}

export default EditUser