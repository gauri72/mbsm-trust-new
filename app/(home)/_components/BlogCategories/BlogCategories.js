import Link from "next/link"
import styles from "./BlogCategories.module.css"

/* =============================================================================
   Home: the blogs page (https://mbsmtrust.org/our-blogs, 68 articles) sorted by theme
   into six categories. The site's own "Pravachan" / "Nirupan" labels are not used.
   `count` = number of articles in the category (ids 1-68 on the live blogs page).
   Each tile is one link to the blogs page. Styles: see BlogCategories.module.css.
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
        image: "/assets/media/home/blogs-2.webp",
        desc: "सुख, समाधान, अंतर्मुखता आणि जीवनाकडे पाहण्याची दृष्टी.",
        count: 17,
    },
    {
        icon: "fas fa-fire",
        title: "अहंकार आणि षड्रिपू",
        image: "/assets/media/home/blogs-3.webp",
        desc: "अहंकार, षड्रिपू आणि स्वार्थी वृत्तीवर मात कशी करावी.",
        count: 11,
    },
    {
        icon: "fas fa-om",
        title: "शंकर महाराज आणि लीला",
        image: "/assets/media/home/blogs-4.webp",
        desc: "सद्गुरु शंकर महाराजांचे संदेश, लीला आणि भक्तांवरची माया.",
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
        image: "/assets/media/home/blogs-6.webp",
        desc: "गादी सेवा, अन्नदान आणि मठातील भक्ती व सेवेचे अनुभव.",
        count: 7,
    },
]

export default function BlogCategories() {
    return (
        <section className={`${styles.blogs} ${styles.blogsGold}`}>
            <div className="container">
                <div className={styles.head}>
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline" lang="mr">अमृतवाणी</span>
                        </div>
                        <h2 className="section-title__title title-animation" lang="mr">शब्दांचा गंध, भक्तीचा छंद</h2>
                    </div>
                </div>
                <div className="row">
                    {CATEGORIES.map((cat, index) => (
                        <div
                            key={cat.title}
                            className={`col-lg-6 wow ${index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}`}
                            data-wow-delay={`${(Math.floor(index / 2) + 1) * 100}ms`}
                        >
                            <Link href="/pravachan" className={styles.tile} lang="mr">
                                <div className={styles.image}>
                                    <img src={cat.image} alt="" loading="lazy" />
                                </div>
                                <div className={styles.body}>
                                    {/* left: the round icon, the article count below it */}
                                    <div className={styles.meta}>
                                        <span className={styles.icon}>
                                            <i className={cat.icon} aria-hidden="true"></i>
                                        </span>
                                        <span className={styles.count} lang="mr">{cat.count} लेख</span>
                                    </div>
                                    {/* right: the heading, a line, then the description */}
                                    <div className={styles.text}>
                                        <h3 className={styles.title} lang="mr">{cat.title} :</h3>
                                        <p className={styles.desc} lang="mr">{cat.desc}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className={`${styles.cta} wow fadeInUp`} data-wow-delay="300ms">
                    <Link href="/pravachan" className={styles.btn} lang="mr">
                        <span>सर्व लेख पाहा</span>
                        <i className="fas fa-arrow-right" aria-hidden="true"></i>
                    </Link>
                </div>
            </div>
        </section>
    )
}
