'use client'
import { lazy, Suspense, useCallback, useEffect, useMemo, useRef, useState } from "react"
import { SectionHead } from "../../../_shared/_components/Field/Field"
import field from "../../../_shared/_components/Field/Field.module.css"
import { cx, toMarathiDigits, useReducedMotion } from "../../../_shared/_components/utils"
import { LIFE_STORY_HEADING, LIFE_STORY_LABEL, LIFE_STORY_TITLE, PARAGRAPHS, PHOTOS } from "../../_data/lifeStory"
import { BackCoverPage, ContentPage, CoverPage } from "./BookPages"
import { layoutPages, measureLines } from "./paginate"
import styles from "./LifeStory.module.css"

/* =============================================================================
   Parichaya: the life story of Shri Vishweshwar Swami Maharaj as a book that turns its pages, on the maroon field.
   It has twenty pages on every screen, a photo and a page of text in turn; the text runs on from one text page to the next
   and every page is full (paginate.js). On a desktop the book lies open, the photos on the left and the text on the right; on
   a tablet and a phone it shows one page at a time, between a front cover ("गाथा वाचा" opens it) and a back cover.
   Turning: the arrows at the sides (below the book on narrower screens), a drag or a swipe, and the Left and Right
   keys while the book has the focus. The page's number is shown under the book and said aloud.
   The server sends the plain text, which the browser replaces with the book once it has measured it; a new width of
   the book is measured again and opens where the reader was. Styles: LifeStory.module.css.
   ========================================================================== */

const HTMLFlipBook = lazy(() => import("react-pageflip"))

const SPREAD = "(min-width: 992px)"      // two pages side by side from here on (as in the CSS)
const RESIZE_WAIT = 200                  // ms without a change of width before the book is laid out again

// The book laid out for the width it has: { width, height (of a page), spread, pages }, null until measured.
// `bookRef`: the box the book fills; `probeRef`: a hidden page, `bodyRef`: the text box in it.
function useLayout(bookRef, probeRef, bodyRef) {
    const [layout, setLayout] = useState(null)
    useEffect(() => {
        let timer
        let measured = 0
        let gone = false

        const measure = () => {
            const full = Math.floor(bookRef.current.clientWidth)
            if (gone || !full || full === measured) return
            measured = full
            const spread = window.matchMedia(SPREAD).matches
            const width = spread ? Math.floor(full / 2) : full
            const probe = probeRef.current
            const body = bodyRef.current
            Object.assign(probe.style, { width: `${width}px`, height: `${width}px` })
            const box = { fontSize: parseFloat(getComputedStyle(body).fontSize), around: width - body.clientHeight }
            setLayout({ width, spread, ...layoutPages(PHOTOS, measureLines(body, PARAGRAPHS), box, width) })
        }

        const observer = new ResizeObserver(() => {
            clearTimeout(timer)
            timer = setTimeout(measure, measured ? RESIZE_WAIT : 0)
        })
        // the lines can only be measured in the site's font
        document.fonts.ready.then(() => !gone && observer.observe(bookRef.current))
        return () => {
            gone = true
            clearTimeout(timer)
            observer.disconnect()
        }
    }, [bookRef, probeRef, bodyRef])
    return layout
}

export default function LifeStory() {
    const bookRef = useRef(null)
    const probeRef = useRef(null)
    const bodyRef = useRef(null)
    const flipRef = useRef(null)
    const layout = useLayout(bookRef, probeRef, bodyRef)
    const reduced = useReducedMotion()

    // the page the reader is on (0: the first photo; -1: the front cover): the same in every layout
    const [page, setPage] = useState(-1)
    const pages = layout?.pages ?? []
    const covers = layout ? !layout.spread : false
    const first = covers ? 1 : 0                              // the index of the first page inside the covers
    const last = covers ? pages.length + 1 : pages.length - 2
    const onSpread = Math.min(Math.max(page, 0), pages.length - 2)   // (a spread has no covers and starts at its left page)
    const index = covers ? page + first : Math.max(0, onSpread - (onSpread % 2))   // its place in the book

    const inside = layout && index >= first && index < pages.length + first
    const number = index - first + 1
    const shown = layout?.spread ? `${toMarathiDigits(number)}–${toMarathiDigits(number + 1)}` : toMarathiDigits(number)

    const turn = (direction) => {
        const book = flipRef.current?.pageFlip()
        if (direction < 0) book?.flipPrev()
        else book?.flipNext()
    }
    // react-pageflip's own pointer handlers must finish first, so the turn waits a frame
    const open = useCallback(() => requestAnimationFrame(() => flipRef.current?.pageFlip()?.flipNext()), [])

    const onKeyDown = (event) => {
        if (event.key === "ArrowLeft") turn(-1)
        if (event.key === "ArrowRight") turn(1)
    }

    // every page of the book, in order (made once for a layout: react-pageflip reloads the book when they change)
    const leaves = useMemo(() => {
        if (!layout) return []
        const inner = layout.pages.map((page, i) => <ContentPage key={i} page={page} number={i + 1} />)
        return layout.spread ? inner : [<CoverPage key="front" onOpen={open} />, ...inner, <BackCoverPage key="back" />]
    }, [layout, open])

    const arrow = (direction, label, className) => (
        <button
            type="button"
            className={cx(styles.arrow, className)}
            onClick={() => turn(direction)}
            disabled={!layout || (direction < 0 ? index <= 0 : index >= last)}
            aria-label={label}
        >
            <i className="fas fa-chevron-right" aria-hidden="true"></i>
        </button>
    )

    const text = (
        <div className={styles.plain} lang="mr">
            {PARAGRAPHS.map((para) => <p key={para}>{para}</p>)}
        </div>
    )

    return (
        <section className={cx(field.field, styles.story)}>
            <div className="container">
                <SectionHead label={LIFE_STORY_LABEL} title={LIFE_STORY_HEADING} />
            </div>

            <div className={styles.stage}>
                {arrow(-1, "मागील पान", styles.prev)}

                <div
                    ref={bookRef}
                    className={cx(styles.book, inside && styles.open)}
                    role="region"
                    aria-roledescription="पुस्तक"
                    aria-label={LIFE_STORY_TITLE}
                    tabIndex={0}
                    onKeyDown={onKeyDown}
                >
                    <Suspense fallback={text}>
                        {layout ? (
                            <HTMLFlipBook
                                key={`${layout.width}-${layout.spread}`}
                                ref={flipRef}
                                width={layout.width}
                                height={layout.height}
                                size="fixed"
                                startPage={index}
                                showCover={covers}
                                maxShadowOpacity={0.5}
                                flippingTime={reduced ? 1 : 800}
                                onFlip={({ data }) => setPage(data - first)}
                            >
                                {leaves}
                            </HTMLFlipBook>
                        ) : text}
                    </Suspense>
                </div>

                {arrow(1, "पुढील पान", styles.next)}
            </div>

            <p className={styles.progress} role="status" lang="mr">
                {inside ? `पान ${shown} / ${toMarathiDigits(pages.length)}` : ""}
            </p>

            {/* the hidden page the lines are measured in */}
            <div ref={probeRef} className={styles.probe} aria-hidden="true">
                <ContentPage bodyRef={bodyRef} number={0} />
            </div>
        </section>
    )
}
