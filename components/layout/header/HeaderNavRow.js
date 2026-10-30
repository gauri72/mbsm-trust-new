import Link from "next/link"
import Menu1 from "../Menu1"
import { HEADER_TITLE, HEADER_LOGO_SRC, HEADER_CTA_LABEL, HEADER_SOCIAL_TITLE, HEADER_SOCIALS } from "@/lib/siteInfo"

export default function HeaderNavRow({ isMobileMenu, handleMobileMenu }) {
    return (
        <div className="main-menu__wrapper-inner">
            <div className="main-menu__left">
                <div className="main-menu__logo main-menu__logo--shubharay">
                    <Link href="/" className="shubharay-logo">
                        <span className="shubharay-logo__medal">
                            <img src={HEADER_LOGO_SRC} alt={HEADER_TITLE} className="shubharay-logo__img"/>
                        </span>
                        <span className="shubharay-logo__text">
                            <span className="shubharay-logo__title">{HEADER_TITLE}</span>
                        </span>
                    </Link>
                </div>
            </div>
            <div className="main-menu__main-menu-box">
                <button
                    type="button"
                    className="mobile-nav__toggler"
                    onClick={handleMobileMenu}
                    aria-label={isMobileMenu ? "Close menu" : "Open menu"}
                    aria-expanded={!!isMobileMenu}
                    aria-controls="mobile-nav-menu"
                >
                    <i className="fa fa-bars"></i>
                </button>
                <Menu1 />
            </div>
            <div className="main-menu__right">
                <div className="main-menu__connect">
                    <p className="main-menu__connect-title">{HEADER_SOCIAL_TITLE}</p>
                    <div className="main-menu__connect-icons">
                        {HEADER_SOCIALS.map((s) => (
                            <Link key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="main-menu__connect-btn"><i className={s.icon}></i></Link>
                        ))}
                    </div>
                </div>
                <div className="main-menu__btn-box">
                    <Link href="/about" className="main-menu__btn thm-btn">{HEADER_CTA_LABEL}<span><i
                                className="icon-arrow-right"></i></span></Link>
                </div>
            </div>
        </div>
    )
}
