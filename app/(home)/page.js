import Mantra from "../_shared/_components/Mantra/Mantra"
import HeroSlider from "./_components/HeroSlider/HeroSlider"
import Border from "../_shared/_components/Border/Border"
import Gallery from "../_shared/_components/Gallery/Gallery"
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
            <Mantra />
            <HeroSlider />
            <Border />
            <Gallery />
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
            <Mantra closing />
        </>
    )
}
