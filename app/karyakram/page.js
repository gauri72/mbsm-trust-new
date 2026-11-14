import ComingSoon from "../_shared/_components/ComingSoon/ComingSoon"
import { pageMetadata } from "../_shared/_components/siteContent"
// Hidden for now (to bring them back, uncomment their imports and tags):
// import AllEvents from "./_components/AllEvents/AllEvents"
// import FeaturedEvents from "./_components/FeaturedEvents/FeaturedEvents"
// import Events from "../(home)/_components/Events/Events"

// The mantra, the breadcrumb artwork, the border, the gallery and the closing call-to-action are the shared
// frame in app/template.js: a page only adds its own content.
export const metadata = pageMetadata("karyakram", "Explore the daily sadhana, spiritual practices and disciplines followed at Shri Shubharay Maharaj Math.")

export default function KaryakramPage() {
    // Hidden for now: <AllEvents />, <FeaturedEvents />, <Events />
    return <ComingSoon />
}
