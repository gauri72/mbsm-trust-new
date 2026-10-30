'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { HEADER_TITLE, HEADER_LOGO_SRC, HEADER_PHONE_DISPLAY, HEADER_PHONE_TEL, HEADER_EMAIL, HEADER_EMAIL_MAILTO, HEADER_ADDRESS_LINE1, HEADER_ADDRESS_LINE2, HEADER_MAP_URL } from "@/lib/siteInfo"

const SEVA = [
    "मानवसेवा व मदतकार्य",
    "धार्मिक समता व एकता",
    "आध्यात्मिक मार्गदर्शन",
    "सामाजिक उपक्रम व कार्यक्रम",
]

const QUICK_LINKS = [
    { href: "/about", label: "आमची वाटचाल" },
    { href: "/events", label: "सोहळे व कार्यक्रम" },
    { href: "/gallery", label: "आठवणींचा ठेवा" },
    { href: "/contact", label: "संवाद साधा" },
]

export default function Footer1() {
    const year = new Date().getFullYear()
    const pathname = usePathname()

    // Already on the homepage: a Link to "/" is a no-op, so scroll back to the top instead
    const handleHomeClick = (e) => {
        if (pathname === "/" && !(e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0)) {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
        }
    }
    return (
        <footer className="site-footer site-footer--shubharay">
            <div className="site-footer__top">
                <div className="container">
                    {/* Fluid CSS-grid: 4 -> 2 -> 1 columns with no per-column media queries */}
                    <div className="site-footer__top-inner site-footer__grid">

                        <div className="footer-widget footer-widget__about wow fadeInUp" data-wow-delay="100ms">
                            <Link href="/" className="footer-widget__about-logo shubharay-logo" onClick={handleHomeClick}>
                                <span className="shubharay-logo__medal">
                                    <img src={HEADER_LOGO_SRC} alt={HEADER_TITLE} className="shubharay-logo__img" />
                                </span>
                                <span className="shubharay-logo__text">
                                    <span className="shubharay-logo__title">{HEADER_TITLE}</span>
                                </span>
                            </Link>
                            <p className="footer-widget__about-text">मंगल भक्त सेवा मंडळ ट्रस्ट ही एक सामाजिक संस्था आहे. विविध उपक्रम व कार्यक्रमांतून मानवसेवा, धार्मिक समता, ऐक्य आणि आध्यात्मिक मार्गदर्शनाचे कार्य आम्ही करतो.</p>
                        </div>

                        <div className="footer-widget footer-widget__services wow fadeInUp" data-wow-delay="200ms">
                            <h4 className="footer-widget__title">आमचे कार्य</h4>
                            <span className="footer-widget__title-ornament"><span></span></span>
                            <ul className="footer-widget__services-list footer-widget__services-list--icon list-unstyled">
                                {SEVA.map((item) => (
                                    <li key={item}><i className="icon-love"></i>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-widget footer-widget__links wow fadeInUp" data-wow-delay="300ms">
                            <h4 className="footer-widget__title">उपयुक्त दुवे</h4>
                            <span className="footer-widget__title-ornament"><span></span></span>
                            <ul className="footer-widget__services-list footer-widget__services-list--icon list-unstyled">
                                {QUICK_LINKS.map((l) => (
                                    <li key={l.href}>
                                        <Link href={l.href}><i className="icon-arrow-right"></i><span>{l.label}</span></Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-widget footer-widget__contact wow fadeInUp" data-wow-delay="400ms">
                            <h3 className="footer-widget__title">संपर्क माहिती</h3>
                            <span className="footer-widget__title-ornament"><span></span></span>
                            <ul className="footer-widget__contact-list list-unstyled">
                                <li>
                                    <span className="icon"><span className="icon-call"></span></span>
                                    <p><Link href={HEADER_PHONE_TEL}>{HEADER_PHONE_DISPLAY}</Link></p>
                                </li>
                                <li>
                                    <span className="icon"><span className="fas fa-envelope"></span></span>
                                    <p><Link href={HEADER_EMAIL_MAILTO}>{HEADER_EMAIL}</Link></p>
                                </li>
                                <li className="footer-widget__contact-list--multiline">
                                    <span className="icon"><span className="icon-pin-two"></span></span>
                                    <p>
                                        <Link href={HEADER_MAP_URL} target="_blank" rel="noopener noreferrer">
                                            {HEADER_ADDRESS_LINE1}<br /> {HEADER_ADDRESS_LINE2}
                                        </Link>
                                    </p>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <div className="site-footer__bottom">
                <div className="container">
                    <div className="site-footer__bottom-inner">
                        <p className="site-footer__copyright-text">
                            Copyright &copy; {year} <Link href="/" onClick={handleHomeClick}>मंगल भक्त सेवा मंडळ</Link>.<br className="site-footer__copyright-break" /> All Rights Reserved.
                        </p>
                        {/* Utility links hidden for now — uncomment to restore.
                        <ul className="list-unstyled site-footer__bottom-menu">
                            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link href="/terms-of-service">Terms of Service</Link></li>
                            <li><Link href="/cookies-settings">Cookies Settings</Link></li>
                        </ul>
                        */}
                        <p className="site-footer__credit-text">
                            Designed &amp; Developed by <Link href="mailto:kolekargauri8@gmail.com" className="site-footer__credit-name">गौरी कोळेकर</Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
