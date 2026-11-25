import { SectionHead } from "../../../_shared/_components/Field/Field"
import field from "../../../_shared/_components/Field/Field.module.css"
import styles from "./RegularEvents.module.css"

/* =============================================================================
   Utsav: the programmes the math holds every week and every month: two gold cards in a maroon field
   (the look of the home page's Upcoming events cards). Each card: the picture edge to edge across the top with a
   maroon medallion (a Font Awesome icon) on its lower edge, then the programme's name and, on a rounded maroon plate at the foot of the card, a line from the saint (`line`: its two halves;
   on a phone the line breaks between them, on a wider screen it stays on one line).
   The pictures are decorative (empty alt): the name and the line say it in text.
   Styles: see RegularEvents.module.css.
   ========================================================================== */

const EVENTS = [
    {
        img: "/assets/media/utsav/regular-gadi-seva.webp",
        icon: "fas fa-hands-helping",
        title: "गुरुवार गादी सेवा",
        line: ["मी येथे द्यायला बसलो आहे,", "घ्यायला नाही."],
    },
    {
        img: "/assets/media/utsav/regular-palkhi.webp",
        icon: "fas fa-om",
        title: "दुर्गाष्टमी पालखी सोहळा",
        line: ["पालखी निघाली, निघाली", "श्री शंकर गुरुरायांची"],
    },
]

export default function RegularEvents() {
    // (साप्ताहिक: a zero-width joiner, unseen here, keeps the half प, which the font stacks into another shape)
    return (
        <section className={`${field.field} ${styles.regular}`}>
            <div className="container">
                <SectionHead label="नियमित उत्सव" title="साप्‍ताहिक सेवा व मासिक सोहळा" />

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
                                {/* the saint's line: white on a rounded maroon plate at the foot of the card */}
                                <p className={styles.line} lang="mr">
                                    <span>{event.line[0]} <br className={styles.br} />{event.line[1]}</span>
                                </p>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
