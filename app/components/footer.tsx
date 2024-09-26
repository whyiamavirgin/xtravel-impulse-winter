"use client"

import { Spacer } from "@nextui-org/react"
import { useLocale, useTranslations } from "next-intl"
import Link from "next/link"
import { useRouter } from "next/navigation"

const footerLinks = [
    {
        name: "aboutUs",
        path: "https://xtravel.kg/"
    },
    {
        name: "contacts",
        path: "https://xtravel.kg/"
    },
    {
        name: "offer",
        path: "https://xtravel.kg/"
    }
]


export function Footer() {

    const locale = useLocale()
    const router = useRouter()
    const g = useTranslations('General')

    return(
        <footer className="bg-black text-white py-6 px-1 md:px-16">
            <div className="container md:mx-auto flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between md:items-center">
                <p>&copy; 2024 <span className="text-[#FFB800]">XTRAVEL</span>. {g('rights')}.</p>
                <div className="flex flex-col md:flex-row gap-4">
                    {footerLinks.map((link, index) => (
                        <Link key={index} target="_blank" href={`${link.path}`} className="md:hover:text-[#FFB800] transition">
                            {g(`${link.name}`)}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    )
}