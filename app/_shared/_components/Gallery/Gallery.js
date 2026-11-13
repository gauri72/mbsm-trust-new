'use client'
import { useEffect, useState } from "react"
import styles from "./Gallery.module.css"

/* =============================================================================
   Gallery: a maroon band of square temple photos scrolling right to left
   (under the hero on every page).

   Scrolls like the mantra: photos split by 2px gold dividers. It can be paused: hover (mouse), a tap or click
   on the band, or the "स्क्रोलिंग थांबवा" button that appears when Tab reaches it (keyboard, screen readers).
   Across the screen: 5 photos on desktop, 4 on tablet, 3 on phones.
   Colours, sizes and spacing are tokens in Gallery.module.css. ('use client' is needed for the pause state.)
   ========================================================================== */

// The photos, with what each shows (alt text, in Marathi like the rest of the page).
// The loop below is only seamless while there are at least as many photos as show across the screen
// (--per-view in the CSS: 5 at most), so keep six or more.
const TEMPLE_IMAGES = [
    { src: "/assets/media/shared/temple-1.webp", alt: "फुलांच्या हाराने सजवलेले मंदिर" },
    { src: "/assets/media/shared/temple-2.webp", alt: "निळ्या वस्त्रात आणि फेट्यात फुलांच्या हारातील संतांची मूर्ती" },
    { src: "/assets/media/shared/temple-3.webp", alt: "तीन मुखी श्री दत्तात्रेयांची मूर्ती, गळ्यात फुलांचा हार" },
    { src: "/assets/media/shared/temple-4.webp", alt: "काळ्या फेट्यातील स्वामींची प्रतिमा, गळ्यात फुलांचा हार" },
    { src: "/assets/media/shared/temple-5.webp", alt: "लाल वस्त्रातील देवीची मूर्ती, फुलांच्या हारासह" },
    { src: "/assets/media/shared/temple-6.webp", alt: "काळ्या पाषाणातील मारुतीची मूर्ती, फुलांच्या हारासह" },
]

// join class names, skipping falsy ones
const cx = (...names) => names.filter(Boolean).join(" ")

// The track holds the photos twice and scrolls by -50%, so the end of the first
// copy lines up exactly with the start of the second and the loop never jumps.
// The second copy has empty alt text, so screen readers announce each photo once.
export default function Gallery() {
    const [paused, setPaused] = useState(false)
    // reduced motion: the CSS shows the photos standing still, so there is nothing to pause (and no button to offer)
    const [still, setStill] = useState(false)
    useEffect(() => {
        const query = window.matchMedia("(prefers-reduced-motion: reduce)")
        const update = () => setStill(query.matches)
        update()
        query.addEventListener("change", update)
        return () => query.removeEventListener("change", update)
    }, [])

    const toggle = () => setPaused((p) => !p)

    return (
        <section className={cx(styles.root, paused && styles.paused)}>
            {/* the keyboard / screen reader way to stop the scroll: hidden until it has focus */}
            {!still && (
                <button type="button" className={styles.pause} aria-pressed={paused} onClick={toggle}>
                    स्क्रोलिंग थांबवा
                </button>
            )}
            <div className={styles.marquee} onClick={still ? undefined : toggle}>
                <div className={styles.track}>
                    {[...TEMPLE_IMAGES, ...TEMPLE_IMAGES].map((image, index) => (
                        // the copies never reorder, so the index is a stable key
                        <div className={styles.item} key={index}>
                            <img
                                src={image.src}
                                alt={index < TEMPLE_IMAGES.length ? image.alt : ""}
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
