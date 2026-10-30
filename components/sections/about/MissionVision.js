'use client'
import Link from "next/link"
import { useState } from "react"
import { HEADER_ADDRESS, HEADER_MAP_URL } from "@/lib/siteInfo"

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
                                    <span className="section-title__tagline" lang="mr">आमच्याविषयी</span>
                                </div>
                                <h2 className="section-title__title title-animation" lang="mr">श्रद्धेचा वारसा
                                    <br/> आणि निःस्वार्थ
                                    <br/> सेवा</h2>
                            </div>
                            <div className="about-One__vission-mission">
                                <div className="about-One__tab-box tabs-box">
                                    <ul className="tab-buttons clearfix list-unstyled">
                                        <li className={activeIndex == 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)}><span lang="mr">आमचे ध्येय</span></li>
                                        <li className={activeIndex == 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)}><span lang="mr">आमची दृष्टी</span></li>
                                        <li className={activeIndex == 3 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(3)}><span lang="mr">आमचे उद्दिष्ट</span></li>
                                    </ul>
                                    <div className="tabs-content">
                                        {/*tab*/}
                                        <div className={activeIndex == 1 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                            <div className="tabs-content__inner">
                                                <p lang="mr">
                                                    शुभराय महाराजांनी अधिकाराचे मोठे पद सोडून साधी, भक्तिमय राहणी
                                                    स्वीकारली. सोलापुरात येऊन त्यांनी आपले संपूर्ण आयुष्य गोरगरिबांच्या
                                                    आणि गरजूंच्या सेवेत घालवले. तीच सेवेची परंपरा आम्ही आजही निष्ठेने
                                                    पुढे चालवत आहोत.
                                                </p>
                                            </div>
                                        </div>
                                        {/*tab*/}
                                        {/*tab*/}
                                        <div className={activeIndex == 2 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                            <div className="tabs-content__inner">
                                                <p lang="mr">
                                                    हा मठ प्रत्येकासाठी एक हक्काचे घर आहे. कोणीही असो, इथले दरवाजे
                                                    सर्वांसाठी नेहमीच खुले असतात. हीच शुभराय महाराजांची शिकवण होती
                                                    आणि आजही आम्ही तीच भावना मनापासून जपतो.
                                                </p>
                                            </div>
                                        </div>
                                        {/*tab*/}
                                        {/*tab*/}
                                        <div className={activeIndex == 3 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                            <div className="tabs-content__inner">
                                                <p lang="mr">
                                                    हा वारसा जिवंत ठेवणे हेच आमचे उद्दिष्ट आहे. नित्य आरती व दर्शन
                                                    अखंड सुरू ठेवणे, भक्तांच्या साधनेला आधार देणे आणि येणाऱ्या
                                                    अनेक पिढ्यांपर्यंत समाजाची सेवा करत राहणे यासाठी आम्ही
                                                    कटिबद्ध आहोत.
                                                </p>
                                            </div>
                                        </div>
                                        {/*tab*/}
                                    </div>
                                </div>
                            </div>
                            <div className="about-One__btn-and-need-help">
                                <div className="about-One__btn-box">
                                    <Link href="/about" className="about-One__btn thm-btn" lang="mr">अधिक जाणून घ्या<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                                <div className="about-One__need-help">
                                    <div className="icon">
                                        <span className="icon-pin"></span>
                                    </div>
                                    <div className="content">
                                        <p lang="mr">आम्हाला भेट द्या</p>
                                        <h4><Link href={HEADER_MAP_URL} target="_blank" rel="noopener noreferrer" lang="mr">{HEADER_ADDRESS}</Link></h4>
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
