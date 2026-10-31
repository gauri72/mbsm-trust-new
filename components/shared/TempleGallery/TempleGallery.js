import { TEMPLE_IMAGES } from "@/lib/data/templeGallery"
import styles from "./TempleGallery.module.css"

// Infinite left-scrolling photo marquee; the list is rendered twice so the loop is seamless,
// and the second copy has empty alt text so screen readers only announce each photo once.
// `compact` shows a fixed number of square tiles across (5 desktop / 4 tablet / 3 mobile).
export default function TempleGallery({ compact = false }) {
    return (
        <section className={compact ? `${styles.root} ${styles.compact}` : styles.root}>
            <div className={styles.track}>
                {[...TEMPLE_IMAGES, ...TEMPLE_IMAGES].map((src, index) => (
                    <div className={styles.item} key={index}>
                        <img src={src} alt={index < TEMPLE_IMAGES.length ? `Shri Shubharay Maharaj Math ${index + 1}` : ""} />
                    </div>
                ))}
            </div>
        </section>
    )
}
