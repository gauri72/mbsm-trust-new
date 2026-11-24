'use client'
import { useState } from "react"
import Link from "next/link"
import { SectionHead } from "../../../_shared/_components/Field/Field"
import field from "../../../_shared/_components/Field/Field.module.css"
import { cx } from "../../../_shared/_components/utils"
import styles from "./ArticleList.module.css"

/* =============================================================================
   Lekh: the list of the articles, on the maroon field: a filter (all, then the six themes: simple outlined buttons) and the articles, newest first, as the home page's blog tiles (Home: Blogs.js), one for one: a gold card, a
   square photo in a maroon frame on the left; on the right the round maroon icon of the theme with the theme under it,
   then the title over a line, and where the tile has its description, "वाचा →".
   The whole card is one link (the title's). Above the cards a search box (by title); the cards come PAGE_SIZE at a
   time, "आणखी लेख" showing the next ones (a new filter or search starts again from the first).
   `articles` are the cards' summaries and `filters` the filter's buttons, both made by the page (lekh/page.js):
   the articles' text stays on the server. 'use client' is needed for the filter.
   Styles: ArticleList.module.css.
   ========================================================================== */

/* "Part 2" at the end of a title never splits across lines: a non-breaking space joins the word and the number
   (display only: the title itself is unchanged) */
const keepPartTogether = (title) => title.replace(/\bPart (\d+)/g, "Part\u00A0$1")

const PAGE_SIZE = 12

export default function ArticleList({ articles, filters }) {
    const [filter, setFilter] = useState("all")
    const [query, setQuery] = useState("")
    const [shown, setShown] = useState(PAGE_SIZE)

    const needle = query.trim().toLowerCase()
    const matching = articles.filter((article) =>
        (filter === "all" || article.theme === filter) && (!needle || article.title.toLowerCase().includes(needle)))
    const visible = matching.slice(0, shown)

    // a new filter or search starts the list again from the first cards
    const choose = (key) => { setFilter(key); setShown(PAGE_SIZE) }
    const search = (value) => { setQuery(value); setShown(PAGE_SIZE) }

    return (
        <section className={cx(field.field, styles.articles)}>
            <div className="container">
                <SectionHead label="आमचे लेख" title={<>सद्गुरूंच्या विचारांतून <br className={styles.phoneBreak} />भक्ती, ज्ञान आणि जीवनमार्ग</>} />

                <div className={styles.filters} role="group" aria-label="लेखांचे विषय" lang="mr">
                    {filters.map((item) => (
                        <button
                            key={item.key}
                            type="button"
                            className={cx(styles.filter, filter === item.key && styles.active)}
                            aria-pressed={filter === item.key}
                            onClick={() => choose(item.key)}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                <div className={styles.search}>
                    <input
                        type="search"
                        value={query}
                        onChange={(event) => search(event.target.value)}
                        placeholder="लेख शोधा.."
                        aria-label="लेख शोधा"
                        lang="mr"
                        autoComplete="off"
                    />
                </div>

                {/* said aloud when the filter changes: how many articles it shows now */}
                <p className="visually-hidden" role="status" lang="mr">{matching.length} लेख</p>

                <ul className={styles.grid}>
                    {visible.map((article) => (
                        <li key={article.id}>
                            <article className={cx(field.card, styles.tile)}>
                                {/* the picture is decoration: the title says it in text */}
                                <div className={styles.image}>
                                    <img src={article.image} alt="" width="800" height="800" loading="lazy" decoding="async" />
                                </div>
                                <div className={styles.body}>
                                    {/* left (above the text on a phone, beside each other): the round theme icon, the theme below it */}
                                    <div className={styles.meta} lang="mr">
                                        <span className={styles.icon}>
                                            <i className={article.themeIcon} aria-hidden="true"></i>
                                        </span>
                                        <span className={styles.theme}>{article.themeLabel}</span>
                                    </div>
                                    {/* right: the title, a line, then "वाचा →" (a hint, not a second link) */}
                                    <div className={styles.text}>
                                        <h3 className={styles.title} lang={article.lang}>
                                            <Link href={`/lekh/${article.id}`} className={styles.link}>{keepPartTogether(article.title)}</Link>
                                        </h3>
                                        <span className={styles.read} lang="mr" aria-hidden="true">
                                            वाचा <i className="fas fa-arrow-right"></i>
                                        </span>
                                    </div>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>

                {matching.length === 0 && <p className={styles.empty} lang="mr">कोणताही लेख सापडला नाही.</p>}

                {matching.length > shown && (
                    <div className={field.cta}>
                        <button type="button" className="pill-btn" lang="mr" onClick={() => setShown(shown + PAGE_SIZE)}>
                            <span>आणखी लेख</span>
                            <i className="fas fa-chevron-down" aria-hidden="true"></i>
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}
