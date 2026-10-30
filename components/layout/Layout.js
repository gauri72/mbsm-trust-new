
'use client'
import { useEffect, useState } from "react"
// import BackToTop from '../elements/BackToTop'
import CustomCursor from '../elements/CustomCursor'
import Preloader from '../elements/Preloader'
import DataBg from "../elements/DataBg"
import Breadcrumb from './Breadcrumb'
import SearchPopup from "./SearchPopup"
import Sidebar from "./Sidebar"
import Header1 from "./header/Header1"
import Header2 from './header/Header2'
import Header3 from "./header/Header3"
import Header4 from "./header/Header4"
import Header5 from "./header/Header5"
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
import Footer3 from "./footer/Footer3"

export default function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, breadcrumbBgImage, children, wrapperCls, mantraStrip }) {
    const [scroll, setScroll] = useState(0)
    const [scrollProgress, setScrollProgress] = useState(0)
    // Mobile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu)
        !isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible")
    }

    // Popup
    const [isPopup, setPopup] = useState(false)
    const handlePopup = () => setPopup(!isPopup)

    // Sidebar
    const [isSidebar, setSidebar] = useState(false)
    const handleSidebar = () => setSidebar(!isSidebar)

    useEffect(() => {
        const WOW = require('wowjs')
        window.wow = new WOW.WOW({
            live: false
        })
        window.wow.init()

        let ticking = false
        const handleScroll = () => {
            if (ticking) return
            ticking = true
            window.requestAnimationFrame(() => {
                const scrollCheck = window.scrollY > 100
                setScroll((prev) => (prev !== scrollCheck ? scrollCheck : prev))

                const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
                const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0
                setScrollProgress(progress)

                ticking = false
            })
        }

        document.addEventListener("scroll", handleScroll, { passive: true })
        return () => document.removeEventListener("scroll", handleScroll)
    }, [])
    return (
        <>
            <Preloader />
            <CustomCursor />
            <DataBg />
            <div className={`page-wrapper ${wrapperCls ? wrapperCls : ""}`} id="#top">
                {!headerStyle && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} />}
                {headerStyle == 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}
                {headerStyle == 2 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}
                {headerStyle == 3 ? <Header3 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}
                {headerStyle == 4 ? <Header4 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}
                {headerStyle == 5 ? <Header5 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}


                <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
                <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />

                {mantraStrip}

                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} bgImage={breadcrumbBgImage} />}

                {children}

                {!footerStyle && < Footer1 />}
                {footerStyle == 1 ? < Footer1 /> : null}
                {footerStyle == 2 ? < Footer2 /> : null}
                {footerStyle == 3 ? < Footer3 /> : null}
            </div>
            {/* Scroll-to-top button hidden for now — uncomment (and its import) to restore.
            <BackToTop scroll={scroll} scrollProgress={scrollProgress} /> */}
        </>
    )
}
