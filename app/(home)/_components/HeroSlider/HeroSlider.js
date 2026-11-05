'use client'
import { Autoplay, EffectFade } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import styles from "./HeroSlider.module.css"

// Names on the plates. Rozha One stacks श्व and त्त into ligatures that read
// differently from the artwork's lettering; a zero-width joiner (U+200D) asks for the
// half-letter form instead (as the header and footer do for क्त).
const NAMES = {
    swami: "श्री विश्\u200Dवेश्\u200Dवर स्वामी महाराज",
    datta: "श्री शंकर दत्\u200Dत महाराज",
}

// Slides that fade in turn: the artwork (exported without lettering) + the name
// on its plate, set in Rozha
const HOME_SLIDES = [
    { src: "/assets/images/slider/slider-v1-img-1-plain.jpg", name: NAMES.swami },
    { src: "/assets/images/slider/slider-v1-img-2-plain.jpg", name: NAMES.datta },
]

// where the plate sits on the artwork (% of its width / height)
const PLATE = { x: 50.1, y: 89.6 }

// The slideshow stays on the first slide until its reveal (started as the
// preloader fades: html[data-page-ready]) has finished.
const SLIDESHOW_START_MS = 2000

// calls back once the preloader has started to fade (at once if it already has)
function whenPageReady(callback) {
    const html = document.documentElement
    if (html.hasAttribute("data-page-ready")) return callback(), () => {}
    const observer = new MutationObserver(() => {
        if (html.hasAttribute("data-page-ready")) { observer.disconnect(); callback() }
    })
    observer.observe(html, { attributes: true, attributeFilter: ["data-page-ready"] })
    return () => observer.disconnect()
}

const at = ({ x, y }) => ({ "--x": `${x}%`, "--y": `${y}%` })   // a point of the artwork, in %

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

/* =============================================================================
   Home hero: the artwork slideshow fading in turn, inside the gold Om · swastik
   frame, its names set in Rozha, fading in as the preloader fades
   (HeroSlider.module.css, section 3). Design rules: see HeroSlider.module.css.
   ========================================================================== */
export default function HeroSlider() {
    return (
        <section className={styles.root}>
            <Swiper
                {...swiperOptions}
                className={styles.carousel}
                onSwiper={(swiper) => {
                    // after the reveal; skip if the visitor already left the page
                    whenPageReady(() => setTimeout(() => {
                        if (!swiper.destroyed) swiper.autoplay.start()
                    }, SLIDESHOW_START_MS))
                }}
            >
                {HOME_SLIDES.map((slide) => (
                    <SwiperSlide key={slide.src}>
                        <div className={styles.art}>
                            {/* decorative artwork: its name is the text on the plate */}
                            <div className={styles.media} style={{ backgroundImage: `url(${slide.src})` }}></div>
                            <p className={styles.plate} style={at(PLATE)}>{slide.name}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* the CTA's Om · swastik frame: four bands + corners */}
            <div className={`${styles.frameH} ${styles.frameTop}`} aria-hidden="true"></div>
            <div className={`${styles.frameH} ${styles.frameBottom}`} aria-hidden="true"></div>
            <div className={`${styles.frameV} ${styles.frameLeft}`} aria-hidden="true"></div>
            <div className={`${styles.frameV} ${styles.frameRight}`} aria-hidden="true"></div>
            <span className={`${styles.corner} ${styles.cornerTl}`} aria-hidden="true"></span>
            <span className={`${styles.corner} ${styles.cornerTr}`} aria-hidden="true"></span>
            <span className={`${styles.corner} ${styles.cornerBl}`} aria-hidden="true"></span>
            <span className={`${styles.corner} ${styles.cornerBr}`} aria-hidden="true"></span>
        </section>
    )
}
