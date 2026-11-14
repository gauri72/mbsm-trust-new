import Border from "../_shared/_components/Border/Border"
import Gallery from "../_shared/_components/Gallery/Gallery"
import Hero from "./_components/Hero/Hero"
import About from "./_components/About/About"
import Projects from "./_components/Projects/Projects"
import Events from "./_components/Events/Events"
import Blogs from "./_components/Blogs/Blogs"

// The mantra, the closing call-to-action and the closing mantra are the shared frame in app/template.js.
export default function HomePage() {
    return (
        <>
            <Hero />
            <Gallery />
            <Border />
            <About />
            <Border />
            <Projects />
            <Border />
            <Events />
            <Border />
            <Blogs />
            <Border />
        </>
    )
}
