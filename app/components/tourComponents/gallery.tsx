import Marquee from "@/components/magicui/marquee";
import { useTranslations } from "next-intl";

const firstRow = [
    {
        image: 'https://avatars.mds.yandex.net/i?id=70d4f752bd73f9113818422ac847c132_l-10995423-images-thumbs&n=13'
    },
    {
        image: "./images/photo_4_2024-09-12_01-09-15.jpg"
    },
    {
        image: "https://static.tildacdn.com/tild3631-6561-4462-a232-623762366334/Broken_heart_Solto_H.JPG"
    },
    {
        image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649124844_69-vsegda-pomnim-com-p-priroda-kirgizstana-foto-73.jpg"
    },
    {
        image: "./images/photo_6_2024-09-12_01-09-15.jpg"
    },
    {
        image: "https://www.cheval-daventure.com/photos/1800x1200/kirghizie-son-kul-lemilie-chaix-randonnee-cheval-daventure-11-4063.jpg"
    },
    {
        image: "./images/photo_9_2024-09-12_01-09-15.jpg"
    },
    {
        image: "https://kartinki.pics/pics/uploads/posts/2022-08/1659477759_3-kartinkin-net-p-ozero-alakol-kirgiziya-priroda-krasivo-fot-3.jpg"
    },
    {
        image: "https://ecotours.ru/assets/galleries/621/imgp6132-corr.jpg"
    },
    {
        image: "./images/photo_8_2024-09-12_01-09-15.jpg"
    }
]

const secondRow = [
    {
        image: "./images/photo_4_2024-09-12_01-09-15.jpg"
    },
    {
        image: 'https://krots.top/uploads/posts/2021-11/1637027625_117-krot-info-p-gori-kirgizii-gori-krasivo-foto-128.jpg'
    },
    {
        image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1650933436_1-vsegda-pomnim-com-p-gori-kirgizii-foto-1.png"
    },
    {
        image: "./images/photo_6_2024-09-12_01-09-15.jpg"
    },
    {
        image: "https://i.pinimg.com/originals/29/99/88/299988f75c10e5d449debd2e572caefd.jpg"
    },
    {
        image: "./images/photo_9_2024-09-12_01-09-15.jpg"
    },
    {
        image: "https://photopole.ru/wp-content/uploads/kirgiziia-gory-dolina-arashan-23.webp"
    },
    {
        image: "./images/photo_8_2024-09-12_01-09-15.jpg"
    },
    {
        image: "https://avatars.mds.yandex.net/i?id=9ee232e8ac6bef2c305bedc225307c07_l-9834975-images-thumbs&n=13"
    },
    {
        image: "https://avatars.mds.yandex.net/i?id=bb33f14e4f2246a5622caa95dabd8350_l-5670257-images-thumbs&n=13"
    },
    {
        image: "./images/photo_4_2024-09-12_01-09-15.jpg"
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