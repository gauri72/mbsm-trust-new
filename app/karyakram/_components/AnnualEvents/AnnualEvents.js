'use client'
import { useEffect, useRef, useState } from "react"
import { SectionHead } from "../../../_shared/_components/Field/Field"
import field from "../../../_shared/_components/Field/Field.module.css"
import { cx, useReducedMotion } from "../../../_shared/_components/utils"
import styles from "./AnnualEvents.module.css"

/* =============================================================================
   Karyakram: the festivals the math celebrates every year, as a carousel on the maroon field: the whole poster of
   the festival (nothing cut off) in a thick gold border with a black gap inside it, and its title on a nameplate in the same make (gold border, black
   gap, gold plate) with a round medallion (a Font Awesome icon) on its top edge, half over the poster's lower edge. All cards are the same size, side by side: the one in focus in the middle with the previous and the next one
   on either side; every step moves them all along, round and round.
   It moves on by itself every 5 seconds (not while a mouse pointer or the keyboard focus is on it: a touch or a click does not hold it, and not at all if the visitor
   asks for reduced motion), and has an arrow at each side on a desktop (a pair below the cards on a tablet and a phone). 'use client' is needed for that.
   Styles: AnnualEvents.module.css.

   Four more festivals have posters but are not shown yet (add them to FESTIVALS to show them):
     event-4.webp  श्री गुरुपौर्णिमा उत्सव
     event-5.webp  श्री जनू काका जयंती आणि पुण्यतिथी
     event-6.webp  श्री मधू बुवा जयंती आणि पुण्यतिथी
     event-7.webp  श्री शुभांगी माई वाढदिवस
   ========================================================================== */

const FESTIVALS = [
    { img: "/assets/media/karyakram/annual-swami.webp", title: "श्री विश्‍वेश्‍वर स्वामी महाराज जन्मदिन आणि गुरुपौर्णिमा", icon: "praying-hands" },
    { img: "/assets/media/karyakram/annual-shankar.webp", title: "श्री शंकर महाराज प्रकट दिन आणि समाधी सोहळा", icon: "om" },
    { img: "/assets/media/karyakram/annual-datta.webp", title: "श्री दत्त प्रभू जयंती", icon: "spa" },
]

const INTERVAL = 5000   // ms between slides

// where a card stands, relative to the one in focus: in the middle, just before it (left), just after it (right),
// or out of sight (only with more than three cards)
function placeOf(index, active, count) {
    const offset = (index - active + count) % count
    return offset === 0 ? "center" : offset === 1 ? "right" : offset === count - 1 ? "left" : "hidden"
}

// a card that goes from the left side to the right (or back) has to cross the others: it jumps there unseen instead of sliding
function isJump(index, from, to, count) {
    const a = placeOf(index, from, count)
    const b = placeOf(index, to, count)
    return (a === "left" && b === "right") || (a === "right" && b === "left")
}

export default function AnnualEvents() {
    const [active, setActive] = useState(1)   // the second festival (shankar) opens in the middle: swami on its left, datta on its right
    const [paused, setPaused] = useState(false)
    const reduced = useReducedMotion()
    const before = useRef(active)         // the slide shown before this one (to tell which card jumps from one side to the other)
    useEffect(() => { before.current = active }, [active])
    const last = FESTIVALS.length - 1

    const go = (index) => setActive(index < 0 ? last : index > last ? 0 : index)

    // advance every 5 seconds; the timer restarts whenever the slide changes (an arrow, a dot or the timer itself)
    useEffect(() => {
        if (paused || reduced) return
        const timer = setTimeout(() => setActive((i) => (i === last ? 0 : i + 1)), INTERVAL)
        return () => clearTimeout(timer)
    }, [active, paused, reduced, last])

    return (
        <section className={`${field.field} ${styles.annual}`}>
            <div className="container">
                <SectionHead label="वार्षिक उत्सव" title="सेवा, भक्‍ती आणि आनंदाचे क्षण" />

                <div
                    className={cx(styles.carousel, "wow fadeInUp")}
                    data-wow-delay="100ms"
                    role="region"
                    aria-roledescription="carousel"
                    aria-label="वार्षिक उत्सव"
                    onPointerEnter={(e) => e.pointerType === "mouse" && setPaused(true)}
                    onPointerLeave={(e) => e.pointerType === "mouse" && setPaused(false)}
                    onFocus={(e) => e.target.matches(":focus-visible") && setPaused(true)}
                    onBlur={() => setPaused(false)}
                >
                    {/* the frame holds the stage and the two arrows, one at each side. In the stage every card sits in the same
                        place; its place (centre, left, right) moves it aside */}
                    <div className={styles.frame}>
                        <div className={styles.stage}>
                            {FESTIVALS.map((festival, index) => (
                                <article
                                    key={festival.title}
                                    className={styles.card}
                                    data-place={placeOf(index, active, FESTIVALS.length)}
                                    data-jump={isJump(index, before.current, active, FESTIVALS.length)}
                                    role="group"
                                    aria-roledescription="slide"
                                    aria-label={`${index + 1} / ${FESTIVALS.length}`}
                                    aria-hidden={index !== active}
                                >
                                    {/* the poster carries the festival's own lettering; the title below says it in text */}
                                    <div className={styles.posterBox}>
                                        <img className={styles.poster} src={festival.img} alt="" width="942" height="1670" loading="lazy" />
                                    </div>
                                    <h3 className={styles.title} lang="mr">
                                        {/* the medallion: sits on the nameplate's top edge */}
                                        <span className={styles.medal} aria-hidden="true"><i className={`fas fa-${festival.icon}`}></i></span>
                                        <span className={styles.plate}>{festival.title}</span>
                                    </h3>
                                </article>
                            ))}
                        </div>
                        <button type="button" className={cx(styles.arrow, styles.arrowPrev)} onClick={() => go(active - 1)} aria-label="मागील उत्सव">
                            {/* the site's trimmed icon font has no left arrow: the right arrow, mirrored in the CSS */}
                            <i className={cx("fas fa-arrow-right", styles.flip)} aria-hidden="true"></i>
                        </button>
                        <button type="button" className={cx(styles.arrow, styles.arrowNext)} onClick={() => go(active + 1)} aria-label="पुढील उत्सव">
                            <i className="fas fa-arrow-right" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
