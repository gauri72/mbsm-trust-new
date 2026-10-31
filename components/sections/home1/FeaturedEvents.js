'use client'
import Link from "next/link"
import LoopingFlagVideo from "@/components/elements/LoopingFlagVideo"

const featuredEvents = [
    {
        img: "assets/images/event/aashadhi-ekadashi.png",
        date: "देवशयनी एकादशी",
        title: "आषाढी एकादशी",
        text: "मठातील वर्षभरातील सर्वात मोठ्या उत्सवांपैकी एक. या दिवशी मठातून रथयात्रा निघते आणि परिसरातील भाविक मोठ्या संख्येने सहभागी होतात.",
    },
    {
        img: "assets/images/event/kartiki-ekadashi.png",
        date: "प्रबोधिनी एकादशी",
        title: "कार्तिकी एकादशी",
        text: "आषाढीप्रमाणेच याही दिवशी मठातून रथयात्रा काढली जाते. चातुर्मासाची सांगता या उत्सवाने होते आणि संपूर्ण समाज एकत्र येऊन तो साजरा करतो.",
    },
]

export default function FeaturedEvents() {
    return (
        <>
        {/**Featured Events Start */}
        <section className="featured-events featured-events--welcome-bg">
            <div className="divine-border--welcome divine-border--welcome-top" role="presentation"></div>
            <div className="divine-border--welcome-vertical divine-border--welcome-left" role="presentation"></div>
            <div className="divine-border--welcome-vertical divine-border--welcome-right" role="presentation"></div>
            <span className="welcome-one__corner welcome-one__corner--tl" aria-hidden="true"></span>
            <span className="welcome-one__corner welcome-one__corner--tr" aria-hidden="true"></span>
            <span className="welcome-one__corner welcome-one__corner--bl" aria-hidden="true"></span>
            <span className="welcome-one__corner welcome-one__corner--br" aria-hidden="true"></span>
            <div className="divine-border--welcome divine-border--welcome-bottom" role="presentation"></div>

            <div className="container">
                <div className="featured-events__head">
                    <span className="featured-events__flag featured-events__flag--left" aria-hidden="true">
                        <LoopingFlagVideo src="assets/images/resources/varkari.mov" />
                    </span>
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">विशेष उत्सव</span>
                        </div>
                        <h2 className="section-title__title title-animation">श्रद्धेचे मुख्य पर्व</h2>
                    </div>
                    <span className="featured-events__flag featured-events__flag--right" aria-hidden="true">
                        <LoopingFlagVideo src="assets/images/resources/varkari.mov" />
                    </span>
                </div>

                <div className="row">
                    {featuredEvents.map((event, index) => (
                        <div
                            key={index}
                            className={`col-lg-6 wow ${index === 0 ? "fadeInLeft" : "fadeInRight"}`}
                            data-wow-delay={`${(index + 1) * 100}ms`}
                        >
                            <div className="featured-events__single">
                                <div className="featured-events__img">
                                    <img src={event.img} alt={event.title}/>
                                </div>
                                <div className="featured-events__content">
                                    <h3 className="featured-events__title"><Link href="/karyakram">{event.title}</Link></h3>
                                    <p className="featured-events__text">{event.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        {/**Featured Events End */}
        </>
    )
}
