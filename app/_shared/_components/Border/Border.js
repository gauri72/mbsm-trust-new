import styles from "./Border.module.css"

/* =============================================================================
   Border: a solid gold strip with maroon signs alternating along it — a Font Awesome Om, a
   diamond, a swastik, a diamond. It sits between the hero and the temple gallery on every page.

   Font Awesome has no swastik, so that sign is drawn as a small SVG.
   The signs are laid out in a row that wraps: only whole signs fit on the strip, centred, and
   the rest wrap out of sight, so the strip is even at every screen width.
   Colours and sizes are tokens in Border.module.css.
   ========================================================================== */

// one repeat = four signs; enough repeats to fill the widest screens (the extra ones are clipped)
const REPEATS = 36

// the swastik (right-facing), drawn on a 20 x 20 grid
const Swastik = () => (
    <svg className={styles.swastik} viewBox="-10 -10 20 20" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="square">
            <path d="M0 -9 L0 9 M-9 0 L9 0" />
            <path d="M0 -9 L6 -9" />
            <path d="M9 0 L9 6" />
            <path d="M0 9 L-6 9" />
            <path d="M-9 0 L-9 -6" />
        </g>
    </svg>
)

export default function Border() {
    return (
        <div className={styles.root} role="presentation">
            {Array.from({ length: REPEATS }, (_, i) => (
                <div key={i} className={styles.repeat} aria-hidden="true">
                    <span className={styles.sign}><i className={`${styles.om} fas fa-om`}></i></span>
                    <span className={styles.sign}><span className={styles.diamond}></span></span>
                    <span className={styles.sign}><Swastik /></span>
                    <span className={styles.sign}><span className={styles.diamond}></span></span>
                </div>
            ))}
        </div>
    )
}
