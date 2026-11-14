import ComingSoon from "../_shared/_components/ComingSoon/ComingSoon"
import { pageMetadata } from "../_shared/_components/siteContent"
// Hidden for now (to bring them back, uncomment their imports and tags):
// import Legacy from "./_components/Legacy/Legacy"
// import OurStory from "./_components/OurStory/OurStory"

// The mantra, the breadcrumb artwork, the border, the gallery and the closing call-to-action are the shared
// frame in app/template.js: a page only adds its own content.
export const metadata = pageMetadata("parichaya", "Learn about Shri Shubharay Maharaj Math, our history, mission and the community we serve.")

export default function ParichayaPage() {
    // Hidden for now: <Legacy /> and <OurStory />
    return <ComingSoon />
}
