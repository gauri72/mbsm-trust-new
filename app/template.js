'use client'
import { useEffect } from "react"

// Wraps each page's content. Unlike layout.js, Next.js re-creates a template on
// every page change, so the scroll-in animations (WOW) restart for each page. The header and footer live in layout.js
// so they stay mounted while only the page content changes.
export default function Template({ children }) {
    useEffect(() => {
        const WOW = require("wowjs")
        window.wow = new WOW.WOW({ live: false })
        window.wow.init()
    }, [])

    return (
        <>
            {children}
        </>
    )
}
