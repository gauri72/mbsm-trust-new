import HeaderNavRow from "./HeaderNavRow"
import HeaderTopbar from "./HeaderTopbar"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>

        <header className="main-header">
            <HeaderTopbar />
            <div className="divine-border" role="presentation"></div>
            <nav className="main-menu" aria-label="Primary">
                <div className="main-menu__wrapper">
                    <div className="container">
                        <HeaderNavRow isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
                    </div>
                </div>
            </nav>
        </header>

        <div className={`stricky-header stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`}>
            <div className="divine-border" role="presentation"></div>
            <div className="sticky-header__content">
                <nav className="main-menu" aria-label="Primary (sticky)">
                    <div className="main-menu__wrapper">
                        <div className="container">
                            <HeaderNavRow isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
                        </div>
                    </div>
                </nav>
            </div>{/*.sticky-header__content */}
        </div>{/*.stricky-header */}
        <MobileMenu handleMobileMenu={handleMobileMenu} />

        </>
    )
}
