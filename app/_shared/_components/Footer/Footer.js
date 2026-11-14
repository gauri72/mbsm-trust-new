'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    PAGES, isCurrentPage,
    SITE_NAME_DISPLAY, SITE_LOGO_SRC,
    SITE_ADDRESS_PLACE, SITE_ADDRESS_LINE1, SITE_ADDRESS_CITY, SITE_ADDRESS_PINCODE,
    SITE_PHONE_TEL, SITE_PHONE_DISPLAY, SITE_EMAIL, SITE_EMAIL_MAILTO, SITE_MAP_URL,
} from "../siteContent"
import { cx } from "../utils"
import styles from "./Footer.module.css"

/* =============================================================================
   Site footer (rendered once in app/layout.js, so it stays mounted across pages)

   ┌ main ─── brand + about │ उपयुक्‍त दुवे │ संपर्क माहिती │ आमची उद्दिष्टे ┐ gold
   └ bottom ─ © year, name ................... designed & developed by ┘ maroon

   Desktop (≥1200px) : 4 left-aligned columns, equal blank space between them.
   Tablet (768–1199) : brand + about centred across the top, then the 3 columns in one row.
   Phones (<768)     : a single centred column.
   Width: the site's standard Bootstrap .container (1320px max, with side margins).
   Colours, sizes and spacing: the site's shared tokens (globals.css) plus the footer's own in Footer.module.css.
   The name, logo, address and contact details come from siteContent.js, shared with the header.

   'use client' is needed for usePathname (the home-link scroll below).
   All content lives in the constants just below: edit text there, not in the markup.
   ========================================================================== */

// ---- Trust details ----------------------------------------------------------
// the same half-क fix (see SITE_NAME_DISPLAY in siteContent.js) for the column title in Annapurna SIL ("उपयुक्त" also has क्त)
const LINKS_TITLE = "उपयुक्\u200Dत दुवे"
const ABOUT_TEXT = `${SITE_NAME_DISPLAY} ही सामाजिक संस्था आहे. विविध उपक्रम व कार्यक्रमांतून मानवसेवा, धार्मिक समता, ऐक्य व आध्यात्मिक मार्गदर्शनाचे कार्य आम्ही करतो.`
const CREDIT = { name: "गौरी कोळेकर", href: "mailto:kolekargauri8@gmail.com" }

// आमची उद्दिष्टे: the trust's areas of work (text, not links)
const SEVA = [
    "मानवसेवा व मदतकार्य",
    "धार्मिक समता व एकता",
    "आध्यात्मिक मार्गदर्शन",
    "उपक्रम व कार्यक्रम",
]

// उपयुक्त दुवे
// the pages the footer links to, under footer names of their own (the href comes from siteContent.js)
const QUICK_LINKS = [
    { href: PAGES.home.href, label: "मुख्य पान" },
    { href: PAGES.parichaya.href, label: "आमच्याबद्दल" },
    { href: PAGES.chitrasangraha.href, label: "आठवणी" },
    { href: PAGES.sampark.href, label: "संपर्क साधा" },
]

// संपर्क माहिती (the same shared details as the header's contact strip: see siteContent.js).
// external: opens in a new tab (the map); phone + email open the visitor's own app.
const CONTACTS = [
    { icon: "fas fa-phone-alt", href: SITE_PHONE_TEL, label: SITE_PHONE_DISPLAY },
    { icon: "fas fa-envelope", href: SITE_EMAIL_MAILTO, label: SITE_EMAIL },
    // the address on three lines: the math · the plot · the city + pincode
    { icon: "fas fa-map-marker-alt", href: SITE_MAP_URL, label: <>{SITE_ADDRESS_PLACE}<br />{SITE_ADDRESS_LINE1}<br />{SITE_ADDRESS_CITY} - {SITE_ADDRESS_PINCODE}</>, external: true },
]

// Column title (CSS draws its short 2px underline)
const Title = ({ children }) => <h2 className={styles.title}>{children}</h2>

export default function Footer() {
    const year = new Date().getFullYear()        // copyright year stays current on its own
    const pathname = usePathname()

    // already on the home page: a link to "/" would do nothing, so scroll back to the top
    // (modifier-clicks still open a new tab as usual; visitors who ask for reduced
    // motion get an instant jump instead of the smooth scroll)
    const onHomeClick = (e) => {
        if (pathname !== "/" || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
        e.preventDefault()
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" })
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.main}>
                <div className={cx("container", styles.grid)}>

                    {/* brand + about */}
                    <div className={styles.column}>
                        <Link href="/" className={styles.brand} onClick={onHomeClick}>
                            <span className={styles.logo}>
                                {/* decorative: the name is right beside it */}
                                <img src={SITE_LOGO_SRC} alt="" width="792" height="711" loading="lazy" />
                            </span>
                            <span className={styles.brandName}>{SITE_NAME_DISPLAY}</span>
                        </Link>
                        <p className={styles.aboutText}>{ABOUT_TEXT}</p>
                    </div>

                    {/* उपयुक्‍त दुवे */}
                    <nav className={styles.column} aria-label="उपयुक्‍त दुवे">
                        <Title>{LINKS_TITLE}</Title>
                        <ul className={styles.list}>
                            {QUICK_LINKS.map((l) => (
                                <li key={l.href}>
                                    {/* the current page is announced to screen readers (no visual change) */}
                                    <Link
                                        href={l.href}
                                        className={cx(styles.item, styles.link)}
                                        aria-current={isCurrentPage(pathname, l.href) ? "page" : undefined}
                                        onClick={l.href === "/" ? onHomeClick : undefined}
                                    >
                                        <i className={cx(styles.icon, "fas fa-arrow-right")} aria-hidden="true"></i>
                                        <span>{l.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* संपर्क माहिती */}
                    <div className={styles.column}>
                        <Title>संपर्क माहिती</Title>
                        <ul className={styles.list}>
                            {CONTACTS.map((c) => (
                                <li key={c.href}>
                                    <a
                                        href={c.href}
                                        className={cx(styles.item, styles.link)}
                                        {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                    >
                                        <i className={cx(styles.icon, c.icon)} aria-hidden="true"></i>
                                        <span>{c.label}</span>
                                        {/* screen readers are told the map opens in a new tab */}
                                        {c.external && <span className="visually-hidden"> (नवीन टॅबमध्ये उघडते)</span>}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* आमची उद्दिष्टे */}
                    <div className={styles.column}>
                        <Title>आमची उद्दिष्टे</Title>
                        <ul className={styles.list}>
                            {SEVA.map((item) => (
                                <li key={item} className={styles.item}>
                                    <i className={cx(styles.icon, "fas fa-hand-holding-heart")} aria-hidden="true"></i>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>

            {/* bottom bar: each phrase is kept whole (.nowrap), so narrow screens
                only break the line between phrases. The lines are English (lang="en")
                with Marathi names (lang="mr"), so screen readers switch voice correctly. */}
            <div className={styles.bottom}>
                <div className={cx("container", styles.bottomInner)}>
                    <p lang="en">
                        <span className={styles.nowrap}>
                            {/* pages are pre-rendered at build time: if the year has changed
                                since, the browser's value replaces it without a hydration error */}
                            &copy; <span suppressHydrationWarning>{year}</span>{" "}
                            <Link href="/" className={styles.bottomLink} lang="mr" onClick={onHomeClick}>{SITE_NAME_DISPLAY}</Link>.
                        </span>{" "}
                        <span className={styles.nowrap}>All rights reserved.</span>
                    </p>
                    <p lang="en">
                        <span className={styles.nowrap}>Designed &amp; Developed by</span>{" "}
                        <a href={CREDIT.href} className={cx(styles.bottomLink, styles.nowrap)} lang="mr">{CREDIT.name}</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}
