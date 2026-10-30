'use client'
import Layout from "@/components/layout/Layout"
import MantraStrip from "@/components/shared/MantraStrip/MantraStrip"
import PageHero from "@/components/shared/PageHero/PageHero"
import { PAGE_HERO_IMAGES } from "@/lib/data/heroImages"
import { CLOSING_MANTRAS } from "@/lib/data/mantras"
import TempleGallery from "@/components/shared/TempleGallery/TempleGallery"
import OurStory from "@/components/sections/about/OurStory"
import Legacy from "@/components/sections/home1/Legacy"

import Cta from "@/components/sections/home1/Cta"


export default function Home() {
    return (
        <>
        <Layout headerStyle={1} footerStyle={1}>

       {/*Mantra Strip (between header and breadcrumb) */}
       <MantraStrip />

       <PageHero image={PAGE_HERO_IMAGES.about} />

       <TempleGallery />

       <Legacy />

        <OurStory />

        <Cta />

        <MantraStrip mantras={CLOSING_MANTRAS} />

        </Layout>
        </>
    )
}


