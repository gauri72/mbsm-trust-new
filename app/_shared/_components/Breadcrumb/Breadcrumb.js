'use client'
import { PAGES, CHARACTERS } from "../../siteContent"
import styles from "./Breadcrumb.module.css"

/* =============================================================================
   Breadcrumb — the inner-page hero (every page except home, and the 404 page): a 16:9
   artwork shown exactly as supplied, with only the text below set on it in Annapurna SIL.

   <Breadcrumb page="parichaya" />     the artwork (exported without lettering) + the page's
       name on the scroll (its h1), its icon in the medallion and the two characters' names on
       the plates. Name and icon come from siteContent.js — the same ones the header and
       footer use.
   <Breadcrumb image="/assets/media/shared/page-header-bg.jpg" />
       any other artwork, without text (the 404 page)

   No reveal animation is applied.
   Sizes and positions: see Breadcrumb.module.css.
   ========================================================================== */

const ARTWORK = { src: "/assets/media/shared/page-hero-plain.jpg", width: 1670, height: 942 }

// where the scroll, the medallion and the two plates sit on the artwork (% of its width / height)
const LAYOUT = {
    title: { x: 50, y: 26.8 },
    icon: { x: 50, y: 66.4 },
    plates: [
        { x: 29.45, y: 82.86, character: CHARACTERS.swami },
        { x: 70.69, y: 82.86, character: CHARACTERS.datta },
    ],
}

const at = ({ x, y }) => ({ "--x": `${x}%`, "--y": `${y}%` })   // a point of the artwork, in %

export default function Breadcrumb({ page, image }) {
    const current = PAGES[page]
    const withText = Boolean(current)        // the shared artwork carries the page's text

    return (
        <section className={styles.root}>
            <div className={styles.art}>
                {/* decorative artwork: everything it says is in the text below */}
                {withText
                    ? <img src={ARTWORK.src} alt="" width={ARTWORK.width} height={ARTWORK.height} className={styles.img} />
                    : <img src={image} alt="" className={styles.img} />}

                {withText && (
                    <>
                        <div className={styles.anchor} style={at(LAYOUT.title)}>
                            <h1 className={styles.title}>{current.label}</h1>
                        </div>
                        <div className={styles.anchor} style={at(LAYOUT.icon)}>
                            <i className={`${styles.icon} ${current.icon}`} aria-hidden="true" />
                        </div>
                        {LAYOUT.plates.map((plate) => (
                            <div key={plate.character.name} className={styles.anchor} style={at(plate)}>
                                <p className={styles.plate}>{plate.character.display}</p>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </section>
    )
}
