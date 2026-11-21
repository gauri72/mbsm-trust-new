import ComingSoon from "../_shared/_components/ComingSoon/ComingSoon"
import { pageMetadata } from "../_shared/_components/siteContent"
// The book section is kept for future use but is not currently rendered.

// The mantra, the breadcrumb artwork, the border, the gallery and the closing call-to-action are the shared
// frame in app/template.js: a page only adds its own content.
export const metadata = pageMetadata("parichaya", "Learn about Shri Shubharay Maharaj Math, our history, mission and the community we serve.")

export default function ParichayaPage() {
    return <ComingSoon />
}
