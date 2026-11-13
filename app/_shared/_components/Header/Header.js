'use client'
import { useCallback, useEffect, useId, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    PAGES, WORK_GROUP, CTA, isCurrentPage,
    SITE_NAME_DISPLAY, SITE_LOGO_SRC, SITE_ADDRESS_SHORT, SITE_ADDRESS_PINCODE,
    SITE_PHONE_TEL, SITE_PHONE_DISPLAY, SITE_EMAIL, SITE_EMAIL_MAILTO, SITE_MAP_URL, SITE_WHATSAPP_URL,
} from "../../siteContent"
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

// ---- Trust details (the values themselves are shared: see siteContent.js) -------
const PHONE = { icon: "fas fa-phone-alt", href: SITE_PHONE_TEL, label: SITE_PHONE_DISPLAY }
const EMAIL = { icon: "fas fa-envelope", href: SITE_EMAIL_MAILTO, label: SITE_EMAIL }
const ADDRESS = {
    icon: "fas fa-map-marker-alt",
    href: SITE_MAP_URL,
    // the pincode is hidden on phones, so the strip's address fits one line there
    label: <>{SITE_ADDRESS_SHORT}<span className={styles.pincode}> - {SITE_ADDRESS_PINCODE}</span></>,
    chars: SITE_ADDRESS_SHORT.length,   // lets the CSS shrink the one-line phone address to its own length
    external: true,
    lang: "mr",
}

const SOCIALS = [
    { href: SITE_WHATSAPP_URL, label: "WhatsApp", icon: "fab fa-whatsapp" },
    { href: "https://www.instagram.com/mangal_bhakta_seva_mandal_", label: "Instagram", icon: "fab fa-instagram" },
    { href: "https://youtube.com/@mangalbhaktasevamandaltrus2349", label: "YouTube", icon: "fab fa-youtube" },
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

// join class names, skipping falsy ones: cx("a", isOpen && "b")
const cx = (...names) => names.filter(Boolean).join(" ")

// ---- Small building blocks ----------------------------------------------------
// Logo medal + name. The logo is decorative (alt="") because the name sits right
// beside it — otherwise screen readers would announce the name twice. A plain <img> on purpose: like the
// rest of the site it is a ready-made .webp from /public (no image optimiser is set up), and it sits at
// the top of every page, so it is decoded off the main thread.
function Brand({ className, onClick }) {
    return (
        <Link href="/" className={cx(styles.brand, className)} onClick={onClick}>
            <span className={styles.logo}>
                <img src={SITE_LOGO_SRC} alt="" width="792" height="711" decoding="async" />
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
            style={item.chars ? { "--chars": item.chars } : undefined}
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
    const openedByHover = useRef(false)
    const panelId = useId()
    const groupActive = item.children.some((child) => isCurrentPage(pathname, child.href))

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
    const onPointerEnter = (e) => {
        if (e.pointerType !== "mouse") return
        openedByHover.current = true
        setOpen(true)
    }
    const onPointerLeave = (e) => {
        if (e.pointerType !== "mouse") return
        openedByHover.current = false
        setOpen(false)
    }
    // a click on a panel that hover already opened keeps it open (it would otherwise flash shut under the
    // cursor); every other click (touch, keyboard, a second click) toggles
    const onClick = () => {
        if (open && openedByHover.current) {
            openedByHover.current = false
            return
        }
        setOpen((v) => !v)
    }

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
                onClick={onClick}
            >
                <i className={cx(styles.icon, item.icon)} aria-hidden="true"></i>
                <span>{item.label}</span>
                <i className={cx(styles.icon, styles.chevron, "fas fa-chevron-down")} aria-hidden="true"></i>
            </button>
            <ul id={panelId} className={cx(styles.dropdown, open && styles.isOpen)}>
                {item.children.map((child) => {
                    const active = isCurrentPage(pathname, child.href)
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
        <nav className={styles.nav} aria-label="मुख्य मेनू">
            <ul className={styles.navList}>
                {NAV_ITEMS.map((item) => {
                    if (item.children) return <NavGroup key={item.label} item={item} pathname={pathname} />
                    const active = isCurrentPage(pathname, item.href)
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
    const navigating = useRef(false)

    // a tap on a link closes the drawer to go to another page: focus should not jump back to the menu button then
    const onNavigate = () => {
        navigating.current = true
        onClose()
    }

    useEffect(() => {
        if (!open) return
        const returnTo = returnFocusRef.current
        navigating.current = false

        // everything behind the drawer (strip, bar, page, footer) is switched off while it is open: not focusable,
        // not read out by screen readers
        const root = drawerRef.current.parentElement
        const behind = [...root.parentElement.children].filter((el) => el !== root)
        behind.forEach((el) => el.setAttribute("inert", ""))

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

        // lock the page's scroll; where the scrollbar takes up room (classic scrollbars), pad the page by its
        // width so the content does not jump sideways when the scrollbar disappears
        const scrollbar = window.innerWidth - document.documentElement.clientWidth
        document.body.style.overflow = "hidden"
        if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`
        document.addEventListener("keydown", onKey)
        closeRef.current?.focus()
        return () => {
            document.body.style.overflow = ""
            document.body.style.paddingRight = ""
            document.removeEventListener("keydown", onKey)
            behind.forEach((el) => el.removeAttribute("inert"))
            if (!navigating.current) returnTo?.focus()
        }
    }, [open, onClose, returnFocusRef])

    return (
        <div className={cx(styles.drawerRoot, open && styles.isOpen)}>
            <div className={styles.overlay} onClick={onClose} aria-hidden="true"></div>
            <aside ref={drawerRef} id="site-drawer" className={styles.drawer} role="dialog" aria-modal="true" aria-label="मेनू">
                <div className={styles.drawerHead}>
                    <Brand className={styles.drawerBrand} onClick={onNavigate} />
                    <button ref={closeRef} type="button" className={cx(styles.menuButton, styles.drawerClose)} onClick={onClose} aria-label="मेनू बंद करा">
                        <i className="fas fa-times" aria-hidden="true"></i>
                    </button>
                </div>

                <nav className={styles.drawerNav} aria-label="मुख्य मेनू">
                    <ul className={styles.drawerList}>
                        {DRAWER_ITEMS.map((item) => {
                            const active = isCurrentPage(pathname, item.href)
                            return (
                                <li key={item.href}>
                                    <Link href={item.href} className={cx(styles.drawerLink, active && styles.isActive)} aria-current={active ? "page" : undefined} onClick={onNavigate}>
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
                    <CtaLink onClick={onNavigate} />
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

    // the drawer is hidden by CSS from 1200px up: if the screen grows past that (a rotated tablet, a resized
    // window) while it is open, close it, or it would keep the page's scroll locked with nothing to see
    useEffect(() => {
        const wide = window.matchMedia("(min-width: 1200px)")
        const onChange = (e) => e.matches && setDrawerOpen(false)
        wide.addEventListener("change", onChange)
        return () => wide.removeEventListener("change", onChange)
    }, [])

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
                            aria-label="मेनू उघडा"
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
