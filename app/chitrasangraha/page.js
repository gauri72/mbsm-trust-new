import MantraStrip from "../_shared/_components/MantraStrip/MantraStrip"
import Breadcrumb from "../_shared/_components/Breadcrumb/Breadcrumb"
import TempleGallery from "../_shared/_components/TempleGallery/TempleGallery"
import Cta from "../_shared/_components/Cta/Cta"
import PhotoGallery from "./_components/PhotoGallery/PhotoGallery"
import VideoGallery from "./_components/VideoGallery/VideoGallery"

export const metadata = {
    title: "चित्रसंग्रह — मंगल भक्त सेवा मंडळ",
    description: 'Explore photographs from Shri Shubharay Maharaj Math — temple, seva and community events.',
}

export default function ChitrasangrahaPage() {
    return (
        <>
            <MantraStrip />
            <Breadcrumb title="चित्रसंग्रह" icon="fas fa-images" />
            <TempleGallery />
            <PhotoGallery />
            <VideoGallery />
            <Cta />
            <MantraStrip closing />
        </>
    )
}
