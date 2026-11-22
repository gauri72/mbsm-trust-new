import { PAGES, SITE_URL } from "./_shared/_components/siteContent"
import { ARTICLES } from "./pravachan/_data/articles"

// /sitemap.xml: the pages of the site, straight from the list in siteContent.js, then the pravachan articles
export default function sitemap() {
    const pages = Object.values(PAGES).map((page) => ({
        url: `${SITE_URL}${page.href === "/" ? "" : page.href}`,
        changeFrequency: "monthly",
        priority: page.href === "/" ? 1 : 0.8,
    }))
    const articles = ARTICLES.map((article) => ({
        url: `${SITE_URL}${PAGES.pravachan.href}/${article.id}`,
        lastModified: article.date,
        changeFrequency: "yearly",
        priority: 0.6,
    }))
    return [...pages, ...articles]
}
