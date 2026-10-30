'use client'
import Layout from "@/components/layout/Layout"
import MantraStrip from "@/components/shared/MantraStrip/MantraStrip"
import PageHero from "@/components/shared/PageHero/PageHero"
import { PAGE_HERO_IMAGES } from "@/lib/data/heroImages"
import { CLOSING_MANTRAS } from "@/lib/data/mantras"
import TempleGallery from "@/components/shared/TempleGallery/TempleGallery"
import PhotoGallery from "@/components/sections/gallery/PhotoGallery"
import VideoGallery from "@/components/sections/gallery/VideoGallery"
import Cta from "@/components/sections/home1/Cta"

export default function GalleryPage() {
    return (
        <>
        <Layout headerStyle={1} footerStyle={1} mantraStrip={<MantraStrip />}>

        <PageHero image={PAGE_HERO_IMAGES.gallery} />

        <TempleGallery />

        <PhotoGallery />

        <VideoGallery />

        <Cta />
        <MantraStrip mantras={CLOSING_MANTRAS} />
        </Layout>
        </>
    )
}
