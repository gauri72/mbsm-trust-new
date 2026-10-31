'use client'
import Link from "next/link"
import { useState } from "react"

export default function Services() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
        
        {/*Services One Start */}
        <section className="services-one">
            <div className="services-one__shape-1 float-bob-x">
                <img src="assets/images/shapes/services-one-shape-1.png" alt=""/>
            </div>
            <div className="container">
                <div className="services-one__inner">
                    <div className="services-one__tab-box tabs-box">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4">
                                <ul className="tab-buttons clearfix list-unstyled">
                                    
                                    <li className={activeIndex == 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)}><span>Our Approach</span></li>
                                    <li className={activeIndex == 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)}><span>Full Inspiration</span></li>
                                    <li className={activeIndex == 3 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(3)}><span>Make Different</span></li>
                                    
                                </ul>
                            </div>
                            <div className="col-xl-9 col-lg-8">
                                <div className="tabs-content">
                                    {/*tab*/}
                                    <div className={activeIndex == 1 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                        <div className="tabs-content__inner">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="services-one__single">
                                                        <div className="services-one__icon">
                                                            <span className="icon-hand"></span>
                                                        </div>
                                                        <h3 className="services-one__title"><Link href="become-volunteer">Become a volenteer</Link></h3>
                                                        <p className="services-one__text">category that involves giving
                                                            financial or to a materialt support various causes
                                                            organizations It allows not to go individuals towards
                                                            addressing </p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="services-one__single services-one__single-2">
                                                        <div className="services-one__icon">
                                                            <span className="icon-love"></span>
                                                        </div>
                                                        <h3 className="services-one__title"><Link href="cause-details">Funds Collection</Link></h3>
                                                        <p className="services-one__text">category that involves giving
                                                            financial or to a materialt support various causes
                                                            organizations It allows not to go individuals towards
                                                            addressing </p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="services-one__single">
                                                        <div className="services-one__icon">
                                                            <span className="icon-help"></span>
                                                        </div>
                                                        <h3 className="services-one__title"><Link href="/denagi">Get Help
                                                                And Support</Link>
                                                        </h3>
                                                        <p className="services-one__text">category that involves giving
                                                            financial or to a materialt support various causes
                                                            organizations It allows not to go individuals towards
                                                            addressing </p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="services-one__single services-one__single-4">
                                                        <div className="services-one__icon">
                                                            <span className="icon-dolor"></span>
                                                        </div>
                                                        <h3 className="services-one__title"><Link href="donation-details">Donate To Our Funds</Link>
                                                        </h3>
                                                        <p className="services-one__text">category that involves giving
                                                            financial or to a materialt support various causes
                                                            organizations It allows not to go individuals towards
                                                            addressing </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*tab*/}
                                    {/*tab*/}
                                    <div className={activeIndex == 2 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                        <div className="tabs-content__inner">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="services-one__single">
                                                        <div className="services-one__icon">
                                                            <span className="icon-hand"></span>
                                                        </div>
                                                        <h3 className="services-one__title"><Link href="become-volunteer">Become a volenteer</Link></h3>
                                                        <p className="services-one__text">category that involves giving
                                                            financial or to a materialt support various causes
                                                            organizations It allows not to go individuals towards
                                                            addressing </p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="services-one__single services-one__single-2">
                                                        <div className="services-one__icon">
                                                            <span className="icon-love"></span>
                                                        </div>
                                                        <h3 className="services-one__title"><Link href="cause-details">Funds Collection</Link></h3>
                                                        <p className="services-one__text">category that involves giving
                                                            financial or to a materialt support various causes
                                                            organizations It allows not to go individuals towards
                                                            addressing </p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="services-one__single">
                                                        <div className="services-one__icon">
                                                            <span className="icon-help"></span>
                                                        </div>
                                                        <h3 className="services-one__title"><Link href="/denagi">Get Help
                                                                And Support</Link>
                                                        </h3>
                                                        <p className="services-one__text">category that involves giving
                                                            financial or to a materialt support various causes
                                                            organizations It allows not to go individuals towards
                                                            addressing </p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="services-one__single services-one__single-4">
                                                        <div className="services-one__icon">
                                                            <span className="icon-dolor"></span>
                                                        </div>
                                                        <h3 className="services-one__title"><Link href="donation-details">Donate To Our Funds</Link>
                                                        </h3>
                                                        <p className="services-one__text">category that involves giving
                                                            financial or to a materialt support various causes
                                                            organizations It allows not to go individuals towards
                                                            addressing </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*tab*/}
                                    {/*tab*/}
                                    <div className={activeIndex == 3 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                        <div className="tabs-content__inner">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="services-one__single">
                                                        <div className="services-one__icon">
                                                            <span className="icon-hand"></span>
                                                        </div>
                                                        <h3 className="services-one__title"><Link href="become-volunteer">Become a volenteer</Link></h3>
                                                        <p className="services-one__text">category that involves giving
                                                            financial or to a materialt support various causes
                                                            organizations It allows not to go individuals towards
                                                            addressing </p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="services-one__single services-one__single-2">
                                                        <div className="services-one__icon">
                                                            <span className="icon-love"></span>
                                                        </div>
                                                        <h3 className="services-one__title"><Link href="cause-details">Funds Collection</Link></h3>
                                                        <p className="services-one__text">category that involves giving
                                                            financial or to a materialt support various causes
                                                            organizations It allows not to go individuals towards
                                                            addressing </p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="services-one__single">
                                                        <div className="services-one__icon">
                                                            <span className="icon-help"></span>
                                                        </div>
                                                        <h3 className="services-one__title"><Link href="/denagi">Get Help
                                                                And Support</Link>
                                                        </h3>
                                                        <p className="services-one__text">category that involves giving
                                                            financial or to a materialt support various causes
                                                            organizations It allows not to go individuals towards
                                                            addressing </p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="services-one__single services-one__single-4">
                                                        <div className="services-one__icon">
                                                            <span className="icon-dolor"></span>
                                                        </div>
                                                        <h3 className="services-one__title"><Link href="donation-details">Donate To Our Funds</Link>
                                                        </h3>
                                                        <p className="services-one__text">category that involves giving
                                                            financial or to a materialt support various causes
                                                            organizations It allows not to go individuals towards
                                                            addressing </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*tab*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Services One End */}
        
        </>
    )
}
