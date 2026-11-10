import MantraStrip from "../_shared/_components/MantraStrip/MantraStrip"
import Breadcrumb from "../_shared/_components/Breadcrumb/Breadcrumb"
import { pageTitle } from "../_shared/siteContent"
import Border from "../_shared/_components/Border/Border"
import TempleGallery from "../_shared/_components/TempleGallery/TempleGallery"
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
            <MantraStrip />
            <Breadcrumb page="parichaya" />
            <Border />
            <TempleGallery />
            <ComingSoon />
            {/* Hidden for now: <Legacy /> and <OurStory /> */}
            <Cta />
            <MantraStrip closing />
        </>
    )
}
