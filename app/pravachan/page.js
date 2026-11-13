import Mantra from "../_shared/_components/Mantra/Mantra"
import Breadcrumb from "../_shared/_components/Breadcrumb/Breadcrumb"
import { pageTitle } from "../_shared/_components/siteContent"
import Border from "../_shared/_components/Border/Border"
import Gallery from "../_shared/_components/Gallery/Gallery"
import Cta from "../_shared/_components/Cta/Cta"
import ComingSoon from "../_shared/_components/ComingSoon/ComingSoon"

export const metadata = {
    title: pageTitle("pravachan"),
    description: 'Discourses and pravachans from Mangal Bhakta Seva Mandal.',
}

export default function PravachanPage() {
    return (
        <>
            <Mantra />
            <Breadcrumb page="pravachan" />
            <Border />
            <Gallery />
            <ComingSoon />
            <Cta />
            <Mantra closing />
        </>
    )
}
