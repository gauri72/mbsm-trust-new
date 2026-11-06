import MantraStrip from "../_shared/_components/MantraStrip/MantraStrip"
import Breadcrumb from "../_shared/_components/Breadcrumb/Breadcrumb"
import { pageTitle } from "../_shared/siteContent"
import TempleGallery from "../_shared/_components/TempleGallery/TempleGallery"
import Cta from "../_shared/_components/Cta/Cta"

export const metadata = {
    title: pageTitle("prakashan"),
    description: 'Publications by Mangal Bhakta Seva Mandal.',
}

export default function PrakashanPage() {
    return (
        <>
            <MantraStrip />
            <Breadcrumb page="prakashan" />
            <TempleGallery />
            <Cta />
            <MantraStrip closing />
        </>
    )
}
