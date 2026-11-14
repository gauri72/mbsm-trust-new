import { PAGES } from "../../../_shared/_components/siteContent"
import { SectionHead, MoreButton } from "../../parts"
import shared from "../../page.module.css"
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

/* Totals are derived from CAUSES, so they can never disagree with the cards
   (source: https://mbsmtrust.org/our-causes lists 30 projects). Add more only with real figures. */
const TOTAL_PROJECTS = CAUSES.reduce((sum, cause) => sum + Number(cause.number), 0)
const STATS = [
    { number: String(TOTAL_PROJECTS), label: "एकूण उपक्रम" },
    { number: String(CAUSES.length).padStart(2, "0"), label: "सेवाक्षेत्रे" },
]

export default function Projects() {
    return (
        <section className={`${shared.field} ${styles.projects}`}>
            <div className="container">
                <SectionHead label="सामाजिक प्रकल्प" title="सेवेचा ध्यास, समाजाचा विकास" />

                <div className={`${styles.stats} wow fadeInUp`} data-wow-delay="100ms">
                    {STATS.map((stat) => (
                        <div key={stat.label} className={styles.stat}>
                            <span className={styles.statNumber}>{stat.number}</span>
                            <span className={styles.statLabel} lang="mr">{stat.label}</span>
                        </div>
                    ))}
                </div>

                <div className={`row ${shared.cards}`}>
                    {CAUSES.map((cause, index) => (
                        <div
                            key={cause.title}
                            className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                            data-wow-delay={`${(index + 1) * 100}ms`}
                        >
                            <div className={`${shared.card} ${styles.card}`}>
                                {/* photo slot: decorative (the title below names the cause), so empty alt */}
                                <div className={styles.slot}>
                                    <img src={cause.image} alt="" width="800" height="450" loading="lazy" />
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

                <MoreButton href={PAGES.upkram.href}>सर्व उपक्रम पाहा</MoreButton>
            </div>
        </section>
    )
}
