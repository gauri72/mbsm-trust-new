'use client'
import { useEffect, useState } from "react"

// true once the preloader has started to fade (html[data-page-ready], set by Preloader.js;
// cleared while a new page loads) — for things that must wait for the page to be shown
export default function usePageReady() {
    const [ready, setReady] = useState(false)

    useEffect(() => {
        const html = document.documentElement
        if (html.hasAttribute("data-page-ready")) {
            setReady(true)
            return
        }
        const observer = new MutationObserver(() => {
            if (html.hasAttribute("data-page-ready")) {
                observer.disconnect()
                setReady(true)
            }
        })
        observer.observe(html, { attributes: true, attributeFilter: ["data-page-ready"] })
        return () => observer.disconnect()
    }, [])

    return ready
}
