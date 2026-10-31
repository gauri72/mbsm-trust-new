import Layout from "@/components/layout/Layout"
import MantraStrip from "@/components/shared/MantraStrip/MantraStrip"
import PageHero from "@/components/shared/PageHero/PageHero"
import { PAGE_HERO_IMAGES } from "@/lib/data/heroImages"
import { CLOSING_MANTRAS } from "@/lib/data/mantras"
import TempleGallery from "@/components/shared/TempleGallery/TempleGallery"
import FeaturedEvents from "@/components/sections/home1/FeaturedEvents"
import AllEvents from "@/components/sections/home1/AllEvents"
// Upcoming events section hidden on the Sadhana page for now.
// import Event from "@/components/sections/home1/Event"
import Cta from "@/components/sections/home1/Cta"

export const metadata = {
    title: 'कार्यक्रम — मंगल भक्त सेवा मंडळ',
    description: 'Explore the daily sadhana, spiritual practices and disciplines followed at Shri Shubharay Maharaj Math.',
}

export default function Sadhana() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>

                {/*Mantra Strip (between header and breadcrumb) */}
                <MantraStrip />

                <PageHero image={PAGE_HERO_IMAGES.sadhana} />

                <TempleGallery />

                <AllEvents />

                <FeaturedEvents />

                {/* <Event /> */}

                <Cta />

                <MantraStrip mantras={CLOSING_MANTRAS} />

            </Layout>
        </>
    )
}
