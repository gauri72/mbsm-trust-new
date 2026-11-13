'use client'
import Link from "next/link"
import { useState } from "react"
import { SITE_MAP_URL, SITE_ADDRESS_PLACE, SITE_ADDRESS_LINE1, SITE_ADDRESS_CITY } from "../../../_shared/_components/siteContent"
import styles from "./MissionVision.module.css"

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
            <div className={styles.bg} role="presentation"></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className={`${styles.left}  wow slideInLeft`} data-wow-delay="100ms" data-wow-duration="2500ms">
                            <div className={styles.imgBox}>
                                <div className={styles.img}>
                                    <img src="assets/media/home/about-one-img-1.webp" alt=""/>
                                </div>
                                <div className={styles.img2}>
                                    <img src="assets/media/home/about-one-img-2.webp" alt=""/>
                                </div>
                                <div className={`${styles.provideBox} wow zoomIn animated animated`} data-wow-delay="500ms"
                                    data-wow-duration="2500ms">
                                    <div className={styles.provideIcon}>
                                        <span className="fas fa-calendar-alt"></span>
                                    </div>
                                    <div className={styles.provideContent}>
                                        <div className={`${styles.provideCount} ${styles.countBox}`}>
                                            <h3 className={styles.countText}>25</h3>
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
                                    <span className="section-title__tagline" lang="mr">आमची ओळख</span>
                                </div>
                                <h2 className="section-title__title title-animation" lang="mr">
                                    <span className={styles.titleLine}>सेवा हाच धर्म, हेच आमचे कर्म</span>
                                </h2>
                            </div>
                            <div className={styles.vissionMission}>
                                <div className={`${styles.tabBox} ${styles.tabsBox}`}>
                                    <ul className={`${styles.tabButtons} clearfix list-unstyled`}>
                                        <li className={activeIndex == 1 ? `${styles.tabBtn} ${styles.activeBtn}` : styles.tabBtn} onClick={() => handleOnClick(1)}><span lang="mr">आमचे ध्येय</span></li>
                                        <li className={activeIndex == 2 ? `${styles.tabBtn} ${styles.activeBtn}` : styles.tabBtn} onClick={() => handleOnClick(2)}><span lang="mr">आमची दृष्टी</span></li>
                                    </ul>
                                    <div className={styles.tabsContent}>
                                        {/*tab: Mission*/}
                                        <div className={activeIndex == 1 ? `${styles.tab} fadeInUp animated show ${styles.activeTab}` : `${styles.tab} fadeInUp animated`}>
                                            <div className={styles.tabsContentInner}>
                                                <ul className={styles.points}>
                                                    <li className={styles.point}>
                                                        <i className="fas fa-arrow-right" aria-hidden="true"></i>
                                                        <p lang="mr">शंकर महाराजांचे विचार आणि तत्त्वज्ञान लोकांपर्यंत पोहोचवणे.</p>
                                                    </li>
                                                    <li className={styles.point}>
                                                        <i className="fas fa-arrow-right" aria-hidden="true"></i>
                                                        <p lang="mr">शंकर महाराजांचा कृपामाध्यम बनून जात-पात, धर्म यांचा भेदभाव न करता जास्तीत जास्त लोकांना, विनामूल्य विविध उपक्रमांमधून मदत व सेवा पुरविणे. तसेच, लोकांमध्ये सदाचार रुजवणे आणि भगवंतावरील विश्वास दृढ करणे.</p>
                                                    </li>
                                                    <li className={styles.point}>
                                                        <i className="fas fa-arrow-right" aria-hidden="true"></i>
                                                        <p lang="mr">दर गुरुवारी मठात गादी सेवेतून शंकर महाराजांच्या आदेशाप्रमाणे भाविकांना त्यांच्या अडचणींसाठी विशेष मार्गदर्शन व उपाय देऊन त्यांचे जीवन सुखकर करणे आणि त्यांची भौतिक व आध्यात्मिक प्रगती साधण्यास मदत करणे.</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/*tab: Vision*/}
                                        <div className={activeIndex == 2 ? `${styles.tab} fadeInUp animated show ${styles.activeTab}` : `${styles.tab} fadeInUp animated`}>
                                            <div className={styles.tabsContentInner}>
                                                <p lang="mr">एक असा समाज निर्माण करणे जिथे लोकांच्या मनात भगवंत आणि एकमेकांप्रती सेवाभाव असेल. आणि लोक स्वार्थ आणि अहंकार सोडून एकमेकांची मदत करतील. समाजात होणारी वैचारिक व आध्यात्मिक अधोगती थांबवून समाजाला योग्य दिशा देणे.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.btnAndNeedHelp}>
                                <div className={styles.btnBox}>
                                    <Link href="/parichaya" className={styles.moreBtn} lang="mr">
                                        <span>अधिक जाणून घ्या</span>
                                        <i className={`${styles.moreBtnIcon} fas fa-arrow-right`} aria-hidden="true"></i>
                                    </Link>
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
