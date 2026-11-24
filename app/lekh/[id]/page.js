import { notFound } from "next/navigation"
import { SITE_NAME, SITE_URL, shareCard } from "../../_shared/_components/siteContent"
import Article from "../_components/Article/Article"
import { ARTICLES } from "../_data/articles"
import { descriptionOf, getArticle, neighbours, related } from "../_data/articleUtils"

// One page for each of the articles, made when the site is built; any other address is a 404.
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
        alternates: { canonical: `/lekh/${article.id}` },
        openGraph: { ...shareCard(title, description), type: "article", publishedTime: article.date, authors: [article.author] },
    }
}

// what search engines read about the article (schema.org Article)
const structuredData = (article) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    inLanguage: article.lang,
    datePublished: article.date,
    author: { "@type": "Organization", name: article.author },
    publisher: { "@type": "Organization", name: SITE_NAME },
    image: `${SITE_URL}${article.image}`,
    mainEntityOfPage: `${SITE_URL}/lekh/${article.id}`,
})

export default async function ArticlePage({ params }) {
    const article = getArticle((await params).id)
    if (!article) notFound()
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData(article)).replace(/</g, "\\u003c") }} />
            <Article
                article={article}
                neighbours={neighbours(article.id)}
                related={related(article.id)}
                shareUrl={`${SITE_URL}/lekh/${article.id}`}
            />
        </>
    )
}
