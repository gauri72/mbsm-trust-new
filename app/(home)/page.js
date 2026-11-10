import MantraStrip from "../_shared/_components/MantraStrip/MantraStrip"
import HeroSlider from "./_components/HeroSlider/HeroSlider"
import Border from "../_shared/_components/Border/Border"
import TempleGallery from "../_shared/_components/TempleGallery/TempleGallery"
import Cta from "../_shared/_components/Cta/Cta"
import MissionVision from "./_components/MissionVision/MissionVision"
import Projects from "./_components/Projects/Projects"
import Pravachan from "./_components/Pravachan/Pravachan"
// Hidden on the home page for now (to bring one back, uncomment its import and its tag):
// - Welcome: its visit-card lives in the Contact page's FAQ section
// - HomeGallery: the bottom mosaic
// import Welcome from "./_components/Welcome/Welcome"
// import HomeGallery from "./_components/HomeGallery/HomeGallery"
import Event from "./_components/Event/Event"

export default function Home() {
    return (
        <>
            <MantraStrip />
            <HeroSlider />
            <Border />
            <TempleGallery />
            <Border />
            {/* <Welcome /> */}
            <MissionVision />
            <Border />
            <Event />
            <Border />
            <Projects />
            <Border />
            <Pravachan />
            <Border />
            <Cta />
            <MantraStrip closing />
        </>
    )
}
