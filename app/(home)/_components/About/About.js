'use client'
import { useRef, useState } from "react"
import Link from "next/link"
import { PAGES, SITE_MAP_URL, SITE_ADDRESS_PLACE, SITE_ADDRESS_LINE1, SITE_ADDRESS_CITY } from "../../../_shared/_components/siteContent"
import styles from "./About.module.css"

/* =============================================================================
   About: the trust's introduction — a photo collage, the 25+ years badge, and mission / vision tabs.
   Styles: see About.module.css.
   ========================================================================== */

const MISSION_POINTS = [
    "शंकर महाराजांचे विचार आणि तत्त्वज्ञान लोकांपर्यंत पोहोचवणे.",
    "शंकर महाराजांचा कृपामाध्यम बनून जात-पात, धर्म यांचा भेदभाव न करता जास्तीत जास्त लोकांना, विनामूल्य विविध उपक्रमांमधून मदत व सेवा पुरविणे. तसेच, लोकांमध्ये सदाचार रुजवणे आणि भगवंतावरील विश्वास दृढ करणे.",
    "दर गुरुवारी मठात गादी सेवेतून शंकर महाराजांच्या आदेशाप्रमाणे भाविकांना त्यांच्या अडचणींसाठी विशेष मार्गदर्शन व उपाय देऊन त्यांचे जीवन सुखकर करणे आणि त्यांची भौतिक व आध्यात्मिक प्रगती साधण्यास मदत करणे.",
]

const VISION_TEXT = "एक असा समाज निर्माण करणे जिथे लोकांच्या मनात भगवंत आणि एकमेकांप्रती सेवाभाव असेल. आणि लोक स्वार्थ आणि अहंकार सोडून एकमेकांची मदत करतील. समाजात होणारी वैचारिक व आध्यात्मिक अधोगती थांबवून समाजाला योग्य दिशा देणे."

const TABS = [
    { id: "mission", label: "आमचे ध्येय" },
    { id: "vision", label: "आमची दृष्टी" },
]

// join class names, skipping falsy ones
const cx = (...names) => names.filter(Boolean).join(" ")

export default function About() {
    // the tabs follow the ARIA tabs pattern: one tab stop (the selected tab), Left / Right / Home / End move between tabs
    const [active, setActive] = useState(0)
    const tabRefs = useRef([])

    const select = (index) => {
        setActive(index)
        tabRefs.current[index]?.focus()
    }

    const onTabKeyDown = (e, index) => {
        const last = TABS.length - 1
        const next = { ArrowRight: index === last ? 0 : index + 1, ArrowLeft: index === 0 ? last : index - 1, Home: 0, End: last }[e.key]
        if (next === undefined) return
        e.preventDefault()
        select(next)
    }

    return (
        <section className={`${styles.aboutOne} ${styles.aboutOneOrnate}`}>
            <div className={styles.bg} aria-hidden="true"></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className={`${styles.left}  wow slideInLeft`} data-wow-delay="100ms" data-wow-duration="2500ms">
                            <div className={styles.imgBox}>
                                <div className={styles.img}>
                                    <img src="/assets/media/home/about-one-img-1.webp" alt="" loading="lazy" decoding="async" />
                                </div>
                                <div className={styles.img2}>
                                    <img src="/assets/media/home/about-one-img-2.webp" alt="" loading="lazy" decoding="async" />
                                </div>
                                <div className={`${styles.provideBox} wow zoomIn animated`} data-wow-delay="500ms" data-wow-duration="2500ms">
                                    <div className={styles.provideIcon}>
                                        <span className="fas fa-calendar-alt" aria-hidden="true"></span>
                                    </div>
                                    <div className={styles.provideContent}>
                                        <div className={styles.provideCount}>
                                            <div className={styles.countText}>25</div>
                                            <span>+</span>
                                        </div>
                                        <p className={styles.provideCountText} lang="mr">वर्षांची अखंड सेवा</p>
                                    </div>
                                </div>
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
                            <div className={styles.missionVision}>
                                <div className={styles.tabBox}>
                                    <div className={styles.tabButtons} role="tablist" aria-label="आमचे ध्येय आणि दृष्टी">
                                        {TABS.map((tab, index) => (
                                            <button
                                                key={tab.id}
                                                ref={(el) => { tabRefs.current[index] = el }}
                                                type="button"
                                                role="tab"
                                                id={`about-tab-${tab.id}`}
                                                aria-selected={active === index}
                                                aria-controls={`about-panel-${tab.id}`}
                                                tabIndex={active === index ? 0 : -1}
                                                className={cx(styles.tabBtn, active === index && styles.activeBtn)}
                                                onClick={() => setActive(index)}
                                                onKeyDown={(e) => onTabKeyDown(e, index)}
                                            >
                                                <span lang="mr">{tab.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                    <div className={styles.tabsContent}>
                                        {/* mission */}
                                        <div
                                            role="tabpanel"
                                            id="about-panel-mission"
                                            aria-labelledby="about-tab-mission"
                                            className={cx(styles.tab, "fadeInUp animated", active === 0 && `show ${styles.activeTab}`)}
                                        >
                                            <div className={styles.tabsContentInner}>
                                                <ul className={styles.points}>
                                                    {MISSION_POINTS.map((point) => (
                                                        <li className={styles.point} key={point}>
                                                            <i className="fas fa-arrow-right" aria-hidden="true"></i>
                                                            <p lang="mr">{point}</p>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        {/* vision */}
                                        <div
                                            role="tabpanel"
                                            id="about-panel-vision"
                                            aria-labelledby="about-tab-vision"
                                            className={cx(styles.tab, "fadeInUp animated", active === 1 && `show ${styles.activeTab}`)}
                                        >
                                            <div className={styles.tabsContentInner}>
                                                <p lang="mr">{VISION_TEXT}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.btnAndNeedHelp}>
                                <div className={styles.btnBox}>
                                    <Link href={PAGES.parichaya.href} className={styles.moreBtn} lang="mr">
                                        <span>अधिक जाणून घ्या</span>
                                        <i className={`${styles.moreBtnIcon} fas fa-arrow-right`} aria-hidden="true"></i>
                                    </Link>
                                </div>
                                <div className={styles.needHelp}>
                                    <div className="icon">
                                        <span className="fas fa-map-marker-alt" aria-hidden="true"></span>
                                    </div>
                                    <div className="content">
                                        <p lang="mr">आम्हाला भेट द्या</p>
                                        <div className={styles.addressLine}>
                                            <Link href={SITE_MAP_URL} target="_blank" rel="noopener noreferrer" lang="mr"><span className={styles.addressPlace}>{SITE_ADDRESS_PLACE}</span> <span className={styles.addressNowrap}>{SITE_ADDRESS_LINE1} {SITE_ADDRESS_CITY}</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
