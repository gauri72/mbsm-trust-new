import { TOP_MANTRAS } from "@/lib/data/mantras"
import styles from "./MantraStrip.module.css"

// Each half of the track repeats the mantras at least this many times, and enough
// to hold MIN_ITEMS_PER_HALF items so a half stays wider than the screen even with
// a single mantra. The track holds two identical halves so the -50% scroll loops
// without a visible jump.
const REPEAT_COUNT = 4
const MIN_ITEMS_PER_HALF = 8

const Divider = () => (
    <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
        <ellipse cx="12" cy="7" rx="3" ry="5" />
        <ellipse cx="12" cy="17" rx="3" ry="5" />
        <ellipse cx="7" cy="12" rx="5" ry="3" />
        <ellipse cx="17" cy="12" rx="5" ry="3" />
        <circle className={styles.dot} cx="12" cy="12" r="2.4" />
    </svg>
)

export default function MantraStrip({ mantras = TOP_MANTRAS }) {
    const repeat = Math.max(REPEAT_COUNT, Math.ceil(MIN_ITEMS_PER_HALF / mantras.length))
    const items = Array(repeat * 2).fill(mantras).flat()

    return (
        <div className={styles.root} role="img" aria-label={mantras.join(' । ')}>
            <div className={styles.marquee}>
                <div className={styles.track} aria-hidden="true">
                    {items.map((mantra, index) => (
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
