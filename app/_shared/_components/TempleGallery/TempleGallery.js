import styles from "./TempleGallery.module.css"

/* =============================================================================
   Temple gallery: a maroon band of square temple photos scrolling right to left
   (under the hero on every page).

   Framed on all four sides like the CTA, in reverse (gold Om · swastik on maroon;
   the side bands hide on phones, as the CTA's do); scrolls like the
   mantra strips: photos split by 2px gold dividers, edges fading out, a pause on hover.
   Across the screen: 5 photos on desktop, 4 on tablet, 3 on phones.
   Colours, sizes and spacing are tokens in TempleGallery.module.css.
   ========================================================================== */

const TEMPLE_IMAGES = [
    "/assets/images/temple/temple-1.png",
    "/assets/images/temple/temple-2.png",
    "/assets/images/temple/temple-3.png",
    "/assets/images/temple/temple-4.png",
    "/assets/images/temple/temple-5.png",
    "/assets/images/temple/temple-6.png",
]

// The track holds the photos twice and scrolls by -50%, so the end of the first
// copy lines up exactly with the start of the second and the loop never jumps.
// The second copy has empty alt text, so screen readers announce each photo once.
export default function TempleGallery() {
    return (
        <section className={styles.root}>
            {/* the side bands + corners of the Om · swastik frame (top + bottom are ::before / ::after) */}
            <div className={`${styles.frameV} ${styles.frameLeft}`} aria-hidden="true"></div>
            <div className={`${styles.frameV} ${styles.frameRight}`} aria-hidden="true"></div>
            <span className={`${styles.corner} ${styles.cornerTl}`} aria-hidden="true"></span>
            <span className={`${styles.corner} ${styles.cornerTr}`} aria-hidden="true"></span>
            <span className={`${styles.corner} ${styles.cornerBl}`} aria-hidden="true"></span>
            <span className={`${styles.corner} ${styles.cornerBr}`} aria-hidden="true"></span>
            <div className={styles.marquee}>
                <div className={styles.track}>
                    {[...TEMPLE_IMAGES, ...TEMPLE_IMAGES].map((src, index) => (
                        // the copies never reorder, so the index is a stable key
                        <div className={styles.item} key={index}>
                            <img
                                src={src}
                                alt={index < TEMPLE_IMAGES.length ? `Shri Shubharay Maharaj Math ${index + 1}` : ""}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
