import { SectionHead } from "../../../_shared/_components/Field/Field"
import field from "../../../_shared/_components/Field/Field.module.css"
import styles from "./RegularEvents.module.css"

/* =============================================================================
   Karyakram: the programmes the math holds every week and every month: two gold cards in a maroon field
   (the look of the home page's Upcoming events cards). Each card: the picture edge to edge across the top with a
   maroon medallion (a Font Awesome icon) on its lower edge, then the programme's name and, on a rounded maroon plate at the foot of the card, a line from the saint (`line`: its two halves;
   on a phone the line breaks between them, on a tablet it stays on one line), flanked by the gold flower of the Mantra band.
   The pictures are decorative (empty alt): the name and the line say it in text.
   Styles: see RegularEvents.module.css.
   ========================================================================== */

const EVENTS = [
    {
        img: "/assets/media/karyakram/regular-gadi-seva.webp",
        icon: "fas fa-hands-helping",
        title: "गुरुवार गादी सेवा",
        line: ["मी येथे द्यायला बसलो आहे,", "घ्यायला नाही."],
    },
    {
        img: "/assets/media/karyakram/regular-palkhi.webp",
        icon: "fas fa-om",
        title: "दुर्गाष्टमी पालखी सोहळा",
        line: ["पालखी निघाली, निघाली", "श्री शंकर गुरुरायांची"],
    },
]

// The flower on each side of the saint's line: the Mantra band's divider (_shared/_components/Mantra/Mantra.js), the same
// shapes — a four-petal gold flower with a maroon centre (drawn as SVG so it keeps its two colours), as large as the text.
const Flower = () => (
    <svg className={styles.flower} viewBox="0 0 24 24" aria-hidden="true">
        <ellipse cx="12" cy="7" rx="3" ry="5" />
        <ellipse cx="12" cy="17" rx="3" ry="5" />
        <ellipse cx="7" cy="12" rx="5" ry="3" />
        <ellipse cx="17" cy="12" rx="5" ry="3" />
        <circle className={styles.flowerDot} cx="12" cy="12" r="2.4" />
    </svg>
)

export default function RegularEvents() {
    return (
        <section className={`${field.field} ${styles.regular}`}>
            <div className="container">
                <SectionHead label="नियमित उत्सव" title="साप्ताहिक सेवा व मासिक सोहळा" />

                <div className={`row ${field.cards}`}>
                    {EVENTS.map((event, index) => (
                        <div
                            key={event.title}
                            className={`col-lg-6 wow ${index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}`}
                            data-wow-delay={`${(index + 1) * 100}ms`}
                        >
                            <article className={`${field.card} ${styles.card}`}>
                                <div className={styles.imgBox}>
                                    <div className={styles.img}>
                                        <img src={event.img} alt="" width="1200" height="675" loading="lazy" />
                                    </div>
                                    {/* the medallion: sits on the picture's lower edge */}
                                    <span className={styles.medal} aria-hidden="true"><i className={event.icon}></i></span>
                                </div>
                                <div className={styles.content}>
                                    <h3 className={styles.title} lang="mr">{event.title}</h3>
                                </div>
                                {/* the saint's line: white on a rounded maroon plate at the foot of the card, a flower on each side */}
                                <p className={styles.line} lang="mr">
                                    <Flower />
                                    <span>{event.line[0]} <br className={styles.br} />{event.line[1]}</span>
                                    <Flower />
                                </p>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
