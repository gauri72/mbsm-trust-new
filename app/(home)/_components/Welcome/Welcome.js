'use client'
import Link from "next/link"
import styles from "./Welcome.module.css"

// Older Solapur contact details, used only by this (currently hidden) section
const WELCOME_PHONE_DISPLAY = "+91 97675 88701"
const WELCOME_PHONE_TEL = "tel:+919767588701"
const WELCOME_MAP_URL = "https://maps.app.goo.gl/EqJwJAt4kihAkHt3A"

export default function Welcome() {
    return (
        <>

        <section className={styles.welcomeOne}>
            <div className="divine-border--welcome divine-border--welcome-top" role="presentation"></div>
            <div className="divine-border--welcome-vertical divine-border--welcome-left" role="presentation"></div>
            <div className="divine-border--welcome-vertical divine-border--welcome-right" role="presentation"></div>
            <span className="welcome-one__corner welcome-one__corner--tl" aria-hidden="true"></span>
            <span className="welcome-one__corner welcome-one__corner--tr" aria-hidden="true"></span>
            <span className="welcome-one__corner welcome-one__corner--bl" aria-hidden="true"></span>
            <span className="welcome-one__corner welcome-one__corner--br" aria-hidden="true"></span>
            <span className={`${styles.orb} ${styles.orb1}`} aria-hidden="true"></span>
            <span className={`${styles.orb} ${styles.orb2}`} aria-hidden="true"></span>
            <div className="container">
                <div className={styles.inner}>
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-6">
                            <div className={styles.content}>
                                <div className="section-title text-left sec-title-animation animation-style2">
                                    <div className="section-title__tagline-box">
                                        <span className="section-title__tagline">मठात आपले सहर्ष स्वागत आहे</span>
                                    </div>
                                    <h2 className="section-title__title title-animation">
                                        श्रद्धा, परंपरा आणि <br className={styles.titleBreak} />सेवेचे पवित्र स्थान.
                                    </h2>
                                </div>
                                <div className={styles.text}>
                                    <p>
                                        सन 1783 मध्ये शुभराय महाराजांनी किल्लेदार आबासाहेब कुंदले यांनी दान
                                        दिलेल्या जागेवर, सिद्धेश्वर मंदिराजवळ तळ्याकाठी एका चिंचेच्या झाडाखाली या
                                        मठाची स्थापना केली. शिष्य मल्लिकार्जुन शेटे यांनी पंढरपूरच्या पुंडलिक
                                        डोहातून आणलेली वालुकामय विठ्ठलमूर्ती सन 1785 मध्ये गाभाऱ्यात प्रतिष्ठापित
                                        झाली, आणि तेव्हापासून हा मठ सोलापूर शहराच्या हृदयस्थानी, दत्त चौकात
                                        भक्तिभावाचे केंद्र बनून उभा आहे.
                                    </p>
                                    <p>
                                        स्वामी समर्थ आणि शंकर बाबा यांचाही या मठाशी स्नेहबंध जुळला होता, आणि
                                        त्यांच्या कृपाशीर्वादाची अनुभूती आजही मठात येते. महाराजांनंतर बुवा
                                        घराण्याने ही परंपरा पिढ्यानपिढ्या श्रद्धेने जपली, आणि आज मठाच्या
                                        मठाधिपती सौ. शुभांगीताई बुवा यांच्या मार्गदर्शनाखाली मठ भक्तसमुदायाचे
                                        मनःपूर्वक स्वागत करत आहे.
                                    </p>
                                </div>

                                <ul className={`${styles.listItem} row clearfix`}>
                                    <li className="col-xl-4 col-lg-12 col-md-4">
                                        <div className="icon">
                                            <i className="fas fa-calendar-alt"></i>
                                        </div>
                                        <div className={styles.title}>
                                            <h4>1783</h4>
                                            <h3>स्थापना</h3>
                                        </div>
                                    </li>
                                    <li className="col-xl-4 col-lg-12 col-md-4">
                                        <div className="icon">
                                            <i className="fas fa-clock"></i>
                                        </div>
                                        <div className={styles.title}>
                                            <h4>दररोज</h4>
                                            <h3>आरती व दर्शन</h3>
                                        </div>
                                    </li>
                                    <li className="col-xl-4 col-lg-12 col-md-4">
                                        <div className="icon">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div className={styles.title}>
                                            <h4>सोलापूर</h4>
                                            <h3>दत्त चौक</h3>
                                        </div>
                                    </li>
                                </ul>

                                <div className={styles.btnBox}>
                                    <Link href="/parichaya" className="thm-btn">
                                        आमचा इतिहास जाणून घ्या
                                        <span>
                                            <i className="fas fa-arrow-right"></i>
                                        </span>
                                    </Link>
                                </div>

                            </div>
                        </div>

                        <div className="col-xl-5 col-lg-6">
                            <div className="visit-card">
                                <div className="visit-card__header">
                                    <span className="visit-card__icon">
                                        <i className="fas fa-clock"></i>
                                    </span>
                                    <h3>भेटीचे नियोजन करा</h3>
                                </div>

                                <ul className="visit-card__timings">
                                    <li>
                                        <span className="visit-card__label">दर्शन</span>
                                        <span className="visit-card__value">सकाळपासून रात्रीपर्यंत</span>
                                    </li>
                                    <li>
                                        <span className="visit-card__label">आराध्य दैवत</span>
                                        <span className="visit-card__value">श्री विठ्ठल</span>
                                    </li>
                                    <li>
                                        <span className="visit-card__label">प्रमुख उत्सव</span>
                                        <span className="visit-card__value">आषाढी व कार्तिकी एकादशी</span>
                                    </li>
                                    <li>
                                        <span className="visit-card__label">स्थापना वर्ष</span>
                                        <span className="visit-card__value">1783</span>
                                    </li>
                                </ul>

                                <div className="visit-card__divider"></div>

                                <div className="visit-card__address">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <p>
                                        <span className="visit-card__address-line1">श्री शुभराय महाराज मठ,</span>
                                        <span className="visit-card__address-line2">दत्त चौक, सोलापूर.</span>
                                    </p>
                                </div>

                                <div className="visit-card__actions">
                                    <Link href={WELCOME_MAP_URL} target="_blank" rel="noopener noreferrer" className="thm-btn">
                                        दिशादर्शन मिळवा
                                        <span>
                                            <i className="fas fa-arrow-right"></i>
                                        </span>
                                    </Link>
                                    <Link href={WELCOME_PHONE_TEL} className="visit-card__phone">
                                        <i className="fas fa-phone-alt"></i>
                                        {WELCOME_PHONE_DISPLAY}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divine-border--welcome divine-border--welcome-bottom" role="presentation"></div>
        </section>

        </>
    )
}
