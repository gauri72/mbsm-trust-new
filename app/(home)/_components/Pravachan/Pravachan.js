import Link from "next/link"
import styles from "./Pravachan.module.css"

/* =============================================================================
   Home: the three newest pravachans, linking to the Pravachan page.
   Content follows https://mbsmtrust.org/our-blogs (the newest Marathi articles).
   Styles: see Pravachan.module.css.
   ========================================================================== */

const ARTICLES = [
    {
        icon: "fas fa-microphone-alt",
        category: "प्रवचन",
        date: "१८ ऑक्टोबर २०२६",
        title: "गुरूची संकल्पना!",
    },
    {
        icon: "fas fa-om",
        category: "निरूपण",
        date: "१८ ऑक्टोबर २०२६",
        title: "पुष्प आठवे: परिस स्पर्शाशिवाय परिवर्तन नाही!",
    },
    {
        icon: "fas fa-om",
        category: "निरूपण",
        date: "१८ ऑक्टोबर २०२६",
        title: "पुष्प सातवे: इच्छांना कर्मांची साथ हवी!",
    },
]

export default function Pravachan() {
    return (
        <section className={`${styles.pravachan} ${styles.pravachanGold}`}>
            <div className="container">
                <div className={styles.head}>
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline" lang="mr">प्रवचन</span>
                        </div>
                        <h2 className="section-title__title title-animation" lang="mr">आमची प्रवचने</h2>
                    </div>
                </div>
                <div className="row">
                    {ARTICLES.map((article, index) => (
                        <div
                            key={article.title}
                            className={`col-xl-4 col-lg-4 wow ${index === 0 ? "fadeInLeft" : index === 1 ? "fadeInUp" : "fadeInRight"}`}
                            data-wow-delay={`${(index + 1) * 100}ms`}
                        >
                            <div className={styles.card}>
                                <div className={styles.top}>
                                    <span className={styles.icon}>
                                        <i className={article.icon} aria-hidden="true"></i>
                                    </span>
                                    <span className={styles.category} lang="mr">{article.category}</span>
                                </div>
                                <h3 className={styles.title} lang="mr">{article.title}</h3>
                                <p className={styles.date} lang="mr">
                                    <i className="fas fa-calendar-alt" aria-hidden="true"></i>
                                    <span>{article.date}</span>
                                </p>
                                <Link href="/pravachan" className={styles.more} lang="mr">
                                    <span>वाचा</span>
                                    <i className="fas fa-arrow-right" aria-hidden="true"></i>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`${styles.cta} wow fadeInUp`} data-wow-delay="300ms">
                    <Link href="/pravachan" className={styles.btn} lang="mr">
                        <span>सर्व प्रवचने पाहा</span>
                        <i className="fas fa-arrow-right" aria-hidden="true"></i>
                    </Link>
                </div>
            </div>
        </section>
    )
}
