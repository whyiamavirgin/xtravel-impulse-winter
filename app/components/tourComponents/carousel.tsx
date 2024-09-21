"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay" 
import { Button } from "@/components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { useRouter } from "next/navigation"
import { CarouselData } from "./tourData/tourData"

export function MainPageCarousel() {

    return(
        <Carousel
            plugins={
                [
                    Autoplay({
                        delay: 3000
                    }) as any
                ]
            }
            opts={{ align: "start" }}
            className="w-full"
        >
            <CarouselContent>
                {CarouselData.map((item, index) => (
                    <CarouselItem
                        key={index}
                    >   
                        <div className="relative h-[250px] md:h-[400px] w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#FFB800] to-[#FFB800]/80">
                            <img 
                                src={item.image}
                                alt={`${index}`} 
                                width={1200}
                                height={400}
                                className="h-full w-full object-cover object-center"
                                style={{ aspectRatio: "1200/400", objectFit: "cover" }}
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}