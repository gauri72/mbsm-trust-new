'use client'
import { useRef, useState } from "react"
import { useIsomorphicLayoutEffect } from "../utils"
import styles from "./Border.module.css"

/* =============================================================================
   Border: a solid gold strip with maroon signs alternating along it — a Font Awesome Om, a
   diamond, a swastik, a diamond. It sits between the page's sections (the hero and the temple
   gallery, and so on).

   Font Awesome has no swastik, so that sign is drawn as a small SVG.

   The strip measures itself and renders only the signs that fit: Om, diamond, swastik, diamond ... Om.
   The count is always one more than a multiple of 4, so the row starts and ends with an Om and reads the
   same from both ends; the signs share the width left over evenly, so the strip is edge to edge at every
   screen width. ('use client' is needed to measure the width.)
   Colours and sizes are tokens in Border.module.css.
   ========================================================================== */

// Before the width is measured (the server's HTML, and the first client render) there is no screen
// to measure: this many signs are drawn, enough for any laptop or desktop screen; the strip clips
// the extras, and the real count replaces it as soon as the page is running.
const INITIAL_SIGNS = 65

// The Font Awesome Om, then a diamond, the swastik, a diamond — repeated along the strip.
const Om = () => <i className={`${styles.om} fas fa-om`}></i>
const Diamond = () => <span className={styles.diamond}></span>

// the swastik (right-facing), drawn on a 20 x 20 grid as one path
const Swastik = () => (
    <svg className={styles.swastik} viewBox="-10 -10 20 20">
        <path
            d="M0 -9 L0 9 M-9 0 L9 0 M0 -9 L6 -9 M9 0 L9 6 M0 9 L-6 9 M-9 0 L-9 -6"
            fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="square"
        />
    </svg>
)

const PATTERN = [Om, Diamond, Swastik, Diamond]

// How many signs fit: as many slots as the width holds, trimmed to the next count that is one more
// than a multiple of 4 (1, 5, 9, 13 ...), so the pattern is the same from both ends.
const signsThatFit = (width, slot) => {
    const slots = Math.floor(width / slot)
    return slots < 1 ? 1 : slots - ((slots - 1) % 4)
}

export default function Border() {
    const stripRef = useRef(null)
    const [count, setCount] = useState(INITIAL_SIGNS)

    useIsomorphicLayoutEffect(() => {
        const strip = stripRef.current
        const fit = () => {
            // a sign's slot is a share of the strip's height (--slot-ratio in the CSS)
            const ratio = parseFloat(getComputedStyle(strip).getPropertyValue("--slot-ratio")) || 0.75
            const slot = strip.clientHeight * ratio
            if (slot > 0) setCount(signsThatFit(strip.clientWidth, slot))
        }
        fit()
        const observer = new ResizeObserver(fit)     // the width changes with the window, the height with the breakpoints
        observer.observe(strip)
        return () => observer.disconnect()
    }, [])

    return (
        // purely decorative: hidden from screen readers
        <div ref={stripRef} className={styles.root} aria-hidden="true">
            {Array.from({ length: count }, (_, i) => {
                const Sign = PATTERN[i % PATTERN.length]
                return (
                    <span key={i} className={styles.sign}>
                        <Sign />
                    </span>
                )
            })}
        </div>
    )
}
