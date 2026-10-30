'use client'
import { Autoplay, EffectFade } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Curtain from "@/components/shared/Curtain/Curtain"
import { HOME_SLIDES } from "@/lib/data/heroImages"
import styles from "./HeroSlider.module.css"

// The slideshow stays on the first slide until the curtain is mostly up.
const SLIDESHOW_START_MS = 6300

const swiperOptions = {
    modules: [Autoplay, EffectFade],
    effect: "fade",
    fadeEffect: { crossFade: true },
    speed: 1200,
    loop: true,
    allowTouchMove: false,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        enabled: false,
    },
}

// Home hero: fading image slideshow revealed by the curtain.
export default function HeroSlider() {
    return (
        <section className={styles.root}>
            <Swiper
                {...swiperOptions}
                className={styles.carousel}
                onSwiper={(swiper) => {
                    // skip if the visitor already left the page
                    setTimeout(() => {
                        if (!swiper.destroyed) swiper.autoplay.start()
                    }, SLIDESHOW_START_MS)
                }}
            >
                {HOME_SLIDES.map((src) => (
                    <SwiperSlide key={src}>
                        <div className={styles.media} style={{ backgroundImage: `url(${src})` }}></div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Curtain variant="home" />
        </section>
    )
}
