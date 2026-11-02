'use client'
import { useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { HEADER_TITLE, HEADER_LOGO_SRC, HEADER_CTA_LABEL, HEADER_SOCIAL_TITLE, HEADER_SOCIALS } from "@/lib/siteInfo"
import { NAV_ITEMS, isNavActive } from "@/lib/data/navItems"

const MobileMenu = ({ handleMobileMenu }) => {
    const pathname = usePathname()
    const isActive = (href) => isNavActive(pathname, href)
    // drawer has no dropdowns: a group's pages (आमचे कार्य) are listed in its place as plain links
    const drawerItems = NAV_ITEMS.flatMap((item) => item.children ?? [item])

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
                        <span className="snav__brand-medal">
                            <img
                                src={HEADER_LOGO_SRC}
                                alt=""
                                className="snav__brand-img"
                            />
                        </span>
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
                        {drawerItems.map((item) => (
                            <li key={item.href} className="snav__item">
                                <Link
                                    href={item.href}
                                    className={`snav__link${isActive(item.href) ? " is-current" : ""}`}
                                    aria-current={isActive(item.href) ? "page" : undefined}
                                    onClick={handleMobileMenu}
                                >
                                    {item.icon && <span className="snav__link-icon" aria-hidden="true"><i className={item.icon}></i></span>}
                                    <span className="snav__link-label">{item.label}</span>
                                    <span className="snav__link-chev" aria-hidden="true"></span>
                                </Link>
                            </li>
                        ))}
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
