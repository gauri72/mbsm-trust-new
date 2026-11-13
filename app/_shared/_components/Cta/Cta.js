'use client'
import { useEffect, useLayoutEffect, useRef } from "react"
import Link from "next/link"
import AlphaLoopVideo from "./AlphaLoopVideo/AlphaLoopVideo"
import { PAGES, CTA, SITE_NAME_DISPLAY, SITE_TAGLINE } from "../siteContent"
import styles from "./Cta.module.css"

/* =============================================================================
   Closing call-to-action (just above the closing mantra on every page).

   A maroon wash over a photo, with an elephant walking in from each side. Content, centred:
     label       large Annapurna SIL, gold
     heading     medium Annapurna SIL, white
     description small Annapurna SIL, white
     buttons     medium Annapurna SIL (58px pills like every home button) — gold + white, both as
                 wide as the wider label, lifting on hover

   Colours, sizes and spacing are tokens in Cta.module.css (shared ones: globals.css).

   'use client' is needed to measure the buttons: the elephants stop a set distance short of them, so
   the section is told the buttons' real width (--buttons-half), whatever their labels or padding are.
   ========================================================================== */

// ---- Content -------------------------------------------------------------------
// the trust's name, with the half-क fix (shared with the header and footer: siteContent.js)
const LABEL = SITE_NAME_DISPLAY

// the tagline in its two lines ("जिथे कमी," / "तिथे कुवतीनुसार आम्ही"): the heading breaks after the comma
const [TAGLINE_FIRST, TAGLINE_SECOND] = SITE_TAGLINE.split(", ")

// Names from siteContent.js: the gold button is the header's CTA, the white one the Sampark page
const BUTTONS = [
    { ...CTA, variant: "primary" },
    { href: PAGES.sampark.href, label: PAGES.sampark.label, variant: "secondary" },
]

const ELEPHANT = {
    src: "/assets/media/shared/elephant-loop.mov",
    webmSrc: "/assets/media/shared/elephant-loop.webm",
}

// join class names, skipping falsy ones
const cx = (...names) => names.filter(Boolean).join(" ")

// useLayoutEffect measures before the browser paints; on the server it does nothing (and warns), so use useEffect there
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect

export default function Cta() {
    const sectionRef = useRef(null)
    const buttonsRef = useRef(null)

    // tell the CSS how wide the buttons really are (half of it: from the centre to the first button's edge)
    useIsomorphicLayoutEffect(() => {
        const section = sectionRef.current
        const buttons = buttonsRef.current
        const measure = () => section.style.setProperty("--buttons-half", `${buttons.offsetWidth / 2}px`)
        measure()
        const observer = new ResizeObserver(measure)   // the buttons change width at the breakpoints (side by side / stacked)
        observer.observe(buttons)
        return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef} className={styles.cta}>
            {/* decoration: the two elephants */}
            <AlphaLoopVideo {...ELEPHANT} className={cx(styles.elephant, styles.elephantLeft)} />
            <AlphaLoopVideo {...ELEPHANT} className={cx(styles.elephant, styles.elephantRight)} />

            {/* content ("wow fadeInUp": the site's scroll-in animation, started in template.js) */}
            <div className="container">
                <div className={styles.inner}>
                    <div className="wow fadeInUp" data-wow-delay="100ms">
                        <p className={styles.label}>{LABEL}</p>
                        <h2 className={styles.heading}>{TAGLINE_FIRST}, <br />{TAGLINE_SECOND}</h2>
                        {/* line breaks: the second one only below 1200px, where the line gets too long */}
                        <p className={styles.text}>
                            आपण ज्या समाजात राहतो, <br className={styles.brCompact} />त्या समाजाचे आपण काही देणे लागतो; <br />
                            याच कर्तव्यभावनेतून आम्ही समाजासाठी कार्य करतो.
                        </p>
                    </div>
                    <div ref={buttonsRef} className={cx(styles.buttons, "wow fadeInUp")} data-wow-delay="200ms">
                        {BUTTONS.map((b) => (
                            <Link key={b.href} href={b.href} className={cx(styles.btn, styles[b.variant])}>
                                <span>{b.label}</span>
                                <i className={cx(styles.icon, "fas fa-arrow-right")} aria-hidden="true"></i>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
