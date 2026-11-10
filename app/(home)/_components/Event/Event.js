'use client'
import Link from "next/link"
import styles from "./Event.module.css"

const events = [
    {
        img: "assets/media/home/event-1-1.webp",
        date: "17 Nov 2026",
        title: "श्री शंकर महाराज प्रकट दिन",
    },
    {
        img: "assets/media/home/event-1-2.webp",
        date: "23 Dec 2026",
        title: "श्री दत्त प्रभू जयंती",
    },
    {
        img: "assets/media/home/event-1-3.webp",
        date: "06 Feb 2027",
        // "\u200D" keeps the second श्व as half-श + व (श्‍व), matching the hero name plaque
        title: "श्री विश्वेश\u094D\u200Dवर स्वामी महाराज जन्मदिन",
    },
]

export default function Event() {
    return (
        <>

        {/**Event One Start */}
        <section className={`${styles.eventOne} ${styles.eventOneWelcomeBg}`}>
            <div className="container">
                <div className={styles.head}>
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline" lang="mr">आगामी उत्सव</span>
                        </div>
                        <h2 className="section-title__title title-animation" lang="mr">भक्तीचा सोहळा, आनंदाचा मेळा</h2>
                    </div>
                </div>
                <div className="row">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className={`col-xl-4 col-lg-4 wow ${index === 0 ? "fadeInLeft" : index === 1 ? "fadeInUp" : "fadeInRight"}`}
                            data-wow-delay={`${(index + 1) * 100}ms`}
                        >
                            <div className={styles.single}>
                                <div className={styles.imgBox}>
                                    <div className={styles.img}>
                                        {event.video ? (
                                            // Looping clip; the still image is the poster until it starts
                                            <video src={event.video} poster={event.img} aria-label={event.title} autoPlay muted loop playsInline />
                                        ) : (
                                            <img src={event.img} alt={event.title}/>
                                        )}
                                    </div>
                                    {/* date badge: the day large, the month and year below */}
                                    <div className={styles.badge} aria-label={event.date}>
                                        <span className={styles.badgeDay}>{event.date.split(" ")[0]}</span>
                                        <span className={styles.badgeMonth}>{event.date.split(" ").slice(1).join(" ")}</span>
                                    </div>
                                </div>
                                <div className={styles.content}>
                                    <h4 className={styles.title}>{event.title}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`${styles.cta} wow fadeInUp`} data-wow-delay="300ms">
                    <Link href="/karyakram" className={`${styles.btn} thm-btn`}>सर्व उत्सव पाहा<span><i
                                className="fas fa-arrow-right"></i></span></Link>
                </div>
            </div>
        </section>
        {/**Event One End */}

        </>
    )
}
