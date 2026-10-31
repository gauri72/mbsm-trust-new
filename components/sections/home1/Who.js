'use client'
import Link from "next/link"

const stats = [
    {
        icon: "icon-calender",
        value: "1783",
        label: "Founded",
        note: "Established by Shri Shubharay Maharaj in the heart of Solapur",
    },
    {
        icon: "icon-love",
        value: "4.8",
        label: "Devotee Rating",
        note: "Rated by devotees for its peaceful, welcoming atmosphere",
    },
    {
        icon: "icon-hand",
        value: "4",
        label: "Annual Festivals",
        note: "Aashadi, Kartiki, Magh & Chaitra Ekadashi celebrated every year",
    },
]

export default function Who() {
    return (
        <>
        {/*Who We Are Start */}
        <section className="who-we-are">
            <div className="container">
                <div className="who-we-are__inner">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="who-we-are__left">
                                <div className="section-title text-left sec-title-animation animation-style2">
                                    <div className="section-title__tagline-box">
                                        <span className="section-title__tagline">Who We Are</span>
                                    </div>
                                    <h2 className="section-title__title title-animation">A Living Tradition
                                        Of Faith &amp; Seva</h2>
                                </div>
                                <p className="who-we-are__text">Shri Shubharay Maharaj Math is a spiritual home in
                                    Solapur built on devotion, art and selfless service. What began as one saint's
                                    retreat from a life of power has grown into a place where devotees still gather
                                    for daily aarti, seasonal festivals and quiet reflection — carrying forward a
                                    legacy that has stood for well over two centuries.</p>
                                <div className="who-we-are__btn-box">
                                    <Link href="/parichaya" className="who-we-are__btn thm-btn">Know Our Full Story<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 wow fadeInRight" data-wow-delay="200ms">
                            <div className="who-we-are__right">
                                <ul className="who-we-are__stat-list list-unstyled">
                                    {stats.map((stat, index) => (
                                        <li
                                            key={index}
                                            className="who-we-are__stat-card wow fadeInUp"
                                            data-wow-delay={`${300 + index * 150}ms`}
                                        >
                                            <div className="who-we-are__stat-icon">
                                                <span className={stat.icon}></span>
                                            </div>
                                            <div className="who-we-are__stat-body">
                                                <div className="who-we-are__stat-value">
                                                    <h3>{stat.value}</h3>
                                                    <span>{stat.label}</span>
                                                </div>
                                                <p>{stat.note}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Who We Are End */}

        </>
    )
}
