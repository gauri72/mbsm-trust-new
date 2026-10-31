'use client'
import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { HEADER_TITLE, HEADER_LOGO_SRC, HEADER_CTA_LABEL, HEADER_SOCIAL_TITLE, HEADER_SOCIALS } from "@/lib/siteInfo"
import { NAV_ITEMS, isNavActive } from "@/lib/data/navItems"

const MobileMenu = ({ handleMobileMenu }) => {
    const pathname = usePathname()
    const isActive = (href) => isNavActive(pathname, href)
    const groupActive = (item) => item.children.some((child) => isActive(child.href))

    // a dropdown group starts expanded when the current page is inside it
    const [openGroup, setOpenGroup] = useState(() => NAV_ITEMS.find((item) => item.children && groupActive(item))?.label ?? null)

    // lock body scroll while the drawer is open
    useEffect(() => {
        const isOpen = () => document.body.classList.contains("mobile-menu-visible")
        const sync = () => {
            document.body.style.overflow = isOpen() ? "hidden" : ""
        }
        const observer = new MutationObserver(sync)
        observer.observe(document.body, { attributes: true, attributeFilter: ["class"] })
        sync()
        return () => {
            observer.disconnect()
            document.body.style.overflow = ""
        }
    }, [])

    // close on Escape
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape" && document.body.classList.contains("mobile-menu-visible")) {
                handleMobileMenu()
            }
        }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [handleMobileMenu])

    return (
        <div className="mobile-nav__wrapper">
            <div
                className="mobile-nav__overlay snav__scrim"
                onClick={handleMobileMenu}
                aria-hidden="true"
            ></div>

            <aside
                className="mobile-nav__content snav"
                id="mobile-nav-menu"
                role="dialog"
                aria-modal="true"
                aria-label="Menu"
            >
                <header className="snav__head">
                    <Link
                        href="/"
                        className="snav__brand"
                        aria-label="Home"
                        onClick={handleMobileMenu}
                    >
                        <img
                            src={HEADER_LOGO_SRC}
                            alt=""
                            className="snav__brand-img"
                        />
                        <span className="snav__brand-name">{HEADER_TITLE}</span>
                    </Link>
                    <button
                        type="button"
                        className="snav__close"
                        onClick={handleMobileMenu}
                        aria-label="Close menu"
                    >
                        <span className="snav__close-x" aria-hidden="true"></span>
                    </button>
                </header>

                <nav className="snav__nav" aria-label="Primary">
                    <ul className="snav__list">
                        {NAV_ITEMS.map((item, index) => {
                            if (item.children) {
                                const isOpen = openGroup === item.label
                                const submenuId = `snav-sub-${index}`
                                return (
                                    <li key={item.label} className={`snav__item snav__item--group${isOpen ? " is-open" : ""}`}>
                                        <button
                                            type="button"
                                            className={`snav__link snav__toggle${groupActive(item) ? " is-current" : ""}`}
                                            aria-expanded={isOpen}
                                            aria-controls={submenuId}
                                            onClick={() => setOpenGroup(isOpen ? null : item.label)}
                                        >
                                            <span className="snav__link-label">{item.label}</span>
                                            <span className="snav__link-chev" aria-hidden="true"></span>
                                        </button>
                                        <ul className="snav__sub" id={submenuId} hidden={!isOpen}>
                                            {item.children.map((child) => (
                                                <li key={child.href}>
                                                    <Link
                                                        href={child.href}
                                                        className={`snav__sub-link${isActive(child.href) ? " is-current" : ""}`}
                                                        aria-current={isActive(child.href) ? "page" : undefined}
                                                        onClick={handleMobileMenu}
                                                    >
                                                        <span className="snav__sub-icon" aria-hidden="true"><i className={child.icon}></i></span>
                                                        <span className="snav__sub-label">{child.label}</span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                )
                            }
                            return (
                                <li key={item.href} className="snav__item">
                                    <Link
                                        href={item.href}
                                        className={`snav__link${isActive(item.href) ? " is-current" : ""}`}
                                        aria-current={isActive(item.href) ? "page" : undefined}
                                        onClick={handleMobileMenu}
                                    >
                                        <span className="snav__link-label">{item.label}</span>
                                        <span className="snav__link-chev" aria-hidden="true"></span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                {/* Drawer footer (tablet + phone): social links, then the header CTA */}
                <footer className="snav__foot">
                    <div className="snav__connect">
                        <p className="snav__connect-title">{HEADER_SOCIAL_TITLE}</p>
                        <div className="snav__social">
                            {HEADER_SOCIALS.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    className="snav__social-btn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                >
                                    <i className={s.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                    <Link href="/parichaya" className="snav__cta thm-btn" onClick={handleMobileMenu}>
                        {HEADER_CTA_LABEL}<span><i className="icon-arrow-right"></i></span>
                    </Link>
                </footer>
            </aside>
        </div>
    )
}

export default MobileMenu
