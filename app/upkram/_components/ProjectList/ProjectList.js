'use client'
import { useState } from "react"
import { SectionHead } from "../../../_shared/_components/Field/Field"
import field from "../../../_shared/_components/Field/Field.module.css"
import { cx } from "../../../_shared/_components/utils"
import { CATEGORIES, PROJECTS } from "../../_data/projects"
import styles from "./ProjectList.module.css"

/* =============================================================================
   Upkram: the trust's projects, on the maroon field: a filter (all + the four causes, each with its count) and the
   projects as gold cards (the look of the Pravachan page's cards): the photo in a maroon frame, the cause, the title.
   A project without a photo of the trust's own shows its cause's icon in the same frame, in place of a picture.
   It shows 12 cards and a button adds 12 more. 'use client' is needed for the filter and the button.
   Content: upkram/_data/projects.js. Styles: ProjectList.module.css.
   ========================================================================== */

const PAGE_SIZE = 12

const CATEGORY = Object.fromEntries(CATEGORIES.map((category) => [category.key, category]))

const FILTERS = [
    { key: "all", label: "सर्व", count: PROJECTS.length },
    ...CATEGORIES.map(({ key, label }) => ({ key, label, count: PROJECTS.filter((project) => project.category === key).length })),
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
                <SectionHead label="सामाजिक प्रकल्प" title="माणुसकीची ज्योत, प्रकाशाचा स्रोत" />

                <div className={styles.filters} role="group" aria-label="उपक्रमांचे प्रकार" lang="mr">
                    {FILTERS.map((item) => (
                        <button
                            key={item.key}
                            type="button"
                            className={cx(styles.filter, filter === item.key && styles.active)}
                            aria-pressed={filter === item.key}
                            onClick={() => choose(item.key)}
                        >
                            {item.label}
                            <span className={styles.count}>{item.count}</span>
                        </button>
                    ))}
                </div>

                {/* said aloud when the filter changes: how many projects it shows now */}
                <p className="visually-hidden" role="status" lang="mr">{matching.length} उपक्रम</p>

                <ul className={styles.grid}>
                    {visible.map((project) => {
                        const category = CATEGORY[project.category]
                        return (
                            <li key={project.id}>
                                <article className={cx(field.card, styles.card)}>
                                    {/* the photo and the icon are decoration: the title says it in text */}
                                    <div className={styles.image}>
                                        {project.image ? (
                                            <img src={project.image} alt="" width="800" height="450" loading="lazy" decoding="async" />
                                        ) : (
                                            <span className={styles.placeholder} aria-hidden="true">
                                                <span className={styles.medal}><i className={category.icon}></i></span>
                                            </span>
                                        )}
                                    </div>
                                    <div className={styles.body}>
                                        <p className={styles.meta} lang="mr">
                                            <span className={styles.chip}>{category.label}</span>
                                        </p>
                                        <h3 className={styles.title} lang="mr">{project.title}</h3>
                                    </div>
                                </article>
                            </li>
                        )
                    })}
                </ul>

                {shown < matching.length && (
                    <div className={field.cta}>
                        <button type="button" className={cx("pill-btn", styles.more)} lang="mr" onClick={() => setShown((count) => count + PAGE_SIZE)}>
                            <span>आणखी उपक्रम दाखवा</span>
                            <i className="fas fa-arrow-right" aria-hidden="true"></i>
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}
