
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    loop: true,
    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}


export default function Banner() {
    return (
        <>
        {/* Main Slider Start */}
        <section className="main-slider-three">
            <Swiper {...swiperOptions} className="main-slider-three__carousel owl-carousel owl-theme">
                <SwiperSlide>
                <div className="item">
                    <div className="main-slider-three__shape-1"></div>
                    <div className="main-slider-three__shape-2">
                        <img src="assets/images/shapes/main-slider-three-shape-2.png" alt=""/>
                    </div>
                    <div className="main-slider-three__img">
                        <img src="assets/images/resources/main-slider-three-img-1.jpg" alt=""/>
                    </div>
                    <div className="container">
                        <div className="main-slider-three__content">
                            <h2 className="main-slider-three__title">They Need <br/> Your Help <br/> to Live</h2>
                            <p className="main-slider-three__text">We help companies develop powerful corporate social
                                responsibility, <br/> grantmaking, and employee engagement strategies. Dicta sunt </p>
                            <div className="main-slider-three__btn-box">
                                <Link href="/parichaya" className="thm-btn main-slider-three__btn">Discover more<span><i
                                            className="icon-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="item">
                    <div className="main-slider-three__shape-1"></div>
                    <div className="main-slider-three__shape-2">
                        <img src="assets/images/shapes/main-slider-three-shape-2.png" alt=""/>
                    </div>
                    <div className="main-slider-three__img">
                        <img src="assets/images/resources/main-slider-three-img-2.jpg" alt=""/>
                    </div>
                    <div className="container">
                        <div className="main-slider-three__content">
                            <h2 className="main-slider-three__title">They Need <br/> Your Help <br/> to Live</h2>
                            <p className="main-slider-three__text">We help companies develop powerful corporate social
                                responsibility, <br/> grantmaking, and employee engagement strategies. Dicta sunt </p>
                            <div className="main-slider-three__btn-box">
                                <Link href="/parichaya" className="thm-btn main-slider-three__btn">Discover more<span><i
                                            className="icon-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="item">
                    <div className="main-slider-three__shape-1"></div>
                    <div className="main-slider-three__shape-2">
                        <img src="assets/images/shapes/main-slider-three-shape-2.png" alt=""/>
                    </div>
                    <div className="main-slider-three__img">
                        <img src="assets/images/resources/main-slider-three-img-3.jpg" alt=""/>
                    </div>
                    <div className="container">
                        <div className="main-slider-three__content">
                            <h2 className="main-slider-three__title">They Need <br/> Your Help <br/> to Live</h2>
                            <p className="main-slider-three__text">We help companies develop powerful corporate social
                                responsibility, <br/> grantmaking, and employee engagement strategies. Dicta sunt </p>
                            <div className="main-slider-three__btn-box">
                                <Link href="/parichaya" className="thm-btn main-slider-three__btn">Discover more<span><i
                                            className="icon-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
            </Swiper>
        </section>
        {/*Main Slider Start */}

        
        
            
        </>
    )
}
