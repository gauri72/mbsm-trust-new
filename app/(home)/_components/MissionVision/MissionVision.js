'use client'
import Link from "next/link"
import { useState } from "react"
import styles from "./MissionVision.module.css"

// Trust contact details
const SITE_ADDRESS_PLACE = "श्री शंकरदत्त महाराज मठ,"
const SITE_ADDRESS_LINE1 = "एफ ७०, एमआयडीसी,"
const SITE_ADDRESS_CITY = "अहिल्यानगर"
const SITE_MAP_URL = "https://share.google/eUPrIPLwsBu6afTGg"

// Mission / vision / objective tabs — shared by the Home and About pages.
export default function MissionVision() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
       {/*About One Start */}
       <section className={`${styles.aboutOne} ${styles.aboutOneOrnate}`}>
            {/* Maroon Om/swastik ornamental border framing the gold About section */}
            <div className="divine-border--about divine-border--about-top" role="presentation"></div>
            <div className="divine-border--about-vertical divine-border--about-left" role="presentation"></div>
            <div className="divine-border--about-vertical divine-border--about-right" role="presentation"></div>
            <span className="about-One__corner about-One__corner--tl" aria-hidden="true"></span>
            <span className="about-One__corner about-One__corner--tr" aria-hidden="true"></span>
            <span className="about-One__corner about-One__corner--bl" aria-hidden="true"></span>
            <span className="about-One__corner about-One__corner--br" aria-hidden="true"></span>
            <div className="divine-border--about divine-border--about-bottom" role="presentation"></div>
            <div className={styles.bg} role="presentation"></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className={`${styles.left}  wow slideInLeft`} data-wow-delay="100ms" data-wow-duration="2500ms">
                            <div className={styles.imgBox}>
                                <div className={styles.img}>
                                    <img src="assets/images/resources/about-one-img-1.jpg" alt=""/>
                                </div>
                                <div className={styles.img2}>
                                    <img src="assets/images/resources/about-one-img-2.jpg" alt=""/>
                                </div>
                                <div className={`${styles.provideBox} wow zoomIn animated animated`} data-wow-delay="500ms"
                                    data-wow-duration="2500ms">
                                    <div className={styles.provideIcon}>
                                        <span className="fas fa-calendar-alt"></span>
                                    </div>
                                    <div className={styles.provideContent}>
                                        <div className={`${styles.provideCount} ${styles.countBox}`}>
                                            <h3 className={styles.countText}>२५</h3>
                                            <span>+</span>
                                        </div>
                                        <p className={styles.provideCountText} lang="mr">वर्षांची अखंड सेवा</p>
                                    </div>
                                </div>
                                <div className={styles.shape1}></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className={`${styles.right} wow fadeInRight`} data-wow-delay="300ms">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline" lang="mr">सद्‌गुरूंचा संदेश</span>
                                </div>
                                <h2 className="section-title__title title-animation" lang="mr">
                                    <span className={styles.titleLine}>कर्म हाच कलियुगाचा धर्म</span>
                                </h2>
                            </div>
                            <div className={styles.vissionMission}>
                                <div className={`${styles.tabBox} ${styles.tabsBox}`}>
                                    <ul className={`${styles.tabButtons} clearfix list-unstyled`}>
                                        <li className={activeIndex == 1 ? `${styles.tabBtn} ${styles.activeBtn}` : styles.tabBtn} onClick={() => handleOnClick(1)}><span lang="mr">आमचे ध्येय</span></li>
                                        <li className={activeIndex == 2 ? `${styles.tabBtn} ${styles.activeBtn}` : styles.tabBtn} onClick={() => handleOnClick(2)}><span className={styles.mrRiBelow}>आमची दृष्टी</span></li>
                                        <li className={activeIndex == 3 ? `${styles.tabBtn} ${styles.activeBtn}` : styles.tabBtn} onClick={() => handleOnClick(3)}><span lang="mr">आमचे उद्दिष्ट</span></li>
                                    </ul>
                                    <div className={styles.tabsContent}>
                                        {/*tab*/}
                                        <div className={activeIndex == 1 ? `${styles.tab} fadeInUp animated show ${styles.activeTab}` : `${styles.tab} fadeInUp animated`}>
                                            <div className={styles.tabsContentInner}>
                                                <p lang="mr">
                                                    श्री शंकर महाराज व दत्तप्रभूंनी दाखवलेल्या मार्गावर चालत, प्रत्येकाला शुद्ध भावाने सत्कर्म करण्याची प्रेरणा देणे, हे आमचे
                                                    ध्येय आहे. कारण योग्य कर्म हेच भगवंताच्या कृपेचे खरे द्वार आहे.
                                                </p>
                                            </div>
                                        </div>
                                        {/*tab*/}
                                        {/*tab*/}
                                        <div className={activeIndex == 2 ? `${styles.tab} fadeInUp animated show ${styles.activeTab}` : `${styles.tab} fadeInUp animated`}>
                                            <div className={styles.tabsContentInner}>
                                                <p lang="mr">
                                                    या वाटेवरचा सर्वात मोठा अडथळा म्हणजे अहंकार, जो अशांतता आणि असमाधानाचे मूळ आहे. तो दूर सारून
                                                    सुख, शांती आणि समाधान नांदणारा समाज उभा करावा, हीच आमची <span className={styles.mrRiBelow}>दृष्टी</span> आहे.
                                                </p>
                                            </div>
                                        </div>
                                        {/*tab*/}
                                        {/*tab*/}
                                        <div className={activeIndex == 3 ? `${styles.tab} fadeInUp animated show ${styles.activeTab}` : `${styles.tab} fadeInUp animated`}>
                                            <div className={styles.tabsContentInner}>
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
                            <div className={styles.btnAndNeedHelp}>
                                <div className={styles.btnBox}>
                                    <Link href="/parichaya" className={`${styles.btn} thm-btn`} lang="mr">अधिक जाणून घ्या<span><i
                                                className="fas fa-arrow-right"></i></span></Link>
                                </div>
                                <div className={styles.needHelp}>
                                    <div className="icon">
                                        <span className="fas fa-map-marker-alt"></span>
                                    </div>
                                    <div className="content">
                                        <p lang="mr">आम्हाला भेट द्या</p>
                                        <h4><Link href={SITE_MAP_URL} target="_blank" rel="noopener noreferrer" lang="mr"><span className={styles.addressPlace}>{SITE_ADDRESS_PLACE}</span> <span className={styles.addressNowrap}>{SITE_ADDRESS_LINE1} {SITE_ADDRESS_CITY}</span></Link></h4>
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
