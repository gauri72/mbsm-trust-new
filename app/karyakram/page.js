import MantraStrip from "../_shared/_components/MantraStrip/MantraStrip"
import Breadcrumb from "../_shared/_components/Breadcrumb/Breadcrumb"
import { pageTitle } from "../_shared/siteContent"
import Border from "../_shared/_components/Border/Border"
import TempleGallery from "../_shared/_components/TempleGallery/TempleGallery"
import Cta from "../_shared/_components/Cta/Cta"
import ComingSoon from "../_shared/_components/ComingSoon/ComingSoon"
// Hidden for now (to bring them back, uncomment their imports and tags):
// import AllEvents from "./_components/AllEvents/AllEvents"
// import FeaturedEvents from "./_components/FeaturedEvents/FeaturedEvents"
// import Event from "../(home)/_components/Event/Event"

export const metadata = {
    title: pageTitle("karyakram"),
    description: 'Explore the daily sadhana, spiritual practices and disciplines followed at Shri Shubharay Maharaj Math.',
}

export default function KaryakramPage() {
    return (
        <>
            <MantraStrip />
            <Breadcrumb page="karyakram" />
            <Border />
            <TempleGallery />
            <ComingSoon />
            {/* Hidden for now: <AllEvents />, <FeaturedEvents />, <Event /> */}
            <Cta />
            <MantraStrip closing />
        </>
    )
}
