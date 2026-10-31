'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    spaceBetween: 30,
    
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            
        },
        575: {
            slidesPerView: 2,
            
        },
        767: {
            slidesPerView: 2,
            
        },
        991: {
            slidesPerView: 2,
            
        },
        1199: {
            slidesPerView: 3,
            
        },
        1350: {
            slidesPerView: 3,
            
        },
    }



}
export default function Cta() {
    return (
        <>
        
        
        {/*CTA Two Start */}
        <section className="cta-two">
            <div className="container">
                <div className="cta-two__inner">
                    <div className="cta-two__bg" style={{ backgroundImage: ' url(assets/images/backgrounds/cta-two-bg.jpg)' }} >
                    </div>
                    <h2 className="cta-two__title">Join Us in the Fight Against<br/> Poverty Support</h2>
                    <div className="cta-two__btn-box">
                        <Link href="/denagi" className="cta-two__btn thm-btn">Donate Now<span><i
                                    className="icon-arrow-right"></i></span></Link>
                    </div>
                </div>
            </div>
        </section>
        {/*CTA Two End */}
        
      
        </>
    )
}
