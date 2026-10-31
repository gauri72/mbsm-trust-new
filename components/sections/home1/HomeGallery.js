'use client'
import Link from "next/link"

const galleryItems = [
    { src: "assets/images/gallery/gallery-1.png", label: "भक्तीचा सोहळा", position: "center 40%" },
    { src: "assets/images/gallery/gallery-2.png", label: "कट्यारधारी मारुती", position: "center 35%" },
    { src: "assets/images/gallery/gallery-3.png", label: "हिरवा शृंगार", position: "center 30%" },
    { src: "assets/images/gallery/gallery-4.png", label: "अर्पण भाव", position: "center 45%" },
    { src: "assets/images/gallery/gallery-5.png", label: "तपाची साधना", position: "center 20%" },
    { src: "assets/images/gallery/gallery-6.png", label: "दिव्य दर्शन", position: "center 25%" },
]

export default function HomeGallery() {
    return (
        <>
        {/*Home Gallery Start */}
        <section className="home-gallery">
            {/* Maroon Om/swastik ornamental border framing the section */}
            <div className="divine-border--found divine-border--found-top" role="presentation"></div>
            <div className="divine-border--found-vertical divine-border--found-left" role="presentation"></div>
            <div className="divine-border--found-vertical divine-border--found-right" role="presentation"></div>
            <span className="found-one__corner found-one__corner--tl" aria-hidden="true"></span>
            <span className="found-one__corner found-one__corner--tr" aria-hidden="true"></span>
            <span className="found-one__corner found-one__corner--bl" aria-hidden="true"></span>
            <span className="found-one__corner found-one__corner--br" aria-hidden="true"></span>
            <div className="divine-border--found divine-border--found-bottom" role="presentation"></div>

            <div className="home-gallery__bg"></div>

            <div className="container">
                <div className="home-gallery__title-wrap">
                    {/* Peacock-feather borders flanking the heading, left & right */}
                    <img
                        className="home-gallery__feather home-gallery__feather--left"
                        src="assets/images/resources/feather-border.png"
                        alt=""
                        aria-hidden="true"
                    />
                    <img
                        className="home-gallery__feather home-gallery__feather--right"
                        src="assets/images/resources/feather-border.png"
                        alt=""
                        aria-hidden="true"
                    />
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">क्षणचित्रे</span>
                        </div>
                        <h2 className="section-title__title title-animation">परंपरेची <span>पवित्र झलक</span></h2>
                    </div>
                </div>

                <div className="home-gallery__grid">
                    {galleryItems.map((item, index) => (
                        <div
                            className="home-gallery__item wow fadeInUp"
                            data-wow-delay={`${100 + (index % 3) * 120}ms`}
                            key={index}
                        >
                            <div className="home-gallery__media">
                                <img
                                    src={item.src}
                                    alt={`श्री शुभराय महाराज मठ — ${item.label}`}
                                    style={{ objectPosition: item.position || "center" }}
                                />
                            </div>
                            <span className="home-gallery__frame" aria-hidden="true"></span>
                            <span className="home-gallery__corner home-gallery__corner--tl" aria-hidden="true"></span>
                            <span className="home-gallery__corner home-gallery__corner--br" aria-hidden="true"></span>
                            <span className="home-gallery__caption">{item.label}</span>
                        </div>
                    ))}
                </div>

                <div className="home-gallery__btn-box found-one__btn-box text-center wow fadeInUp" data-wow-delay="200ms">
                    <img
                        className="home-gallery__peacock home-gallery__peacock--left"
                        src="assets/images/resources/peacock-border.png"
                        alt=""
                        aria-hidden="true"
                    />
                    <Link href="/chitrasangraha" className="home-gallery__btn thm-btn">
                        संपूर्ण दालन पाहा<span><i className="icon-arrow-right"></i></span>
                    </Link>
                    <img
                        className="home-gallery__peacock home-gallery__peacock--right"
                        src="assets/images/resources/peacock-border.png"
                        alt=""
                        aria-hidden="true"
                    />
                </div>
            </div>
        </section>
        {/*Home Gallery End */}
        </>
    )
}
