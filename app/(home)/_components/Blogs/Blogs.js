import Link from "next/link"
import { PAGES } from "../../../_shared/_components/siteContent"
import { SectionHead, MoreButton } from "../../../_shared/_components/Field/Field"
import shared from "../../../_shared/_components/Field/Field.module.css"
import styles from "./Blogs.module.css"

/* =============================================================================
   Home: the blogs page (https://mbsmtrust.org/our-blogs, 68 articles) sorted by theme
   into six categories. The site's own "Pravachan" / "Nirupan" labels are not used.
   `count` = number of articles in the category (ids 1-68 on the live blogs page).
   Each tile is one link to the blogs page (it has no category filter yet, so all six go to the same place;
   when it gets one, give each category its own link here). Styles: see Blogs.module.css.
   ========================================================================== */

const CATEGORIES = [
    {
        icon: "fas fa-hand-holding-heart",
        title: "कर्म आणि कलियुग",
        image: "/assets/media/home/blogs-1.webp",
        desc: "कर्माचे महत्त्व, कलियुगातील उद्धाराचा मार्ग आणि कर्माचे फळ.",
        count: 16,
    },
    {
        icon: "fas fa-spa",
        title: "शांती आणि आत्मचिंतन",
        image: "/assets/media/home/blogs-3.webp",
        desc: "सुख, समाधान, अंतर्मुखता आणि जीवनाकडे पाहण्याची दृष्टी.",
        count: 17,
    },
    {
        icon: "fas fa-fire",
        title: "अहंकार आणि षडरिपू",
        image: "/assets/media/home/blogs-4.webp",
        desc: "अहंकार, षडरिपू आणि स्वार्थी वृत्तीवर मात कशी करावी.",
        count: 11,
    },
    {
        icon: "fas fa-om",
        title: "शंकर महाराज आणि लीला",
        image: "/assets/media/home/blogs-6.webp",
        desc: "सद्गुरु शंकर महाराजांचे संदेश, लीला आणि भक्‍तांवरची माया.",
        count: 11,
    },
    {
        icon: "fas fa-praying-hands",
        title: "गुरू आणि गुरुकृपा",
        image: "/assets/media/home/blogs-5.webp",
        desc: "गुरूची संकल्पना, गुरुवचनाचे महत्त्व आणि सद्गुरु कृपा.",
        count: 6,
    },
    {
        icon: "fas fa-hands-helping",
        title: "मठ आणि सेवा",
        image: "/assets/media/home/blogs-2.webp",
        desc: "गादी सेवा, अन्नदान आणि मठातील भक्‍ती व सेवेचे अनुभव.",
        count: 7,
    },
]

/* Sanity check while developing: the counts must add up to the live site's 68 articles. */
if (process.env.NODE_ENV !== "production") {
    const total = CATEGORIES.reduce((sum, cat) => sum + cat.count, 0)
    if (total !== 68) console.warn(`Blogs: the category counts add up to ${total}, expected 68`)
}

export default function Blogs() {
    return (
        <section className={`${shared.field} ${styles.blogs}`}>
            <div className="container">
                <SectionHead label="अमृतवाणी" title="शब्दांचा गंध, भक्‍तीचा छंद" />
                <div className={`row ${shared.cards}`}>
                    {CATEGORIES.map((cat, index) => (
                        <div
                            key={cat.title}
                            className={`col-lg-6 wow ${index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}`}
                            data-wow-delay={`${(Math.floor(index / 2) + 1) * 100}ms`}
                        >
                            <Link href={PAGES.pravachan.href} className={`${shared.card} ${styles.tile}`} lang="mr" aria-label={`${cat.title}, ${cat.count} लेख`}>
                                <div className={styles.image}>
                                    <img src={cat.image} alt="" width="800" height="800" loading="lazy" />
                                </div>
                                <div className={styles.body}>
                                    {/* left: the round icon, the article count below it */}
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
                            </Link>
                        </div>
                    ))}
                </div>

                <MoreButton href={PAGES.pravachan.href}>सर्व प्रवचन पाहा</MoreButton>
            </div>
        </section>
    )
}
