import styles from "./Breadcrumb.module.css"

/* =============================================================================
   Breadcrumb — the inner-page hero (every page except home, and the 404 page):
   the artwork inside the gold Om · swastik frame, with its text set in Rozha.

   <Breadcrumb title="परिचय" icon="fas fa-om" />     the shared artwork (exported
       without lettering) + this page's title on the scroll (its h1), its Font
       Awesome icon in the medallion and the two names on the plates
   <Breadcrumb image="/assets/images/backgrounds/page-header-bg.jpg" />
       any other artwork, without text (the 404 page)

   It fades in as the preloader fades (Breadcrumb.module.css, section 3).
   Design rules: see Breadcrumb.module.css.
   ========================================================================== */

const ARTWORK = { src: "/assets/images/backgrounds/page-hero-plain.jpg", width: 1670, height: 942 }

// Names on the plates. Rozha One stacks श्व and त्त into ligatures that read
// differently from the artwork's lettering; a zero-width joiner (U+200D) asks for the
// half-letter form instead (as the header and footer do for क्त).
const NAMES = {
    swami: "श्री विश्\u200Dवेश्\u200Dवर स्वामी महाराज",
    datta: "श्री शंकर दत्\u200Dत महाराज",
}

// where the scroll, the medallion and the two plates sit on the artwork (% of its width / height)
const LAYOUT = {
    title: { x: 50, y: 26.8 },
    icon: { x: 50, y: 66.4 },
    plates: [{ x: 29.45, y: 82.86, name: NAMES.swami }, { x: 70.69, y: 82.86, name: NAMES.datta }],
}

const at = ({ x, y }) => ({ "--x": `${x}%`, "--y": `${y}%` })   // a point of the artwork, in %

export default function Breadcrumb({ title, icon, image }) {
    const withText = Boolean(title)          // the shared artwork carries the page's text

    return (
        <section className={styles.root}>
            <div className={styles.art}>
                {/* decorative artwork: everything it says is in the text below */}
                {withText
                    ? <img src={ARTWORK.src} alt="" width={ARTWORK.width} height={ARTWORK.height} className={styles.img} />
                    : <img src={image} alt="" className={styles.img} />}
                {withText && (
                    <>
                        <h1 className={styles.title} style={at(LAYOUT.title)}>{title}</h1>
                        {icon && <i className={`${styles.icon} ${icon}`} style={at(LAYOUT.icon)} aria-hidden="true"></i>}
                        {LAYOUT.plates.map((plate) => (
                            <p key={plate.name} className={styles.plate} style={at(plate)}>{plate.name}</p>
                        ))}
                    </>
                )}
            </div>

            {/* the CTA's Om · swastik frame: four bands + corners */}
            <div className={`${styles.frameH} ${styles.frameTop}`} aria-hidden="true"></div>
            <div className={`${styles.frameH} ${styles.frameBottom}`} aria-hidden="true"></div>
            <div className={`${styles.frameV} ${styles.frameLeft}`} aria-hidden="true"></div>
            <div className={`${styles.frameV} ${styles.frameRight}`} aria-hidden="true"></div>
            <span className={`${styles.corner} ${styles.cornerTl}`} aria-hidden="true"></span>
            <span className={`${styles.corner} ${styles.cornerTr}`} aria-hidden="true"></span>
            <span className={`${styles.corner} ${styles.cornerBl}`} aria-hidden="true"></span>
            <span className={`${styles.corner} ${styles.cornerBr}`} aria-hidden="true"></span>
        </section>
    )
}
