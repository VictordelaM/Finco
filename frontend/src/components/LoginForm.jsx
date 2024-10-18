import React, { useContext } from 'react'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {useNavigate} from 'react-router-dom'
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
// import { toast } from "@/components/ui/use-toast"
import { login } from '@/functions/fetches/loginFetch'
import { mainContext } from '@/context/mainProvider'
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from './ui/toaster'

const formSchema = z.object({
    email: z.string(),
    password: z.string()
})


const LoginForm = () => {
    const {setLoad} = useContext(mainContext)
    const navigate = useNavigate()
    const { toast } = useToast()

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    const navigateHome = () => {
        navigate('/home')
    }

     //*in resp ist jetzt die gesamte response und mit resp.json() kann die fehlermeldung ausgelesen werden
    const onSubmit = async (values) => {
        const resp = await login(values) 
        if(await resp.status==200){
            navigateHome()
        }else if(resp.status==401){
                toast({
                    title: "Login failed",
                    description: "The email address or password you entered is incorrect",
                    action: (
                    <ToastAction altText="OK">OK</ToastAction>
                    ),
                })
        }else{
            console.error('internal server error')
        }
}

    const navigateForgotPassword = () => {
        navigate('/forgot-password')
    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Email" {...field} required/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type='password' placeholder="Password" {...field} required/>
                                </FormControl>
                                <FormMessage />
                                <span onClick={navigateForgotPassword} className='flex justify-end'>Forgot Password</span>
                            </FormItem>
                        )}
                    />
                    
                    <Button type="submit" className='text-lg'>Login</Button>
                </form>
            </Form>
            <Toaster />
        </>
    )
}

export default LoginForm