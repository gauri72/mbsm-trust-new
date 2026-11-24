import Link from "next/link"
import { MoreButton } from "../../../_shared/_components/Field/Field"
import field from "../../../_shared/_components/Field/Field.module.css"
import { PAGES, SOCIALS } from "../../../_shared/_components/siteContent"
import { cardImage, formatDate, themeOf } from "../../_data/articleUtils"
import styles from "./Article.module.css"

/* =============================================================================
   Lekh: one article, on the maroon field. On a wide screen two columns: the article (a white page with a gold edge:
   the head, a small square picture in the maroon frame of the list's cards beside the theme, date, author and the
   title; then the text, paragraph by paragraph; then the WhatsApp share) and, beside it, two gold cards (more articles of the same theme, and the trust's social
   links). Under both: the previous / next article and the button to the list. On a
   phone the columns stack. The page's own h1 is the breadcrumb's "प्रवचन" (app/template.js), so the title here is an h2.
   A paragraph is a string, or a list of strings and links to other articles (see _data/articles.js).
   A line break inside a paragraph is kept (white-space: pre-line in the styles).
   Styles: Article.module.css.
   ========================================================================== */

const Paragraph = ({ paragraph }) => (
    <p>
        {typeof paragraph === "string"
            ? paragraph
            : paragraph.map((part, index) =>
                typeof part === "string"
                    ? part
                    : <Link key={index} href={part.href}>{part.text}</Link>
            )}
    </p>
)

// one small article link: the square photo (the cards' small copy) and the title
const RelatedLink = ({ item }) => (
    <li>
        <Link href={`/lekh/${item.id}`} className={styles.relatedLink}>
            <span className={styles.thumb}>
                <img src={item.image} alt="" width="600" height="600" loading="lazy" decoding="async" />
            </span>
            <span className={styles.relatedTitle} lang={item.lang}>{item.title}</span>
        </Link>
    </li>
)

// previous / next: a gold card with a small direction label over the article's title
const PagerLink = ({ item, direction }) => (
    <Link
        href={`/lekh/${item.id}`}
        className={`${field.card} ${styles.pagerLink} ${direction === "next" ? styles.next : styles.prev}`}
    >
        <span className={styles.pagerLabel} lang="mr">
            {direction === "prev" && <i className={`fas fa-arrow-right ${styles.flip}`} aria-hidden="true"></i>}
            {direction === "prev" ? "मागील लेख" : "पुढील लेख"}
            {direction === "next" && <i className="fas fa-arrow-right" aria-hidden="true"></i>}
        </span>
        <span className={styles.pagerTitle} lang={item.lang}>{item.title}</span>
    </Link>
)

export default function Article({ article, neighbours, related, shareUrl }) {
    const theme = themeOf(article.id)
    const whatsapp = `https://wa.me/?text=${encodeURIComponent(`${article.title} ${shareUrl}`)}`
    return (
        <section className={`${field.field} ${styles.article}`}>
            <div className="container">
                <div className={styles.layout}>
                    <article className={styles.paper}>
                        <header className={styles.head}>
                            {/* the picture is decoration: the title says it in text */}
                            <div className={styles.image}>
                                <img src={cardImage(article.image)} alt="" width="600" height="600" fetchPriority="high" />
                            </div>

                            <div className={styles.headText}>
                                <p className={styles.meta} lang="mr">
                                    <span className={styles.chip}>
                                        <i className={theme.icon} aria-hidden="true"></i>
                                        {theme.label}
                                    </span>
                                    <time dateTime={article.date}>
                                        <i className="fas fa-calendar-alt" aria-hidden="true"></i>
                                        {formatDate(article.date)}
                                    </time>
                                    <span>
                                        <i className="fas fa-user" aria-hidden="true"></i>
                                        {article.author}
                                    </span>
                                </p>
                                <h2 className={styles.title} lang={article.lang}>{article.title}</h2>
                            </div>
                        </header>

                        <div className={styles.text} lang={article.lang}>
                            {article.body.map((paragraph, index) => <Paragraph key={index} paragraph={paragraph} />)}
                        </div>

                        <footer className={styles.share} lang="mr">
                            <span className={styles.shareLabel}>हा लेख शेअर करा</span>
                            <a href={whatsapp} className="pill-btn" target="_blank" rel="noopener noreferrer">
                                <span>WhatsApp वर शेअर करा</span>
                                <span className="visually-hidden"> (नवीन टॅबमध्ये उघडते)</span>
                                <i className="fab fa-whatsapp" aria-hidden="true"></i>
                            </a>
                        </footer>
                    </article>

                    <aside className={styles.aside}>
                        {related.length > 0 && (
                            <section className={`${field.card} ${styles.panel}`} aria-labelledby="related-heading">
                                <h3 id="related-heading" className={styles.panelTitle} lang="mr">याच विषयावरील आणखी लेख</h3>
                                <ul className={styles.relatedList}>
                                    {related.map((item) => <RelatedLink key={item.id} item={item} />)}
                                </ul>
                            </section>
                        )}

                        <section className={`${field.card} ${styles.panel}`} aria-labelledby="follow-heading">
                            <h3 id="follow-heading" className={styles.panelTitle} lang="mr">आमच्यासोबत जोडा</h3>
                            <ul className={styles.socials}>
                                {SOCIALS.map((social) => (
                                    <li key={social.label}>
                                        <a href={social.href} className={styles.social} target="_blank" rel="noopener noreferrer" aria-label={`${social.label} (नवीन टॅबमध्ये उघडते)`}>
                                            <i className={social.icon} aria-hidden="true"></i>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </aside>
                </div>

                {(neighbours.newer || neighbours.older) && (
                    <nav className={styles.pager} aria-label="इतर लेख">
                        {neighbours.newer && <PagerLink item={neighbours.newer} direction="prev" />}
                        {neighbours.older && <PagerLink item={neighbours.older} direction="next" />}
                    </nav>
                )}

                <MoreButton href={PAGES.lekh.href}>सर्व लेख पाहा</MoreButton>
            </div>
        </section>
    )
}
