'use client'
import { useCallback, useEffect, useRef, useState } from "react"
import styles from "./OurStory.module.css"

const CHAPTERS = [
    {
        num: "०१",
        title: "राओजी बुवांचे आगमन",
        place: "बारामती ते सोलापूर",
        text: "बारामतीहून आलेल्या राओजी बुवांना महाराजांनी वाचनासाठी 'एकनाथी भागवत' दिले. ग्रंथातून एक पान खाली पडले — “संतांची सेवा हीच देवाला परम आवडती.” या संदेशाने प्रेरित होऊन राओजी बुवा मठातच वास्तव्यास राहिले.",
        note: "एका वचनाने घडलेला निर्णय",
    },
    {
        num: "०२",
        title: "बुवा दांपत्याची सेवा",
        place: "शुभराय महाराज मठ",
        text: "राओजी बुवा आपले धोतर अर्धे कापून नेसू लागले. पुढे त्यांच्या पत्नी लक्ष्मीबाई मठात आल्या आणि त्यांनी स्वयंपाकघराची जबाबदारी स्वीकारली.",
        note: "पती-पत्नीने रुजवलेली सेवा",
    },
    {
        num: "०३",
        title: "लक्ष्मीबाईंना दिलेले वचन",
        place: "शुभराय महाराज मठ",
        text: "महाराजांनी लक्ष्मीबाईंना त्यांची इच्छा विचारली, तेव्हा त्यांनी मागितले — बुवा वंशातील कोणीतरी सदैव भक्ती करत राहावी. महाराजांनी वचन दिले की वंशातील शेवटची व्यक्तीही देवाची सेवा करेल.",
        note: "पिढ्यानपिढ्या जपलेले वचन",
    },
    {
        num: "०४",
        title: "शृंगेरी शंकराचार्यांची भेट",
        place: "शुभराय महाराज मठ",
        text: "मठ पारंपरिक संन्यासी नियम पाळत नाही, अशी तक्रार शृंगेरी शंकराचार्यांकडे गेली. त्यांनी पत्र पाठवून स्वतः मठाला भेट दिली. महाराजांनी केलेल्या यज्ञातून चमत्कारिकरीत्या औदुंबर वृक्ष प्रकट झालेला पाहून त्यांनी मठाच्या साधना-परंपरेस पूर्ण मान्यता दिली.",
        note: "यज्ञातून प्रकटला औदुंबर वृक्ष",
    },
    {
        num: "०५",
        title: "श्री स्वामी समर्थांचे पदार्पण",
        place: "पणजोबांचा काळ",
        text: "शुभांगी माईंच्या पणजोबांच्या काळात श्री स्वामी समर्थ मठाच्या दारी आले. “जेवायला मिळेल का?” असे विचारत त्यांनी घरातून काही फेऱ्या मारल्या, एका खांबाजवळ विराजमान झाले आणि घरातील सर्वांसमवेत भोजन ग्रहण केले.",
        note: "स्वामींचे लाभले सान्निध्य",
    },
    {
        num: "०६",
        title: "शंकर महाराजांचे वास्तव्य",
        place: "शुभराय महाराज मठ",
        text: "श्री शंकर महाराज तब्बल सत्तावीस वर्षे मठात वास्तव्यास राहिले आणि अंगावर साधी घोंगडी पांघरत असत. ते व शुभांगी माईंचे आजोबा 'एका नाण्याच्या दोन बाजू' असे म्हटले जात.",
        note: "गुरु-शिष्याचे अतूट नाते",
    },
    {
        num: "०७",
        title: "खिचडीचा अखेरचा घास",
        place: "शुभराय महाराज मठ",
        text: "देह ठेवण्यापूर्वी श्री शंकर महाराजांनी शुभांगी माईंच्या आजोबांना आपल्या खिचडीचा एक घास स्वहस्ते भरवला — गुरू-शिष्याच्या ऋणानुबंधाची ती अखेरची पाऊलखूण ठरली.",
        note: "निरोपातही जपलेली माया",
    },
    {
        num: "०८",
        title: "जनू काकांना संन्यासदीक्षा",
        place: "शुभराय महाराज मठ",
        text: "श्री शंकर महाराजांनी आपल्या शिष्य जनू काकांना संन्यासदीक्षा दिली. पुढे जनू काकांच्या देहत्यागानंतर त्यांचे अंत्यसंस्कारही महाराजांनी स्वतः, त्यांच्या समक्ष पूर्ण केले.",
        note: "शिष्यासाठी केलेली अखेरची सेवा",
    },
    {
        num: "०९",
        title: "शांत निर्वाणाचा क्षण",
        place: "शुभराय महाराज मठ",
        text: "शुभांगी माईंच्या आईच्या निर्वाणसमयी एका हाताला त्यांचे वडील व दुसऱ्या हाताला शंकर महाराज होते. एका खोलीतून दुसऱ्या खोलीत जावे, इतक्या शांतपणे त्यांनी आईला अखेरचा निरोप दिला.",
        note: "शांत, समाधानी निर्वाण",
    },
    {
        num: "१०",
        title: "करुणेचा धडा",
        place: "शुभराय महाराज मठ",
        text: "एका माणसाने दगड मारून गाईला रक्तबंबाळ केले. शंकर महाराजांनी त्याला स्वतःच्या डोक्यावर दगड ठेवून तुळशीभोवती प्रदक्षिणा घालायला लावली आणि तेव्हाच त्याला उःशाप व क्षमा मिळाली.",
        note: "मुक्या जिवांप्रती करुणा",
    },
]

const N = CHAPTERS.length

/* Static devotional cards that fill the gold corner space beside the heading
   on desktop — drawn from the mūrtis and vārsā the section itself recounts */
const CORNER_CARDS = [
    {
        side: "left",
        title: "गाभाऱ्यातील मूर्ती",
        text: "पांडुरंग, स्वामी समर्थ, राम-लक्ष्मण-सीता-हनुमान आणि एकाच लाकडी ओंडक्यातून कोरलेली गणराय मूर्ती.",
        tag: "मुख्य गाभारा",
    },
    {
        side: "right",
        title: "जतन केलेल्या पादुका",
        text: "स्वामी समर्थ, शंकर महाराज, शुभराय महाराज व जयकृष्ण बुवा यांच्या पवित्र पादुका आजही मठात पूजिल्या जातात.",
        tag: "श्रद्धेचा वारसा",
    },
]

const BOTTOM_CORNER_CARDS = [
    {
        side: "bottom-left",
        title: "नित्य आरती",
        text: "दररोज सकाळ-संध्याकाळ होणारी आरती हा मठातील भाविकांच्या दिनचर्येचा अविभाज्य भाग आहे.",
        tag: "रोजची उपासना",
    },
    {
        side: "bottom-right",
        title: "वार्षिक उत्सव",
        text: "आषाढी एकादशी, कार्तिकी एकादशी, दसरा व दिवाळीसारखे उत्सव मठात मोठ्या भक्तिभावाने साजरे केले जातात.",
        tag: "उत्सव-परंपरा",
    },
]

/* Kalash (सुवर्ण कलश) finial that crowns each arch */
const Kalash = () => (
    <svg className={styles.kalash} viewBox="0 0 40 54" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M20 0l2.4 6.2L20 9.4 17.6 6.2 20 0Z" fill="currentColor" />
        <rect x="18.7" y="9" width="2.6" height="7" rx="1.3" fill="currentColor" />
        <path d="M12 17h16l-2 4H14l-2-4Z" fill="currentColor" />
        <path d="M20 21c6.2 0 10 4.3 10 9.6 0 6-4.6 10.4-10 10.4s-10-4.4-10-10.4C10 25.3 13.8 21 20 21Z" fill="currentColor" />
        <path d="M9 43h22l-2.5 5h-17L9 43Z" fill="currentColor" />
        <ellipse cx="20" cy="51" rx="13" ry="2.4" fill="currentColor" opacity=".55" />
    </svg>
)

export default function OurStory() {
    const [active, setActive] = useState(0)
    const stageRef = useRef(null)
    const touch = useRef({ x: 0, active: false })

    const go = useCallback((dir) => {
        setActive((a) => (a + dir + N) % N)
    }, [])

    useEffect(() => {
        const el = stageRef.current
        if (!el) return
        const onKey = (e) => {
            if (e.key === "ArrowLeft") { e.preventDefault(); go(-1) }
            if (e.key === "ArrowRight") { e.preventDefault(); go(1) }
        }
        el.addEventListener("keydown", onKey)
        return () => el.removeEventListener("keydown", onKey)
    }, [go])

    const onTouchStart = (e) => {
        touch.current = { x: e.touches[0].clientX, active: true }
    }
    const onTouchEnd = (e) => {
        if (!touch.current.active) return
        const dx = e.changedTouches[0].clientX - touch.current.x
        if (Math.abs(dx) > 45) go(dx < 0 ? 1 : -1)
        touch.current.active = false
    }

    const offsetOf = (i) => {
        let d = i - active
        if (d > N / 2) d -= N
        if (d < -N / 2) d += N
        return d
    }

    return (
        <section className={styles.mandir}>
            {/* Maroon Om/swastik ornamental border — same frame as the About section */}
            <div className="divine-border--about divine-border--about-top" role="presentation"></div>
            <div className="divine-border--about-vertical divine-border--about-left" role="presentation"></div>
            <div className="divine-border--about-vertical divine-border--about-right" role="presentation"></div>
            <span className="about-One__corner about-One__corner--tl" aria-hidden="true"></span>
            <span className="about-One__corner about-One__corner--tr" aria-hidden="true"></span>
            <span className="about-One__corner about-One__corner--bl" aria-hidden="true"></span>
            <span className="about-One__corner about-One__corner--br" aria-hidden="true"></span>
            <div className="divine-border--about divine-border--about-bottom" role="presentation"></div>

            <div className={styles.bg} aria-hidden="true"></div>
            <div className={styles.haze} aria-hidden="true"></div>

            {/* Desktop corner cards filling the upper-left / upper-right gold space */}
            {CORNER_CARDS.map((card) => (
                <aside
                    key={card.side}
                    className={`${styles.cornerCard} ${card.side === "left" ? styles.cornerCardLeft : styles.cornerCardRight}`}
                    lang="mr"
                >
                    <svg className={styles.cornerCardKalash} viewBox="0 0 40 54" aria-hidden="true">
                        <path d="M20 0l2.4 6.2L20 9.4 17.6 6.2 20 0Z" fill="currentColor" />
                        <rect x="18.7" y="9" width="2.6" height="7" rx="1.3" fill="currentColor" />
                        <path d="M12 17h16l-2 4H14l-2-4Z" fill="currentColor" />
                        <path d="M20 21c6.2 0 10 4.3 10 9.6 0 6-4.6 10.4-10 10.4s-10-4.4-10-10.4C10 25.3 13.8 21 20 21Z" fill="currentColor" />
                        <path d="M9 43h22l-2.5 5h-17L9 43Z" fill="currentColor" />
                    </svg>
                    <h3 className={styles.cornerCardTitle}>{card.title}</h3>
                    <p className={styles.cornerCardText}>{card.text}</p>
                    <span className={styles.cornerCardRule} aria-hidden="true"></span>
                    <span className={styles.cornerCardTag}>{card.tag}</span>
                </aside>
            ))}

            {/* Desktop corner cards filling the lower-left / lower-right gold space, angled outward */}
            {BOTTOM_CORNER_CARDS.map((card) => (
                <aside
                    key={card.side}
                    className={`${styles.cornerCard} ${card.side === "bottom-left" ? styles.cornerCardBottomLeft : styles.cornerCardBottomRight}`}
                    lang="mr"
                >
                    <svg className={styles.cornerCardKalash} viewBox="0 0 40 54" aria-hidden="true">
                        <path d="M20 0l2.4 6.2L20 9.4 17.6 6.2 20 0Z" fill="currentColor" />
                        <rect x="18.7" y="9" width="2.6" height="7" rx="1.3" fill="currentColor" />
                        <path d="M12 17h16l-2 4H14l-2-4Z" fill="currentColor" />
                        <path d="M20 21c6.2 0 10 4.3 10 9.6 0 6-4.6 10.4-10 10.4s-10-4.4-10-10.4C10 25.3 13.8 21 20 21Z" fill="currentColor" />
                        <path d="M9 43h22l-2.5 5h-17L9 43Z" fill="currentColor" />
                    </svg>
                    <h3 className={styles.cornerCardTitle}>{card.title}</h3>
                    <p className={styles.cornerCardText}>{card.text}</p>
                    <span className={styles.cornerCardRule} aria-hidden="true"></span>
                    <span className={styles.cornerCardTag}>{card.tag}</span>
                </aside>
            ))}

            <div className="container">
                <div className={`section-title text-center sec-title-animation animation-style1 ${styles.head}`}>
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline" lang="mr">मठाच्या स्मृती</span>
                    </div>
                    <h2 className="section-title__title title-animation" lang="mr">
                        शिष्य, संत आणि <span>चमत्कार</span>
                    </h2>
                </div>

                <div
                    className={styles.stage}
                    ref={stageRef}
                    tabIndex={0}
                    role="group"
                    aria-roledescription="carousel"
                    aria-label="शुभराय महाराजांच्या प्रवासाचे टप्पे"
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                >
                    <div className={styles.ring}>
                        {CHAPTERS.map((c, i) => {
                            const d = offsetOf(i)
                            const far = Math.abs(d) > 2
                            return (
                                <article
                                    key={c.num}
                                    className={`${styles.arch}${d === 0 ? " is-active" : ""}${far ? " is-far" : ""}`}
                                    style={{ "--d": d, "--ad": Math.abs(d) }}
                                    aria-hidden={d !== 0}
                                    inert={d !== 0 ? "" : undefined}
                                >
                                    <span className={styles.glow} aria-hidden="true"></span>
                                    <Kalash />
                                    <div className={styles.face}>
                                        <div className={styles.scroll}>
                                            <h3 className={styles.archTitle} lang="mr">{c.title}</h3>
                                            {c.place && (
                                                <span className={styles.place} lang="mr">
                                                    <i className="fas fa-map-marker-alt" aria-hidden="true"></i> {c.place}
                                                </span>
                                            )}
                                            <p lang="mr">{c.text}</p>
                                            {c.note && (
                                                <span className={styles.note} lang="mr">{c.note}</span>
                                            )}
                                        </div>
                                    </div>
                                    <span className={styles.base} aria-hidden="true"></span>
                                </article>
                            )
                        })}
                    </div>

                    <button
                        type="button"
                        className={`${styles.nav} ${styles.navPrev}`}
                        onClick={() => go(-1)}
                        aria-label="मागील टप्पा"
                    >
                        <i className="fas fa-arrow-right"></i>
                    </button>
                    <button
                        type="button"
                        className={`${styles.nav} ${styles.navNext}`}
                        onClick={() => go(1)}
                        aria-label="पुढील टप्पा"
                    >
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>

                <div className={styles.dots} role="tablist" aria-label="टप्पे">
                    {CHAPTERS.map((c, i) => (
                        <button
                            key={c.num}
                            type="button"
                            role="tab"
                            aria-selected={i === active}
                            aria-label={`पर्व ${c.num} — ${c.title}`}
                            className={`${styles.dot}${i === active ? " is-active" : ""}`}
                            onClick={() => setActive(i)}
                        >
                            <span>{c.num}</span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}
