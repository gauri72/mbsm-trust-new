import { SITE_URL } from "./_shared/_components/siteContent"

// /robots.txt: every page may be crawled; the sitemap says where they are
export default function robots() {
    return {
        rules: { userAgent: "*", allow: "/" },
        sitemap: `${SITE_URL}/sitemap.xml`,
    }
}
