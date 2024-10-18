import React from 'react'
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
import { sendVerificationmail } from '@/functions/fetches/mailVerification'

const formSchema = z.object({
    email: z.string()
})

const ForgotPasswordForm = () => {
    const navigate = useNavigate()

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: ""
        }
    })

    const navigateResetPassword = () => {
        navigate('/reset-password')
    }

    const onSubmit = async (values) => {
        sendVerificationmail(values)
        navigateResetPassword()
    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col">
                    {/* onSubmit={form.handleSubmit(onSubmit)} */}
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
                    <Button type="submit" className='text-lg'>Reset Password</Button>
                </form>
            </Form>
        </>
    )
}

export default ForgotPasswordForm