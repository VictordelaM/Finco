import React, { useMemo, useEffect, useState } from 'react';
import { useTheme } from '@/components/theme-provider';
import logoDarkPath from "@/assets/img/Logo_Backend_Abschlussprojekt_dark.png"
import logoLightPath from "@/assets/img/Logo_Backend_Abschlussprojekt.png"

const LogoLogin = () => {
    const { theme, setTheme } = useTheme();
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
    }, [theme, systemTheme]);
    return (
        <>
            <div className='px-4 pt-2'>
                <img src={logoPath} alt="" className='w-9 h-9'/>
            </div>
        </>
    )
}

export default LogoLogin