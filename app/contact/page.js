'use client'

import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import MantraStrip from "@/components/shared/MantraStrip/MantraStrip"
import PageHero from "@/components/shared/PageHero/PageHero"
import { PAGE_HERO_IMAGES } from "@/lib/data/heroImages"
import { CLOSING_MANTRAS } from "@/lib/data/mantras"
import TempleGallery from "@/components/shared/TempleGallery/TempleGallery"
import Cta from "@/components/sections/home1/Cta"
import TrimmedLoopVideo from "@/components/elements/TrimmedLoopVideo"
import {
    SITE_ADDRESS_MR_LINE1,
    SITE_ADDRESS_MR_LINE2,
    SITE_EMAIL,
    SITE_EMAIL_MAILTO,
    SITE_MAP_URL,
    SITE_PHONE_DISPLAY_MR,
    SITE_PHONE_TEL,
} from "@/lib/siteInfo"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const INITIAL_FORM = { name: "", email: "", phone: "", message: "" }

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnpnqgoq"

const CONTACT_FAQS = [
    {
        question: "मठाला भेट देण्याची वेळ काय आहे?",
        answer: "मठ दररोज सकाळी ६ ते रात्री ९ या वेळेत सर्व भाविकांसाठी खुला असतो.",
    },
    {
        question: "मठापर्यंत कसे पोहोचावे?",
        answer: "मठ सोलापूर शहरातील दत्त चौकात स्थित आहे. रेल्वे स्थानक व बस स्थानकापासून रिक्षा किंवा खाजगी वाहनाने सहज पोहोचता येते.",
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

export default function Home() {
    const [form, setForm] = useState(INITIAL_FORM)
    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState("idle") // idle | submitting | success | error
    const [openFaq, setOpenFaq] = useState(0)

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
        setStatus("idle")
    }

    const validate = () => {
        const nextErrors = {}
        if (!form.name.trim()) nextErrors.name = "कृपया आपले नाव टाका."
        if (!form.email.trim()) {
            nextErrors.email = "कृपया ईमेल टाका."
        } else if (!EMAIL_RE.test(form.email.trim())) {
            nextErrors.email = "कृपया वैध ईमेल टाका."
        }
        if (!form.phone.trim()) nextErrors.phone = "कृपया दूरध्वनी क्रमांक टाका."
        if (!form.message.trim()) nextErrors.message = "कृपया आपला संदेश लिहा."
        setErrors(nextErrors)
        return Object.keys(nextErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!validate()) return

        setStatus("submitting")
        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify(form),
            })
            if (!res.ok) throw new Error("submit failed")

            setForm(INITIAL_FORM)
            setErrors({})
            setStatus("success")
        } catch {
            setStatus("error")
        }
    }

    return (
        <>
        <Layout headerStyle={1} footerStyle={1} mantraStrip={<MantraStrip />}>

        <PageHero image={PAGE_HERO_IMAGES.contact} />

        <TempleGallery />

        {/*Contact One Start*/}
        <section id="contact-one" className="contact-one contact-one--ornate">
            <div className="divine-border--contact divine-border--contact-top" role="presentation"></div>
            <div className="divine-border--contact-vertical divine-border--contact-left" role="presentation"></div>
            <div className="divine-border--contact-vertical divine-border--contact-right" role="presentation"></div>
            <span className="contact-one__corner contact-one__corner--tl" aria-hidden="true"></span>
            <span className="contact-one__corner contact-one__corner--tr" aria-hidden="true"></span>
            <span className="contact-one__corner contact-one__corner--bl" aria-hidden="true"></span>
            <span className="contact-one__corner contact-one__corner--br" aria-hidden="true"></span>
            <div className="divine-border--contact divine-border--contact-bottom" role="presentation"></div>
            <div className="contact-one__bg" role="presentation"></div>
            <div className="container">
                <div className="contact-one__inner">
                    <TrimmedLoopVideo
                        src="assets/images/resources/namaste.mov"
                        className="contact-one__namaste"
                        trimSeconds={7}
                    />
                    <div className="section-title text-left sec-title-animation animation-style2">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline" lang="mr">आमच्याशी संपर्क साधा</span>
                        </div>
                        <h2 className="section-title__title title-animation" lang="mr">आपला संदेश<br/> श्री शुभराय महाराज मठापर्यंत पोहोचवा
                        </h2>
                    </div>
                    <form className="contact-form-validated contact-one__form" onSubmit={handleSubmit} noValidate>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <h4 className="contact-one__input-title" lang="mr">आपले नाव</h4>
                                <div className={`contact-one__input-box${errors.name ? " has-error" : ""}`}>
                                    <div className="contact-one__input-icon">
                                        <span className="icon-user"></span>
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
                                        lang="mr"
                                        placeholder="नाव"
                                        value={form.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                {errors.name && <span className="contact-one__error" lang="mr">{errors.name}</span>}
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <h4 className="contact-one__input-title" lang="mr">ईमेल</h4>
                                <div className={`contact-one__input-box${errors.email ? " has-error" : ""}`}>
                                    <div className="contact-one__input-icon">
                                        <span className="icon-pin"></span>
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        lang="mr"
                                        placeholder="ईमेल"
                                        value={form.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                {errors.email && <span className="contact-one__error" lang="mr">{errors.email}</span>}
                            </div>
                            <div className="col-xl-12">
                                <h4 className="contact-one__input-title" lang="mr">दूरध्वनी क्रमांक</h4>
                                <div className={`contact-one__input-box${errors.phone ? " has-error" : ""}`}>
                                    <div className="contact-one__input-icon">
                                        <span className="icon-call"></span>
                                    </div>
                                    <input
                                        type="text"
                                        name="phone"
                                        lang="mr"
                                        placeholder="आपला दूरध्वनी क्रमांक"
                                        value={form.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                {errors.phone && <span className="contact-one__error" lang="mr">{errors.phone}</span>}
                            </div>
                            <div className="col-xl-12">
                                <h4 className="contact-one__input-title" lang="mr">संदेश</h4>
                                <div className={`contact-one__input-box text-message-box${errors.message ? " has-error" : ""}`}>
                                    <div className="contact-one__input-icon">
                                        <span className="icon-envelope"></span>
                                    </div>
                                    <textarea
                                        name="message"
                                        lang="mr"
                                        placeholder="आपला संदेश लिहा.."
                                        value={form.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                {errors.message && <span className="contact-one__error" lang="mr">{errors.message}</span>}
                                <div className="contact-one__btn-box">
                                    <button type="submit" className="thm-btn contact-one__btn" lang="mr" disabled={status === "submitting"}>
                                        {status === "submitting" ? "पाठवत आहे..." : "संदेश पाठवा"}
                                        <span><i className="icon-arrow-right"></i></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                    {status === "success" && (
                        <div className="contact-one__result contact-one__result--success" role="status" lang="mr">आपला संदेश यशस्वीरित्या पाठवला गेला. धन्यवाद!</div>
                    )}
                    {status === "error" && (
                        <div className="contact-one__result contact-one__result--error" role="alert" lang="mr">संदेश पाठवताना त्रुटी आली. कृपया पुन्हा प्रयत्न करा.</div>
                    )}
                </div>
            </div>
        </section>
        {/*Contact One End*/}

        {/*Contact Two Start*/}
        <section className="contact-two contact-two--ornate">
            {/* Gold Om/swastik ornamental border framing the maroon section */}
            <div className="divine-border--contact-two divine-border--contact-two-top" role="presentation"></div>
            <div className="divine-border--contact-two-vertical divine-border--contact-two-left" role="presentation"></div>
            <div className="divine-border--contact-two-vertical divine-border--contact-two-right" role="presentation"></div>
            <span className="contact-two__corner contact-two__corner--tl" aria-hidden="true"></span>
            <span className="contact-two__corner contact-two__corner--tr" aria-hidden="true"></span>
            <span className="contact-two__corner contact-two__corner--bl" aria-hidden="true"></span>
            <span className="contact-two__corner contact-two__corner--br" aria-hidden="true"></span>
            <div className="divine-border--contact-two divine-border--contact-two-bottom" role="presentation"></div>
            <div className="contact-two__bg" role="presentation"></div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style2 contact-two__section-title">
                    <div className="contact-two__shape contact-two__shape--left float-bob-y" aria-hidden="true">
                        <img src="assets/images/shapes/found-one-shape-1-mala.png" alt=""/>
                    </div>
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline" lang="mr">मठाचे स्थान</span>
                    </div>
                    <h2 className="section-title__title title-animation" lang="mr">मठापर्यंत पोहोचण्याचा मार्ग
                    </h2>
                    <div className="contact-two__shape contact-two__shape--right float-bob-y" aria-hidden="true">
                        <img src="assets/images/shapes/found-one-shape-2-parayan.png" alt=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="contact-two__left">
                            <iframe
                                src="https://maps.google.com/maps?q=Shri+Shubharay+Maharaj+Math%2C+Datta+Chowk%2C+Solapur&output=embed"
                                className="contact-two__google-map"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="contact-two__right">
                            <ul className="contact-two__contact-list list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-call"></span>
                                    </div>
                                    <div className="content">
                                        <h4 lang="mr">दूरध्वनी क्रमांक</h4>
                                        <p lang="mr"><Link href={SITE_PHONE_TEL}>{SITE_PHONE_DISPLAY_MR}</Link></p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-envelope"></span>
                                    </div>
                                    <div className="content">
                                        <h4 lang="mr">ईमेल</h4>
                                        <p><Link href={SITE_EMAIL_MAILTO}>{SITE_EMAIL}</Link></p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-pin-two"></span>
                                    </div>
                                    <div className="content">
                                        <h4 lang="mr">पत्ता</h4>
                                        <p lang="mr"><Link href={SITE_MAP_URL} target="_blank" rel="noopener noreferrer">{SITE_ADDRESS_MR_LINE1} {SITE_ADDRESS_MR_LINE2}</Link></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Contact Two End*/}

        {/*Contact Faq Start — hidden for now, kept in place, not deleted */}
        {false && <section className="contact-faq">
            <div className="divine-border--contact-faq divine-border--contact-faq-top" role="presentation"></div>
            <div className="divine-border--contact-faq-vertical divine-border--contact-faq-left" role="presentation"></div>
            <div className="divine-border--contact-faq-vertical divine-border--contact-faq-right" role="presentation"></div>
            <span className="contact-faq__corner contact-faq__corner--tl" aria-hidden="true"></span>
            <span className="contact-faq__corner contact-faq__corner--tr" aria-hidden="true"></span>
            <span className="contact-faq__corner contact-faq__corner--bl" aria-hidden="true"></span>
            <span className="contact-faq__corner contact-faq__corner--br" aria-hidden="true"></span>
            <div className="divine-border--contact-faq divine-border--contact-faq-bottom" role="presentation"></div>
            <div className="contact-faq__bg" role="presentation"></div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style2">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline" lang="mr">सामान्य प्रश्न</span>
                    </div>
                    <h2 className="section-title__title title-animation" lang="mr">आपल्या शंकांचे निरसन
                    </h2>
                </div>
                <div className="row contact-faq__row">
                    <div className="col-xl-5 col-lg-5">
                        <div className="visit-card contact-faq__visit-card">
                            <div className="visit-card__header">
                                <span className="visit-card__icon">
                                    <i className="icon-clock"></i>
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
                                    <span className="visit-card__value" lang="mr">१७८३</span>
                                </li>
                            </ul>

                            <div className="visit-card__divider"></div>

                            <div className="visit-card__address">
                                <i className="icon-pin"></i>
                                <p>
                                    <span className="visit-card__address-line1" lang="mr">{SITE_ADDRESS_MR_LINE1}</span>
                                    <span className="visit-card__address-line2" lang="mr">{SITE_ADDRESS_MR_LINE2}</span>
                                </p>
                            </div>

                            <div className="visit-card__actions">
                                <Link href={SITE_MAP_URL} target="_blank" rel="noopener noreferrer" className="thm-btn" lang="mr">
                                    दिशादर्शन मिळवा
                                    <span>
                                        <i className="icon-arrow-right"></i>
                                    </span>
                                </Link>
                                <Link href={SITE_PHONE_TEL} className="visit-card__phone" lang="mr">
                                    <i className="icon-call"></i>
                                    {SITE_PHONE_DISPLAY_MR}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-1 d-none d-xl-block">
                        <div className="contact-faq__divider" role="presentation"></div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="contact-faq__accrodion accrodion-grp" data-grp-name="contact-faq-accrodion">
                            {CONTACT_FAQS.map((faq, index) => (
                                <div key={index} className={openFaq === index ? "accrodion active" : "accrodion"} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                                    <div className="accrodion-title">
                                        <h4 lang="mr">{faq.question}</h4>
                                    </div>
                                    <div className="accrodion-content">
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

        <Cta />
        <MantraStrip mantras={CLOSING_MANTRAS} />
        </Layout>
        </>
    )
}
