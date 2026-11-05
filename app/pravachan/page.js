import MantraStrip from "../_shared/_components/MantraStrip/MantraStrip"
import Breadcrumb from "../_shared/_components/Breadcrumb/Breadcrumb"
import TempleGallery from "../_shared/_components/TempleGallery/TempleGallery"
import Cta from "../_shared/_components/Cta/Cta"

export const metadata = {
    title: "प्रवचन — मंगल भक्त सेवा मंडळ",
    description: 'Discourses and pravachans from Mangal Bhakta Seva Mandal.',
}

export default function PravachanPage() {
    return (
        <>
            <MantraStrip />
            <Breadcrumb title="प्रवचन" icon="fas fa-microphone-alt" />
            <TempleGallery />
            <Cta />
            <MantraStrip closing />
        </>
    )
}
