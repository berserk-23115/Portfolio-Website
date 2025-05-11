import { Inter ,Instrument_Serif, Geist} from "next/font/google";
export const inter = Inter({
    subsets:['latin'],
    variable:"--font-inter"
})
export const insSerif = Instrument_Serif({
    variable: "--font-inserif",
    weight: "400"
})
export const geist = Geist({
    subsets:['latin'],
    variable:"--font-geist"
})