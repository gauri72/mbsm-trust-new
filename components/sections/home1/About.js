'use client'
import Link from "next/link"
import { useState } from "react"
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/lib/siteInfo"

export default function About() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
        
        {/*About One Start */}
        <section className="about-One">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-One__left  wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                            <div className="about-One__img-box">
                                <div className="about-One__img">
                                    <img src="assets/images/resources/about-one-img-1.jpg" alt=""/>
                                </div>
                                <div className="about-One__img-2">
                                    <img src="assets/images/resources/about-one-img-2.jpg" alt=""/>
                                </div>
                                <div className="about-One__provide-box wow zoomIn animated animated" data-wow-delay="500ms"
                                    data-wow-duration="2500ms">
                                    <div className="about-One__provide-icon">
                                        <span className="icon-calender"></span>
                                    </div>
                                    <div className="about-One__provide-content">
                                        <div className="about-One__provide-count count-box">
                                            <h3 className="count-text">240</h3>
                                            <span>+</span>
                                        </div>
                                        <p className="about-One__provide-count-text">Years Of Legacy</p>
                                    </div>
                                </div>
                                <div className="about-One__shape-1"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-One__right wow fadeInRight" data-wow-delay="300ms">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">About Us</span>
                                </div>
                                <h2 className="section-title__title title-animation">A Legacy Of Faith
                                    <br/> And Fearless Seva</h2>
                            </div>
                            <div className="about-One__vission-mission">
                                <div className="about-One__tab-box tabs-box">
                                    <ul className="tab-buttons clearfix list-unstyled">
                                        <li className={activeIndex == 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)}><span>Our Mission</span></li>
                                        <li className={activeIndex == 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)}><span>Our Vision</span></li>
                                        <li className={activeIndex == 3 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(3)}><span>Our Goal</span></li>
                                    </ul>
                                    <div className="tabs-content">
                                        {/*tab*/}
                                        <div className={activeIndex == 1 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                            <div className="tabs-content__inner">
                                                <p>Shubharay Maharaj gave up a powerful position to live a simple life
                                                    of devotion. He came to Solapur and spent his life in seva, helping
                                                    the poor and the needy. We continue that same mission of service
                                                    to this day.</p>
                                            </div>
                                        </div>
                                        {/*tab*/}
                                        {/*tab*/}
                                        <div className={activeIndex == 2 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                            <div className="tabs-content__inner">
                                                <p>We see the Math as a home for everyone. No matter who you are, our
                                                    doors are always open. This was Shubharay Maharaj's own belief,
                                                    and it is still our belief today.</p>
                                            </div>
                                        </div>
                                        {/*tab*/}
                                        {/*tab*/}
                                        <div className={activeIndex == 3 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                            <div className="tabs-content__inner">
                                                <p>Our goal is simple: keep this legacy alive. We want to continue
                                                    daily aarti and darshan, support devotees on their spiritual path,
                                                    and serve the community for many more years to come.</p>
                                            </div>
                                        </div>
                                        {/*tab*/}
                                    </div>
                                </div>
                            </div>
                            <div className="about-One__btn-and-need-help">
                                <div className="about-One__btn-box">
                                    <Link href="/parichaya" className="about-One__btn thm-btn">Know More<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                                <div className="about-One__need-help">
                                    <div className="icon">
                                        <span className="icon-phone-call"></span>
                                    </div>
                                    <div className="content">
                                        <p>Need guidance?</p>
                                        <h4><Link href={SITE_PHONE_TEL}>{SITE_PHONE_DISPLAY}</Link></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About One End */}
        
        </>
    )
}
