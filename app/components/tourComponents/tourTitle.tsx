import NumberTicker from "@/components/magicui/number-ticker";
import PulsatingButton from "@/components/magicui/pulsating-button";
import { Button } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
import { ChevronDown, PhoneCall } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { pageData as data } from "./tourData/tourData";
import { EspaExtended } from "@/app/ui/fonts";
import Link from "next/link";

export function TourTitle() {
    const g = useTranslations("General")
    const locale = useLocale()


    return(
        <div className={`w-full h-svh flex place-content-center bg-no-repeat bg-cover bg-bottom bg-[url('https://sravni-admin-spaces.blr1.digitaloceanspaces.com/xtravel-impulse-winter/%20main.jpg')]`}>
            <div className="w-full h-full backdrop-brightness-50">
                <div className="text-white flex flex-col gap-8 md:gap-14 mt-[28%] md:mt-[13%] items-center text-center">
                    <div className="flex flex-col md:flex-row items-center gap-2">
                        <div className="border-b-3 pb-2 md:border-b-0 md:pb-0 md:border-r-3 md:pr-2">
                            <p className="text-4xl md:text-5xl font-bold">{data.titleEN.toUpperCase()}</p>
                            <p className={`${EspaExtended.className} text-[#FFB800] text-3xl md:text-4xl font-bold`}>{data.slogan.toUpperCase()}</p>
                        </div>
                        <div>
                            <p className="text-white font-bold text-4xl md:text-8xl">
                                {locale == "ru" && (
                                    data.ru.place.toUpperCase()
                                )}
                                {locale == "en" && (
                                    data.en.place.toUpperCase()
                                )}
                                {locale == "de" && (
                                    data.de.place.toUpperCase()
                                )}
                            </p>
                        </div>
                    </div>
                    <div className="mx-5 md:mx-0 px-4 py-2 max-w-max">
                        <p className="text-white text-md md:text-2xl">
                            {locale == "ru" && (
                                data.ru.titleText
                            )}
                            {locale == "en" && (
                                data.en.titleText
                            )}
                            {locale == "de" && (
                                data.de.titleText
                            )}
                        </p>
                    </div>
                    <div>
                        <ul className="flex flex-col md:flex-row items-center gap-5">
                            <li>
                                <Chip 
                                    variant="dot"
                                    color="warning"
                                    className="text-white border-2 px-4 bg-white/10 md:bg-white/30 border-white/30 backdrop-blur-md text-sm md:text-base"
                                >
                                    {locale == "ru" && (
                                        data.ru.chips.first
                                    )}
                                    {locale == "en" && (
                                        data.en.chips.first
                                    )}
                                    {locale == "de" && (
                                        data.de.chips.first
                                    )}
                                </Chip>
                            </li>
                            <li>
                                <Chip 
                                    variant="dot"
                                    color="warning"
                                    className="text-white border-2 px-4 bg-white/10 md:bg-white/30 border-white/30 backdrop-blur-md text-sm md:text-base"
                                >
                                    {locale == "ru" && (
                                        data.ru.chips.second
                                    )}
                                    {locale == "en" && (
                                        data.en.chips.second
                                    )}
                                    {locale == "de" && (
                                        data.de.chips.second
                                    )}
                                </Chip>
                            </li>
                            <li>
                                <Chip 
                                    variant="dot"
                                    color="warning"
                                    className="text-white border-2 px-4 bg-white/10 md:bg-white/30 border-white/30 backdrop-blur-md text-sm md:text-base"
                                >
                                    {locale == "ru" && (
                                        data.ru.chips.third
                                    )}
                                    {locale == "en" && (
                                        data.en.chips.third
                                    )}
                                    {locale == "de" && (
                                        data.de.chips.third
                                    )}
                                </Chip>
                            </li>
                        </ul>
                    </div>
                    {locale == "ru" && (
                        <Button 
                            color="warning" 
                            className="text-white mt-6"
                            as={Link}
                            target="_blank"
                            href="https://b24-wzkh1r.bitrix24site.ru/crm_form_vapyx/"
                        >
                            {g('becomeaMember')}
                        </Button>
                    )}
                    {locale == "en" && (
                        <Button 
                            color="warning" 
                            className="text-white mt-6"
                            as={Link}
                            target="_blank"
                            href="https://b24-wzkh1r.bitrix24site.ru/crm_form_p87ky/"
                        >
                            {g('becomeaMember')}
                        </Button>
                    )}
                    {locale == "de" && (
                        <Button 
                            color="warning" 
                            className="text-white mt-6"
                            as={Link}
                            target="_blank"
                            href="https://b24-wzkh1r.bitrix24site.ru/crm_form_dhorp/"
                        >
                            {g('becomeaMember')}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}