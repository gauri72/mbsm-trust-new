'use client'
import { useState } from "react"
import Link from "next/link"
import { SectionHead } from "../../../_shared/_components/Field/Field"
import field from "../../../_shared/_components/Field/Field.module.css"
import { cx } from "../../../_shared/_components/utils"
import styles from "./ArticleList.module.css"

/* =============================================================================
   Pravachan: the list of the articles, on the maroon field: a filter (all, pravachan, nirupan) and the articles as
   gold cards (the look of the home page's blog tiles): the picture in a maroon frame, the date, the title, and "वाचा".
   The whole card is one link (the title's). It shows 12 cards and a button adds 12 more, so the 68 pictures are not
   all asked for at once.
   `articles` are the cards' summaries and `filters` the filter's buttons, both made by the page (pravachan/page.js):
   the articles' text stays on the server. 'use client' is needed for the filter and the button.
   Styles: ArticleList.module.css.
   ========================================================================== */

const PAGE_SIZE = 12

export default function ArticleList({ articles, filters }) {
    const [filter, setFilter] = useState("all")
    const [shown, setShown] = useState(PAGE_SIZE)

    const matching = filter === "all" ? articles : articles.filter((article) => article.category === filter)
    const visible = matching.slice(0, shown)

    const choose = (key) => {
        setFilter(key)
        setShown(PAGE_SIZE)
    }

    return (
        <section className={cx(field.field, styles.articles)}>
            <div className="container">
                <SectionHead label="अमृतवाणी" title="शब्दांची शिदोरी, मनाची तिजोरी" />

                <div className={styles.filters} role="group" aria-label="लेखांचे प्रकार" lang="mr">
                    {filters.map((item) => (
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

                {/* said aloud when the filter changes: how many articles it shows now */}
                <p className="visually-hidden" role="status" lang="mr">{matching.length} लेख</p>

                <ul className={styles.grid}>
                    {visible.map((article) => (
                        <li key={article.id}>
                            <article className={cx(field.card, styles.card)}>
                                {/* the picture is decoration: the title says it in text */}
                                <div className={styles.image}>
                                    <img src={article.image} alt="" width="800" height="800" loading="lazy" decoding="async" />
                                </div>
                                <div className={styles.body}>
                                    <p className={styles.meta} lang="mr">
                                        <span className={styles.chip}>{article.categoryLabel}</span>
                                        <time dateTime={article.date}>
                                            <i className="fas fa-calendar-alt" aria-hidden="true"></i>
                                            {article.dateLabel}
                                        </time>
                                    </p>
                                    <h3 className={styles.title} lang={article.lang}>
                                        <Link href={`/pravachan/${article.id}`} className={styles.link}>{article.title}</Link>
                                    </h3>
                                    <span className={styles.read} lang="mr" aria-hidden="true">
                                        वाचा <i className="fas fa-arrow-right"></i>
                                    </span>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>

                {shown < matching.length && (
                    <div className={field.cta}>
                        <button type="button" className={cx("pill-btn", styles.more)} lang="mr" onClick={() => setShown((count) => count + PAGE_SIZE)}>
                            <span>आणखी लेख दाखवा</span>
                            <i className="fas fa-arrow-right" aria-hidden="true"></i>
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}
