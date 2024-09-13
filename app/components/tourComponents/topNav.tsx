"use client"
import { useTranslations, useLocale } from "next-intl"
import { Link } from "@nextui-org/react"
import { Button } from "@nextui-org/react"
import { Separator } from "@/components/ui/separator"
import LocaleSwitcherSelect from "../localswitcherselect"
import { ThemeSwitch } from "../ThemeSwitcherMain"
import { pageData as data }  from "./tourData/tourData"



export function Navbar() {
    return(
        <header className="sticky top-0 z-20 bg-white/80 dark:bg-black/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <img 
                    src={data.logoLight} 
                    alt="Logo"
                    width={60}
                    height={60}
                    className="dark:hidden"
                />
                <img 
                    src={data.logoDark} 
                    alt="Logo"
                    width={60}
                    height={60}
                    className="hidden dark:block"
                />
                <div className="flex items-center gap-1 md:gap-4">
                    <ThemeSwitch />
                    <LocaleSwitcherSelect />
                </div>
            </div>
        </header>
    )
}