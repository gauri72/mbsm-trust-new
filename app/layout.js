import "./globals.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import 'swiper/css/effect-fade';
import Header from './_shared/_components/Header/Header'
import Footer from './_shared/_components/Footer/Footer'

// Font: Annapurna SIL Bold, the site's only font, is self-hosted — @font-face and
// --font in globals.css, files in /public/assets/fonts

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
        <html lang="mr">
            <head>
                {/* The Marathi font file: needed above the fold on every page */}
                <link rel="preload" href="/assets/fonts/annapurna-sil-devanagari-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
                {/* Speeds up the Video Gallery's YouTube thumbnails/embeds */}
                <link rel="preconnect" href="https://img.youtube.com" />
                <link rel="preconnect" href="https://www.youtube-nocookie.com" />
            </head>
            <body>
                {/* Shared frame — mounted once and kept across page changes.
                    Per-page parts (preloader, scroll animations) are in template.js */}
                <div className="page-wrapper">
                    <Header />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    )
}
