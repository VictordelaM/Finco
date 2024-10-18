import { useTheme } from '@/components/theme-provider';
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logoDarkPath from '@/assets/img/Logo-wechsel_dark.gif'
import logoLightPath from '@/assets/img/Logo-wechsel.gif'

const Landingpage = () => {

    const { theme, setTheme } = useTheme();
    const navigate = useNavigate()
    const [systemTheme, setSystemTheme] = useState(null);

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
    }, [theme]);

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/login')
        }, 4200);
        return () => clearTimeout(timer)
    }, [])

    return (
        <section className='h-dvh flex justify-center items-center'>
            <img src={logoPath} className='w-30 h-30'/>
        </section>
    )
}

export default Landingpage