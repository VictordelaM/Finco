// * This jsx is built into EditUserForm.jsx
import React, { useState, useEffect } from 'react'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { useNavigate } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getUser } from '@/functions/fetches/userDataFetch'
import { addImage } from '@/functions/fetches/editUserFetches'


// const formSchema = z.object({
//     image: z.files()
// })


const ChangeUserImage = () => {

    const [imageSelected, setImageSelected] = useState(null)
    const navigate = useNavigate()
    const [user, setUser] = useState()

    // const form = useForm({
    //     resolver: zodResolver(formSchema),
    //     defaultValues: {
    //         image:""
    //     },
    // })

    const getImage = (event) => {
        const image = event.target.files[0]
        setImageSelected(URL.createObjectURL(image))
    }

    useEffect(() => {
        const getUserData = async () => {
            const userData = await getUser()
            setUser(userData)
        }
        getUserData()
    }, [])

    const getFirstName = user?.firstName.charAt(0).toUpperCase()
    const getLastName = user?.lastName.charAt(0).toUpperCase()
    const avatarFallback = getFirstName?.concat(getLastName)

    
    const onSubmit= (event) => {
        event.preventDefault()
        addImage(event.target.picture.files[0])
        if(imageSelected != null){
        navigate('/settings')
        }
    }

    return (
        <>
            <Form>
                <form onSubmit={onSubmit} className="space-y-8 flex flex-col items-center">
                    <div className="grid w-full max-w-sm items-center justify-center gap-1.5">
                        {imageSelected
                        ? <Avatar variant='preview'>
                            <AvatarImage id='avatar' src={imageSelected} />
                        </Avatar>
                        : <Avatar>
                        <AvatarFallback>
                            <div className='w-20 h-20 rounded-full bg-grey border-2 flex justify-center items-center font-bold text-2xl'>{avatarFallback}</div>
                        </AvatarFallback>
                        </Avatar>
                        }
                        
                        
                        <Label htmlFor="picture" className='text-start'>Profile picture</Label>
                        <Input id="picture" name="picture" type="file" onChange={getImage}/>
                        
                    </div>
                    <Button type="submit" className='text-lg'>Add Image</Button>
                </form>
            </Form>
        </>
    )
}

export default ChangeUserImage