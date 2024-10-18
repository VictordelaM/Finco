import React from 'react'
import ForgotPasswordForm from '@/components/ForgotPasswordForm'
import { useNavigate } from 'react-router-dom'
import LogoLogin from '@/components/LogoLogin'

const ForgotPassword = () => {
    const navigate = useNavigate()

    const navigateLogin = () => {
        navigate('/login')
    }

    return (
        <>
            <LogoLogin/>
            <section className='flex flex-col align-center text-center h-dvh gap-5 p-5'>
                <h1 className='text-center text-2xl font-bold mt-10'>Forgot your password</h1>
                <p className='text-center'>Please enter your email address to reset your password.</p>
                <ForgotPasswordForm/>
                <p className='text-lg mt-5'>Back to login <span onClick={navigateLogin} className='text-[#06434E] dark:text-[#FFDE59] font-bold'>Login</span></p>
            </section>
        </>
    )
}

export default ForgotPassword