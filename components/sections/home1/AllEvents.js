'use client'
import { useEffect, useRef, useState } from "react"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const allEvents = [
    { img: "assets/images/event/event-1.png", title: "श्री विश्वेश्‍वर स्वामी महाराज", subtitle: "जन्मदिन" },
    { img: "assets/images/event/event-2.png", title: "श्री शंकर महाराज", subtitle: "प्रकट दिन आणि पुण्यतिथी" },
    { img: "assets/images/event/event-3.png", title: "श्री दत्त प्रभू", subtitle: "जयंती आणि गुरुपौर्णिमा" },
    // hidden for now:
    // { img: "assets/images/event/event-4.png", title: "श्री गुरुपौर्णिमा उत्सव" },
    // { img: "assets/images/event/event-5.png", title: "श्री जनू काका जयंती आणि पुण्यतिथी" },
    // { img: "assets/images/event/event-6.png", title: "श्री मधू बुवा जयंती आणि पुण्यतिथी", zoom: true },
    // { img: "assets/images/event/event-7.png", title: "श्री शुभांगी माई वाढदिवस" },
]

const swiperOptions = {
    modules: [Navigation],
    // native scroll-snap: swipes glide and settle the way the phone/tablet
    // scrolls everywhere else; no autoplay pulling the cards away
    cssMode: true,
    // below desktop each card has a fixed, compact width set in CSS
    slidesPerView: 'auto',
    spaceBetween: 16,
    centerInsufficientSlides: true,
    navigation: {
        nextEl: '.all-events__nav--next',
        prevEl: '.all-events__nav--prev',
    },
    breakpoints: {
        768: { slidesPerView: 'auto', spaceBetween: 20 },
        1200: { slidesPerView: 3, spaceBetween: 32 },
    },
}

// phone only: as the row scrolls, the card nearest the centre is full
// size and the ones beside it shrink and fade, following the finger.
// The row also loops: the cards are rendered three times over and, once
// a swipe settles in an outer copy, the row jumps silently to the same
// card in the middle copy, so every card has a neighbour on both sides.
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
        if (!wrapper) return
        const n = allEvents.length
        let frame = 0
        let settleTimer = 0

        const slides = () => wrapper.querySelectorAll(".swiper-slide")
        const cards = () => wrapper.querySelectorAll(".all-events__card")
        const reset = () => cards().forEach((card) => {
            card.style.transform = ""
            card.style.opacity = ""
        })
        const centredIndex = () => {
            const mid = wrapper.scrollLeft + wrapper.clientWidth / 2
            let best = 0, bestDist = Infinity
            slides().forEach((slide, i) => {
                const dist = Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - mid)
                if (dist < bestDist) { best = i; bestDist = dist }
            })
            return best
        }
        const centreOn = (i) => {
            const slide = slides()[i]
            if (slide) wrapper.scrollLeft = slide.offsetLeft + slide.offsetWidth / 2 - wrapper.clientWidth / 2
        }
        const update = () => {
            frame = 0
            if (copies === 1) return reset()
            const box = wrapper.getBoundingClientRect()
            const centre = box.left + box.width / 2
            cards().forEach((card) => {
                const r = card.getBoundingClientRect()
                const d = Math.min(Math.abs(r.left + r.width / 2 - centre) / r.width, 1)
                card.style.transform = `scale(${1 - 0.14 * d})`
                card.style.opacity = `${1 - 0.45 * d}`
            })
        }
        // after a swipe comes to rest, move from an outer copy back to the
        // matching card in the middle copy; it looks identical, so the jump
        // can't be seen
        const settle = () => {
            if (copies === 1) return
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

        // start on the first card of the middle copy
        if (copies > 1) centreOn(n)
        update()
        wrapper.addEventListener("scroll", onScroll, { passive: true })
        window.addEventListener("resize", onScroll)
        return () => {
            cancelAnimationFrame(frame)
            clearTimeout(settleTimer)
            wrapper.removeEventListener("scroll", onScroll)
            window.removeEventListener("resize", onScroll)
            reset()
        }
    }, [wrapperRef, copies])
}

export default function AllEvents() {
    const wrapperRef = useRef(null)
    const copies = usePhoneCopies()
    useScrollFocus(wrapperRef, copies)
    const middle = Math.floor(copies / 2)
    const slides = Array.from({ length: copies }, (_, copy) =>
        allEvents.map((event, index) => ({ ...event, key: `${copy}-${index}`, clone: copy !== middle }))
    ).flat()

    return (
        <>
        {/**All Events Start */}
        <section className="all-events all-events--welcome-bg">
            <div className="divine-border--all-events divine-border--all-events-top" role="presentation"></div>
            <div className="divine-border--all-events-vertical divine-border--all-events-left" role="presentation"></div>
            <div className="divine-border--all-events-vertical divine-border--all-events-right" role="presentation"></div>
            <span className="all-events__corner all-events__corner--tl" aria-hidden="true"></span>
            <span className="all-events__corner all-events__corner--tr" aria-hidden="true"></span>
            <span className="all-events__corner all-events__corner--bl" aria-hidden="true"></span>
            <span className="all-events__corner all-events__corner--br" aria-hidden="true"></span>
            <div className="divine-border--all-events divine-border--all-events-bottom" role="presentation"></div>

            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1 all-events__title-row">
                    {/* toran animations beside the heading hidden for now */}
                    {/* <video src="assets/images/resources/toran.mov" className="all-events__toran all-events__toran--left" aria-hidden="true" muted loop playsInline autoPlay/> */}
                    <div className="all-events__title-inner">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">सेवा, भक्ती आणि आनंदाचे क्षण</span>
                        </div>
                        <h2 className="section-title__title title-animation">मठातील वार्षिक उत्सव</h2>
                    </div>
                    {/* <video src="assets/images/resources/toran.mov" className="all-events__toran all-events__toran--right" aria-hidden="true" muted loop playsInline autoPlay/> */}
                </div>

                <div className="all-events__carousel-wrap">
                    <Swiper {...swiperOptions} className="all-events__carousel" onSwiper={(swiper) => { wrapperRef.current = swiper.wrapperEl }}>
                        {slides.map((event) => (
                            <SwiperSlide key={event.key} aria-hidden={event.clone || undefined}>
                                <div className="all-events__card">
                                    <div className="all-events__photo">
                                        <img src={event.img} alt={event.subtitle ? `${event.title} ${event.subtitle}` : event.title}/>
                                    </div>
                                    <div className="all-events__plate">
                                        <h3 className="all-events__title">
                                            <span className="all-events__name">{event.title}</span>
                                            {event.subtitle && <span className="all-events__occasion">{event.subtitle}</span>}
                                        </h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <button type="button" className="all-events__nav all-events__nav--prev" aria-label="Previous">
                        <i className="icon-arrow-right"></i>
                    </button>
                    <button type="button" className="all-events__nav all-events__nav--next" aria-label="Next">
                        <i className="icon-arrow-right"></i>
                    </button>
                </div>
            </div>
        </section>
        {/**All Events End */}
        </>
    )
}
