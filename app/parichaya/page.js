import Mantra from "../_shared/_components/Mantra/Mantra"
import Breadcrumb from "../_shared/_components/Breadcrumb/Breadcrumb"
import { pageTitle } from "../_shared/_components/siteContent"
import Border from "../_shared/_components/Border/Border"
import Gallery from "../_shared/_components/Gallery/Gallery"
import Cta from "../_shared/_components/Cta/Cta"
import ComingSoon from "../_shared/_components/ComingSoon/ComingSoon"
// Hidden for now (to bring them back, uncomment their imports and tags):
// import Legacy from "./_components/Legacy/Legacy"
// import OurStory from "./_components/OurStory/OurStory"

export const metadata = {
    title: pageTitle("parichaya"),
    description: 'Learn about Shri Shubharay Maharaj Math, our history, mission and the community we serve.',
}

export default function ParichayaPage() {
    return (
        <>
            <Mantra />
            <Breadcrumb page="parichaya" />
            <Border />
            <Gallery />
            <ComingSoon />
            {/* Hidden for now: <Legacy /> and <OurStory /> */}
            <Cta />
            <Mantra closing />
        </>
    )
}
