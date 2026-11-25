'use client'
import { lazy, Suspense, useCallback, useEffect, useMemo, useRef, useState } from "react"
import { SectionHead } from "../../../_shared/_components/Field/Field"
import field from "../../../_shared/_components/Field/Field.module.css"
import { cx, toMarathiDigits, useReducedMotion } from "../../../_shared/_components/utils"
import { LIFE_STORY_HEADING, LIFE_STORY_LABEL, LIFE_STORY_TITLE, PARAGRAPHS, PHOTOS } from "../../_data/lifeStory"
import { BackCoverPage, ContentPage, CoverPage } from "./BookPages"
import { fitLines, layoutPages } from "./paginate"
import styles from "./LifeStory.module.css"

/* =============================================================================
   Parichaya: the life story of Shri Vishweshwar Swami Maharaj as a book that turns its pages, on the maroon field.
   It has twenty pages, a photo and a page of text in turn; the text runs on from one text page to the next and every page
   is full (paginate.js), between a front cover ("पुस्तक उघडा" opens it) and a back cover. On a desktop the open book shows
   two pages, the photos on the left and the text on the right; on a tablet and a phone one at a time, without the first
   photo (nineteen pages).
   Turning: the arrows at the sides (below the book on narrower screens), a drag or a swipe, and the Left and Right
   keys while the book has the focus. The page's number (or the cover's name) is shown under the book and said aloud.
   The server sends the plain text, which the browser replaces with the book once it has measured it; a new width of
   the book is measured again and opens where the reader was. Styles: LifeStory.module.css.
   ========================================================================== */

const HTMLFlipBook = lazy(() => import("react-pageflip"))

const SPREAD = "(min-width: 992px)"      // two pages side by side from here on (as in the CSS)
const RESIZE_WAIT = 200                  // ms without a change of width before the book is laid out again

// The book laid out for the width it has: { width, height (of a page), spread, skipped (pages left out at
// the start), pages }, null until measured.
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
            const { pages, height } = layoutPages(PHOTOS, fitLines(body, PARAGRAPHS, PHOTOS.length), box, width)
            // one page at a time, the book opens at its text: the first photo would follow the cover's
            const skipped = spread ? 0 : 1
            setLayout({ width, height, spread, skipped, pages: pages.slice(skipped) })
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
    const [turning, setTurning] = useState(null)              // is a page being turned (null until the first one is)
    const pages = layout?.pages ?? []
    const last = pages.length + 1                             // the back cover's place in the book (the front cover's is 0)
    const onRight = layout?.spread && page < pages.length && page % 2 === 1   // (a spread starts at its left page)
    const skipped = layout?.skipped ?? 0
    const index = page < 0 ? 0 : Math.max(1, page + 1 - skipped - (onRight ? 1 : 0))   // its place in the book

    // a closed book opens as soon as its cover turns
    const closed = layout && !turning && (index === 0 ? styles.front : index === last && styles.back)

    // what the counter under the book says
    const shown = layout?.spread ? `${toMarathiDigits(index)}–${toMarathiDigits(index + 1)}` : toMarathiDigits(index)
    let counter = ""
    if (layout) {
        if (index === 0) counter = "मुखपृष्ठ"
        else if (index === last) counter = "मलपृष्ठ"
        else counter = `पान ${shown} / ${toMarathiDigits(pages.length)}`
    }

    const turn = (direction) => {
        const book = flipRef.current?.pageFlip()
        if (direction < 0) book?.flipPrev()
        else book?.flipNext()
    }
    // react-pageflip's own pointer handlers must finish first, so the turn waits a frame
    const open = useCallback(() => requestAnimationFrame(() => flipRef.current?.pageFlip()?.flipNext()), [])

    const onFlip = ({ data }) => {
        // a book whose box has another width by now rearranges itself before it is laid out again: not a turn of the page
        const width = Math.floor(bookRef.current.clientWidth / (layout.spread ? 2 : 1))
        if (width === layout.width) setPage(data === 0 ? -1 : data - 1 + skipped)
    }

    const onKeyDown = (event) => {
        if (event.key === "ArrowLeft") turn(-1)
        if (event.key === "ArrowRight") turn(1)
    }

    // every page of the book, in order (made once for a layout: react-pageflip reloads the book when they change)
    const leaves = useMemo(() => {
        if (!layout) return []
        const inner = layout.pages.map((page, i) => <ContentPage key={i} page={page} number={i + 1} />)
        return [<CoverPage key="front" onOpen={open} />, ...inner, <BackCoverPage key="back" />]
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

            <div className={cx(styles.stage, closed && styles.closed, turning !== null && styles.moves)}>
                {arrow(-1, "मागील पान", styles.prev)}

                <div
                    ref={bookRef}
                    className={cx(styles.book, closed)}
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
                                showCover
                                maxShadowOpacity={0.5}
                                flippingTime={reduced ? 1 : 800}
                                onFlip={onFlip}
                                onChangeState={({ data }) => setTurning(data === "flipping")}
                            >
                                {leaves}
                            </HTMLFlipBook>
                        ) : text}
                    </Suspense>
                </div>

                {arrow(1, "पुढील पान", styles.next)}

                <p className={styles.progress} role="status" lang="mr">{counter}</p>
            </div>

            {/* the hidden page the lines are measured in */}
            <div ref={probeRef} className={styles.probe} aria-hidden="true">
                <ContentPage bodyRef={bodyRef} number={0} />
            </div>
        </section>
    )
}
