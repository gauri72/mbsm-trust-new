'use client'
import Link from "next/link"
import { useState } from "react"
import { HEADER_ADDRESS_PLACE, HEADER_ADDRESS_LINE1, HEADER_ADDRESS_CITY, HEADER_MAP_URL } from "@/lib/siteInfo"

// Mission / vision / objective tabs — shared by the Home and About pages.
export default function MissionVision() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
       {/*About One Start */}
       <section className="about-One about-One--ornate">
            {/* Maroon Om/swastik ornamental border framing the gold About section */}
            <div className="divine-border--about divine-border--about-top" role="presentation"></div>
            <div className="divine-border--about-vertical divine-border--about-left" role="presentation"></div>
            <div className="divine-border--about-vertical divine-border--about-right" role="presentation"></div>
            <span className="about-One__corner about-One__corner--tl" aria-hidden="true"></span>
            <span className="about-One__corner about-One__corner--tr" aria-hidden="true"></span>
            <span className="about-One__corner about-One__corner--bl" aria-hidden="true"></span>
            <span className="about-One__corner about-One__corner--br" aria-hidden="true"></span>
            <div className="divine-border--about divine-border--about-bottom" role="presentation"></div>
            <div className="about-One__bg" role="presentation"></div>
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
                                            <h3 className="count-text">२५</h3>
                                            <span>+</span>
                                        </div>
                                        <p className="about-One__provide-count-text" lang="mr">वर्षांची अखंड सेवा</p>
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
                                    <span className="section-title__tagline" lang="mr">सद्‌गुरूंचा संदेश</span>
                                </div>
                                <h2 className="section-title__title title-animation" lang="mr">
                                    <span className="about-One__title-line">कर्म हाच कलियुगाचा धर्म</span>
                                </h2>
                            </div>
                            <div className="about-One__vission-mission">
                                <div className="about-One__tab-box tabs-box">
                                    <ul className="tab-buttons clearfix list-unstyled">
                                        <li className={activeIndex == 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)}><span lang="mr">आमचे ध्येय</span></li>
                                        <li className={activeIndex == 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)}><span lang="mr" className="mr-ri-below">आमची दृष्टी</span></li>
                                        <li className={activeIndex == 3 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(3)}><span lang="mr">आमचे उद्दिष्ट</span></li>
                                    </ul>
                                    <div className="tabs-content">
                                        {/*tab*/}
                                        <div className={activeIndex == 1 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                            <div className="tabs-content__inner">
                                                <p lang="mr">
                                                    श्री शंकर महाराज व दत्तप्रभूंनी दाखवलेल्या मार्गावर चालत, प्रत्येकाला शुद्ध भावाने सत्कर्म करण्याची प्रेरणा देणे, हे आमचे
                                                    ध्येय आहे. कारण योग्य कर्म हेच भगवंताच्या कृपेचे खरे द्वार आहे.
                                                </p>
                                            </div>
                                        </div>
                                        {/*tab*/}
                                        {/*tab*/}
                                        <div className={activeIndex == 2 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                            <div className="tabs-content__inner">
                                                <p lang="mr">
                                                    या वाटेवरचा सर्वात मोठा अडथळा म्हणजे अहंकार, जो अशांतता आणि असमाधानाचे मूळ आहे. तो दूर सारून
                                                    सुख, शांती आणि समाधान नांदणारा समाज उभा करावा, हीच आमची <span className="mr-ri-below">दृष्टी</span> आहे.
                                                </p>
                                            </div>
                                        </div>
                                        {/*tab*/}
                                        {/*tab*/}
                                        <div className={activeIndex == 3 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                            <div className="tabs-content__inner">
                                                <p lang="mr">
                                                    मनात शुद्ध भाव जागला की आपल्या हातून सहज सत्कर्म घडू लागते. अन्नदान, आरोग्यसेवा, गोसेवा आणि
                                                    गरजूंना आधार देत हे सत्कर्म समाजात अखंड घडवत राहणे, हे आमचे उद्दिष्ट आहे.
                                                </p>
                                            </div>
                                        </div>
                                        {/*tab*/}
                                    </div>
                                </div>
                            </div>
                            <div className="about-One__btn-and-need-help">
                                <div className="about-One__btn-box">
                                    <Link href="/parichaya" className="about-One__btn thm-btn" lang="mr">अधिक जाणून घ्या<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                                <div className="about-One__need-help">
                                    <div className="icon">
                                        <span className="icon-pin"></span>
                                    </div>
                                    <div className="content">
                                        <p lang="mr">आम्हाला भेट द्या</p>
                                        <h4><Link href={HEADER_MAP_URL} target="_blank" rel="noopener noreferrer" lang="mr">{HEADER_ADDRESS_PLACE} <span className="about-One__address-nowrap">{HEADER_ADDRESS_LINE1} {HEADER_ADDRESS_CITY}</span></Link></h4>
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
