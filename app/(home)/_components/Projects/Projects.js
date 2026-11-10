import Link from "next/link"
import styles from "./Projects.module.css"

/* =============================================================================
   Home: the work of the Math (Upkram) in four causes, linking to the Upkram page.
   Content follows https://mbsmtrust.org/our-causes (30 projects in 4 categories).
   Each card: a photo framed by a maroon border, the project count and the cause.
   One button below the cards links to the Upkram page.
   Styles: see Projects.module.css.
   ========================================================================== */

const CAUSES = [
    {
        image: "/assets/media/home/projects-child-education.webp",
        title: "बालशिक्षण",
        number: "3",
    },
    {
        image: "/assets/media/home/projects-food-donation.webp",
        title: "अन्नदान",
        number: "10",
    },
    {
        image: "/assets/media/home/projects-medical-care.webp",
        title: "आरोग्यसेवा",
        number: "6",
    },
    {
        image: "/assets/media/home/projects-divine-events.webp",
        title: "उत्सव आणि परंपरा",
        number: "11",
    },
]

/* Verified totals from https://mbsmtrust.org/our-causes (the card counts add up to 30). Add more only with real figures. */
const STATS = [
    { number: "30", label: "एकूण उपक्रम" },
    { number: "4", label: "सेवाक्षेत्रे" },
]

export default function Projects() {
    return (
        <section className={`${styles.projects} ${styles.projectsMaroon}`}>
            <div className="container">
                <div className={styles.head}>
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline" lang="mr">सामाजिक प्रकल्प</span>
                        </div>
                        <h2 className="section-title__title title-animation" lang="mr">सेवेचा ध्यास, समाजाचा विकास</h2>
                    </div>
                </div>

                <div className={`${styles.stats} wow fadeInUp`} data-wow-delay="100ms">
                    {STATS.map((stat) => (
                        <div key={stat.label} className={styles.stat}>
                            <span className={styles.statNumber}>{stat.number}</span>
                            <span className={styles.statLabel} lang="mr">{stat.label}</span>
                        </div>
                    ))}
                </div>

                <div className="row">
                    {CAUSES.map((cause, index) => (
                        <div
                            key={cause.title}
                            className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                            data-wow-delay={`${(index + 1) * 100}ms`}
                        >
                            <div className={styles.card}>
                                {/* photo slot */}
                                <div className={styles.slot}>
                                    <img src={cause.image} alt={cause.title} loading="lazy" />
                                </div>
                                <div className={styles.body}>
                                    <p className={styles.count} lang="mr">
                                        <span className={styles.countNumber}>{cause.number}</span>
                                        <span className={styles.countUnit}>उपक्रम</span>
                                    </p>
                                    <h3 className={styles.title} lang="mr">{cause.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`${styles.cta} wow fadeInUp`} data-wow-delay="300ms">
                    <Link href="/upkram" className={styles.btn} lang="mr">
                        <span>आमचे सेवाकार्य</span>
                        <i className="fas fa-arrow-right" aria-hidden="true"></i>
                    </Link>
                </div>
            </div>
        </section>
    )
}
