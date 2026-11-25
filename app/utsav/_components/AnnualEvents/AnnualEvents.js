'use client'
import { useCallback, useEffect, useRef, useState } from "react"
import { SectionHead } from "../../../_shared/_components/Field/Field"
import field from "../../../_shared/_components/Field/Field.module.css"
import { cx, toMarathiDigits, useReducedMotion } from "../../../_shared/_components/utils"
import styles from "./AnnualEvents.module.css"

/* =============================================================================
   Utsav: the festivals the math celebrates every year, as a carousel on the maroon field: the whole poster of
   the festival (nothing cut off) in a thick gold border with a maroon gap inside it, and its title on a nameplate in the same make (gold border, maroon
   gap, gold plate) with a round medallion (a Font Awesome icon) on its top edge, half over the poster's lower edge. The cards stand side by side: the one in focus in the middle with the previous and the next one, a little smaller,
   on either side; every step moves them all along, round and round.
   It moves on by itself every 5 seconds (not while a mouse pointer or the keyboard focus is on it: a touch or a click does not hold it, and not at all if the visitor
   asks for reduced motion), and has an arrow at each side on a desktop (a pair below the cards on a tablet and a phone, where a swipe works too; a click on a neighbour brings it to the middle). 'use client' is needed for that.
   Styles: AnnualEvents.module.css.
   ========================================================================== */

const FESTIVALS = [
    { img: "/assets/media/utsav/annual-swami-v2.webp", title: "श्री विश्‍वेश्‍वर स्वामी महाराज जन्मदिन आणि गुरुपौर्णिमा", icon: "praying-hands" },
    { img: "/assets/media/utsav/annual-shankar.webp", title: "श्री शंकर महाराज प्रकट दिन आणि समाधी सोहळा", icon: "om" },
    { img: "/assets/media/utsav/annual-datta.webp", title: "श्री दत्त प्रभू जयंती", icon: "spa" },
]

const INTERVAL = 5000   // ms between slides
const SWIPE = 40        // px a finger moves sideways to change the card

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
    // the slide in the middle, and the one that was there before it (to tell which card jumps from one side to the other)
    const [{ active, before }, setPosition] = useState({ active: 1, before: 1 })   // the second festival (shankar) opens in the middle: swami on its left, datta on its right
    // three separate reasons to hold the slides still: a mouse over the carousel, the keyboard focus in it, the visitor's own stop button
    const [hovered, setHovered] = useState(false)
    const [focused, setFocused] = useState(false)
    const [stopped, setStopped] = useState(false)
    const reduced = useReducedMotion()
    const last = FESTIVALS.length - 1
    const playing = !(hovered || focused || stopped || reduced)

    const show = useCallback((next) => setPosition((p) => ({ active: next < 0 ? last : next > last ? 0 : next, before: p.active })), [last])

    // a swipe: to the left shows the next card, to the right the previous one
    const touch = useRef(null)
    const onTouchStart = ({ touches }) => {
        touch.current = touches.length === 1 ? { x: touches[0].clientX, y: touches[0].clientY } : null
    }
    const onTouchEnd = ({ changedTouches }) => {
        if (!touch.current) return
        const x = changedTouches[0].clientX - touch.current.x
        const y = changedTouches[0].clientY - touch.current.y
        touch.current = null
        if (Math.abs(x) > SWIPE && Math.abs(x) > Math.abs(y)) show(x < 0 ? active + 1 : active - 1)
    }

    // advance every 5 seconds; the timer restarts whenever the slide changes (an arrow or the timer itself)
    useEffect(() => {
        if (!playing) return
        const timer = setTimeout(() => show(active + 1), INTERVAL)
        return () => clearTimeout(timer)
    }, [active, playing, show])

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
                    onPointerEnter={(e) => e.pointerType === "mouse" && setHovered(true)}
                    onPointerLeave={(e) => e.pointerType === "mouse" && setHovered(false)}
                    onFocus={(e) => e.target.matches(":focus-visible") && setFocused(true)}
                    onBlur={() => setFocused(false)}
                >
                    {/* the visitor's own stop button (it appears when Tab reaches it), as on the home slideshow */}
                    {!reduced && (
                        <button type="button" className="pause-btn" aria-pressed={stopped} onClick={() => setStopped((s) => !s)}>
                            स्लाइडशो थांबवा
                        </button>
                    )}
                    {/* the frame holds the stage and the two arrows, one at each side. In the stage every card sits in the same
                        place; its place (centre, left, right) moves it aside */}
                    <div className={styles.frame}>
                        <div className={styles.stage} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                            {FESTIVALS.map((festival, index) => (
                                <article
                                    key={festival.title}
                                    className={styles.card}
                                    data-place={placeOf(index, active, FESTIVALS.length)}
                                    data-jump={isJump(index, before, active, FESTIVALS.length)}
                                    role="group"
                                    aria-roledescription="slide"
                                    aria-label={`${index + 1} / ${FESTIVALS.length}`}
                                    aria-hidden={index !== active}
                                    onClick={index === active ? undefined : () => show(index)}
                                >
                                    {/* the poster carries the festival's own lettering; the title below says it in text */}
                                    <div className={styles.posterBox}>
                                        <img className={styles.poster} src={festival.img} alt="" width="800" height="1421" />
                                    </div>
                                    <h3 className={styles.title} lang="mr">
                                        {/* the medallion: sits on the nameplate's top edge */}
                                        <span className={styles.medal} aria-hidden="true"><i className={`fas fa-${festival.icon}`}></i></span>
                                        <span className={styles.plate}>{festival.title}</span>
                                    </h3>
                                </article>
                            ))}
                        </div>
                        <button type="button" className={cx(styles.arrow, styles.arrowPrev)} onClick={() => show(active - 1)} aria-label="मागील उत्सव">
                            {/* the site's trimmed icon font has no left arrow: the right arrow, mirrored in the CSS */}
                            <i className={cx("fas fa-arrow-right", styles.flip)} aria-hidden="true"></i>
                        </button>
                        <p className={styles.counter} lang="mr">{toMarathiDigits(active + 1)} / {toMarathiDigits(FESTIVALS.length)}</p>
                        <button type="button" className={cx(styles.arrow, styles.arrowNext)} onClick={() => show(active + 1)} aria-label="पुढील उत्सव">
                            <i className="fas fa-arrow-right" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
