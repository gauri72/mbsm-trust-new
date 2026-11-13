import Mantra from "../_shared/_components/Mantra/Mantra"
import Breadcrumb from "../_shared/_components/Breadcrumb/Breadcrumb"
import { pageTitle } from "../_shared/_components/siteContent"
import Border from "../_shared/_components/Border/Border"
import Gallery from "../_shared/_components/Gallery/Gallery"
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
            <Mantra />
            <Breadcrumb page="chitrasangraha" />
            <Border />
            <Gallery />
            <ComingSoon />
            {/* Hidden for now: <PhotoGallery /> and <VideoGallery /> */}
            <Cta />
            <Mantra closing />
        </>
    )
}
