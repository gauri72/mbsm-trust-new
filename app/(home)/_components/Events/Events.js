import { PAGES } from "../../../_shared/_components/siteContent"
import { SectionHead, MoreButton } from "../../parts"
import shared from "../../page.module.css"
import styles from "./Events.module.css"

/* =============================================================================
   Home: the upcoming festivals, three cards, then one button to the Karyakram page.
   Each card: a photo, a date badge (day large, month and year below) and the name.
   The dates are typed by hand: update them (and the heading, "आगामी") as they pass.
   Styles: see Events.module.css.
   ========================================================================== */

const EVENTS = [
    {
        img: "/assets/media/home/event-1-1.webp",
        iso: "2026-11-17",
        day: "17",
        month: "Nov 2026",
        title: "श्री शंकर महाराज प्रकट दिन",
        animation: "fadeInLeft",
    },
    {
        img: "/assets/media/home/event-1-2.webp",
        iso: "2026-12-23",
        day: "23",
        month: "Dec 2026",
        title: "श्री दत्त प्रभू जयंती",
        animation: "fadeInUp",
    },
    {
        img: "/assets/media/home/event-1-3.webp",
        iso: "2027-02-06",
        day: "06",
        month: "Feb 2027",
        // "‍" keeps the second श्व as half-श + व (श्‍व), matching the hero name plaque
        title: "श्री विश्वेश्‍वर स्वामी महाराज जन्मदिन",
        animation: "fadeInRight",
    },
]

export default function Events() {
    return (
        <section className={`${shared.field} ${styles.events}`}>
            <div className="container">
                <SectionHead label="आगामी उत्सव" title="भक्‍तीचा सोहळा, आनंदाचा मेळा" />

                <div className={`row ${shared.cards}`}>
                    {EVENTS.map((event, index) => (
                        <div
                            key={event.title}
                            className={`col-xl-4 col-lg-4 wow ${event.animation}`}
                            data-wow-delay={`${(index + 1) * 100}ms`}
                        >
                            <div className={`${shared.card} ${styles.single}`}>
                                <div className={styles.imgBox}>
                                    <div className={styles.img}>
                                        {/* decorative: the name below says what the festival is, so empty alt */}
                                        <img src={event.img} alt="" width="1000" height="750" loading="lazy" />
                                    </div>
                                    {/* date badge: the day large, the month and year below */}
                                    <time className={styles.badge} dateTime={event.iso}>
                                        <span className={styles.badgeDay}>{event.day}</span>
                                        <span className={styles.badgeMonth}>{event.month}</span>
                                    </time>
                                </div>
                                <div className={styles.content}>
                                    <h3 className={styles.title} lang="mr">{event.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <MoreButton href={PAGES.karyakram.href}>सर्व उत्सव पाहा</MoreButton>
            </div>
        </section>
    )
}
