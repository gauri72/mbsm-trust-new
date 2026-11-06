'use client'
import { useEffect, useRef } from "react"
import { Autoplay, EffectFade } from "swiper/modules"
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react"
import { motion, MotionConfig } from "framer-motion"
import { SLIDE_SCALE, SLIDE_TRANSITION } from "../../../_shared/heroMotion"
import styles from "./HeroSlider.module.css"

/* =============================================================================
   Home hero: two 16:9 artworks fading in turn, shown exactly as supplied (their nameplates
   carry their own lettering). Nothing is layered on them and there is no reveal animation
   when the page opens. The slides change with a slow zoom dissolve (_shared/heroMotion.js).
   Styles: see HeroSlider.module.css.
   ========================================================================== */

const HOME_SLIDES = [
    "/assets/media/home/slider-v1-img-1-plain.webp",
    "/assets/media/home/slider-v1-img-2-plain.webp",
]

// the slideshow starts a moment after the page is shown
const SLIDESHOW_START_MS = 1000

const swiperOptions = {
    modules: [Autoplay, EffectFade],
    effect: "fade",
    fadeEffect: { crossFade: true },
    speed: 1500,                      // = the zoom dissolve's duration
    loop: true,
    allowTouchMove: false,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        enabled: false,
    },
}

// One slide: settled while it is the active one, a little larger while it waits or leaves — so the
// incoming picture settles in as the outgoing one zooms away (Swiper's fade does the dissolve).
function Slide({ src }) {
    const { isActive } = useSwiperSlide()
    return (
        <motion.div
            className={styles.media}
            style={{ backgroundImage: `url(${src})` }}
            initial={false}
            animate={{ scale: isActive ? SLIDE_SCALE.active : SLIDE_SCALE.idle }}
            transition={SLIDE_TRANSITION}
        />
    )
}

export default function HeroSlider() {
    const swiperRef = useRef(null)

    useEffect(() => {
        const timer = setTimeout(() => {
            const swiper = swiperRef.current
            if (swiper && !swiper.destroyed) swiper.autoplay.start()
        }, SLIDESHOW_START_MS)
        return () => clearTimeout(timer)
    }, [])

    return (
        <MotionConfig reducedMotion="user">
            <section className={styles.root}>
                <div className={styles.carousel}>
                    <Swiper
                        {...swiperOptions}
                        className={styles.swiper}
                        onSwiper={(swiper) => { swiperRef.current = swiper }}
                    >
                        {HOME_SLIDES.map((src) => (
                            <SwiperSlide key={src}>
                                {/* decorative artwork */}
                                <Slide src={src} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </MotionConfig>
    )
}
