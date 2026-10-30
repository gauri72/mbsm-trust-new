import Layout from "@/components/layout/Layout"
import HeroSlider from "@/components/shared/HeroSlider/HeroSlider"
import About from "@/components/sections/home1/About"
import Testimonial from "@/components/sections/home1/Testimonial"
import Cta from "@/components/sections/home1/Cta"
import Blog from "@/components/sections/home1/Blog"
import Found from "@/components/sections/home1/Found"
import Donation from "@/components/sections/home1/Donation"
import Donate from "@/components/sections/home1/Donate"
import Who from "@/components/sections/home1/Who"
import Event from "@/components/sections/home1/Event"
import Country from "@/components/sections/home1/Country"

export default function Home() {

    return (
        <>
            <div className="dark-version">
                <Layout headerStyle={5} footerStyle={1}>
                    <HeroSlider />
                    <About />
                    <Found />
                    <Donation />
                    <Donate />
                    <Who />
                    <Event />
                    <Testimonial />
                    <Blog />
                    <Country />
                    <Cta />
                </Layout>
            </div>
        </>
    )
}