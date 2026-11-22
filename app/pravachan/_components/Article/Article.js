import Link from "next/link"
import { MoreButton } from "../../../_shared/_components/Field/Field"
import field from "../../../_shared/_components/Field/Field.module.css"
import { PAGES } from "../../../_shared/_components/siteContent"
import { categoryLabel, formatDate } from "../../_data/articleUtils"
import styles from "./Article.module.css"

/* =============================================================================
   Pravachan: one article, on the maroon field: a white page with a gold edge. From the top: the picture (in the
   maroon frame of the list's cards), the category, date and author, the title, then the text, paragraph by
   paragraph. The page's own h1 is the breadcrumb's "प्रवचन" (app/template.js), so the title here is an h2.
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

export default function Article({ article }) {
    return (
        <section className={`${field.field} ${styles.article}`}>
            <div className="container">
                <article className={styles.paper}>
                    {/* the picture is decoration: the title below says it in text */}
                    <div className={styles.image}>
                        <img src={article.image} alt="" width="1200" height="1200" fetchPriority="high" />
                    </div>

                    <header className={styles.head}>
                        <p className={styles.meta} lang="mr">
                            <span className={styles.chip}>{categoryLabel(article.category)}</span>
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
                    </header>

                    <div className={styles.text} lang={article.lang}>
                        {article.body.map((paragraph, index) => <Paragraph key={index} paragraph={paragraph} />)}
                    </div>
                </article>

                <MoreButton href={PAGES.pravachan.href}>सर्व लेख पाहा</MoreButton>
            </div>
        </section>
    )
}
