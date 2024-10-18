import LogoLogin from '@/components/LogoLogin'
import SetupAccountForm from '@/components/SetupAccountForm'
import React from 'react'

const SetupAccount = () => {
    return (
        <>
            <LogoLogin/>
            <section className='flex flex-col align-center text-center h-dvh gap-5 p-5'>
                <SetupAccountForm/>
            </section>
        </>
    )
}

export default SetupAccount