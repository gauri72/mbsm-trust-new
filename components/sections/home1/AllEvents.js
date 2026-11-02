'use client'
import { Autoplay, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const allEvents = [
    { img: "assets/images/event/event-1.png", title: "श्री शुभराय महाराज पुण्यतिथी" },
    { img: "assets/images/event/event-2.png", title: "श्री शंकर महाराज प्रकट दिन आणि पुण्यतिथी", zoom: true },
    { img: "assets/images/event/event-3.png", title: "श्री दत्त महाराज जयंती" },
    { img: "assets/images/event/event-4.png", title: "श्री गुरुपौर्णिमा उत्सव", zoom: true },
    // hidden for now:
    // { img: "assets/images/event/event-5.png", title: "श्री जनू काका जयंती आणि पुण्यतिथी" },
    // { img: "assets/images/event/event-6.png", title: "श्री मधू बुवा जयंती आणि पुण्यतिथी", zoom: true },
    // { img: "assets/images/event/event-7.png", title: "श्री शुभांगी माई वाढदिवस" },
]

const swiperOptions = {
    modules: [Autoplay, Navigation],
    slidesPerView: 3,
    spaceBetween: 32,
    // Swiper can only loop with at least twice as many slides as it shows;
    // with fewer events, slide to the end and jump back to the start instead
    loop: allEvents.length >= 6,
    rewind: allEvents.length < 6,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.all-events__nav--next',
        prevEl: '.all-events__nav--prev',
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
    },
}

export default function AllEvents() {
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
                    <Swiper {...swiperOptions} className="all-events__carousel">
                        {allEvents.map((event, index) => (
                            <SwiperSlide key={index}>
                                <div className="all-events__card">
                                    <div className="all-events__photo">
                                        <img src={event.img} alt={event.title} className={event.zoom ? "all-events__photo-img--zoom" : ""}/>
                                    </div>
                                    <div className="all-events__plate">
                                        <h3 className="all-events__title">{event.title}</h3>
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
