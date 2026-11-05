import MantraStrip from "../_shared/_components/MantraStrip/MantraStrip"
import Breadcrumb from "../_shared/_components/Breadcrumb/Breadcrumb"
import TempleGallery from "../_shared/_components/TempleGallery/TempleGallery"
import Cta from "../_shared/_components/Cta/Cta"
import AllEvents from "./_components/AllEvents/AllEvents"
import FeaturedEvents from "./_components/FeaturedEvents/FeaturedEvents"
// Upcoming events section hidden on this page for now.
// import Event from "../(home)/_components/Event/Event"

export const metadata = {
    title: "कार्यक्रम — मंगल भक्त सेवा मंडळ",
    description: 'Explore the daily sadhana, spiritual practices and disciplines followed at Shri Shubharay Maharaj Math.',
}

export default function KaryakramPage() {
    return (
        <>
            <MantraStrip />
            <Breadcrumb title="कार्यक्रम" icon="fas fa-calendar-alt" />
            <TempleGallery />
            <AllEvents />
            <FeaturedEvents />
            {/* <Event /> */}
            <Cta />
            <MantraStrip closing />
        </>
    )
}
