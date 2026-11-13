import Mantra from "../_shared/_components/Mantra/Mantra"
import Hero from "./_components/Hero/Hero"
import Border from "../_shared/_components/Border/Border"
import Gallery from "../_shared/_components/Gallery/Gallery"
import Cta from "../_shared/_components/Cta/Cta"
import About from "./_components/About/About"
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
            <Hero />
            <Border />
            <Gallery />
            <Border />
            <About />
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
