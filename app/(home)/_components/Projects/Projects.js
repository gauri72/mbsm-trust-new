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
   Each card (CauseCard): a photo, the cause's round icon, the project count and the cause.
   Two gold badges sit in the empty space either side of the heading line: the total number of projects and the number of causes.
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

/* the heading: two lines; on a screen too narrow for a line it breaks only at its comma */
const TITLE = (
    <>
        <span className={styles.line}><span className={styles.phrase}>तहानलेल्याला पाणी,</span> <span className={styles.phrase}>भुकेल्याला अन्न;</span></span>
        <span className={styles.line}><span className={styles.phrase}>जनगणांची सेवा,</span> <span className={styles.phrase}>हेच आमचे पुण्य.</span></span>
    </>
)

/* the two badges either side of the heading line: total projects on the left, number of causes on the right */
const BADGES = [
    { number: PROJECTS.length, label: "प्रकल्प", icon: "fas fa-hands-helping" },
    { number: CATEGORIES.length, label: "सेवाक्षेत्रे", icon: "fas fa-hand-holding-heart" },
]

function Badge({ number, label, icon }) {
    return (
        <div className={styles.badge}>
            <i className={icon} aria-hidden="true"></i>
            <span className={styles.count}>{number}</span>
            <span lang="mr">{label}</span>
        </div>
    )
}

export default function Projects() {
    return (
        <section className={shared.field}>
            <div className="container">
                <SectionHead label="आमचे प्रकल्प" title={TITLE} before={<Badge {...BADGES[0]} />} after={<Badge {...BADGES[1]} />} />

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
