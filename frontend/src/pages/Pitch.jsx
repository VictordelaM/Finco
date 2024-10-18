import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const Pitch = () => {
  return (
    <section>
        <Card>
        <CardHeader>
            <CardTitle className='flex justify-center'>Welcome to Finco</CardTitle>
            
        </CardHeader>
        <CardContent>
            <p>"Introducing our revolutionary banking app: seamless transactions, intuitive interface, and robust security features. Manage accounts, transfer funds, and track expenses effortlessly. Enjoy personalized insights and budgeting tools for financial empowerment. Experience banking redefined, where convenience meets trust. Join us in shaping the future of finance today.</p>
        </CardContent>
        </Card>
    </section>
  )
}

export default Pitch