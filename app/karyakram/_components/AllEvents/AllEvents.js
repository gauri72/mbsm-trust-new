'use client'
import { useEffect, useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import styles from "./AllEvents.module.css"

const allEvents = [
    { img: "assets/media/karyakram/event-1.png", title: "श्री विश्वेश्‍वर स्वामी महाराज", subtitle: "जन्मदिन" },
    { img: "assets/media/karyakram/event-2.png", title: "श्री शंकर महाराज", subtitle: "प्रकट दिन आणि पुण्यतिथी" },
    { img: "assets/media/karyakram/event-3.png", title: "श्री दत्त प्रभू", subtitle: "जयंती आणि गुरुपौर्णिमा" },
    // hidden for now:
    // { img: "assets/media/karyakram/event-4.png", title: "श्री गुरुपौर्णिमा उत्सव" },
    // { img: "assets/media/karyakram/event-5.png", title: "श्री जनू काका जयंती आणि पुण्यतिथी" },
    // { img: "assets/media/karyakram/event-6.png", title: "श्री मधू बुवा जयंती आणि पुण्यतिथी", zoom: true },
    // { img: "assets/media/karyakram/event-7.png", title: "श्री शुभांगी माई वाढदिवस" },
]

const swiperOptions = {
    // native scroll-snap: swipes (and trackpad scrolls) glide and settle
    // naturally; no autoplay pulling the cards away. Card widths are set
    // in CSS per screen size.
    cssMode: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
    breakpoints: {
        768: { slidesPerView: 'auto', spaceBetween: 20 },
        1200: { slidesPerView: 'auto', spaceBetween: 28 },
    },
}

// Phone only: as the row scrolls, the card nearest the centre is full
// size and the ones beside it shrink and fade. The row also loops: the
// cards are rendered three times over and, once a scroll settles in an
// outer copy, the row jumps silently to the same card in the middle copy,
// so every card always has a neighbour on both sides. Tablet and desktop
// show the three cards as a static row.
const PHONE = "(max-width: 767px)"
const PHONE_COPIES = 3

function usePhoneCopies() {
    const [copies, setCopies] = useState(1)
    useEffect(() => {
        const mq = window.matchMedia(PHONE)
        const sync = () => setCopies(mq.matches ? PHONE_COPIES : 1)
        sync()
        mq.addEventListener("change", sync)
        return () => mq.removeEventListener("change", sync)
    }, [])
    return copies
}

function useScrollFocus(wrapperRef, copies) {
    useEffect(() => {
        const wrapper = wrapperRef.current
        if (!wrapper || copies === 1) return
        const n = allEvents.length
        let frame = 0
        let settleTimer = 0

        const slideEls = () => wrapper.querySelectorAll(".swiper-slide")
        const cards = () => wrapper.querySelectorAll(`.${styles.card}`)
        const centredIndex = () => {
            const mid = wrapper.scrollLeft + wrapper.clientWidth / 2
            let best = 0, bestDist = Infinity
            slideEls().forEach((slide, i) => {
                const dist = Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - mid)
                if (dist < bestDist) { best = i; bestDist = dist }
            })
            return best
        }
        const centreOn = (i) => {
            const slide = slideEls()[i]
            if (slide) wrapper.scrollLeft = slide.offsetLeft + slide.offsetWidth / 2 - wrapper.clientWidth / 2
        }
        const update = () => {
            frame = 0
            const box = wrapper.getBoundingClientRect()
            const centre = box.left + box.width / 2
            cards().forEach((card) => {
                const r = card.getBoundingClientRect()
                const d = Math.min(Math.abs(r.left + r.width / 2 - centre) / r.width, 1)
                card.style.transform = `scale(${1 - 0.14 * d})`
                card.style.opacity = `${1 - 0.45 * d}`
            })
        }
        const settle = () => {
            const i = centredIndex()
            if (i < n) centreOn(i + n)
            else if (i >= 2 * n) centreOn(i - n)
            update()
        }
        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update)
            clearTimeout(settleTimer)
            settleTimer = setTimeout(settle, 140)
        }
        const onResize = () => {
            centreOn(centredIndex())
            onScroll()
        }

        // start on the first card of the middle copy
        centreOn(n)
        update()
        wrapper.addEventListener("scroll", onScroll, { passive: true })
        window.addEventListener("resize", onResize)
        return () => {
            cancelAnimationFrame(frame)
            clearTimeout(settleTimer)
            wrapper.removeEventListener("scroll", onScroll)
            window.removeEventListener("resize", onResize)
            cards().forEach((card) => {
                card.style.transform = ""
                card.style.opacity = ""
            })
        }
    }, [wrapperRef, copies])
}

export default function AllEvents() {
    const wrapperRef = useRef(null)
    const copies = usePhoneCopies()
    useScrollFocus(wrapperRef, copies)
    const slides = Array.from({ length: copies }, (_, copy) =>
        allEvents.map((event, index) => ({ ...event, key: `${copy}-${index}`, clone: copy !== Math.floor(copies / 2) }))
    ).flat()

    // phone arrows glide one card along; the loop keeps them from ending
    const step = (dir) => {
        const wrapper = wrapperRef.current
        const slide = wrapper?.querySelector(".swiper-slide")
        if (!slide) return
        const gap = parseFloat(slide.style.marginRight) || 0
        wrapper.scrollBy({ left: dir * (slide.offsetWidth + gap), behavior: "smooth" })
    }

    return (
        <>
        {/**All Events Start */}
        <section className={`${styles.allEvents} ${styles.allEventsWelcomeBg}`}>
            <div className="divine-border--all-events divine-border--all-events-top" role="presentation"></div>
            <div className="divine-border--all-events-vertical divine-border--all-events-left" role="presentation"></div>
            <div className="divine-border--all-events-vertical divine-border--all-events-right" role="presentation"></div>
            <span className="all-events__corner all-events__corner--tl" aria-hidden="true"></span>
            <span className="all-events__corner all-events__corner--tr" aria-hidden="true"></span>
            <span className="all-events__corner all-events__corner--bl" aria-hidden="true"></span>
            <span className="all-events__corner all-events__corner--br" aria-hidden="true"></span>
            <div className="divine-border--all-events divine-border--all-events-bottom" role="presentation"></div>

            <div className="container">
                <div className={`section-title text-center sec-title-animation animation-style1 ${styles.titleRow}`}>
                    {/* toran animations beside the heading hidden for now */}
                    {/* <video src="assets/media/karyakram/toran.mov" className="all-events__toran all-events__toran--left" aria-hidden="true" muted loop playsInline autoPlay/> */}
                    <div className={styles.titleInner}>
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">सेवा, भक्ती आणि आनंदाचे क्षण</span>
                        </div>
                        <h2 className="section-title__title title-animation">मठातील वार्षिक उत्सव</h2>
                    </div>
                    {/* <video src="assets/media/karyakram/toran.mov" className="all-events__toran all-events__toran--right" aria-hidden="true" muted loop playsInline autoPlay/> */}
                </div>

                <div className={styles.carouselWrap}>
                    <Swiper {...swiperOptions} className={styles.carousel} onSwiper={(swiper) => { wrapperRef.current = swiper.wrapperEl }}>
                        {slides.map((event) => (
                            <SwiperSlide key={event.key} aria-hidden={event.clone || undefined}>
                                <div className={styles.card}>
                                    <div className={styles.photo}>
                                        <img src={event.img} alt={event.subtitle ? `${event.title} ${event.subtitle}` : event.title}/>
                                    </div>
                                    <div className={styles.plate}>
                                        <h3 className={styles.title}>
                                            <span className={styles.name}>{event.title}</span>
                                            {event.subtitle && <span className={styles.occasion}>{event.subtitle}</span>}
                                        </h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <button type="button" className={`${styles.nav} ${styles.navPrev}`} aria-label="Previous" onClick={() => step(-1)}>
                        <i className="fas fa-arrow-right"></i>
                    </button>
                    <button type="button" className={`${styles.nav} ${styles.navNext}`} aria-label="Next" onClick={() => step(1)}>
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </section>
        {/**All Events End */}
        </>
    )
}
