import Link from "next/link"
import AlphaLoopVideo from "./AlphaLoopVideo/AlphaLoopVideo"
import { PAGES, CTA } from "../../siteContent"
import styles from "./Cta.module.css"

/* =============================================================================
   Closing call-to-action (just above the closing mantra strip on every page).

   A flat maroon section,
   with an elephant walking in from each side. Content, centred:
     label       medium (19px) Annapurna SIL, gold
     heading     large Annapurna SIL, white
     description small Annapurna SIL, white
     buttons     medium Annapurna SIL (the header CTA's button) — gold + white pill, both as
                 wide as the wider label, lifting on hover

   Colours, sizes and spacing are tokens in Cta.module.css (the header's values).
   ========================================================================== */

// ---- Content -------------------------------------------------------------------
// The title font can stack क्त into a ligature that does not read as Marathi; a zero-width
// joiner (U+200D) after क् asks for the half-क form (as in the header and footer).
const LABEL = "मंगल भक्‍त सेवा मंडळ"

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

export default function Cta() {
    return (
        <section className={styles.cta}>
            {/* decoration: the two elephants */}
            <AlphaLoopVideo {...ELEPHANT} className={cx(styles.elephant, styles.elephantLeft)} />
            <AlphaLoopVideo {...ELEPHANT} className={cx(styles.elephant, styles.elephantRight)} />

            {/* content ("wow fadeInUp": the site's scroll-in animation, started in template.js) */}
            <div className="container">
                <div className={styles.inner}>
                    <div className="wow fadeInUp" data-wow-delay="100ms">
                        <p className={styles.label}>{LABEL}</p>
                        <h2 className={styles.heading}>जिथे कमी, <br />तिथे कुवतीनुसार आम्ही</h2>
                        {/* line breaks: the second one only below 1200px, where the line gets too long */}
                        <p className={styles.text}>
                            आपण ज्या समाजात राहतो, <br className={styles.brCompact} />त्या समाजाचे आपण काही देणे लागतो; <br />
                            याच कर्तव्यभावनेतून आम्ही समाजासाठी कार्य करतो.
                        </p>
                    </div>
                    <div className={cx(styles.buttons, "wow fadeInUp")} data-wow-delay="200ms">
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
