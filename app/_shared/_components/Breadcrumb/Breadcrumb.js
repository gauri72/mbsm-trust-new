'use client'
import { PAGES, CHARACTERS } from "../siteContent"
import styles from "./Breadcrumb.module.css"

/* =============================================================================
   Breadcrumb — the inner-page hero (every page except home, and the 404 page): a 16:9
   artwork shown exactly as supplied, with the page's name and icon set on it in Annapurna SIL.

   <Breadcrumb page="parichaya" />     the artwork (the two characters' names are part of the picture)
       + the page's name on the scroll (its h1) and its icon in the medallion. Name and icon come from
       siteContent.js — the same ones the header and footer use.
   <Breadcrumb image="/assets/media/shared/page-header-bg.webp" />
       any other artwork, without text (the 404 page)

   No reveal animation is applied.
   Sizes and positions: see Breadcrumb.module.css.
   ========================================================================== */

const ARTWORK = { src: "/assets/media/shared/page-hero-plain.webp", width: 1670, height: 942 }

// where the scroll and the medallion sit on the artwork (% of its width / height)
const LAYOUT = {
    title: { x: 50, y: 26.8 },
    icon: { x: 50, y: 66.4 },
}

// the artwork shows both characters; it is described once here, for screen readers
const ARTWORK_ALT = `${CHARACTERS.swami.name} · ${CHARACTERS.datta.name}`

const at = ({ x, y }) => ({ "--x": `${x}%`, "--y": `${y}%` })   // a point of the artwork, in %

export default function Breadcrumb({ page, image }) {
    const current = PAGES[page]
    const withText = Boolean(current)        // the shared artwork carries the page's text

    return (
        <section className={styles.root}>
            <div className={styles.art}>
                {/* the artwork names its two characters; the page's own name is the h1 below */}
                {withText
                    ? <img src={ARTWORK.src} alt={ARTWORK_ALT} width={ARTWORK.width} height={ARTWORK.height} className={styles.img} />
                    : <img src={image} alt="" className={styles.img} />}

                {withText && (
                    <>
                        <div className={styles.anchor} style={at(LAYOUT.title)}>
                            <h1 className={styles.title}>{current.label}</h1>
                        </div>
                        <div className={styles.anchor} style={at(LAYOUT.icon)}>
                            <i className={`${styles.icon} ${current.icon}`} aria-hidden="true" />
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}
