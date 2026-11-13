'use client'
import { Autoplay, EffectFade } from "swiper/modules"
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react"
import { motion, MotionConfig } from "framer-motion"
import { SLIDE_DURATION, SLIDE_SCALE, SLIDE_TRANSITION } from "./heroMotion"
import styles from "./Hero.module.css"

/* =============================================================================
   Home hero: two 16:9 artworks fading in turn, shown exactly as supplied (their nameplates
   carry their own lettering). Nothing is layered on them and there is no reveal animation
   when the page opens. The slides change with a slow zoom dissolve (heroMotion.js).
   Styles: see Hero.module.css.
   ========================================================================== */

const HOME_SLIDES = [
    "/assets/media/home/slider-v1-img-1-plain.webp",
    "/assets/media/home/slider-v1-img-2-plain.webp",
]

const swiperOptions = {
    modules: [Autoplay, EffectFade],
    effect: "fade",
    fadeEffect: { crossFade: true },
    speed: SLIDE_DURATION * 1000,     // = the zoom dissolve's duration (milliseconds here)
    loop: true,
    allowTouchMove: false,
    autoplay: {
        delay: 5000,                  // how long a slide stays before the next change begins
        disableOnInteraction: false,
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

export default function Hero() {
    return (
        <MotionConfig reducedMotion="user">
            <section className={styles.root}>
                <Swiper {...swiperOptions} className={styles.swiper}>
                    {HOME_SLIDES.map((src) => (
                        <SwiperSlide key={src}>
                            {/* decorative artwork */}
                            <Slide src={src} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </MotionConfig>
    )
}
