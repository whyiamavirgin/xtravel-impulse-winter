import Marquee from "@/components/magicui/marquee";
import { useTranslations } from "next-intl";

const firstRow = [
    {
        image: 'http://xtravel.kg/wp-content/uploads/2024/landings/impulse-winter/day3photo4.jpeg'
    },
    {
        image: "http://xtravel.kg/wp-content/uploads/2024/landings/impulse-winter/day2photo3.jpg"
    },
    {
        image: "http://xtravel.kg/wp-content/uploads/2024/landings/impulse-winter/gallery/gallery1.jpeg"
    },
    {
        image: "http://xtravel.kg/wp-content/uploads/2024/landings/impulse-winter/day2photo2.png"
    },
    {
        image: "http://xtravel.kg/wp-content/uploads/2024/landings/impulse-winter/day3photo3.jpeg"
    },
    {
        image: "http://xtravel.kg/wp-content/uploads/2024/landings/impulse-winter/day2photo4.png"
    },
    {
        image: "http://xtravel.kg/wp-content/uploads/2024/landings/impulse-winter/day2photo1.jpeg"
    },
    {
        image: "http://xtravel.kg/wp-content/uploads/2024/landings/impulse-winter/day3photo2.jpeg"
    },
]

const secondRow = [
    {
        image: "http://xtravel.kg/wp-content/uploads/2024/landings/impulse-winter/day4photo1.png"
    },
    {
        image: "http://xtravel.kg/wp-content/uploads/2024/landings/impulse-winter/gallery/gallery2.jpg"
    },
    {
        image: "http://xtravel.kg/wp-content/uploads/2024/landings/impulse-winter/gallery/gallery3.jpg"
    },
    {
        image: "http://xtravel.kg/wp-content/uploads/2024/landings/impulse-winter/gallery/gallery4.webp"
    },
    {
        image: "http://xtravel.kg/wp-content/uploads/2024/landings/impulse-winter/day4photo2.png"
    },
    {
        image: "http://xtravel.kg/wp-content/uploads/2024/landings/impulse-winter/gallery/gallery5.jpeg"
    }
]

export function TourGallery() {

    const g = useTranslations('General')

    return(
        <div className=" py-10 md:py-16 relative flex w-full flex-col items-center justify-center overflow-hidden">
            <p className="text-2xl md:text-4xl font-bold mb-5 md:mb-10">{g('tourGallery')}</p>
            <Marquee className="[--duration:45s] [--gap:1.5rem]">
                {firstRow.map((img, index) => (
                    <img
                        key={index}
                        src={img.image}
                        width={400}
                        height={180}
                        alt={`${index}`}
                        className="w-[209px] md:w-[310px] h-[152px] md:h-[220px] rounded-2xl"
                        style={{ aspectRatio: "300/200", objectFit: "cover" }}
                    />
                ))}
            </Marquee>
            <Marquee reverse className="[--duration:45s] my-4 [--gap:1.5rem]">
                {secondRow.map((img, index) => (
                    <img
                        key={index}
                        src={img.image}
                        alt={`${index}`}
                        className="w-[209px] md:w-[310px] h-[152px] md:h-[220px] rounded-2xl"
                        style={{ aspectRatio: "300/200", objectFit: "cover" }}
                    />
                ))}
            </Marquee>
        </div>
    )
}