'use client'
import { useCallback, useEffect, useId, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { PAGES, WORK_GROUP, CTA } from "../../siteContent"
import styles from "./Header.module.css"

/* =============================================================================
   Site header (rendered once in app/layout.js, so it stays mounted across pages)

   ┌ contact strip ─ phone | email ............................ address ┐  maroon
   ├ sticky bar ──── logo + name │ menu tray │ socials │ CTA  (≥1200px)  ┤  gold
   │                 logo + name ........ socials │ ☰        (tablet)     │
   │                 logo + name ................. ☰          (mobile)     │
   └ drawer (<1200px, slides in from the left): brand / links / socials + CTA

   All colours, sizes and spacing live as tokens in Header.module.css.
   ========================================================================== */

// ---- Trust details ----------------------------------------------------------
const SITE_NAME = "मंगल भक्त सेवा मंडळ"
// The title font can stack क्त into a ligature that does not read as Marathi; a zero-width
// joiner (U+200D) after क् asks for the half-क form. Used for the visible name only.
const SITE_NAME_DISPLAY = "मंगल भक्‍त सेवा मंडळ"
const SITE_LOGO_SRC = "/assets/media/shared/logo.webp"

const PHONE = { icon: "fas fa-phone-alt", href: "tel:+917588797788", label: "+91 75887 97788" }
const EMAIL = { icon: "fas fa-envelope", href: "mailto:mbsmtrust@gmail.com", label: "mbsmtrust@gmail.com" }
const ADDRESS = {
    icon: "fas fa-map-marker-alt",
    href: "https://share.google/eUPrIPLwsBu6afTGg",
    // the pincode is hidden on phones, so the strip's address fits one line there
    label: <>श्री शंकरदत्त महाराज मठ, एफ 70, एमआयडीसी, अहिल्यानगर<span className={styles.pincode}> - 414111</span></>,
    external: true,
    lang: "mr",
}

const SOCIALS = [
    { href: "https://wa.me/917588797788", label: "WhatsApp", icon: "fab fa-whatsapp" },
    { href: "https://www.instagram.com/mangal_bhakta_seva_mandal_?igsh=NDVnb3JhendmcmFs", label: "Instagram", icon: "fab fa-instagram" },
    { href: "https://youtube.com/@mangalbhaktasevamandaltrus2349?si=s6NqyknikeBmWmSi", label: "YouTube", icon: "fab fa-youtube" },
]
const SOCIAL_TITLE = "आमच्यासोबत जोडा:"

// ---- Navigation (one list, shared by the desktop menu and the drawer) --------
// Names and icons come from siteContent.js (the same ones the footer and the hero use).
// An item with `children` is a group: a dropdown on desktop, flattened in the drawer.
const NAV_ITEMS = [
    PAGES.home,
    PAGES.parichaya,
    {
        ...WORK_GROUP,
        children: [PAGES.karyakram, PAGES.upkram, PAGES.pravachan],
    },
    PAGES.chitrasangraha,
    PAGES.sampark,
]
const DRAWER_ITEMS = NAV_ITEMS.flatMap((item) => item.children ?? [item])

// "/" only matches the home page; any other link also matches its sub-pages
const isActive = (pathname, href) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`)

// join class names, skipping falsy ones: cx("a", isOpen && "b")
const cx = (...names) => names.filter(Boolean).join(" ")

// ---- Small building blocks ----------------------------------------------------
// Logo medal + name. The logo is decorative (alt="") because the name sits right
// beside it — otherwise screen readers would announce the name twice.
function Brand({ className, onClick }) {
    return (
        <Link href="/" className={cx(styles.brand, className)} onClick={onClick}>
            <span className={styles.logo}>
                <img src={SITE_LOGO_SRC} alt="" width="792" height="711" />
            </span>
            <span className={styles.brandName}>{SITE_NAME_DISPLAY}</span>
        </Link>
    )
}

// Icon + text link used in the contact strip (phone, email, address)
function ContactLink({ item, className }) {
    return (
        <a
            href={item.href}
            className={className}
            lang={item.lang}
            {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
            <i className={cx(styles.icon, item.icon)} aria-hidden="true"></i>
            <span>{item.label}</span>
        </a>
    )
}

// "आमच्यासोबत जोडा:" + the three social icon buttons (bar on desktop/tablet, drawer on phones)
function Socials({ className }) {
    return (
        <div className={cx(styles.social, className)}>
            <p className={styles.socialTitle}>{SOCIAL_TITLE}</p>
            <ul className={styles.socialList}>
                {SOCIALS.map((s) => (
                    <li key={s.label}>
                        <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className={styles.socialLink}>
                            <i className={s.icon} aria-hidden="true"></i>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

// The call-to-action pill (bar on desktop, drawer below 1200px)
function CtaLink({ className, onClick }) {
    return (
        <Link href={CTA.href} className={cx(styles.cta, className)} onClick={onClick}>
            <span>{CTA.label}</span>
            <i className={cx(styles.icon, "fas fa-arrow-right")} aria-hidden="true"></i>
        </Link>
    )
}

// ---- Desktop menu -------------------------------------------------------------
// A group ("आमचे कार्य") is a disclosure: a button toggles a list of links.
// Opens on mouse hover, click/tap or Enter; closes on mouse leave, outside click,
// focus leaving the group, Escape (which returns focus to the button) or navigation.
function NavGroup({ item, pathname }) {
    const [open, setOpen] = useState(false)
    const groupRef = useRef(null)
    const buttonRef = useRef(null)
    const panelId = useId()
    const groupActive = item.children.some((child) => isActive(pathname, child.href))

    useEffect(() => setOpen(false), [pathname])

    useEffect(() => {
        if (!open) return
        const onDown = (e) => groupRef.current && !groupRef.current.contains(e.target) && setOpen(false)
        const onKey = (e) => {
            if (e.key !== "Escape") return
            setOpen(false)
            buttonRef.current?.focus()
        }
        document.addEventListener("mousedown", onDown)
        document.addEventListener("keydown", onKey)
        return () => {
            document.removeEventListener("mousedown", onDown)
            document.removeEventListener("keydown", onKey)
        }
    }, [open])

    // hover-open for a real mouse only: on touch screens the tap's emulated
    // "enter" would open the panel and the click would immediately close it again
    const onPointerEnter = (e) => e.pointerType === "mouse" && setOpen(true)
    const onPointerLeave = (e) => e.pointerType === "mouse" && setOpen(false)

    return (
        <li
            ref={groupRef}
            className={styles.navGroup}
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
            onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setOpen(false)}
        >
            <button
                ref={buttonRef}
                type="button"
                className={cx(styles.navLink, groupActive && styles.isActive)}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpen((v) => !v)}
            >
                <i className={cx(styles.icon, item.icon)} aria-hidden="true"></i>
                <span>{item.label}</span>
                <i className={cx(styles.icon, styles.chevron, "fas fa-chevron-down")} aria-hidden="true"></i>
            </button>
            <ul id={panelId} className={cx(styles.dropdown, open && styles.isOpen)}>
                {item.children.map((child) => {
                    const active = isActive(pathname, child.href)
                    return (
                        <li key={child.href}>
                            <Link href={child.href} className={cx(styles.dropdownLink, active && styles.isActive)} aria-current={active ? "page" : undefined}>
                                <i className={cx(styles.icon, child.icon)} aria-hidden="true"></i>
                                <span>{child.label}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </li>
    )
}

// The maroon menu tray (≥1200px; hidden by CSS below that)
function NavMenu({ pathname }) {
    return (
        <nav className={styles.nav} aria-label="Primary">
            <ul className={styles.navList}>
                {NAV_ITEMS.map((item) => {
                    if (item.children) return <NavGroup key={item.label} item={item} pathname={pathname} />
                    const active = isActive(pathname, item.href)
                    return (
                        <li key={item.href}>
                            <Link href={item.href} className={cx(styles.navLink, active && styles.isActive)} aria-current={active ? "page" : undefined}>
                                <i className={cx(styles.icon, item.icon)} aria-hidden="true"></i>
                                <span>{item.label}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

// ---- Drawer (below 1200px) ----------------------------------------------------
// A modal dialog: while open it locks page scroll, keeps Tab focus inside itself,
// closes on Escape / overlay tap / link tap, and gives focus back to the menu button.
function Drawer({ open, onClose, pathname, returnFocusRef }) {
    const drawerRef = useRef(null)
    const closeRef = useRef(null)

    useEffect(() => {
        if (!open) return
        const returnTo = returnFocusRef.current

        const onKey = (e) => {
            if (e.key === "Escape") return onClose()
            if (e.key !== "Tab") return
            // focus trap: wrap from the last focusable element to the first (and back)
            const focusables = drawerRef.current?.querySelectorAll("a[href], button")
            if (!focusables?.length) return
            const first = focusables[0]
            const last = focusables[focusables.length - 1]
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault()
                last.focus()
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault()
                first.focus()
            }
        }

        document.body.style.overflow = "hidden"
        document.addEventListener("keydown", onKey)
        closeRef.current?.focus()
        return () => {
            document.body.style.overflow = ""
            document.removeEventListener("keydown", onKey)
            returnTo?.focus()
        }
    }, [open, onClose, returnFocusRef])

    return (
        <div className={cx(styles.drawerRoot, open && styles.isOpen)}>
            <div className={styles.overlay} onClick={onClose} aria-hidden="true"></div>
            <aside ref={drawerRef} id="site-drawer" className={styles.drawer} role="dialog" aria-modal="true" aria-label="Menu">
                <div className={styles.drawerHead}>
                    <Brand className={styles.drawerBrand} onClick={onClose} />
                    <button ref={closeRef} type="button" className={cx(styles.menuButton, styles.drawerClose)} onClick={onClose} aria-label="Close menu">
                        <i className="fas fa-times" aria-hidden="true"></i>
                    </button>
                </div>

                <nav className={styles.drawerNav} aria-label="Primary">
                    <ul className={styles.drawerList}>
                        {DRAWER_ITEMS.map((item) => {
                            const active = isActive(pathname, item.href)
                            return (
                                <li key={item.href}>
                                    <Link href={item.href} className={cx(styles.drawerLink, active && styles.isActive)} aria-current={active ? "page" : undefined} onClick={onClose}>
                                        <i className={cx(styles.icon, item.icon)} aria-hidden="true"></i>
                                        <span className={styles.drawerLabel}>{item.label}</span>
                                        <i className={cx(styles.icon, styles.chevron, "fas fa-chevron-right")} aria-hidden="true"></i>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                {/* socials (phones only — tablets already show them in the bar), then the CTA */}
                <div className={styles.drawerFoot}>
                    <Socials className={styles.drawerSocial} />
                    <CtaLink onClick={onClose} />
                </div>
            </aside>
        </div>
    )
}

// ---- Header ---------------------------------------------------------------------
export default function Header() {
    const pathname = usePathname()
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const menuButtonRef = useRef(null)
    const closeDrawer = useCallback(() => setDrawerOpen(false), [])

    // the header stays mounted across pages: close the drawer on any navigation
    useEffect(() => setDrawerOpen(false), [pathname])

    // the sticky bar casts a shadow once the page has scrolled
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 0)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <>
            {/* contact strip: scrolls away with the page */}
            <div className={styles.topbar}>
                <div className={styles.inner}>
                    <ul className={styles.topbarList}>
                        <li><ContactLink item={PHONE} className={styles.topbarLink} /></li>
                        <li><ContactLink item={EMAIL} className={styles.topbarLink} /></li>
                    </ul>
                    <ContactLink item={ADDRESS} className={cx(styles.topbarLink, styles.topbarAddress)} />
                </div>
            </div>

            {/* main bar: sticks to the top of the viewport (position: sticky) */}
            <header className={cx(styles.bar, scrolled && styles.isScrolled)}>
                <div className={styles.inner}>
                    <Brand />
                    <NavMenu pathname={pathname} />
                    <div className={styles.actions}>
                        <Socials className={styles.barSocial} />
                        <span className={styles.divider} aria-hidden="true"></span>
                        <CtaLink className={styles.barCta} />
                        <button
                            ref={menuButtonRef}
                            type="button"
                            className={cx(styles.menuButton, styles.barMenuButton)}
                            onClick={() => setDrawerOpen(true)}
                            aria-label="Open menu"
                            aria-expanded={drawerOpen}
                            aria-controls="site-drawer"
                        >
                            <i className="fas fa-bars" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </header>

            <Drawer open={drawerOpen} onClose={closeDrawer} pathname={pathname} returnFocusRef={menuButtonRef} />
        </>
    )
}
