'use client'
import { useEffect, useState } from "react"
import styles from "./Preloader.module.css"

/* =============================================================================
   Preloader: a full-screen maroon stage shown while a page loads (template.js
   renders it on every page change), then faded out.

   Designed as the rest of the site: the header's logo medal + brand name in the
   middle (stacked, as in the menu drawer) and a 2px gold ring turning around the
   medal, on a plain maroon stage.
   Colours, sizes and spacing are tokens in Preloader.module.css.

   It is shown for at least MIN_DISPLAY_MS, until the page has loaded, and for at most
   MAX_WAIT_MS — a slow image or a stalled request can never keep visitors out.
   ========================================================================== */

// The title font can stack क्त into a ligature that does not read as Marathi; a zero-width
// joiner (U+200D) after क् asks for the half-क form (as in the header and footer).
const SITE_NAME_DISPLAY = "मंगल भक्‍त सेवा मंडळ"
const SITE_LOGO_SRC = "/assets/media/shared/logo.png"

const MIN_DISPLAY_MS = 500   // shown at least this long, so it never just flickers
const MAX_WAIT_MS = 6000     // ...and at most this long, however slowly the page loads
const FADE_MS = 400          // = the fade-out in Preloader.module.css

// join class names, skipping falsy ones
const cx = (...names) => names.filter(Boolean).join(" ")

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true)
    const [isLeaving, setIsLeaving] = useState(false)

    // hide once the page has loaded (and MIN_DISPLAY_MS has passed, or MAX_WAIT_MS at the latest):
    // fade, then unmount. html[data-page-ready] is set as the fade starts, for anything that
    // must wait until the page is shown (it is cleared while a new page loads)
    useEffect(() => {
        const html = document.documentElement
        html.removeAttribute("data-page-ready")
        const mountedAt = Date.now()
        let hideTimer
        let removeTimer
        let maxTimer
        let started = false

        const startHide = () => {
            if (started) return           // whichever of "loaded" and "waited too long" comes first
            started = true
            clearTimeout(maxTimer)
            const remaining = Math.max(MIN_DISPLAY_MS - (Date.now() - mountedAt), 0)
            hideTimer = setTimeout(() => {
                html.setAttribute("data-page-ready", "")
                setIsLeaving(true)
                removeTimer = setTimeout(() => setIsLoading(false), FADE_MS)
            }, remaining)
        }

        if (document.readyState === "complete") {
            startHide()
        } else {
            window.addEventListener("load", startHide)
            maxTimer = setTimeout(startHide, MAX_WAIT_MS)
        }

        return () => {
            window.removeEventListener("load", startHide)
            clearTimeout(maxTimer)
            clearTimeout(hideTimer)
            clearTimeout(removeTimer)
        }
    }, [])

    // the page behind must not scroll while the preloader covers it
    useEffect(() => {
        if (!isLoading) return
        const original = document.body.style.overflow
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = original
        }
    }, [isLoading])

    if (!isLoading) return null

    return (
        // role="status": screen readers announce "Loading…" once, politely
        <div className={cx(styles.preloader, isLeaving && styles.isLeaving)} role="status">
            <div className={styles.inner}>
                <span className={styles.logo} aria-hidden="true">
                    <img src={SITE_LOGO_SRC} alt="" width="400" height="359" />
                </span>
                <p className={styles.name}>{SITE_NAME_DISPLAY}</p>
                <p className={styles.text} lang="en">Loading&hellip;</p>
            </div>
        </div>
    )
}
