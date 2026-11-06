import styles from "./TempleGallery.module.css"

/* =============================================================================
   Temple gallery: a maroon band of square temple photos scrolling right to left
   (under the hero on every page).

   Scrolls like the mantra strips: photos split by 2px gold dividers, a pause on hover.
   Across the screen: 5 photos on desktop, 4 on tablet, 3 on phones.
   Colours, sizes and spacing are tokens in TempleGallery.module.css.
   ========================================================================== */

const TEMPLE_IMAGES = [
    "/assets/media/shared/temple-1.webp",
    "/assets/media/shared/temple-2.webp",
    "/assets/media/shared/temple-3.webp",
    "/assets/media/shared/temple-4.webp",
    "/assets/media/shared/temple-5.webp",
    "/assets/media/shared/temple-6.webp",
]

// The track holds the photos twice and scrolls by -50%, so the end of the first
// copy lines up exactly with the start of the second and the loop never jumps.
// The second copy has empty alt text, so screen readers announce each photo once.
export default function TempleGallery() {
    return (
        <section className={styles.root}>
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
