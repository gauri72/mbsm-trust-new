'use client'

import Link from "next/link"
import { useState } from "react"
import Border from "../_shared/_components/Border/Border"
import ContactForm from "./_components/ContactForm/ContactForm"
import Location from "./_components/Location/Location"
import {
    SITE_PHONE_TEL, SITE_PHONE_DISPLAY, SITE_MAP_URL, SITE_ADDRESS_LINE1, SITE_ADDRESS_CITY, SITE_ADDRESS_PINCODE,
} from "../_shared/_components/siteContent"
import styles from "./page.module.css"

// The contact page: the message form and the location (the two sections in _components), then the visit-planning
// FAQ, which is hidden for now. The mantra, the breadcrumb, the gallery and the closing call-to-action around it are the
// shared frame in app/template.js.

// the (hidden) FAQ's visit card shows the city and pincode on one line, never split
const SITE_ADDRESS_LINE2 = `${SITE_ADDRESS_CITY}\u00A0-\u00A0${SITE_ADDRESS_PINCODE}`

const CONTACT_FAQS = [
    {
        question: "मठाला भेट देण्याची वेळ काय आहे?",
        answer: "मठ दररोज सकाळी 6 ते रात्री 9 या वेळेत सर्व भाविकांसाठी खुला असतो.",
    },
    {
        question: "मठापर्यंत कसे पोहोचावे?",
        answer: "मठ अहिल्यानगर येथील एमआयडीसी परिसरात (एफ 70) स्थित आहे. रेल्वे स्थानक व बस स्थानकापासून रिक्षा किंवा खाजगी वाहनाने सहज पोहोचता येते.",
    },
    {
        question: "दर्शनासाठी आधी नोंदणी करावी लागते का?",
        answer: "नाही, दर्शनासाठी पूर्वनोंदणीची गरज नाही. सर्व भाविकांचे मठात नेहमी मनापासून स्वागत आहे.",
    },
    {
        question: "मठात पार्किंगची व्यवस्था आहे का?",
        answer: "होय, भाविकांच्या दुचाकी व चारचाकी वाहनांसाठी मठाच्या परिसरात पार्किंगची सोय उपलब्ध आहे.",
    },
    {
        question: "देणगी कशी द्यावी?",
        answer: "देणगीसाठी आपण मठाशी थेट संपर्क साधू शकता, किंवा वरील संपर्क फॉर्मद्वारे आपली विचारणा पाठवू शकता.",
    },
]

export default function Contact() {
    const [openFaq, setOpenFaq] = useState(0)

    return (
        <>
        <ContactForm />
        <Border />
        <Location />

        {/*Contact Faq Start — hidden for now, kept in place, not deleted */}
        {false && <section className={styles.contactFaq}>
            <div className={`${styles.divineBorderContactFaq} ${styles.divineBorderContactFaqTop}`} role="presentation"></div>
            <div className={`${styles.divineBorderContactFaqVertical} ${styles.divineBorderContactFaqLeft}`} role="presentation"></div>
            <div className={`${styles.divineBorderContactFaqVertical} ${styles.divineBorderContactFaqRight}`} role="presentation"></div>
            <span className={`${styles.contactFaqCorner} ${styles.contactFaqCornerTl}`} aria-hidden="true"></span>
            <span className={`${styles.contactFaqCorner} ${styles.contactFaqCornerTr}`} aria-hidden="true"></span>
            <span className={`${styles.contactFaqCorner} ${styles.contactFaqCornerBl}`} aria-hidden="true"></span>
            <span className={`${styles.contactFaqCorner} ${styles.contactFaqCornerBr}`} aria-hidden="true"></span>
            <div className={`${styles.divineBorderContactFaq} ${styles.divineBorderContactFaqBottom}`} role="presentation"></div>
            <div className={styles.contactFaqBg} role="presentation"></div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style2">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline" lang="mr">सामान्य प्रश्न</span>
                    </div>
                    <h2 className="section-title__title title-animation" lang="mr">आपल्या शंकांचे निरसन
                    </h2>
                </div>
                <div className={`row ${styles.contactFaqRow}`}>
                    <div className="col-xl-5 col-lg-5">
                        <div className="visit-card">
                            <div className="visit-card__header">
                                <span className="visit-card__icon">
                                    <i className="fas fa-clock"></i>
                                </span>
                                <h3 lang="mr">भेटीचे नियोजन करा</h3>
                            </div>

                            <ul className="visit-card__timings">
                                <li>
                                    <span className="visit-card__label" lang="mr">दर्शन</span>
                                    <span className="visit-card__value" lang="mr">सकाळपासून रात्रीपर्यंत</span>
                                </li>
                                <li>
                                    <span className="visit-card__label" lang="mr">आराध्य दैवत</span>
                                    <span className="visit-card__value" lang="mr">श्री विठ्ठल</span>
                                </li>
                                <li>
                                    <span className="visit-card__label" lang="mr">प्रमुख उत्सव</span>
                                    <span className="visit-card__value" lang="mr">आषाढी व कार्तिकी एकादशी</span>
                                </li>
                                <li>
                                    <span className="visit-card__label" lang="mr">स्थापना वर्ष</span>
                                    <span className="visit-card__value" lang="mr">1783</span>
                                </li>
                            </ul>

                            <div className="visit-card__divider"></div>

                            <div className="visit-card__address">
                                <i className="fas fa-map-marker-alt"></i>
                                <p>
                                    <span className="visit-card__address-line1" lang="mr">{SITE_ADDRESS_LINE1}</span>
                                    <span className="visit-card__address-line2" lang="mr">{SITE_ADDRESS_LINE2}</span>
                                </p>
                            </div>

                            <div className="visit-card__actions">
                                <Link href={SITE_MAP_URL} target="_blank" rel="noopener noreferrer" className={styles.thmBtn} lang="mr">
                                    दिशादर्शन मिळवा
                                    <span>
                                        <i className="fas fa-arrow-right"></i>
                                    </span>
                                </Link>
                                <Link href={SITE_PHONE_TEL} className="visit-card__phone" lang="mr">
                                    <i className="fas fa-phone-alt"></i>
                                    {SITE_PHONE_DISPLAY}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-1 d-none d-xl-block">
                        <div className={styles.contactFaqDivider} role="presentation"></div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className={styles.contactFaqAccrodion} data-grp-name="contact-faq-accrodion">
                            {CONTACT_FAQS.map((faq, index) => (
                                <div key={index} className={openFaq === index ? `${styles.accrodion} active` : styles.accrodion} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                                    <div className={styles.accrodionTitle}>
                                        <h4 lang="mr">{faq.question}</h4>
                                    </div>
                                    <div className={styles.accrodionContent}>
                                        <p lang="mr">{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>}
        {/*Contact Faq End*/}

        </>
    )
}
