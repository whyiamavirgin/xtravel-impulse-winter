import Marquee from "@/components/magicui/marquee";
import { useTranslations } from "next-intl";

const firstRow = [
    {
        image: './images/IMG_3035.jpg'
    },
    {
        image: "https://theplanetd.com/images/Eagle-Hunters-Kyrgyzstan-12.jpg"
    },
    {
        image: "./images/IMG_3032.jpg"
    },
    {
        image: "./images/IMG_3043.png"
    },
    {
        image: "https://avatars.dzeninfra.ru/get-zen_doc/9704999/pub_646c96bcb3c400731288004d_646caab9c9ade01f07bd6658/scale_1200"
    },
    {
        image: "./images/IMG_3041.png"
    },
    {
        image: "https://avatars.dzeninfra.ru/get-zen_doc/4366388/pub_63d503a0f86b2d2a1644d695_63d5062142bca67403f1d39a/scale_1200"
    },
    {
        image: "./images/IMG_3010.jpg"
    },
]

const secondRow = [
    {
        image: "./images/IMG_3044.png"
    },
    {
        image: "./images/photo_2024-09-13_00-11-55.jpg"
    },
    {
        image: "./images/photo_2024-09-12_21-11-54.jpg"
    },
    {
        image: "./images/main.webp"
    },
    {
        image: "./images/IMG_3045.png"
    },
    {
        image: "./images/IMG_2988.jpg"
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