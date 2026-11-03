import { DM_Sans, Libre_Baskerville, Mukta } from 'next/font/google'
import localFont from 'next/font/local'

export const dmSans = DM_Sans({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: "--anity-font",
    display: 'swap',
})
export const libreBaskerville = Libre_Baskerville({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: "--anity-font-two",
    display: 'swap',
})
export const yatraOne = localFont({
    src: [
        { path: '../public/assets/fonts/yatra-one/YatraOne-Regular.ttf', weight: '400', style: 'normal' },
    ],
    variable: "--anity-font-spiritual",
    display: 'swap',
})
// Devanagari face with true heavy weights (the system fallback can't
// render Marathi properly bold) — used for the event nameplates
export const mukta = Mukta({
    weight: ['700', '800'],
    subsets: ['devanagari'],
    variable: "--anity-font-marathi",
    display: 'swap',
})
