import LoginForm from '@/components/LoginForm'
import LogoLogin from '@/components/LogoLogin'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const navigateRegister = () => {
        navigate('/register')
    }

    return (
        <>
            <LogoLogin/>
            <section className='flex flex-col align-center text-center h-dvh gap-5 p-5'>
                <h1 className='text-center text-2xl font-bold'>Welcome back</h1>
                <p className='text-center'>Please log in to access your account.</p>
                <LoginForm/>
                <p className='text-lg mt-5'>Don't have an account? <span onClick={navigateRegister} className='text-[#06434E] dark:text-[#FFDE59] font-bold'>Register</span></p>
            </section>
        </>
    )
}

export default Login