'use client'
import { useEffect, useState } from "react"
import styles from "./Preloader.module.css"

/* =============================================================================
   Preloader: a full-screen maroon stage shown while a page loads (template.js
   renders it on every page change), then faded out.

   Designed as the rest of the site: framed by the CTA's gold Om · swastik border,
   with the header's logo medal + brand name in the middle (stacked, as in the
   menu drawer) and a 2px gold ring turning around the medal.
   Colours, sizes and spacing are tokens in Preloader.module.css.
   ========================================================================== */

// Rozha One stacks क्त into a ligature that does not read as Marathi; a zero-width
// joiner (U+200D) after क् asks for the half-क form (as in the header and footer).
const SITE_NAME_DISPLAY = "मंगल भक्‍त सेवा मंडळ"
const SITE_LOGO_SRC = "/assets/images/resources/logo.png"

const MIN_DISPLAY_MS = 500   // shown at least this long, so it never just flickers
const FADE_MS = 400          // = the fade-out in Preloader.module.css

// join class names, skipping falsy ones
const cx = (...names) => names.filter(Boolean).join(" ")

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true)
    const [isLeaving, setIsLeaving] = useState(false)

    // hide once the page has loaded (and MIN_DISPLAY_MS has passed): fade, then unmount.
    // html[data-page-ready] is set as the fade starts: the heroes start their reveal on
    // it, so the reveal is always seen (it is cleared while a new page loads)
    useEffect(() => {
        const html = document.documentElement
        html.removeAttribute("data-page-ready")
        const mountedAt = Date.now()
        let hideTimer
        let removeTimer

        const startHide = () => {
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
        }

        return () => {
            window.removeEventListener("load", startHide)
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
            {/* the CTA's Om · swastik frame: four bands + corners */}
            <div className={cx(styles.frameH, styles.frameTop)} aria-hidden="true"></div>
            <div className={cx(styles.frameH, styles.frameBottom)} aria-hidden="true"></div>
            <div className={cx(styles.frameV, styles.frameLeft)} aria-hidden="true"></div>
            <div className={cx(styles.frameV, styles.frameRight)} aria-hidden="true"></div>
            <span className={cx(styles.corner, styles.cornerTl)} aria-hidden="true"></span>
            <span className={cx(styles.corner, styles.cornerTr)} aria-hidden="true"></span>
            <span className={cx(styles.corner, styles.cornerBl)} aria-hidden="true"></span>
            <span className={cx(styles.corner, styles.cornerBr)} aria-hidden="true"></span>

            <div className={styles.inner}>
                <span className={styles.logo} aria-hidden="true">
                    <img src={SITE_LOGO_SRC} alt="" width="792" height="711" />
                </span>
                <p className={styles.name}>{SITE_NAME_DISPLAY}</p>
                <p className={styles.text} lang="en">Loading&hellip;</p>
            </div>
        </div>
    )
}
