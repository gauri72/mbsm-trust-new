'use client'
import Link from "next/link"

export default function Donation() {
    return (
        <>
        {/*Donation One Start */}
        <section className="donation-one">
            <div className="donation-one__wrapper">
                <div className="donation-one__left">
                    <div className="donation-one__left-bg donation-one__left-bg--qr">
                        {/* Maroon Om/swastik ornamental border framing the gold panel */}
                        <div className="divine-border--donate-gold divine-border--donate-gold-top" role="presentation"></div>
                        <div className="divine-border--donate-gold-vertical divine-border--donate-gold-left" role="presentation"></div>
                        <div className="divine-border--donate-gold-vertical divine-border--donate-gold-right" role="presentation"></div>
                        <div className="divine-border--donate-gold divine-border--donate-gold-bottom" role="presentation"></div>
                        <span className="donation-one__corner donation-one__corner--gold donation-one__corner--tl" aria-hidden="true"></span>
                        <span className="donation-one__corner donation-one__corner--gold donation-one__corner--tr" aria-hidden="true"></span>
                        <span className="donation-one__corner donation-one__corner--gold donation-one__corner--bl" aria-hidden="true"></span>
                        <span className="donation-one__corner donation-one__corner--gold donation-one__corner--br" aria-hidden="true"></span>
                        <img
                            className="donation-one__qr-img"
                            src="assets/images/backgrounds/donation-qr-code.jpg"
                            alt="Donation QR code"
                        />
                    </div>
                </div>
                <div className="donation-one__right">
                    <div className="donation-one__content-box">
                        {/* Gold Om/swastik ornamental border framing the maroon panel */}
                        <div className="divine-border--donate-maroon divine-border--donate-maroon-top" role="presentation"></div>
                        <div className="divine-border--donate-maroon-vertical divine-border--donate-maroon-left" role="presentation"></div>
                        <div className="divine-border--donate-maroon-vertical divine-border--donate-maroon-right" role="presentation"></div>
                        <div className="divine-border--donate-maroon divine-border--donate-maroon-bottom" role="presentation"></div>
                        <span className="donation-one__corner donation-one__corner--maroon donation-one__corner--tl" aria-hidden="true"></span>
                        <span className="donation-one__corner donation-one__corner--maroon donation-one__corner--tr" aria-hidden="true"></span>
                        <span className="donation-one__corner donation-one__corner--maroon donation-one__corner--bl" aria-hidden="true"></span>
                        <span className="donation-one__corner donation-one__corner--maroon donation-one__corner--br" aria-hidden="true"></span>
                        <div className="donation-one__content-inner">
                            <div className="section-title-two text-left sec-title-animation animation-style2">
                                <div className="section-title-two__tagline-box">
                                    <span className="section-title-two__tagline">सेवेत सहभागी व्हा</span>
                                </div>
                                <h2 className="section-title-two__title title-animation">तुमचा हात, <br/>
                                    <span>परंपरेची साथ</span></h2>
                            </div>
                            <div className="donation-one__donate-box">
                                <ul className="donation-one__supports wow fadeInUp" data-wow-delay=".5s">
                                    <li>
                                        <i className="icon-check"></i>
                                        <span>नित्य आरती व दर्शन</span>
                                    </li>
                                    <li>
                                        <i className="icon-check"></i>
                                        <span>सेवा व साधना</span>
                                    </li>
                                    <li>
                                        <i className="icon-check"></i>
                                        <span>उत्सव व पर्वदिन</span>
                                    </li>
                                </ul>
                                <div className="donate-now wow fadeInUp" data-wow-delay=".7s">
                                    <div className="donation-one__btn-box">
                                        <Link href="/denagi" className="donation-one__btn thm-btn">सहभागी होण्याचे मार्ग<span><i
                                                    className="icon-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Donation One End */}
        </>
    )
}
