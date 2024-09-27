import { Montserrat } from "next/font/google";
import localFont from "next/font/local"

export const EspaExtended = localFont({ src: "./espa.otf" })

export const montserrat = Montserrat({
    weight: ['200', '400', '700', '900'],
    subsets: ['latin', 'cyrillic']
})