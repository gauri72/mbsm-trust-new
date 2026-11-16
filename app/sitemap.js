import { PAGES, SITE_URL } from "./_shared/_components/siteContent"

// /sitemap.xml: the pages of the site, straight from the list in siteContent.js
export default function sitemap() {
    return Object.values(PAGES).map((page) => ({
        url: `${SITE_URL}${page.href === "/" ? "" : page.href}`,
        changeFrequency: "monthly",
        priority: page.href === "/" ? 1 : 0.8,
    }))
}
