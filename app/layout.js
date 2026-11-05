import "./globals.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import 'swiper/css/effect-fade';
import { Rozha_One, Tiro_Devanagari_Marathi } from 'next/font/google'
import CustomCursor from './_shared/_components/CustomCursor/CustomCursor'
import Header from './_shared/_components/Header/Header'
import Footer from './_shared/_components/Footer/Footer'

// Two typefaces, each covering English + Marathi. Both ship a single weight,
// so faux bold is disabled in globals.css (font-synthesis: none).
// Tiro Devanagari Marathi — all regular / small text
const fontText = Tiro_Devanagari_Marathi({
    weight: '400',
    subsets: ['latin', 'devanagari'],
    variable: '--font-text',
    display: 'swap',
})
// Rozha One — large display titles only
const fontTitle = Rozha_One({
    weight: '400',
    subsets: ['latin', 'devanagari'],
    variable: '--font-title',
    display: 'swap',
})

export const metadata = {
    title: {
        default: 'मंगल भक्त सेवा मंडळ',
        template: '%s',
    },
    description: 'Shri Shubharay Maharaj Math — a spiritual home dedicated to devotion, seva and community upliftment in Ahilyanagar.',
}

export default function RootLayout({ children }) {
    // lang="mr": the site is in Marathi — screen readers pronounce it correctly and
    // browsers don't offer to "translate from English"
    return (
        <html lang="mr" className={`${fontText.variable} ${fontTitle.variable}`}>
            <head>
                {/* Speeds up the Video Gallery's YouTube thumbnails/embeds */}
                <link rel="preconnect" href="https://img.youtube.com" />
                <link rel="preconnect" href="https://www.youtube-nocookie.com" />
            </head>
            <body>
                {/* Shared frame — mounted once and kept across page changes.
                    Per-page parts (preloader, scroll animations) are in template.js */}
                <CustomCursor />
                <div className="page-wrapper">
                    <Header />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    )
}
