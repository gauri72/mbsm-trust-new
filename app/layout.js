import "./globals.css"
import 'swiper/css'
import 'swiper/css/effect-fade'
import Header from './_shared/_components/Header/Header'
import Footer from './_shared/_components/Footer/Footer'
import { SITE_NAME, SITE_TAGLINE, SITE_URL, shareCard } from './_shared/_components/siteContent'

// Font: Annapurna SIL Bold, the site's only font, is self-hosted — @font-face and
// --font in globals.css, files in /public/assets/fonts

const DESCRIPTION = `${SITE_NAME} — ${SITE_TAGLINE}`

export const metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: SITE_NAME,
        template: '%s',
    },
    description: DESCRIPTION,
    alternates: { canonical: "/" },
    openGraph: shareCard(SITE_NAME, DESCRIPTION),
    twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }) {
    // lang="mr": the site is in Marathi — screen readers pronounce it correctly and
    // browsers don't offer to "translate from English"
    return (
        <html lang="mr">
            <head>
                {/* The Marathi font file: needed above the fold on every page */}
                <link rel="preload" href="/assets/fonts/annapurna-sil-devanagari-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
            </head>
            <body>
                {/* Shared frame — mounted once and kept across page changes.
                    Per-page parts (scroll animations) are in template.js */}
                <div className="page-wrapper">
                    <Header />
                    {/* the page's main landmark and the target of the header's skip link; tabIndex -1 lets the
                        skip link move focus here (it is not a tab stop) */}
                    <main id="main-content" tabIndex={-1}>
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}
