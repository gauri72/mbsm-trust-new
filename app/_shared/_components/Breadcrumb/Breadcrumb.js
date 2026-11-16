import { PAGES } from "../siteContent"
import styles from "./Breadcrumb.module.css"

/* =============================================================================
   Breadcrumb — the inner-page hero (every page except home, and the 404 page): a 16:9
   artwork (a blank scroll between two lamps) shown exactly as supplied, with the page's name
   set on the scroll in Annapurna SIL between two double bars (||), with the page's icon in the gold ring below it.

   <Breadcrumb page="parichaya" />     the artwork + the page's name on the scroll (its h1) between two double bars, and its icon in the ring.
       The name and icon come from siteContent.js — the same one the header and footer use.
   <Breadcrumb image="/assets/media/shared/not-found-bg.webp" />
       any other artwork, without text (the 404 page)

   No reveal animation is applied.
   Sizes and positions: see Breadcrumb.module.css.
   ========================================================================== */

const ARTWORK = { src: "/assets/media/shared/breadcrumb-hero.webp", width: 1670, height: 942 }

// where the page's name sits on the artwork: the middle between the scroll's two ornaments (% of the artwork's width / height)
const TITLE = { x: 50, y: 48.3 }

// the centre of the gold ring that hangs below the scroll (it holds the page's icon)
const RING = { x: 50, y: 82.9 }

const at = ({ x, y }) => ({ "--x": `${x}%`, "--y": `${y}%` })   // a point of the artwork, in %

export default function Breadcrumb({ page, image }) {
    const current = PAGES[page]
    const withText = Boolean(current)        // the shared artwork carries the page's text

    return (
        <section className={styles.root}>
            <div className={styles.art}>
                {/* the artwork is decoration; the page's own name is the h1 below */}
                {withText
                    ? <img src={ARTWORK.src} alt="" width={ARTWORK.width} height={ARTWORK.height} fetchPriority="high" className={styles.img} />
                    : <img src={image} alt="" className={styles.img} />}

                {withText && (
                    <>
                        <div className={`${styles.anchor} ${styles.row}`} style={at(TITLE)}>
                            {/* a double bar (||) on each side of the name, filling the scroll's empty ends */}
                            <span className={styles.bars} aria-hidden="true" />
                            <h1 className={styles.title}>{current.label}</h1>
                            <span className={styles.bars} aria-hidden="true" />
                        </div>
                        {/* the page's icon, inside the gold ring that hangs below the scroll */}
                        <div className={styles.anchor} style={at(RING)}>
                            <span className={styles.medal} aria-hidden="true"><i className={current.icon} /></span>
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}
