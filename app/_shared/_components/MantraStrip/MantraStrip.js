import styles from "./MantraStrip.module.css"

/* =============================================================================
   Mantra strip: a maroon band of verses scrolling right to left.

   <MantraStrip />          TOP_MANTRAS, under the header's gold bar (top of every page)
   <MantraStrip closing />  CLOSING_MANTRAS, above the footer's gold area (end of every page)

   Designed as the header's contact strip: maroon band between two 2px gold lines,
   medium (19px) Annapurna SIL verses in white (gold on hover), the trust's gold flower as
   the divider between verses. Colours, sizes and spacing are tokens in
   MantraStrip.module.css.
   ========================================================================== */

// ---- Verses -----------------------------------------------------------------
const TOP_MANTRAS = [
    "दिगंबरा दिगंबरा श्रीपाद वल्लभ दिगंबरा",
]

const CLOSING_MANTRAS = [
    "शिव हर शंकर नमामि शंकर शिव शंकर शंभो",
    "हे गिरिजापती भवानी शंकर शिव शंकर शंभो",
]

// ---- Seamless loop ------------------------------------------------------------
// The track holds two identical halves and scrolls by -50%, so the end of one half
// lines up exactly with the start of the other and the loop never jumps. Each half
// repeats the verses at least REPEAT_COUNT times and holds at least
// MIN_ITEMS_PER_HALF items, so it stays wider than the screen even with one verse.
const REPEAT_COUNT = 4
const MIN_ITEMS_PER_HALF = 8

// Scroll speed: a fixed pace per character, so a long verse scrolls no faster than a short one.
// (A fixed loop time would speed the strip up as the verses get longer.)
const SECONDS_PER_CHAR = 0.15

// Divider: a four-petal gold flower with a maroon centre (drawn as SVG, not a font
// icon, so it keeps its two colours). Sized in em, so it follows the text's size.
const Divider = () => (
    <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
        <ellipse cx="12" cy="7" rx="3" ry="5" />
        <ellipse cx="12" cy="17" rx="3" ry="5" />
        <ellipse cx="7" cy="12" rx="5" ry="3" />
        <ellipse cx="17" cy="12" rx="5" ry="3" />
        <circle className={styles.dot} cx="12" cy="12" r="2.4" />
    </svg>
)

export default function MantraStrip({ closing = false }) {
    const mantras = closing ? CLOSING_MANTRAS : TOP_MANTRAS
    const repeat = Math.max(REPEAT_COUNT, Math.ceil(MIN_ITEMS_PER_HALF / mantras.length))
    const items = Array(repeat * 2).fill(mantras).flat()
    const chars = repeat * mantras.join("").length
    const duration = `${Math.round(chars * SECONDS_PER_CHAR)}s`

    return (
        // screen readers get the verses once, as one label; the moving copies are hidden
        <div className={styles.root} role="img" aria-label={mantras.join(". ")} style={{ "--duration": duration }}>
            <div className={styles.marquee}>
                <div className={styles.track} aria-hidden="true">
                    {items.map((mantra, index) => (
                        // the copies are identical and never reorder, so the index is a stable key
                        <span className={styles.item} key={index}>
                            <span className={styles.text}>{mantra}</span>
                            <Divider />
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
