'use client'
import { useState } from "react"
import CauseCard from "../../../_shared/_components/CauseCard/CauseCard"
import { SectionHead } from "../../../_shared/_components/Field/Field"
import field from "../../../_shared/_components/Field/Field.module.css"
import { cx } from "../../../_shared/_components/utils"
import { CATEGORIES, PROJECTS } from "../../_data/projects"
import styles from "./ProjectList.module.css"

/* =============================================================================
   Prakalpa: the trust's projects, on the maroon field, in the look of the home page's Projects section: a filter like its
   stats strip (all + the four causes: an icon and the name) and a gold card for each project
   (CauseCard): its photo, its cause's round icon and its title.
   It shows 12 cards and a button adds 12 more. 'use client' is needed for the filter and the button.
   Content: prakalpa/_data/projects.js. Styles: ProjectList.module.css.
   ========================================================================== */

const PAGE_SIZE = 12

const CATEGORY = Object.fromEntries(CATEGORIES.map((category) => [category.key, category]))

const FILTERS = [
    { key: "all", label: "सर्व", icon: "fas fa-hands-helping" },
    ...CATEGORIES,
]

export default function ProjectList() {
    const [filter, setFilter] = useState("all")
    const [shown, setShown] = useState(PAGE_SIZE)

    const matching = filter === "all" ? PROJECTS : PROJECTS.filter((project) => project.category === filter)
    const visible = matching.slice(0, shown)

    const choose = (key) => {
        setFilter(key)
        setShown(PAGE_SIZE)
    }

    return (
        <section className={cx(field.field, styles.projects)}>
            <div className="container">
                <SectionHead label="आमचे प्रकल्प" title="समाजासाठी आमची सेवा" />

                <div className={styles.filters} role="group" aria-label="प्रकल्पांचे प्रकार" lang="mr">
                    {FILTERS.map((item) => (
                        <button
                            key={item.key}
                            type="button"
                            className={cx(styles.filter, filter === item.key && styles.active)}
                            aria-pressed={filter === item.key}
                            onClick={() => choose(item.key)}
                        >
                            <i className={cx(item.icon, styles.filterIcon)} aria-hidden="true"></i>
                            <span className={styles.filterLabel}>{item.label}</span>
                        </button>
                    ))}
                </div>

                {/* said aloud when the filter changes: how many projects it shows now */}
                <p className="visually-hidden" role="status" lang="mr">{matching.length} प्रकल्प</p>

                <ul className={styles.grid}>
                    {visible.map((project) => {
                        const category = CATEGORY[project.category]
                        return (
                            <li key={project.id}>
                                <CauseCard image={project.image} icon={category.icon} title={project.title} />
                            </li>
                        )
                    })}
                </ul>

                {shown < matching.length && (
                    <div className={field.cta}>
                        <button type="button" className={cx("pill-btn", styles.more)} lang="mr" onClick={() => setShown((count) => count + PAGE_SIZE)}>
                            <span>आणखी प्रकल्प दाखवा</span>
                            <i className="fas fa-arrow-right" aria-hidden="true"></i>
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}
