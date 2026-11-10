import MantraStrip from "../_shared/_components/MantraStrip/MantraStrip"
import Breadcrumb from "../_shared/_components/Breadcrumb/Breadcrumb"
import { pageTitle } from "../_shared/siteContent"
import Border from "../_shared/_components/Border/Border"
import TempleGallery from "../_shared/_components/TempleGallery/TempleGallery"
import Cta from "../_shared/_components/Cta/Cta"
import ComingSoon from "../_shared/_components/ComingSoon/ComingSoon"
// Hidden for now (to bring them back, uncomment their imports and tags):
// import PhotoGallery from "./_components/PhotoGallery/PhotoGallery"
// import VideoGallery from "./_components/VideoGallery/VideoGallery"

export const metadata = {
    title: pageTitle("chitrasangraha"),
    description: 'Explore photographs from Shri Shubharay Maharaj Math — temple, seva and community events.',
}

export default function ChitrasangrahaPage() {
    return (
        <>
            <MantraStrip />
            <Breadcrumb page="chitrasangraha" />
            <Border />
            <TempleGallery />
            <ComingSoon />
            {/* Hidden for now: <PhotoGallery /> and <VideoGallery /> */}
            <Cta />
            <MantraStrip closing />
        </>
    )
}
