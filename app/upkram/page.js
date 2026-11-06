import MantraStrip from "../_shared/_components/MantraStrip/MantraStrip"
import Breadcrumb from "../_shared/_components/Breadcrumb/Breadcrumb"
import { pageTitle } from "../_shared/siteContent"
import TempleGallery from "../_shared/_components/TempleGallery/TempleGallery"
import Cta from "../_shared/_components/Cta/Cta"

export const metadata = {
    title: pageTitle("upkram"),
    description: 'Ongoing initiatives and seva activities of Mangal Bhakta Seva Mandal.',
}

export default function UpkramPage() {
    return (
        <>
            <MantraStrip />
            <Breadcrumb page="upkram" />
            <TempleGallery />
            <Cta />
            <MantraStrip closing />
        </>
    )
}
