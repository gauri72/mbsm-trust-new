import { PAGES } from "../../../_shared/_components/siteContent"
import { SectionHead, MoreButton } from "../../../_shared/_components/Field/Field"
import shared from "../../../_shared/_components/Field/Field.module.css"
import { THEMES } from "../../../lekh/_data/themes"
import { themeCounts } from "../../../lekh/_data/articleUtils"
import styles from "./Blogs.module.css"

/* =============================================================================
   Home: the articles (the Lekh page) sorted by theme into six themes. The names are the Lekh page's filter and the
   number of articles in each theme is counted from the Lekh page's own list (lekh/_data), so this section can never
   disagree with that page.
   The tiles are plain cards, not links. The one link is the button below them, to the Lekh page.
   Styles: see Blogs.module.css.
   ========================================================================== */

const CATEGORIES = [
    {
        icon: "fas fa-hand-holding-heart",
        title: "कर्म",
        image: "/assets/media/home/blog-karma.webp",
        desc: "कर्माचे महत्त्व, कलियुगातील उद्धाराचा मार्ग आणि कर्माचे फळ.",
    },
    {
        icon: "fas fa-spa",
        title: "शांती",
        image: "/assets/media/home/blog-shanti.webp",
        desc: "सुख, समाधान, अंतर्मुखता आणि जीवनाकडे पाहण्याची दृष्टी.",
    },
    {
        icon: "fas fa-fire",
        title: "अहंकार",
        image: "/assets/media/home/blog-ahankar.webp",
        desc: "अहंकार, षडरिपू आणि स्वार्थी वृत्तीवर मात कशी करावी.",
    },
    {
        icon: "fas fa-om",
        title: "शंकरलीला",
        image: "/assets/media/home/blog-shankar-leela.webp",
        desc: "सद्गुरु शंकर महाराजांचे संदेश, लीला आणि भक्‍तांवरची माया.",
    },
    {
        icon: "fas fa-praying-hands",
        title: "गुरुकृपा",
        image: "/assets/media/home/blog-guru.webp",
        desc: "गुरूची संकल्पना, गुरुवचनाचे महत्त्व आणि सद्गुरु कृपा.",
    },
    {
        icon: "fas fa-hands-helping",
        title: "सेवा",
        image: "/assets/media/home/blog-math-seva.webp",
        desc: "गादी सेवा, अन्नदान आणि मठातील भक्‍ती व सेवेचे अनुभव.",
    },
]

// each tile's theme is the Lekh page's theme of the same place in the list (same order, same names)
const COUNTS = themeCounts()
const TILES = CATEGORIES.map((cat, index) => ({ ...cat, count: COUNTS[THEMES[index].key] }))

/* समर्थ रामदास's line: one line; on a screen too narrow for it, it breaks only at the comma */
const TITLE = (
    <>
        <span className={styles.phrase}>जे जे आपणासी ठावे,</span> <span className={styles.phrase}>ते ते इतरांसी शिकवावे.</span>
    </>
)

export default function Blogs() {
    return (
        <section className={`${shared.field} ${styles.blogs}`}>
            <div className="container">
                <SectionHead label="आमचे लेख" title={TITLE} />
                <div className={`row ${shared.cards}`}>
                    {TILES.map((cat, index) => (
                        <div
                            key={cat.title}
                            className={`col-lg-6 wow ${index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}`}
                            data-wow-delay={`${(Math.floor(index / 2) + 1) * 100}ms`}
                        >
                            <div className={`${shared.card} ${styles.tile}`} lang="mr">
                                <div className={styles.image}>
                                    <img src={cat.image} alt="" width="800" height="800" loading="lazy" />
                                </div>
                                <div className={styles.body}>
                                    {/* left (above the text on a phone, beside each other): the round icon, the article count below it */}
                                    <div className={styles.meta}>
                                        <span className={styles.icon}>
                                            <i className={cat.icon} aria-hidden="true"></i>
                                        </span>
                                        <span className={styles.count}>{cat.count} लेख</span>
                                    </div>
                                    {/* right: the heading, a line, then the description */}
                                    <div className={styles.text}>
                                        <h3 className={styles.title}>{cat.title}</h3>
                                        <p className={styles.desc}>{cat.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <MoreButton href={PAGES.lekh.href}>सर्व लेख पाहा</MoreButton>
            </div>
        </section>
    )
}
