import Link from "next/link"
import AlphaLoopVideo from "./AlphaLoopVideo/AlphaLoopVideo"
import styles from "./Cta.module.css"

/* =============================================================================
   Closing call-to-action (just above the closing mantra strip on every page).

   A maroon section with a faint photo, framed by the gold Om/swastik border,
   with an elephant walking in from each side. Content, centred:
     label       medium (19px) Rozha, gold
     heading     large Rozha, white
     description small Tiro, white
     buttons     medium Rozha (the header CTA's button) — gold + white pill, lifting on hover

   Colours, sizes and spacing are tokens in Cta.module.css (the header's values).
   ========================================================================== */

// ---- Content -------------------------------------------------------------------
// Rozha One stacks क्त into a ligature that does not read as Marathi; a zero-width
// joiner (U+200D) after क् asks for the half-क form (as in the header and footer).
const LABEL = "मंगल भक्‍त सेवा मंडळ"

const BUTTONS = [
    { href: "/parichaya", label: "आमच्याविषयी", variant: "primary" },
    { href: "/sampark", label: "संपर्क साधा", variant: "secondary" },
]

const ELEPHANT = {
    src: "/assets/images/resources/elephant-loop.mov",
    webmSrc: "/assets/images/resources/elephant-loop.webm",
}

const BG_IMAGE = "/assets/images/backgrounds/cta-one-bg.jpg"

// join class names, skipping falsy ones
const cx = (...names) => names.filter(Boolean).join(" ")

export default function Cta() {
    return (
        <section className={styles.cta}>
            {/* decoration: photo, the four frame sides + corners, the two elephants */}
            <div className={styles.bg} style={{ backgroundImage: `url(${BG_IMAGE})` }} aria-hidden="true"></div>
            <div className={cx(styles.frameH, styles.frameTop)} aria-hidden="true"></div>
            <div className={cx(styles.frameH, styles.frameBottom)} aria-hidden="true"></div>
            <div className={cx(styles.frameV, styles.frameLeft)} aria-hidden="true"></div>
            <div className={cx(styles.frameV, styles.frameRight)} aria-hidden="true"></div>
            <span className={cx(styles.corner, styles.cornerTl)} aria-hidden="true"></span>
            <span className={cx(styles.corner, styles.cornerTr)} aria-hidden="true"></span>
            <span className={cx(styles.corner, styles.cornerBl)} aria-hidden="true"></span>
            <span className={cx(styles.corner, styles.cornerBr)} aria-hidden="true"></span>
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
