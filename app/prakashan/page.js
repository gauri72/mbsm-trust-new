import MantraStrip from "../_shared/_components/MantraStrip/MantraStrip"
import Breadcrumb from "../_shared/_components/Breadcrumb/Breadcrumb"
import TempleGallery from "../_shared/_components/TempleGallery/TempleGallery"
import Cta from "../_shared/_components/Cta/Cta"

export const metadata = {
    title: "प्रकाशन — मंगल भक्त सेवा मंडळ",
    description: 'Publications by Mangal Bhakta Seva Mandal.',
}

export default function PrakashanPage() {
    return (
        <>
            <MantraStrip />
            <Breadcrumb title="प्रकाशन" icon="fas fa-book-open" />
            <TempleGallery />
            <Cta />
            <MantraStrip closing />
        </>
    )
}
