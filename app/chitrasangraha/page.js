import MantraStrip from "../_shared/_components/MantraStrip/MantraStrip"
import Breadcrumb from "../_shared/_components/Breadcrumb/Breadcrumb"
import { pageTitle } from "../_shared/siteContent"
import TempleGallery from "../_shared/_components/TempleGallery/TempleGallery"
import Cta from "../_shared/_components/Cta/Cta"
import PhotoGallery from "./_components/PhotoGallery/PhotoGallery"
import VideoGallery from "./_components/VideoGallery/VideoGallery"

export const metadata = {
    title: pageTitle("chitrasangraha"),
    description: 'Explore photographs from Shri Shubharay Maharaj Math — temple, seva and community events.',
}

export default function ChitrasangrahaPage() {
    return (
        <>
            <MantraStrip />
            <Breadcrumb page="chitrasangraha" />
            <TempleGallery />
            <PhotoGallery />
            <VideoGallery />
            <Cta />
            <MantraStrip closing />
        </>
    )
}
