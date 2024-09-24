"use client"

import { Tabs, Tab, Card, CardBody, Divider, Spacer, Accordion, AccordionItem, Button } from "@nextui-org/react"
import { ProfileForm } from "./form"
import { pageData as data } from "./tourData/tourData"
import { useLocale, useTranslations } from "next-intl"
import { tourProgram } from "./tourData/tourData"
import { TourGallery } from "./gallery"
import WordRotate from "@/components/magicui/word-rotate"
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils"
import { MainPageCarousel } from "./carousel"
import Link from "next/link"
import { ReviewsBlock } from "./reviews"


export function TourMainBlock() {

    const locale = useLocale()
    const g = useTranslations('General')

    return(
        <div className="flex flex-col items-center py-16 gap-16">

            {/* HIDDEN MAIN TITLE BLOCK */}

            <div className="hidden md:grid-cols-2 gap-10 md:gap-20 w-[90%] md:w-[80%]">
                <MainPageCarousel />
                <div className="flex flex-col gap-4 text-center md:text-left">
                    {locale == "ru" && (
                        <>
                            <p className="text-2xl">
                                {data.ru.carouselText.title}
                            </p>
                            <p className="text-3xl md:text-4xl font-bold text-[#FFB800]">
                                {data.titleEN}
                            </p>
                            <p>
                                {data.ru.carouselText.description}
                            </p>
                        </>
                    )}
                </div>  
            </div>

            {/* TOUR DESCRIPTION BLOCK */}

            <div className="grid md:grid-cols-2 gap-10 md:gap-20 w-[90%] md:w-[80%] items-center">
                <div className="flex flex-col gap-8 text-center md:text-left">
                    {locale == "ru" && (
                        <>
                            {data.ru.description.map((item, index) => (
                                <div key={index}>
                                    <p className="text-2xl font-bold text-[#FFB800]">
                                        {item.header}
                                    </p>
                                    <p className="md:ml-[3%] mt-1 text-sm md:text-base">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </>
                    )}
                    {locale == "en" && (
                        <>
                            {data.en.description.map((item, index) => (
                                <div key={index}>
                                    <p className="text-2xl font-bold text-[#FFB800]">
                                        {item.header}
                                    </p>
                                    <p className="md:ml-[3%] mt-1 text-sm md:text-base">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </>
                    )}
                    {locale == "de" && (
                        <>
                            {data.de.description.map((item, index) => (
                                <div key={index}>
                                    <p className="text-2xl font-bold text-[#FFB800]">
                                        {item.header}
                                    </p>
                                    <p className="md:ml-[3%] mt-1 text-sm md:text-base">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </>
                    )}
                </div>
                {/* <img 
                    src="https://sravni-admin-spaces.blr1.digitaloceanspaces.com/xtravel-impulse-winter/photo_2024-09-13_00-11-55.jpg" 
                    alt="second"
                    className="w-[90%] m-auto rounded-2xl transition ease-in-out duration-250 hover:scale-105"
                    style={{ aspectRatio: "300/200" }} 
                /> */}
                <MainPageCarousel />
            </div>

            {/* TOUR PROGRAM BY DAY BLOCK */}

            <p className="text-2xl md:text-4xl">{g('tourProgram')}</p>
            <div className="flex flex-col w-[95%] md:w-[80%]">
                {locale === "ru" && (
                    <Tabs className="gap-5 flex place-content-center" variant="solid" aria-label="Options"> 
                        {tourProgram.ru.map((tab, index) => (
                            <Tab className="m-auto" key={index} title={`${g('day')} ${index + 1}`}>
                                <Card className="shadow-none p-2 md:p-5 mb-5 md:mb-10">
                                    <CardBody className="grid grid-cols-1 md:grid-cols-2 gap-16">
                                        <div className="flex flex-col gap-6">
                                            <p className="text-4xl">{g('day')} {index + 1}</p>
                                            <p className="text-2xl text-[#FFB800]">{tab.title}</p>
                                            {tab.description.map((item, index) => (
                                                <p key={index} className="text-md text-stone-500 dark:text-stone-300">{item.text}</p>
                                            ))}
                                        </div>
                                        <div className="grid grid-cols-2 gap-3 md:gap-5">
                                            <div className="flex flex-col gap-3 md:gap-5">
                                                <img 
                                                    src={tab.photo1} 
                                                    alt={tab.date} 
                                                    width={275}
                                                    height={360}
                                                    className="rounded-xl transition ease-in-out duration-250 hover:scale-105"
                                                    style={{ aspectRatio: "275/360", objectFit: "cover" }}
                                                />
                                                <img 
                                                    src={tab.photo2} 
                                                    alt={tab.date}
                                                    width={275}
                                                    height={280}
                                                    className="rounded-xl transition ease-in-out duration-250 hover:scale-105"
                                                    style={{ aspectRatio: "275/280", objectFit: "cover" }}
                                                />
                                            </div>
                                            <div className="flex flex-col gap-3 md:gap-5">
                                                <img 
                                                    src={tab.photo3} 
                                                    alt={tab.date} 
                                                    width={275}
                                                    height={320}
                                                    className="rounded-xl transition ease-in-out duration-250 hover:scale-105"
                                                    style={{ aspectRatio: "275/320", objectFit: "cover" }}
                                                />
                                                <img 
                                                    src={tab.photo4} 
                                                    alt={tab.date} 
                                                    width={275}
                                                    height={300}
                                                    className="rounded-xl transition ease-in-out duration-250 hover:scale-105"
                                                    style={{ aspectRatio: "275/320", objectFit: "cover" }}
                                                />
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Tab>
                        ))}
                    </Tabs>
                )}
                {locale === "en" && (
                    <Tabs className="gap-5 flex place-content-center" variant="solid" aria-label="Options"> 
                        {tourProgram.en.map((tab, index) => (
                            <Tab className="m-auto" key={index} title={`${g('day')} ${index + 1}`}>
                                <Card className="shadow-none p-2 md:p-5 mb-5 md:mb-10">
                                    <CardBody className="grid grid-cols-1 md:grid-cols-2 gap-16">
                                        <div className="flex flex-col gap-6">
                                            <p className="text-4xl">{g('day')} {index + 1}</p>
                                            <p className="text-2xl text-[#FFB800]">{tab.title}</p>
                                            {tab.description.map((item, index) => (
                                                <p key={index} className="text-md text-stone-500 dark:text-stone-300">{item.text}</p>
                                            ))}
                                        </div>
                                        <div className="grid grid-cols-2 gap-5">
                                            <div className="flex flex-col gap-5">
                                                <img 
                                                    src={tab.photo1} 
                                                    alt={tab.date} 
                                                    width={275}
                                                    height={360}
                                                    className="rounded-xl transition ease-in-out duration-250 hover:scale-105"
                                                    style={{ aspectRatio: "275/360", objectFit: "cover" }}
                                                />
                                                <img 
                                                    src={tab.photo2} 
                                                    alt={tab.date}
                                                    width={275}
                                                    height={280}
                                                    className="rounded-xl transition ease-in-out duration-250 hover:scale-105"
                                                    style={{ aspectRatio: "275/280", objectFit: "cover" }}
                                                />
                                            </div>
                                            <div className="flex flex-col gap-5">
                                                <img 
                                                    src={tab.photo3} 
                                                    alt={tab.date} 
                                                    width={275}
                                                    height={320}
                                                    className="rounded-xl transition ease-in-out duration-250 hover:scale-105"
                                                    style={{ aspectRatio: "275/320", objectFit: "cover" }}
                                                />
                                                <img 
                                                    src={tab.photo4} 
                                                    alt={tab.date} 
                                                    width={275}
                                                    height={300}
                                                    className="rounded-xl transition ease-in-out duration-250 hover:scale-105"
                                                    style={{ aspectRatio: "275/320", objectFit: "cover" }}
                                                />
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Tab>
                        ))}
                    </Tabs>
                )}
                {locale === "de" && (
                    <Tabs className="gap-5 flex place-content-center" variant="solid" aria-label="Options"> 
                        {tourProgram.de.map((tab, index) => (
                            <Tab className="m-auto" key={index} title={`${index + 1}. ${g('day')}`}>
                                <Card className="shadow-none p-2 md:p-5 mb-5 md:mb-10">
                                    <CardBody className="grid grid-cols-1 md:grid-cols-2 gap-16">
                                        <div className="flex flex-col gap-6">
                                            <p className="text-4xl">{index + 1}. {g('day')}</p>
                                            <p className="text-2xl text-[#FFB800]">{tab.title}</p>
                                            {tab.description.map((item, index) => (
                                                <p key={index} className="text-md text-stone-500 dark:text-stone-300">{item.text}</p>
                                            ))}
                                        </div>
                                        <div className="grid grid-cols-2 gap-5">
                                            <div className="flex flex-col gap-5">
                                                <img 
                                                    src={tab.photo1} 
                                                    alt={tab.date} 
                                                    width={275}
                                                    height={360}
                                                    className="rounded-xl transition ease-in-out duration-250 hover:scale-105"
                                                    style={{ aspectRatio: "275/360", objectFit: "cover" }}
                                                />
                                                <img 
                                                    src={tab.photo2} 
                                                    alt={tab.date}
                                                    width={275}
                                                    height={280}
                                                    className="rounded-xl transition ease-in-out duration-250 hover:scale-105"
                                                    style={{ aspectRatio: "275/280", objectFit: "cover" }}
                                                />
                                            </div>
                                            <div className="flex flex-col gap-5">
                                                <img 
                                                    src={tab.photo3} 
                                                    alt={tab.date} 
                                                    width={275}
                                                    height={320}
                                                    className="rounded-xl transition ease-in-out duration-250 hover:scale-105"
                                                    style={{ aspectRatio: "275/320", objectFit: "cover" }}
                                                />
                                                <img 
                                                    src={tab.photo4} 
                                                    alt={tab.date} 
                                                    width={275}
                                                    height={300}
                                                    className="rounded-xl transition ease-in-out duration-250 hover:scale-105"
                                                    style={{ aspectRatio: "275/320", objectFit: "cover" }}
                                                />
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Tab>
                        ))}
                    </Tabs>
                )}

                {/* ROTATING TEXT BLOCK */}

                {/* <Divider /> */}
                <div className="my-10 md:my-15 flex flex-col gap-14 text-center">
                    <p className="text-2xl md:text-4xl">
                        {g('rotateTitle')}
                    </p>
                    {locale == "ru" && (
                        <WordRotate
                            duration={4000}
                            className="text-lg md:text-xl text-[#FFB800] font-semibold"
                            words={[
                                "Уникальная возможность провести время в гармонии с природой и собой", 
                                "Тренинг, который направлен на полное переосмысление и проектирование вашей жизни", 
                                "Погружение в киргизскую культуру: беркут-шоу и мастер-класс по традиционной кухне",
                                "Возможность найти единомышленников и разделить опыт в комфортной обстановке",
                                "Наполниться энергией природы"
                            ]}
                        />
                    )}
                    {locale == "en" && (
                        <WordRotate
                            duration={4000}
                            className="text-lg md:text-xl text-[#FFB800] font-semibold"
                            words={[
                                "A unique opportunity to spend time in harmony with nature and yourself",
                                "A training that aims to completely rethink and design your life",
                                "Immersion in Kyrgyz culture: berkut show and a master class in traditional cuisine",
                                "An opportunity to find like-minded people and share the experience in a comfortable environment",
                                "Be filled with energy nature"                            
                            ]}
                        />
                    )}
                    {locale == "de" && (
                        <WordRotate
                            duration={4000}
                            className="text-lg md:text-xl text-[#FFB800] font-semibold"
                            words={[
                                "Eine einmalige Gelegenheit die Zeit im Gleichgewicht mit der Natur zu verbringen",
                                "Ein Training,der auf Neuinterpretation und Entscheidungen gezielt ist",
                                "Eine Begegnung mit der kirgisischen Kultur",
                                "Eine Möglichkeit neue Menschen kennen zu lernen",
                                "Poore Naturenergie"
                            ]}
                        />
                    )}
                </div>

                {/* QUESTIONS BLOCK */}

                {/* <Divider /> */}
                <div className="my-10 md:my-15 text-center">
                    <p className="text-2xl md:text-4xl font-bold m-auto">{g('frequentlyAskedQuestions')}</p>
                    <div className="text-left">
                        {locale == "ru" && (
                            <Accordion variant="shadow" className="mt-10 md:mt-16">
                                {data.ru.frequentlyAskedQuestions.map((question, index) => (
                                    <AccordionItem
                                        key={index}
                                        title={question.title}
                                    >
                                        <ul className="list-inside list-disc">
                                            {question.answers.map((answer, index) => (
                                                <li key={index} className="py-1 md:pl-2">
                                                    {answer.text}
                                                </li>
                                            ))}
                                        </ul>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        )}
                        {locale == "en" && (
                            <Accordion variant="shadow" className="mt-10 md:mt-16">
                                {data.en.frequentlyAskedQuestions.map((question, index) => (
                                    <AccordionItem
                                        key={index}
                                        title={question.title}
                                    >
                                        <ul className="list-inside list-disc">
                                            {question.answers.map((answer, index) => (
                                                <li key={index} className="py-1 md:pl-2">
                                                    {answer.text}
                                                </li>
                                            ))}
                                        </ul>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        )}
                        {locale == "de" && (
                            <Accordion variant="shadow" className="mt-10 md:mt-16">
                                {data.de.frequentlyAskedQuestions.map((question, index) => (
                                    <AccordionItem
                                        key={index}
                                        title={question.title}
                                    >
                                        <ul className="list-inside list-disc">
                                            {question.answers.map((answer, index) => (
                                                <li key={index} className="py-1 md:pl-2">
                                                    {answer.text}
                                                </li>
                                            ))}
                                        </ul>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        )}
                    </div>
                </div>
                <Divider />

                {/* CONTACT US BLOCK */}

                <div className="my-10 md:my-16 h-[450px] hidden md:grid grid-cols-1 md:grid-cols-5 gap-10">
                    <Card className="relative flex w-full items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
                        <div className="flex flex-col col-span-1 justify-between p-4 gap-[70px] text-center">
                            <p>{g('tourName')} : <Spacer /> <span className="font-bold text-lg">{data.titleEN}</span> </p>
                            <p>{g('tourDates')} : <Spacer />
                                {locale == "ru" && (
                                    <span className="font-bold text-lg">
                                        {data.ru.tourDates}
                                    </span>
                                )}
                                {locale == "en" && (
                                    <span className="font-bold text-lg">
                                        {data.en.tourDates}
                                    </span>
                                )}
                                {locale == "de" && (
                                    <span className="font-bold text-lg">
                                        {data.de.tourDates}
                                    </span>
                                )}
                            </p>
                            <p>{g('tourCost')} : <Spacer /><span className="font-bold text-lg">{data.tourCostSOM} {g('som')}/{data.tourCostDL}</span></p>
                        </div>
                    </Card>
                    <Card className="col-span-2">
                        <img 
                            src="https://sravni-admin-spaces.blr1.digitaloceanspaces.com/xtravel-impulse-winter/IMAGE%202024-09-24%2010:47:08.jpg" 
                            alt="callMe" 
                            className="w-full h-full object-cover"
                        />
                    </Card>
                    <Card className="col-span-2 flex flex-col justify-between text-center gap-5 md:gap-3 rounded-xl bg-[#FFB800] p-6 md:p-10">
                            <p className="text-3xl text-stone-950 font-bold">
                                {g('callRequest')}
                            </p>
                            <p className="text-2xl text-stone-800">
                                {g('callRequestTitle')}
                            </p>
                            {locale == "ru" && (
                                <Link
                                href="https://b24-wzkh1r.bitrix24site.ru/crm_form_vapyx/"
                                    target="_blank"
                                    className="w-full text-center"
                                >
                                    <Button
                                        className="bg-stone-950 hover:bg-stone-800 w-full text-white"
                                    >
                                        {g('callMe')}
                                    </Button>
                                </Link>
                            )}
                           {locale == "en" && (
                                <Link
                                href="https://b24-wzkh1r.bitrix24site.ru/crm_form_p87ky/"
                                    target="_blank"
                                    className="w-full text-center"
                                >
                                    <Button
                                        className="bg-stone-950 hover:bg-stone-800 w-full text-white"
                                    >
                                        {g('callMe')}
                                    </Button>
                                </Link>
                            )}
                            {locale == "de" && (
                                <Link
                                href="https://b24-wzkh1r.bitrix24site.ru/crm_form_dhorp/"
                                    target="_blank"
                                    className="w-full text-center"
                                >
                                    <Button
                                        className="bg-stone-950 hover:bg-stone-800 w-full text-white"
                                    >
                                        {g('callMe')}
                                    </Button>
                                </Link>
                            )} 
                    </Card>
                </div>
                <div className="mt-10 flex flex-col md:hidden gap-10">
                    <Card className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border-none md:shadow-xl">
                        <div className="flex flex-col col-span-1 justify-between p-4 gap-[70px] text-center">
                            <p className="text-xl">{g('tourName')} : <Spacer /> <span className="font-bold">{data.titleEN}</span> </p>
                            <p className="text-xl">{g('tourDates')} : <Spacer />
                                {locale == "ru" && (
                                    <span className="font-bold">
                                        {data.ru.tourDates}
                                    </span>
                                )}
                                {locale == "en" && (
                                    <span className="font-bold">
                                        {data.en.tourDates}
                                    </span>
                                )}
                                {locale == "de" && (
                                    <span className="font-bold">
                                        {data.de.tourDates}
                                    </span>
                                )}
                            </p>
                            <p className="text-xl">{g('tourCost')} : <Spacer /><span className="font-bold">{data.tourCostSOM} {g('som')}/{data.tourCostDL}</span></p>
                        </div>
                    </Card>
                    <Card className="flex flex-col gap-5 md:gap-3 justify-between text-center rounded-xl bg-[#FFB800] p-6 md:p-10">
                            <p className="text-2xl text-stone-950 font-bold">
                                {g('callRequest')}
                            </p>
                            <p className="text-md text-stone-800">
                                {g('callRequestTitle')}
                            </p>
                            {locale == "ru" && (
                                <Link
                                href="https://b24-wzkh1r.bitrix24site.ru/crm_form_vapyx/"
                                    target="_blank"
                                    className="w-full text-center"
                                >
                                    <Button
                                        className="bg-stone-950 hover:bg-stone-800 w-full text-white"
                                    >
                                        {g('callMe')}
                                    </Button>
                                </Link>
                            )}
                           {locale == "en" && (
                                <Link
                                href="https://b24-wzkh1r.bitrix24site.ru/crm_form_p87ky/"
                                    target="_blank"
                                    className="w-full text-center"
                                >
                                    <Button
                                        className="bg-stone-950 hover:bg-stone-800 w-full text-white"
                                    >
                                        {g('callMe')}
                                    </Button>
                                </Link>
                            )}
                            {locale == "de" && (
                                <Link
                                href="https://b24-wzkh1r.bitrix24site.ru/crm_form_dhorp/"
                                    target="_blank"
                                    className="w-full text-center"
                                >
                                    <Button
                                        className="bg-stone-950 hover:bg-stone-800 w-full text-white"
                                    >
                                        {g('callMe')}
                                    </Button>
                                </Link>
                            )} 
                    </Card>
                </div>

                {/* REVIEWS BLOCK */}

                <div className="my-10 md:my-15 text-center">
                    <p className="text-2xl md:text-4xl font-bold m-auto">{g('reviewsTitle')}</p>
                    <ReviewsBlock />
                </div>

                {/* TOUR GALLERY BLOCK */}

                <TourGallery />
            </div>
        </div>
    )
}