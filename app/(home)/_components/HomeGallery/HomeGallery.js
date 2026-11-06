'use client'
import Link from "next/link"
import styles from "./HomeGallery.module.css"

const galleryItems = [
    { src: "assets/media/home/gallery-1.png", label: "भक्तीचा सोहळा", position: "center 40%" },
    { src: "assets/media/home/gallery-2.png", label: "कट्यारधारी मारुती", position: "center 35%" },
    { src: "assets/media/home/gallery-3.png", label: "हिरवा शृंगार", position: "center 30%" },
    { src: "assets/media/home/gallery-4.png", label: "अर्पण भाव", position: "center 45%" },
    { src: "assets/media/home/gallery-5.png", label: "तपाची साधना", position: "center 20%" },
    { src: "assets/media/home/gallery-6.png", label: "दिव्य दर्शन", position: "center 25%" },
]

export default function HomeGallery() {
    return (
        <>
        {/*Home Gallery Start */}
        <section className={styles.homeGallery}>
            {/* Maroon Om/swastik ornamental border framing the section */}
            <div className={`${styles.divineBorderFound} ${styles.divineBorderFoundTop}`} role="presentation"></div>
            <div className={`${styles.divineBorderFoundVertical} ${styles.divineBorderFoundLeft}`} role="presentation"></div>
            <div className={`${styles.divineBorderFoundVertical} ${styles.divineBorderFoundRight}`} role="presentation"></div>
            <span className={`${styles.foundOneCorner} ${styles.foundOneCornerTl}`} aria-hidden="true"></span>
            <span className={`${styles.foundOneCorner} ${styles.foundOneCornerTr}`} aria-hidden="true"></span>
            <span className={`${styles.foundOneCorner} ${styles.foundOneCornerBl}`} aria-hidden="true"></span>
            <span className={`${styles.foundOneCorner} ${styles.foundOneCornerBr}`} aria-hidden="true"></span>
            <div className={`${styles.divineBorderFound} ${styles.divineBorderFoundBottom}`} role="presentation"></div>

            <div className={styles.bg}></div>

            <div className="container">
                <div className={styles.titleWrap}>
                    {/* Peacock-feather borders flanking the heading, left & right */}
                    <img
                        className={`${styles.feather} ${styles.featherLeft}`}
                        src="assets/media/shared/feather-border.png"
                        alt=""
                        aria-hidden="true"
                    />
                    <img
                        className={`${styles.feather} ${styles.featherRight}`}
                        src="assets/media/shared/feather-border.png"
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

                <div className={styles.grid}>
                    {galleryItems.map((item, index) => (
                        <div
                            className={`${styles.item} wow fadeInUp`}
                            data-wow-delay={`${100 + (index % 3) * 120}ms`}
                            key={index}
                        >
                            <div className={styles.media}>
                                <img
                                    src={item.src}
                                    alt={`श्री शुभराय महाराज मठ — ${item.label}`}
                                    style={{ objectPosition: item.position || "center" }}
                                />
                            </div>
                            <span className={styles.frame} aria-hidden="true"></span>
                            <span className={`${styles.corner} ${styles.cornerTl}`} aria-hidden="true"></span>
                            <span className={`${styles.corner} ${styles.cornerBr}`} aria-hidden="true"></span>
                            <span className={styles.caption}>{item.label}</span>
                        </div>
                    ))}
                </div>

                <div className={`${styles.btnBox} ${styles.foundOneBtnBox} text-center wow fadeInUp`} data-wow-delay="200ms">
                    <img
                        className={`${styles.peacock} ${styles.peacockLeft}`}
                        src="assets/media/shared/peacock-border.png"
                        alt=""
                        aria-hidden="true"
                    />
                    <Link href="/chitrasangraha" className={`${styles.btn} thm-btn`}>
                        संपूर्ण दालन पाहा<span><i className="fas fa-arrow-right"></i></span>
                    </Link>
                    <img
                        className={`${styles.peacock} ${styles.peacockRight}`}
                        src="assets/media/shared/peacock-border.png"
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
