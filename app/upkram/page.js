import MantraStrip from "../_shared/_components/MantraStrip/MantraStrip"
import Breadcrumb from "../_shared/_components/Breadcrumb/Breadcrumb"
import TempleGallery from "../_shared/_components/TempleGallery/TempleGallery"
import Cta from "../_shared/_components/Cta/Cta"

export const metadata = {
    title: "उपक्रम — मंगल भक्त सेवा मंडळ",
    description: 'Ongoing initiatives and seva activities of Mangal Bhakta Seva Mandal.',
}

export default function UpkramPage() {
    return (
        <>
            <MantraStrip />
            <Breadcrumb title="उपक्रम" icon="fas fa-hands-helping" />
            <TempleGallery />
            <Cta />
            <MantraStrip closing />
        </>
    )
}
