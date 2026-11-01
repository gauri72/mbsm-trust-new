'use client'
import Link from "next/link"
import TrimmedLoopVideo from "@/components/elements/TrimmedLoopVideo"
export default function Cta() {
    return (
        <>

        {/*CTA One Start */}
        <section className="cta-one">
            {/* Gold Om/swastik ornamental border framing the maroon section */}
            <div className="divine-border--event divine-border--event-top" role="presentation"></div>
            <div className="divine-border--event-vertical divine-border--event-left" role="presentation"></div>
            <div className="divine-border--event-vertical divine-border--event-right" role="presentation"></div>
            <span className="event-one__corner event-one__corner--tl" aria-hidden="true"></span>
            <span className="event-one__corner event-one__corner--tr" aria-hidden="true"></span>
            <span className="event-one__corner event-one__corner--bl" aria-hidden="true"></span>
            <span className="event-one__corner event-one__corner--br" aria-hidden="true"></span>
            <div className="divine-border--event divine-border--event-bottom" role="presentation"></div>
            <div className="cta-one__bg" style={{ backgroundImage: ' url(assets/images/backgrounds/cta-one-bg.jpg)' }} ></div>

            <TrimmedLoopVideo
                src="assets/images/resources/elephant.mov"
                webmSrc="assets/images/resources/elephant.webm"
                className="cta-one__elephant cta-one__elephant--left"
                trimSeconds={7}
            />
            <TrimmedLoopVideo
                src="assets/images/resources/elephant.mov"
                webmSrc="assets/images/resources/elephant.webm"
                className="cta-one__elephant cta-one__elephant--right"
                trimSeconds={7}
            />

            <div className="container">
                <div className="cta-one__inner">
                    <div className="cta-one__title-box sec-title-animation animation-style1 wow fadeInUp" data-wow-delay="100ms">
                        <span className="cta-one__tagline">मंगल भक्त सेवा मंडळ</span>
                        <h2 className="cta-one__title title-animation">जिथे कमी, <br/>
                            तिथे कुवतीनुसार आम्ही</h2>
                        <p className="cta-one__text">आपण ज्या समाजात राहतो, त्या समाजाचे आपण काही देणे लागतो; <br/>
                            याच कर्तव्यभावनेतून आम्ही समाजासाठी कार्य करतो.</p>
                    </div>
                    <div className="cta-one__btn-box wow fadeInUp" data-wow-delay="200ms">
                        <Link href="/parichaya" className="cta-one__btn-1 thm-btn">आमच्याविषयी<span><i
                                    className="icon-arrow-right"></i></span></Link>
                        <Link href="/sampark" className="cta-one__btn-2 thm-btn">संपर्क साधा<span><i
                                    className="icon-arrow-right"></i></span></Link>
                    </div>
                </div>
            </div>
        </section>
        {/*CTA One End */}

        </>
    )
}
