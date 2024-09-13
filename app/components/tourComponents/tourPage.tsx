"use client"

import { Tabs, Tab, Card, CardBody, Divider, Spacer, Accordion, AccordionItem } from "@nextui-org/react"
import { ProfileForm } from "./form"
import { pageData as data } from "./tourData/tourData"
import { useLocale, useTranslations } from "next-intl"
import { tourProgram } from "./tourData/tourData"
import { TourGallery } from "./gallery"


export function TourMainBlock() {

    const locale = useLocale()
    const g = useTranslations('General')

    return(
        <div className="flex flex-col items-center py-16 gap-16">   
            <div className="grid md:grid-cols-2 gap-20 w-[90%] md:w-[80%]">
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
                <img 
                    src="./images/photo_2024-09-13_00-11-55.jpg" 
                    alt="second"
                    className="w-[90%] m-auto rounded-2xl transition ease-in-out duration-250 hover:scale-105"
                    style={{ aspectRatio: "300/200" }} 
                />
            </div>
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
                {locale === "en" && (
                    <Tabs className="gap-5 flex place-content-center" variant="solid" aria-label="Options"> 
                        {tourProgram.en.map((tab, index) => (
                            <Tab className="m-auto" key={index} title={`${g('day')} ${index + 1}`}>
                                <Card className="shadow-none p-2 md:p-5 mb-5 md:mb-10">
                                    <CardBody className="grid grid-cols-1 md:grid-cols-2 gap-16">
                                        <div className="flex flex-col gap-6">
                                            <p className="text-4xl">{g('day')} {index + 1}</p>
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
                            <Tab className="m-auto" key={index} title={`${g('day')} ${index + 1}`}>
                                <Card className="shadow-none p-2 md:p-5 mb-5 md:mb-10">
                                    <CardBody className="grid grid-cols-1 md:grid-cols-2 gap-16">
                                        <div className="flex flex-col gap-6">
                                            <p className="text-4xl">{g('day')} {index + 1}</p>
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
                <Divider />
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
                <div className="my-10 md:my-16 h-[450px] hidden md:grid grid-cols-1 md:grid-cols-5 gap-10">
                    <Card className="flex flex-col  col-span-1 justify-between p-4 text-center">
                        <p className="text-xl">{g('tourName')}</p>
                        <p>{g('tourDates')} : <Spacer />
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
                        <p>{g('tourCost')} : <Spacer /><span className="font-bold">{data.tourCost}</span></p>
                    </Card>
                    <Card className="col-span-2">
                        <img 
                            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/91517e69496063.5b83db2b2a1eb.jpg" 
                            alt="" 
                            className="w-full h-full object-cover"
                        />
                    </Card>
                    <Card className="col-span-2 flex flex-col gap-5 md:gap-3 rounded-xl bg-[#FFB800] p-6 md:p-10">
                            <p className="text-2xl text-stone-950 font-bold">
                                {g('callRequest')}
                            </p>
                            <p className="text-md text-stone-800">
                                {g('callRequestTitle')}
                            </p>
                            <ProfileForm />
                    </Card>
                </div>
                <div className="mt-10 h-[450px] flex md:hidden">
                    <Card className="flex flex-col gap-5 md:gap-3 rounded-xl bg-[#FFB800] p-6 md:p-10">
                            <p className="text-2xl text-stone-950 font-bold">
                                {g('callRequest')}
                            </p>
                            <p className="text-md text-stone-800">
                                {g('callRequestTitle')}
                            </p>
                            <ProfileForm />
                    </Card>
                </div>
                <TourGallery />
            </div>
        </div>
    )
}