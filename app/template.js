'use client'
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import Mantra from "./_shared/_components/Mantra/Mantra"
import Breadcrumb from "./_shared/_components/Breadcrumb/Breadcrumb"
import Border from "./_shared/_components/Border/Border"
import Gallery from "./_shared/_components/Gallery/Gallery"
import Cta from "./_shared/_components/Cta/Cta"
import { pageKeyOf } from "./_shared/_components/siteContent"

// Browser Back / Forward restores the old scroll position; every other page change opens the page at its top.
// (A template is re-created on each page change, so these two live outside it.)
let cameBack = false
let firstPage = true

// The frame every page shares, around the page's own content:
//
//     mantra · [inner pages: breadcrumb artwork · border · gallery · border] · the page · border · closing call-to-action · closing mantra
//
// (the home page brings its own hero and gallery; the 404 page its own artwork).
// Unlike layout.js, Next.js re-creates a template on every page change, so the scroll-in animations (WOW)
// restart for each page. The header and footer live in layout.js so they stay mounted while only the page
// content changes.
export default function Template({ children }) {
    const innerPage = pageKeyOf(usePathname())

    // Track browser history navigation only while this template is mounted.
    useEffect(() => {
        const onPopState = () => { cameBack = true }
        window.addEventListener("popstate", onPopState)
        return () => window.removeEventListener("popstate", onPopState)
    }, [])

    // the shared header stays mounted, so the browser would otherwise keep the old position when a link is followed
    useEffect(() => {
        if (!firstPage && !cameBack) window.scrollTo({ top: 0, left: 0, behavior: "instant" })
        firstPage = false
        cameBack = false
    }, [])

    useEffect(() => {
        const WOW = require("wowjs")
        window.wow = new WOW.WOW({ live: false })
        window.wow.init()
    }, [])

    return (
        <>
            <Mantra />
            {innerPage && (
                <>
                    <Breadcrumb page={innerPage} />
                    <Border />
                    <Gallery />
                    <Border />
                </>
            )}
            {children}
            <Border />
            <Cta />
            <Mantra closing />
        </>
    )
}
