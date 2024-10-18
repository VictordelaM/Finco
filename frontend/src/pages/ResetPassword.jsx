import LogoLogin from '@/components/LogoLogin'
import ResetPasswordForm from '@/components/ResetPasswordForm'
import React from 'react'

const ResetPassword = () => {
    return (
        <>
        <LogoLogin/>
        <section className='flex flex-col align-center text-center h-dvh gap-5 p-5'>
        <h1 className='text-center text-2xl font-bold mt-10'>Reset your password</h1>
        <p className='text-center'>Please enter the code sent to you by e-mail here. Then, create your new password.</p>
        <ResetPasswordForm/>
        </section>
        </>
    )
}

export default ResetPassword