import Link from "next/link"
import shared from "./Field.module.css"

/* =============================================================================
   The maroon "field" sections (home: About, Projects, Upcoming events, Blogs; contact page: form, location)
   share their look in Field.module.css (import it as `field` and apply it beside the section's own class).
   These are the two pieces they all use; the heading look and the button are the global
   .section-title--maroon and .pill-btn.
   ========================================================================== */

// The section's heading: a gold label (optional), then the white title.
// `before` / `after` (optional) sit left and right of the title, centred on it (the section styles them).
export function SectionHead({ label, title, before, after }) {
    const heading = <h2 className="section-title__title title-animation" lang="mr">{title}</h2>
    return (
        <div className={shared.head}>
            <div className="section-title section-title--maroon text-center sec-title-animation animation-style1">
                {label && (
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline" lang="mr">{label}</span>
                    </div>
                )}
                {before || after ? (
                    <div className={shared.titleRow}>
                        {before}
                        {heading}
                        {after}
                    </div>
                ) : heading}
            </div>
        </div>
    )
}

// The row under the cards with the one button, which leads to the page the section is a taste of.
// `external` opens the link in a new tab (the map).
export function MoreButton({ href, external = false, children }) {
    return (
        <div className={`${shared.cta} wow fadeInUp`} data-wow-delay="300ms">
            <Link href={href} className="pill-btn" lang="mr" {...(external && { target: "_blank", rel: "noopener noreferrer" })}>
                <span>{children}</span>
                {external && <span className="visually-hidden"> (नवीन टॅबमध्ये उघडते)</span>}
                <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </Link>
        </div>
    )
}
