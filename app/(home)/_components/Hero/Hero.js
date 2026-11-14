'use client'
import { useEffect, useRef, useState } from "react"
import { Autoplay, EffectFade } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { CHARACTERS, SITE_NAME } from "../../../_shared/_components/siteContent"
import { useReducedMotion } from "../../../_shared/_components/utils"
import styles from "./Hero.module.css"

/* =============================================================================
   Home hero: two 16:9 artworks fading in turn, shown exactly as supplied (their nameplates carry their own
   lettering, so each slide is labelled with that name for screen readers). Styles: see Hero.module.css.

   Slide change — "zoom dissolve": the old picture melts away while slowly zooming out of frame; the new one
   settles in from slightly larger (Swiper's fade does the dissolve, the CSS the zoom).

   The slideshow pauses while the mouse is over it and can be stopped with the "स्लाइडशो थांबवा" button
   (it appears when Tab reaches it). Visitors who ask for reduced motion get no slideshow: the first artwork stays.

   The page's h1 is here: the trust's name, hidden from sight (the artwork already shows it).
   ========================================================================== */

const SLIDES = [
    { src: "/assets/media/home/slider-v1-img-1-plain.webp", name: CHARACTERS.swami.name },
    { src: "/assets/media/home/slider-v1-img-2-plain.webp", name: CHARACTERS.datta.name },
]

const SLIDE_MS = 1500          // a slide change takes this long: Swiper's cross-fade and the CSS zoom (--slide-ms)

const swiperOptions = {
    modules: [Autoplay, EffectFade],
    effect: "fade",
    fadeEffect: { crossFade: true },
    speed: SLIDE_MS,
    loop: true,
    allowTouchMove: false,
    autoplay: {
        delay: 5000,                  // how long a slide stays before the next change begins
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
}

export default function Hero() {
    const reducedMotion = useReducedMotion()
    const [paused, setPaused] = useState(false)
    const swiperRef = useRef(null)
    const playing = !reducedMotion && !paused

    // start / stop the slideshow when the visitor's choice changes
    useEffect(() => {
        const autoplay = swiperRef.current?.autoplay
        if (autoplay) playing ? autoplay.start() : autoplay.stop()
    }, [playing])

    return (
        <section className={styles.root} style={{ "--slide-ms": `${SLIDE_MS}ms` }}>
            <h1 className="visually-hidden" lang="mr">{SITE_NAME}</h1>
            {!reducedMotion && (
                <button type="button" className="pause-btn" aria-pressed={paused} onClick={() => setPaused((p) => !p)}>
                    स्लाइडशो थांबवा
                </button>
            )}
            <Swiper
                {...swiperOptions}
                className={styles.swiper}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper
                    if (!playing) swiper.autoplay.stop()
                }}
            >
                {SLIDES.map((slide) => (
                    <SwiperSlide key={slide.src}>
                        <div className={styles.media} role="img" aria-label={slide.name} lang="mr" style={{ backgroundImage: `url(${slide.src})` }} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
