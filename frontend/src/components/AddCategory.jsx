import React, { useContext, useState } from 'react'
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
    FormDescription
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { addExpenseCategory, addIncomeCategory } from '@/functions/fetches/addCategoryFetch'





const formSchema = z.object({
    categoryName: z.string(),
})
const AddCategory = ({type}) => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            categoryName: "",
        },
    })
    const handleAddCategorySubmit = (values) =>{
        type = 'income'
        if (type=='income'){
            addIncomeCategory(values)
        }else if(type=='expense'){
            addExpenseCategory(values)
        } else{
            console.log('no valid transaction type selected')
        }
    }
  return (
    <div>
        <Form {...form} >
                <form onSubmit={form.handleSubmit(handleAddCategorySubmit)} className="space-y-6 flex flex-col">
                <FormField
                        control={form.control}
                        name="categoryName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Categoryname</FormLabel>
                                <FormControl>
                                    <Input placeholder="Add Categorie" {...field}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className='text-lg' id='transactionButton'>Add Category</Button>
                </form>
            </Form>
    </div>
  )
}

export default AddCategory
