import MantraStrip from "../_shared/_components/MantraStrip/MantraStrip"
import HeroSlider from "./_components/HeroSlider/HeroSlider"
import TempleGallery from "../_shared/_components/TempleGallery/TempleGallery"
import Cta from "../_shared/_components/Cta/Cta"
// Hidden on the home page for now (to bring one back, uncomment its import and its tag):
// - Welcome: its visit-card lives in the Contact page's FAQ section
// - HomeGallery: the bottom mosaic
// - MissionVision: the mission / vision / goal section
// - Event: upcoming events
// import Welcome from "./_components/Welcome/Welcome"
// import HomeGallery from "./_components/HomeGallery/HomeGallery"
// import MissionVision from "./_components/MissionVision/MissionVision"
// import Event from "./_components/Event/Event"

export default function Home() {
    return (
        <>
            <MantraStrip />
            <HeroSlider />
            <TempleGallery />
            {/* <Welcome /> */}
            {/* <MissionVision /> */}
            {/* <Event /> */}
            <Cta />
            <MantraStrip closing />
        </>
    )
}
