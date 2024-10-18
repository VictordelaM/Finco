import React, { useMemo, useEffect, useState, useContext } from 'react';
import { useTheme } from '@/components/theme-provider';
import logoDarkPath from "@/assets/img/Logo_Backend_Abschlussprojekt_dark.png"
import logoLightPath from "@/assets/img/Logo_Backend_Abschlussprojekt.png"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useNavigate } from 'react-router-dom'
import { mainContext } from '@/context/mainProvider'
import { searchTransactionsByCategory } from '@/functions/filter/search';
import { getUser } from '@/functions/fetches/userDataFetch';


const HeaderNormal = () => {
    const navigate = useNavigate()
    const { theme, setTheme } = useTheme();
    const [systemTheme, setSystemTheme] = useState(null);
    const {user,setUser, saldo, setSaldo, allIncome, setAllIncome,allExpenses, setAllExpenses} = useContext(mainContext)
    
    useEffect(() => {
        const getUserData = async () => {
            const userData = await getUser()
            setUser(userData)
        }
        getUserData()
    }, [])
   
    useEffect(() => {
        let sum = 0
        let difference = 0
        const transactions = user?.transactions
        transactions?.map((transaction) => {
            if(transaction.type == 'income') {
                sum = sum + transaction.amount
                // console.log(transaction.amount, sum, '+');
            } else if (transaction.type == 'expense') {
                difference = difference + transaction.amount
                // console.log(transaction.amount, sum, '-');
            }
            setSaldo(sum - difference)
            setAllIncome(sum)
            setAllExpenses(difference)
        })
    }, [user])

    // console.log(searchTransactionsByCategory(user?.transactions, 'Food'))

    const getFirstName = user?.firstName.charAt(0).toUpperCase()
    const getLastName = user?.lastName.charAt(0).toUpperCase()
    const avatarFallback = getFirstName?.concat(getLastName)

    const navigateSettings = () => {
        navigate('/settings')
    }

    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        setSystemTheme(darkModeMediaQuery.matches ? "dark" : "light");

        const handleThemeChange = (e) => {
            setTheme(e.matches ? "dark" : "light");
        };

        darkModeMediaQuery.addEventListener("change", handleThemeChange);

        return () => darkModeMediaQuery.removeEventListener("change", handleThemeChange);
    }, [setTheme]);

    const logoPath = useMemo(() => {
        if (theme === "dark" || (theme === null && systemTheme === "dark")) {
            return logoDarkPath;
        } else if (theme === "light" || (theme !== null && systemTheme === "light")) {
            return logoLightPath;
        } else {
            return logoDarkPath
        }
    }, [theme, systemTheme]);

    return (
        <section className='flex justify-between items-center'>
            <div className='px-4 pt-4'>
                <img src={logoPath} alt="" className='w-9 h-9'/>
            </div>
            <div className='flex gap-4 items-center px-4 pt-2'>
                <p className='text-l font-medium'><span>{saldo}</span> $</p>
                {user?.pictureUrl 
                ? <Avatar variant='default' className='cursor-pointer' onClick={navigateSettings}>
                    <AvatarImage id='avatar' src={user.pictureUrl} />
                </Avatar>
                : <Avatar variant='default' className='cursor-pointer' onClick={navigateSettings}>
                    <AvatarFallback>
                        <div className='w-10 h-10 rounded-full bg-grey border-2 flex justify-center items-center font-bold'>{avatarFallback}</div>
                    </AvatarFallback>
                </Avatar>
                }
            </div>
        </section>
    );
};

export default HeaderNormal;