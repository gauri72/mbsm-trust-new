import { notFound } from "next/navigation"
import { SITE_NAME, shareCard } from "../../_shared/_components/siteContent"
import Article from "../_components/Article/Article"
import { ARTICLES } from "../_data/articles"
import { descriptionOf, getArticle } from "../_data/articleUtils"

// One page for each of the 68 articles, made when the site is built; any other address is a 404.
// The mantra, the breadcrumb artwork, the border, the gallery and the closing call-to-action are the shared
// frame in app/template.js: a page only adds its own content.
export const dynamicParams = false

export const generateStaticParams = () => ARTICLES.map((article) => ({ id: String(article.id) }))

export async function generateMetadata({ params }) {
    const article = getArticle((await params).id)
    if (!article) return {}
    const title = `${article.title} — ${SITE_NAME}`
    const description = descriptionOf(article)
    return {
        title,
        description,
        alternates: { canonical: `/pravachan/${article.id}` },
        openGraph: { ...shareCard(title, description), type: "article", publishedTime: article.date, authors: [article.author] },
    }
}

export default async function ArticlePage({ params }) {
    const article = getArticle((await params).id)
    if (!article) notFound()
    return <Article article={article} />
}
