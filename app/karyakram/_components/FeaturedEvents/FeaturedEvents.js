'use client'
import Link from "next/link"
import styles from "./FeaturedEvents.module.css"
// import LoopingFlagVideo from "../LoopingFlagVideo/LoopingFlagVideo"  (flags hidden for now)

const featuredEvents = [
    {
        img: "assets/media/karyakram/aashadhi-ekadashi.webp",
        date: "दर गुरुवारी",
        title: "गुरुवार गादी सेवा",
        text: "दर गुरुवारी श्री गुरुदेव गादीवर विराजमान होऊन भाविकांच्या अडचणी ऐकतात आणि मार्गदर्शन करतात. चिंता घेऊन आलेले भाविक समाधानाने परततात.",
    },
    {
        img: "assets/media/karyakram/kartiki-ekadashi.webp",
        date: "दर महिन्याला",
        title: "दुर्गाष्टमी पालखी सोहळा",
        text: "दर महिन्याच्या दुर्गाष्टमीला मठात पालखी सोहळा साजरा होतो. भजन आणि जयघोषाच्या गजरात निघणाऱ्या या पालखीत भाविक भक्तिभावाने सहभागी होतात.",
    },
]

export default function FeaturedEvents() {
    return (
        <>
        {/**Featured Events Start */}
        <section className={`${styles.featuredEvents} ${styles.featuredEventsWelcomeBg}`}>
            <div className="divine-border--welcome divine-border--welcome-top" role="presentation"></div>
            <div className="divine-border--welcome-vertical divine-border--welcome-left" role="presentation"></div>
            <div className="divine-border--welcome-vertical divine-border--welcome-right" role="presentation"></div>
            <span className="welcome-one__corner welcome-one__corner--tl" aria-hidden="true"></span>
            <span className="welcome-one__corner welcome-one__corner--tr" aria-hidden="true"></span>
            <span className="welcome-one__corner welcome-one__corner--bl" aria-hidden="true"></span>
            <span className="welcome-one__corner welcome-one__corner--br" aria-hidden="true"></span>
            <div className="divine-border--welcome divine-border--welcome-bottom" role="presentation"></div>

            <div className="container">
                <div className={styles.head}>
                    {/* varkari flag animations beside the heading hidden for now */}
                    {/* <span className="featured-events__flag featured-events__flag--left" aria-hidden="true">
                        <LoopingFlagVideo src="assets/media/karyakram/varkari.mov" />
                    </span> */}
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">साप्ताहिक सेवा व मासिक सोहळा</span>
                        </div>
                        <h2 className="section-title__title title-animation">मठातील नियमित कार्यक्रम</h2>
                    </div>
                    {/* <span className="featured-events__flag featured-events__flag--right" aria-hidden="true">
                        <LoopingFlagVideo src="assets/media/karyakram/varkari.mov" />
                    </span> */}
                </div>

                <div className="row">
                    {featuredEvents.map((event, index) => (
                        <div
                            key={index}
                            className={`col-md-6 wow ${index === 0 ? "fadeInLeft" : "fadeInRight"}`}
                            data-wow-delay={`${(index + 1) * 100}ms`}
                        >
                            <div className={styles.single}>
                                <div className={styles.img}>
                                    <img src={event.img} alt={event.title}/>
                                </div>
                                <div className={styles.content}>
                                    <h3 className={styles.title}><Link href="/karyakram">{event.title}</Link></h3>
                                    <p className={styles.text}>{event.text}</p>
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
