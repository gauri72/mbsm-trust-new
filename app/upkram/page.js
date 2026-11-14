import ComingSoon from "../_shared/_components/ComingSoon/ComingSoon"
import { pageMetadata } from "../_shared/_components/siteContent"

// The mantra, the breadcrumb artwork, the border, the gallery and the closing call-to-action are the shared
// frame in app/template.js: a page only adds its own content.
export const metadata = pageMetadata("upkram", "Ongoing initiatives and seva activities of Mangal Bhakta Seva Mandal.")

export default function UpkramPage() {
    return <ComingSoon />
}
