import { pageMetadata } from "../_shared/_components/siteContent"
import ArticleList from "./_components/ArticleList/ArticleList"
import { filters, summaries } from "./_data/articleUtils"

// The mantra, the breadcrumb artwork, the border, the gallery and the closing call-to-action are the shared
// frame in app/template.js: a page only adds its own content.
export const metadata = pageMetadata("pravachan", "Discourses and pravachans from Mangal Bhakta Seva Mandal.")

// The 68 articles of the old site's blogs page. The cards get a short summary of each: the text itself is
// only sent when an article is opened (pravachan/[id]).
export default function PravachanPage() {
    return <ArticleList articles={summaries()} filters={filters()} />
}
