'use client'
import Layout from "@/components/layout/Layout"
import MantraStrip from "@/components/shared/MantraStrip/MantraStrip"
import PageHero from "@/components/shared/PageHero/PageHero"
import { PAGE_HERO_IMAGES } from "@/lib/data/heroImages"
import { CLOSING_MANTRAS } from "@/lib/data/mantras"
import TempleGallery from "@/components/shared/TempleGallery/TempleGallery"
// hidden for now (between gallery and CTA) — uncomment here and below to restore
// import Donation from "@/components/sections/home1/Donation"
// import Donate from "@/components/sections/home1/Donate"
import DonateQr from "@/components/sections/denagi/DonateQr"
import DonateFaq from "@/components/sections/denagi/DonateFaq"
import Cta from "@/components/sections/home1/Cta"

export default function DonationPage() {
    return (
        <>
        <Layout headerStyle={1} footerStyle={1} mantraStrip={<MantraStrip />}>

        <PageHero image={PAGE_HERO_IMAGES.denagi} />

        <TempleGallery compact />

        {/* hidden for now: <Donation /> and <Donate /> */}

        <DonateQr />

        <DonateFaq />

        <Cta />
        <MantraStrip mantras={CLOSING_MANTRAS} />
        </Layout>
        </>
    )
}
