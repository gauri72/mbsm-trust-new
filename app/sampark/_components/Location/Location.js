import Link from "next/link"
import {
    SITE_PHONE_TEL, SITE_PHONE_DISPLAY, SITE_EMAIL, SITE_EMAIL_MAILTO, SITE_MAP_URL,
    SITE_ADDRESS_PLACE, SITE_ADDRESS_LINE1, SITE_ADDRESS_CITY, SITE_ADDRESS_PINCODE,
} from "../../../_shared/_components/siteContent"
import { SectionHead, MoreButton } from "../../../_shared/_components/Field/Field"
import field from "../../../_shared/_components/Field/Field.module.css"
import { cx } from "../../../_shared/_components/utils"
import styles from "./Location.module.css"

/* =============================================================================
   Contact page: where to find the math. A map on a gold card, and the phone, email and address as three
   gold cards beside it (below it on a screen narrower than 1200px), in a maroon field (the look of the home sections). Styles: Location.module.css.
   ========================================================================== */

// Google Maps "Embed a map" URL of the "Mangal Bhakta Seva Mandal (MBSM) Trust" listing; the place id makes it
// show the pin and the name card
const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.0!2d74.6929024!3d19.1503465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcba2a1b363501%3A0xb70bfcce19e73dee!2sMangal%20Bhakta%20Seva%20Mandal%20(MBSM)%20Trust!5e0!3m2!1sen!2sin!4v1761900000000!5m2!1sen!2sin"

const MAP_TITLE = `${SITE_ADDRESS_PLACE} ${SITE_ADDRESS_LINE1} ${SITE_ADDRESS_CITY}`

// the three details, with English digits as in siteContent.js
const DETAILS = [
    {
        icon: "fas fa-phone-alt",
        label: "दूरध्वनी क्रमांक",
        href: SITE_PHONE_TEL,
        lines: [SITE_PHONE_DISPLAY],
    },
    {
        icon: "fas fa-envelope",
        label: "ईमेल",
        href: SITE_EMAIL_MAILTO,
        lines: [SITE_EMAIL],
    },
    {
        icon: "fas fa-map-marker-alt",
        label: "पत्ता",
        href: SITE_MAP_URL,
        external: true,
        // two lines: the math, then the plot, city and pincode (the city and pincode are kept together if the line has to wrap)
        lines: [
            SITE_ADDRESS_PLACE,
            <>{SITE_ADDRESS_LINE1} <span className={styles.together}>{SITE_ADDRESS_CITY} - {SITE_ADDRESS_PINCODE}</span></>,
        ],
    },
]

export default function Location() {
    return (
        <section className={cx(field.field, styles.location)} id="location">
            <div className="container">
                <SectionHead label="आमचे स्थान" title="मठापर्यंत कसे पोहोचाल" />
                <div className={`row ${field.cards}`}>
                    <div className="col-xl-7 wow fadeInLeft" data-wow-delay="100ms">
                        <div className={cx(field.card, styles.mapCard)}>
                            <iframe
                                src={MAP_EMBED_URL}
                                className={styles.map}
                                title={MAP_TITLE}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                    <div className="col-xl-5 wow fadeInRight" data-wow-delay="100ms">
                        <ul className={styles.details}>
                            {DETAILS.map((d) => (
                                <li key={d.label} className={styles.detailItem}>
                                    <Link
                                        href={d.href}
                                        className={cx(field.card, styles.detail)}
                                        lang="mr"
                                        {...(d.external && { target: "_blank", rel: "noopener noreferrer" })}
                                    >
                                        <span className={styles.icon} aria-hidden="true"><i className={d.icon}></i></span>
                                        <span className={styles.text}>
                                            <span className={styles.label}>{d.label}</span>
                                            {d.lines.map((line, i) => <span key={i} className={styles.value}>{line}</span>)}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <MoreButton href={SITE_MAP_URL} external>दिशादर्शन मिळवा</MoreButton>
            </div>
        </section>
    )
}
