"use client"
import React, { useContext, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import calendar from "@/assets/img/kalender.png"
import search from "@/assets/img/suche.png"
import { mainContext } from '@/context/mainProvider'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

const SearchTransaction = ({setSearchType, setSearchterm}) => {
    const {user, setUser} = useContext(mainContext)
    const [date, setDate] = React.useState(new Date())
    const [showCalendar, setShowCalendar] = useState(false);
    const [showInput, setShowInput] = useState(false)
    const [showCategory, setShowCategory] = useState(false)

    const expenseCategories = user?.expenseCategories
    const incomeCategories = user?.incomeCategories
    let categoryArray = []
    // To store the collected image information of the categories, the expense and income categories with name and imageUrl are stored in the categoryImagesArray
    incomeCategories?.map((incomeCategory) => {
        categoryArray.push({categoryName: incomeCategory.categoryName, categoryID: incomeCategory._id})
    })

    expenseCategories?.map((expenseCategory) => {
        categoryArray.push({categoryName: expenseCategory.categoryName, categoryID: expenseCategory._id})
    })

    const toggleCalendar = () => {
        setShowCalendar(!showCalendar)
        setShowInput(false)
    }

    const toggleInput = () => {
        setShowInput(!showInput)
    }

    const toggleCategory = (event) => {
        setShowCategory(!showCategory)
        setShowInput(false)
        setSearchType("category")
        setSearchterm(event)
    }

    const handleDateSelect = (date) => {
        setDate(date)
        setShowCalendar(false)
        setSearchType("date")
        setSearchterm(date)
    }

    const searchDescription =(event)=>{
        setSearchType("description")
        setSearchterm(event.target.value)
        
    }

    const seeAll = () =>{
        setSearchType("")
    }
    return (
        <>
            <div className="flex items-center gap-2 justify-center p-5">
                <Button onClick={seeAll} variant='search' className='text-black'>See all</Button>
                <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <Button variant="search" className="text-black">Category</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 bg-background">
                        <DropdownMenuRadioGroup selected={showCategory} onValueChange={toggleCategory}>
                            {categoryArray.map((category) => {
                                return (
                                    <DropdownMenuRadioItem className='border-b' key={category.categoryID} value={category.categoryName} >{category.categoryName}</DropdownMenuRadioItem>
                                )
                            })}
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                {showInput 
                ? <Input type="text" onChange={searchDescription} placeholder="Search..."/>
                : <Button onClick={toggleInput} variant='search'>
                    <img src={search} alt="" className='w-6 pt-2 pb-2'/>
                </Button>
                }
                
                <Button className="pt-4 pb-4" onClick={toggleCalendar} variant='search'>
                    <img src={calendar} alt="" className='w-8'/>
                </Button>
                {showCalendar && (
                <div className='fixed top-1/3 left-1/2 z-[100] transform -translate-x-1/2 -translate-y-1/2'>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={handleDateSelect}
                        className="rounded-md border bg-background"
                    />
                </div>
                )}
            </div>
        </>
    )
}

export default SearchTransaction