'use client'
import Link from "next/link"

const events = [
    {
        img: "assets/images/event/event-1-1.jpg",
        date: "17 Nov 2026",
        title: "श्री शंकर महाराज प्रकट दिन",
    },
    {
        img: "assets/images/event/event-1-2.jpg",
        date: "23 Dec 2026",
        title: "श्री दत्त प्रभू जयंती",
    },
    {
        img: "assets/images/event/event-1-3.jpg",
        date: "06 Feb 2027",
        // "\u200D" keeps the second श्व as half-श + व (श्‍व), matching the hero name plaque
        title: "श्री विश्वेश\u094D\u200Dवर स्वामी महाराज जन्मदिन",
    },
]

export default function Event() {
    return (
        <>

        {/**Event One Start */}
        <section className="event-one event-one--welcome-bg">
            <div className="divine-border--welcome divine-border--welcome-top" role="presentation"></div>
            <div className="divine-border--welcome-vertical divine-border--welcome-left" role="presentation"></div>
            <div className="divine-border--welcome-vertical divine-border--welcome-right" role="presentation"></div>
            <span className="welcome-one__corner welcome-one__corner--tl" aria-hidden="true"></span>
            <span className="welcome-one__corner welcome-one__corner--tr" aria-hidden="true"></span>
            <span className="welcome-one__corner welcome-one__corner--bl" aria-hidden="true"></span>
            <span className="welcome-one__corner welcome-one__corner--br" aria-hidden="true"></span>
            <div className="divine-border--welcome divine-border--welcome-bottom" role="presentation"></div>
            <div className="container">
                <div className="event-one__head">
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">उत्सव-परंपरा</span>
                        </div>
                        <h2 className="section-title__title title-animation">मठातील आगामी उत्सव</h2>
                    </div>
                </div>
                <div className="row">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className={`col-xl-4 col-lg-4 wow ${index === 0 ? "fadeInLeft" : index === 1 ? "fadeInUp" : "fadeInRight"}`}
                            data-wow-delay={`${(index + 1) * 100}ms`}
                        >
                            <div className="event-one__single">
                                <div className="event-one__img-box">
                                    <div className="event-one__img">
                                        {event.video ? (
                                            // Looping clip; the still image is the poster until it starts
                                            <video src={event.video} poster={event.img} aria-label={event.title} autoPlay muted loop playsInline />
                                        ) : (
                                            <img src={event.img} alt={event.title}/>
                                        )}
                                    </div>
                                </div>
                                <div className="event-one__content">
                                    <h4 className="event-one__title">{event.title}</h4>
                                    <p className="event-one__date">
                                        <span className="icon-calender" aria-hidden="true"></span>
                                        <span>{event.date}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="event-one__cta wow fadeInUp" data-wow-delay="300ms">
                    <Link href="/sadhana" className="event-one__btn thm-btn">सर्व उत्सव पाहा<span><i
                                className="icon-arrow-right"></i></span></Link>
                </div>
            </div>
        </section>
        {/**Event One End */}

        </>
    )
}
