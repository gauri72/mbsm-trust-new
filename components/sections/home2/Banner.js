'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    
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
        {/* Main Slider Two Start */}
        <section className="main-slider-two">
            <Swiper {...swiperOptions} className="main-slider-two__carousel owl-carousel owl-theme">
                <SwiperSlide>
                <div className="item">
                    <div className="main-slider-two__shape-bg"
                        style={{ backgroundImage: ' url(assets/images/shapes/main-slider-two-shape-bg.png)' }} ></div>
                    <div className="main-slider-two__shape-1"></div>
                    <div className="main-slider-two__shape-2"></div>
                    <div className="main-slider-two__shape-3 float-bob-x">
                        <img src="assets/images/shapes/main-slider-two-shpae-3.png" alt=""/>
                    </div>
                    <div className="main-slider-two__shape-4 float-bob-y">
                        <img src="assets/images/shapes/main-slider-two-shpae-4.png" alt=""/>
                    </div>
                    <div className="main-slider-two__img-box">
                        <div className="main-slider-two__img-box-inner">
                            <div className="main-slider-two__img">
                                <img src="assets/images/resources/main-slider-two-img-1.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="main-slider-two__content">
                            <h2 className="main-slider-two__title">Help Leading <br/> better Life</h2>
                            <p className="main-slider-two__text">We help companies develop powerful corporate social
                                responsibility, grantmaking, <br/> and employee engagement strategies. Dicta sunt
                                explicabo. Nemo</p>
                            <div className="main-slider-two__btn-box">
                                <Link href="/parichaya" className="thm-btn main-slider-two__btn">Discover more<span><i
                                            className="icon-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="item">
                    <div className="main-slider-two__shape-bg"
                        style={{ backgroundImage: ' url(assets/images/shapes/main-slider-two-shape-bg.png)' }} ></div>
                    <div className="main-slider-two__shape-1"></div>
                    <div className="main-slider-two__shape-2"></div>
                    <div className="main-slider-two__shape-3 float-bob-x">
                        <img src="assets/images/shapes/main-slider-two-shpae-3.png" alt=""/>
                    </div>
                    <div className="main-slider-two__shape-4 float-bob-y">
                        <img src="assets/images/shapes/main-slider-two-shpae-4.png" alt=""/>
                    </div>
                    <div className="main-slider-two__img-box">
                        <div className="main-slider-two__img-box-inner">
                            <div className="main-slider-two__img">
                                <img src="assets/images/resources/main-slider-two-img-2.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="main-slider-two__content">
                            <h2 className="main-slider-two__title">Help Leading <br/> better Life</h2>
                            <p className="main-slider-two__text">We help companies develop powerful corporate social
                                responsibility, grantmaking, <br/> and employee engagement strategies. Dicta sunt
                                explicabo. Nemo</p>
                            <div className="main-slider-two__btn-box">
                                <Link href="/parichaya" className="thm-btn main-slider-two__btn">Discover more<span><i
                                            className="icon-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="item">
                    <div className="main-slider-two__shape-bg"
                        style={{ backgroundImage: ' url(assets/images/shapes/main-slider-two-shape-bg.png)' }} ></div>
                    <div className="main-slider-two__shape-1"></div>
                    <div className="main-slider-two__shape-2"></div>
                    <div className="main-slider-two__shape-3 float-bob-x">
                        <img src="assets/images/shapes/main-slider-two-shpae-3.png" alt=""/>
                    </div>
                    <div className="main-slider-two__shape-4 float-bob-y">
                        <img src="assets/images/shapes/main-slider-two-shpae-4.png" alt=""/>
                    </div>
                    <div className="main-slider-two__img-box">
                        <div className="main-slider-two__img-box-inner">
                            <div className="main-slider-two__img">
                                <img src="assets/images/resources/main-slider-two-img-3.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="main-slider-two__content">
                            <h2 className="main-slider-two__title">Help Leading <br/> better Life</h2>
                            <p className="main-slider-two__text">We help companies develop powerful corporate social
                                responsibility, grantmaking, <br/> and employee engagement strategies. Dicta sunt
                                explicabo. Nemo</p>
                            <div className="main-slider-two__btn-box">
                                <Link href="/parichaya" className="thm-btn main-slider-two__btn">Discover more<span><i
                                            className="icon-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
            </Swiper>
        </section>
        {/*Main Slider Two Start */}

        </>
    )
}
