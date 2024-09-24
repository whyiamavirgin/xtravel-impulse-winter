import React from "react"
import { Button, useDisclosure, Card, CardHeader, CardBody , CardFooter, VisuallyHidden } from "@nextui-org/react"
import { Reviews as data } from "./tourData/tourData"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useLocale, useTranslations } from "next-intl"
import { Dialog, DialogContent, DialogHeader, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export function ReviewsBlock() {

    // const [isOpen, onOpen, onOpenChange] = useDisclosure()
    const locale = useLocale()
    const g = useTranslations('General')
    const { 
        isOpen: isOpenReportModal, 
        onOpen: onOpenReportModal, 
        onClose: onCloseReportModal,
        onOpenChange: onOpenChangeReportModal
    } = useDisclosure()

    return(
        <Carousel
            plugins={
                [
                    Autoplay({
                        delay: 3000
                    }) as any
                ]
            }
            className="w-full mt-10 md:mt-16"
        >
            {locale == "ru" && (
                <CarouselContent className="">
                    {data.ru.map((item, index) => (
                        <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                            <Card 
                                shadow="none"
                                className="gap-4 border dark:border-0">
                                <CardHeader className="p-0">
                                    <img 
                                        src={item.photo}
                                        alt={item.name} 
                                        className="h-[200px] w-full object-cover object-center"
                                        style={{ aspectRatio: "400/200", objectFit: "cover" }}
                                        width={400}
                                        height={200}
                                    />
                                </CardHeader>
                                <CardBody className="h-[220px] w-full max-h-[220px] flex gap-4 overflow-hidden">
                                    <p className="font-bold">
                                        {item.name}
                                    </p>
                                    <p>
                                        {item.review}
                                    </p>
                                </CardBody>
                                <CardFooter>
                                    <Dialog>
                                        <DialogTrigger className="w-full h-full text-white bg-[#FFB800] hover:cursor-pointer hover:bg-opacity-80 py-2 rounded-xl transition ease-in-out duration-250">
                                            {g('readMore')}
                                        </DialogTrigger>
                                        <DialogContent className="p-0 rounded-2xl w-[90%] md:w-full h-[90%]">
                                            <DialogHeader>
                                                <img 
                                                    src={item.photo}
                                                    alt={item.name} 
                                                    className="h-[300px] w-full object-cover object-center rounded-t-xl"
                                                    style={{ aspectRatio: "400/300", objectFit: "cover" }}
                                                    width={400}
                                                    height={300}
                                                />
                                                <VisuallyHidden>
                                                    <DialogTitle></DialogTitle>
                                                    <DialogDescription></DialogDescription>
                                                </VisuallyHidden>
                                            </DialogHeader>
                                            <div className="flex gap-4 px-4 flex-col overflow-scroll md:overflow-auto">
                                                <p className="font-bold text-2xl text-[#FFB800]">{item.name}</p>
                                                <div className="mb-4 overflow-scroll md:overflow-auto">
                                                    <p>
                                                        {item.review}
                                                    </p>
                                                </div>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                </CardFooter>
                            </Card>
                            
                        </CarouselItem>
                    ))}
                </CarouselContent>
            )}
            {locale == "en" && (
                <CarouselContent className="">
                    {data.en.map((item, index) => (
                        <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                            <Card 
                                shadow="none"
                                className="gap-4 border dark:border-0">
                                <CardHeader className="p-0">
                                    <img 
                                        src={item.photo}
                                        alt={item.name} 
                                        className="h-[200px] w-full object-cover object-center"
                                        style={{ aspectRatio: "400/200", objectFit: "cover" }}
                                        width={400}
                                        height={200}
                                    />
                                </CardHeader>
                                <CardBody className="h-[220px] w-full max-h-[220px] flex gap-4 overflow-hidden">
                                    <p className="font-bold">
                                        {item.name}
                                    </p>
                                    <p>
                                        {item.review}
                                    </p>
                                </CardBody>
                                <CardFooter>
                                    <Dialog>
                                        <DialogTrigger className="w-full h-full text-white bg-[#FFB800] hover:cursor-pointer hover:bg-opacity-80 py-2 rounded-xl transition ease-in-out duration-250">
                                            {g('readMore')}
                                        </DialogTrigger>
                                        <DialogContent className="p-0 rounded-2xl w-[90%] md:w-full h-[90%] md:h-min">
                                            <DialogHeader>
                                                <img 
                                                    src={item.photo}
                                                    alt={item.name} 
                                                    className="h-[300px] w-full object-cover object-center rounded-t-xl"
                                                    style={{ aspectRatio: "400/300", objectFit: "cover" }}
                                                    width={400}
                                                    height={300}
                                                />
                                                <VisuallyHidden>
                                                    <DialogTitle></DialogTitle>
                                                    <DialogDescription></DialogDescription>
                                                </VisuallyHidden>
                                            </DialogHeader>
                                            <div className="flex gap-4 px-4 flex-col overflow-scroll md:overflow-auto">
                                                <p className="font-bold text-2xl text-[#FFB800]">{item.name}</p>
                                                <div className="mb-4 overflow-scroll md:overflow-auto">
                                                    <p>
                                                        {item.review}
                                                    </p>
                                                </div>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                </CardFooter>
                            </Card>
                            
                        </CarouselItem>
                    ))}
                </CarouselContent>
            )}
            {locale == "de" && (
                <CarouselContent className="">
                    {data.de.map((item, index) => (
                        <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                            <Card 
                                shadow="none"
                                className="gap-4 border dark:border-0">
                                <CardHeader className="p-0">
                                    <img 
                                        src={item.photo}
                                        alt={item.name} 
                                        className="h-[200px] w-full object-cover object-center"
                                        style={{ aspectRatio: "400/200", objectFit: "cover" }}
                                        width={400}
                                        height={200}
                                    />
                                </CardHeader>
                                <CardBody className="h-[220px] w-full max-h-[220px] flex gap-4 overflow-hidden">
                                    <p className="font-bold">
                                        {item.name}
                                    </p>
                                    <p>
                                        {item.review}
                                    </p>
                                </CardBody>
                                <CardFooter>
                                    <Dialog>
                                        <DialogTrigger className="w-full h-full text-white bg-[#FFB800] hover:cursor-pointer hover:bg-opacity-80 py-2 rounded-xl transition ease-in-out duration-250">
                                            {g('readMore')}
                                        </DialogTrigger>
                                        <DialogContent className="p-0 border-none rounded-2xl w-[90%] md:w-full h-[90%] md:h-min">
                                            <DialogHeader>
                                                <img 
                                                    src={item.photo}
                                                    alt={item.name} 
                                                    className="h-[300px] w-full object-cover object-center rounded-t-xl"
                                                    style={{ aspectRatio: "400/300", objectFit: "cover" }}
                                                    width={400}
                                                    height={300}
                                                />
                                                <VisuallyHidden>
                                                    <DialogTitle></DialogTitle>
                                                    <DialogDescription></DialogDescription>
                                                </VisuallyHidden>
                                            </DialogHeader>
                                            <div className="flex gap-4 px-4 flex-col overflow-scroll md:overflow-auto">
                                                <p className="font-bold text-2xl text-[#FFB800]">{item.name}</p>
                                                <div className="mb-4 overflow-scroll md:overflow-auto">
                                                    <p>
                                                        {item.review}
                                                    </p>
                                                </div>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                </CardFooter>
                            </Card>
                            
                        </CarouselItem>
                    ))}
                </CarouselContent>
            )}
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
        </Carousel>
    )
}