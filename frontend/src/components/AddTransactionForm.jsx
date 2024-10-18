// ! In this form, new transactions, whether income or expense, are collected in a form with the most important information and forwarded to the backend so that it can be saved in the database
// This jsx is integrated in AddExpenses.jsx and AddIncoem.jsx
import React, { useContext, useEffect, useState } from 'react'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
    FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuRadioItem,
    DropdownMenuRadioGroup
} from "@/components/ui/dropdown-menu"
"use client"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { addExpense, addIncome } from '@/functions/fetches/addTransactionsFetches'
import { mainContext } from '@/context/mainProvider'
import { getUser } from '@/functions/fetches/userDataFetch'

 // Definition of the schema for the form with Zod
const formSchema = z.object({
    category: z.string(),
    amount: z.string(),
    description: z.string(),
    date: z.date(),
})



const AddTransactionForm = ({type}) => {
    const { user, setUser } = useContext(mainContext)
    const [selectedCategory, setSelectedCategory] = useState("Category")

    // Use of useForm from react-hook-form for form control
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            category: "",
            amount: "",
            description: "",
            date: ""
        },
    })
    useEffect(() => {
        const getUserData = async () => {
            const userData = await getUser()
            setUser(userData)
        }
        getUserData()
    }, [])



    const onSubmit = (values) => {
        // Decision based on the transaction type (income or expense)
        if(type == 'expense') {
            addExpense(values) // Add expense transaction
        } else if ( type == 'income') {
            addIncome(values) // Add income transaction
        }
        window.location.reload()
    }

    // Function for changing the selected category
    const handleCategoryChange = (categoryName) => {
        setSelectedCategory(`Category = ${categoryName}`)
        form.setValue("category", categoryName)
    }

    return (
        <section className='py-5'>
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex flex-col">
                <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Input placeholder="Add a description" {...field}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="amount"
                        render={({ field }) => (
                            <FormItem className='pb-4'>
                                <FormLabel>Amount</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter the amount" {...field} required/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control} 
                        name="category"
                        render={({ field }) => (
                            <DropdownMenu >
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline">{selectedCategory}</Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56 bg-background">
                                    <DropdownMenuRadioGroup selected={field.value} onValueChange={handleCategoryChange}>
                                        {type == 'expense' ? user?.expenseCategories?.map((category) => {
                                            return(
                                                <DropdownMenuRadioItem className='border-b' key={category._id} value={category.categoryName} >{category.categoryName}</DropdownMenuRadioItem>
                                            )
                                        })
                                        : user?.incomeCategories?.map((category) => {
                                            return(
                                                <DropdownMenuRadioItem className='border-b' key={category._id} value={category.categoryName}>{category.categoryName}</DropdownMenuRadioItem>
                                            )
                                        })}
                                    </DropdownMenuRadioGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Date</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-[240px] pl-3 text-left font-normal",
                                                !field.value && "text-muted-foreground"
                                            )}
                                        >
                                            {field.value ? (
                                                format(field.value, "PPP")
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0 bg-background" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) =>
                                            date < new Date("1900-01-01")
                                        }
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <Button type="submit" className='text-lg' id='transactionButton'>Add {type}</Button>
                </form>
            </Form>
        </section>
    )
}

export default AddTransactionForm




