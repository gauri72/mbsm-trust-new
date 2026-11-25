import { forwardRef } from "react"
import { SITE_NAME_DISPLAY, SITE_TAGLINE } from "../../../_shared/_components/siteContent"
import { cx, toMarathiDigits } from "../../../_shared/_components/utils"
import { LIFE_STORY_TITLE } from "../../_data/lifeStory"
import styles from "./LifeStory.module.css"

/* =============================================================================
   LifeStory: the book's pages. react-pageflip needs each page to be a component that passes on a ref,
   hence forwardRef. A plain design: white paper with a thick and a thin black line inside the edge of every page,
   the photo and the text set to the same margins, and covers in a carved gold frame. Styles: LifeStory.module.css.
   ========================================================================== */

// react-pageflip sets its own display on the page element, so the page's layout lives in the sheet inside it
const Page = forwardRef(function Page({ className, children }, ref) {
    return (
        <div ref={ref} className={cx(styles.page, className)}>
            <div className={styles.sheet}>{children}</div>
        </div>
    )
})

// A page of the book: a photo, or lines of text (neither: the empty page the text is measured in, with `bodyRef`).
export const ContentPage = forwardRef(function ContentPage({ page, number, bodyRef }, ref) {
    const { photo, lines, lineHeight, inset } = page ?? {}
    return (
        <Page ref={ref} className={styles.paper}>
            {photo ? (
                <img
                    className={styles.photo}
                    src={photo.image}
                    alt={photo.name}
                    width="1254"
                    height="1254"
                    decoding="sync"
                    style={{ objectPosition: `${photo.focus}% 50%` }}
                />
            ) : (
                <div ref={bodyRef} className={styles.body} lang="mr" style={lineHeight && { "--line": `${lineHeight}px`, paddingInline: `${inset / 2}px` }}>
                    {lines?.map((line, i) => (
                        <span key={i} className={cx(styles.line, line.begins && styles.begins)} style={{ wordSpacing: `${line.gap}px` }}>{line.text}</span>
                    ))}
                </div>
            )}
            <span className={styles.number} aria-hidden="true">{toMarathiDigits(number)}</span>
        </Page>
    )
})

// react-pageflip starts a flip-drag on pointer-down that can swallow a button's click: keep the press to the button
const keepPress = (event) => event.stopPropagation()

// The front cover: the title, a photo and the button that opens the book (`onOpen`).
export const CoverPage = forwardRef(function CoverPage({ onOpen }, ref) {
    return (
        <Page ref={ref} className={styles.cover}>
            <h3 className={styles.coverTitle} lang="mr">{LIFE_STORY_TITLE}</h3>
            <img className={styles.arch} src="/assets/media/parichaya/book-cover.webp" alt="" width="1254" height="1254" />
            <button
                type="button"
                className={cx("pill-btn", styles.start)}
                lang="mr"
                onPointerDown={keepPress}
                onMouseDown={keepPress}
                onTouchStart={keepPress}
                onClick={onOpen}
            >
                <span>पुस्तक उघडा</span>
                <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </button>
        </Page>
    )
})

// The back cover: the trust's name and tagline, a line for each half of the tagline.
export const BackCoverPage = forwardRef(function BackCoverPage(props, ref) {
    const [need, help] = SITE_TAGLINE.split(", ")
    return (
        <Page ref={ref} className={styles.cover}>
            <p className={styles.coverTitle} lang="mr">{SITE_NAME_DISPLAY}</p>
            <p className={styles.tagline} lang="mr">
                <span>{need}, </span>
                <span>{help}</span>
            </p>
        </Page>
    )
})
