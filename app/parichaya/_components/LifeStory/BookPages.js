import { forwardRef } from "react"
import { cx, toMarathiDigits } from "../../../_shared/_components/utils"
import { LIFE_STORY_TITLE } from "../../_data/lifeStory"
import styles from "./LifeStory.module.css"

/* =============================================================================
   LifeStory: the book's pages. react-pageflip needs each page to be a component that passes on a ref,
   hence forwardRef. Styles: LifeStory.module.css.
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
    const { photo, lines, lineHeight } = page ?? {}
    return (
        <Page ref={ref} className={styles.paper}>
            <div ref={bodyRef} className={styles.body} lang="mr" style={lineHeight && { "--line": `${lineHeight}px` }}>
                {photo && (
                    <img
                        className={styles.photo}
                        src={photo.image}
                        alt={photo.name}
                        width="1000"
                        height="1000"
                        decoding="async"
                        style={{ objectPosition: `${photo.focus}% 50%` }}
                    />
                )}
                {lines?.map((line, i) => (
                    <span key={i} className={cx(styles.line, line.begins && styles.begins)}>{line.text} </span>
                ))}
            </div>
            <span className={styles.number} aria-hidden="true">{toMarathiDigits(number)}</span>
        </Page>
    )
})

// What both covers carry: the saint's portrait, the title and a rule with the Om.
const CoverArt = () => (
    <>
        <img className={styles.emblem} src="/assets/media/parichaya/about.webp" alt="" width="800" height="800" />
        <h3 className={styles.coverTitle} lang="mr">{LIFE_STORY_TITLE}</h3>
        <span className={styles.ornament} aria-hidden="true"><i className="fas fa-om"></i></span>
    </>
)

// react-pageflip starts a flip-drag on pointer-down that can swallow a button's click: keep the press to the button
const keepPress = (event) => event.stopPropagation()

// The front cover. `onOpen` opens the book.
export const CoverPage = forwardRef(function CoverPage({ onOpen }, ref) {
    return (
        <Page ref={ref} className={styles.cover}>
            <CoverArt />
            <button
                type="button"
                className={styles.start}
                lang="mr"
                onPointerDown={keepPress}
                onMouseDown={keepPress}
                onTouchStart={keepPress}
                onClick={onOpen}
            >
                <span>गाथा वाचा</span>
                <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </button>
        </Page>
    )
})

// The back cover.
export const BackCoverPage = forwardRef(function BackCoverPage(props, ref) {
    return <Page ref={ref} className={styles.cover}><CoverArt /></Page>
})
