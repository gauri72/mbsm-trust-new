import Layout from "@/components/layout/Layout"
import MantraStrip from "@/components/shared/MantraStrip/MantraStrip"
import { CLOSING_MANTRAS } from "@/lib/data/mantras"
import HeroSlider from "@/components/shared/HeroSlider/HeroSlider"
// Welcome section hidden on the home page for now (its visit-card now
// lives in the Contact page's FAQ section instead).
// import Welcome from "@/components/sections/home1/Welcome"
import TempleGallery from "@/components/shared/TempleGallery/TempleGallery"
// Bottom gallery mosaic hidden on the home page for now.
// import HomeGallery from "@/components/sections/home1/HomeGallery"
import MissionVision from "@/components/sections/about/MissionVision"
import Cta from "@/components/sections/home1/Cta"
import Event from "@/components/sections/home1/Event"

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <MantraStrip />
                <HeroSlider />
                <TempleGallery />
                {/* <Welcome /> */}
                <MissionVision />
                <Event />
                <Cta />
                <MantraStrip mantras={CLOSING_MANTRAS} />
            </Layout>

        </>
    )
}