import MantraStrip from "../_shared/_components/MantraStrip/MantraStrip"
import Breadcrumb from "../_shared/_components/Breadcrumb/Breadcrumb"
import { pageTitle } from "../_shared/siteContent"
import Border from "../_shared/_components/Border/Border"
import TempleGallery from "../_shared/_components/TempleGallery/TempleGallery"
import Cta from "../_shared/_components/Cta/Cta"
import ComingSoon from "../_shared/_components/ComingSoon/ComingSoon"

export const metadata = {
    title: pageTitle("pravachan"),
    description: 'Discourses and pravachans from Mangal Bhakta Seva Mandal.',
}

export default function PravachanPage() {
    return (
        <>
            <MantraStrip />
            <Breadcrumb page="pravachan" />
            <Border />
            <TempleGallery />
            <ComingSoon />
            <Cta />
            <MantraStrip closing />
        </>
    )
}
