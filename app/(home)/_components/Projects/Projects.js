import { PAGES } from "../../../_shared/_components/siteContent"
import { SectionHead, MoreButton } from "../../../_shared/_components/Field/Field"
import shared from "../../../_shared/_components/Field/Field.module.css"
import CauseCard from "../../../_shared/_components/CauseCard/CauseCard"
import { CATEGORIES, PROJECTS } from "../../../prakalpa/_data/projects"
import styles from "./Projects.module.css"

/* =============================================================================
   Home: the work of the Math (Prakalpa) in four causes, linking to the Prakalpa page.
   The four causes, their names and the number of projects in each come from the Prakalpa page's own list
   (prakalpa/_data/projects.js: the 30 projects of https://mbsmtrust.org/our-causes), so this section can never
   disagree with that page. Only the picture of each cause is chosen here.
   Each card (CauseCard): a photo, the cause's round icon, the project count and the cause. A small icon sits above each number of the stats strip.
   One button below the cards links to the Prakalpa page.
   Styles: see Projects.module.css.
   ========================================================================== */

// the picture of each cause, by the category key used in the Prakalpa page's list
const IMAGES = {
    education: "/assets/media/home/projects-child-education.webp",
    food: "/assets/media/home/projects-food-donation.webp",
    medical: "/assets/media/home/projects-medical-care.webp",
    events: "/assets/media/home/projects-divine-events.webp",
}

const CAUSES = CATEGORIES.map(({ key, label, icon }) => ({
    icon,
    image: IMAGES[key],
    title: label,
    number: String(PROJECTS.filter((project) => project.category === key).length),
}))

/* Totals are derived from CAUSES, so they can never disagree with the cards. */
const TOTAL_PROJECTS = CAUSES.reduce((sum, cause) => sum + Number(cause.number), 0)
const STATS = [
    { number: String(TOTAL_PROJECTS), label: "एकूण प्रकल्प", icon: "fas fa-hands-helping" },
    { number: String(CAUSES.length).padStart(2, "0"), label: "सेवाक्षेत्रे", icon: "fas fa-hand-holding-heart" },
]

export default function Projects() {
    return (
        <section className={`${shared.field} ${styles.projects}`}>
            <div className="container">
                <SectionHead label="सामाजिक प्रकल्प" title="माणुसकीची ज्योत, प्रकाशाचा स्रोत" />

                <div className={`${styles.stats} wow fadeInUp`} data-wow-delay="100ms">
                    {STATS.map((stat) => (
                        <div key={stat.label} className={styles.stat}>
                            <i className={`${stat.icon} ${styles.statIcon}`} aria-hidden="true"></i>
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
                            <CauseCard image={cause.image} icon={cause.icon} number={cause.number} unit="प्रकल्प" title={cause.title} />
                        </div>
                    ))}
                </div>

                <MoreButton href={PAGES.prakalpa.href}>सर्व प्रकल्प पाहा</MoreButton>
            </div>
        </section>
    )
}
