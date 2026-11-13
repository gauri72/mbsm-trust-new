import MantraStrip from "../_shared/_components/MantraStrip/MantraStrip"
import HeroSlider from "./_components/HeroSlider/HeroSlider"
import Border from "../_shared/_components/Border/Border"
import TempleGallery from "../_shared/_components/TempleGallery/TempleGallery"
import Cta from "../_shared/_components/Cta/Cta"
import MissionVision from "./_components/MissionVision/MissionVision"
import Projects from "./_components/Projects/Projects"
import BlogCategories from "./_components/BlogCategories/BlogCategories"
// Hidden on the home page for now (to bring it back, uncomment its import and its tag):
// - HomeGallery: the bottom mosaic
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
            <MissionVision />
            <Border />
            <Projects />
            <Border />
            <Event />
            <Border />
            <BlogCategories />
            <Border />
            <Cta />
            <MantraStrip closing />
        </>
    )
}
