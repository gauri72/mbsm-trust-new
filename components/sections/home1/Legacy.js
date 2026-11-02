'use client'
import { forwardRef, lazy, Suspense, useEffect, useRef, useState } from "react"

import { ABOUT_BOOK } from "@/lib/data/aboutBook"

const HTMLFlipBook = lazy(() => import("react-pageflip"))

// Each chapter (lib/data/aboutBook.js) opens on a spread: its photo on the
// left page and its text on the right. Text that doesn't fit one page flows
// onto the next pages, breaking only between sentences; when a chapter's
// text takes an even number of pages, a page with the chapter's quote is
// added so the next chapter's photo still opens on a left page.

// rough page capacity in characters (the heading takes room on the first page)
const PAGE_CHARS = 900
const FIRST_PAGE_CHARS = 760

const sentencesOf = (para) => para.match(/[^.?!।]+[.?!।]+["”'’]?\s*|[^.?!।]+$/g)?.map((t) => t.trim()).filter(Boolean) ?? [para]

// split a chapter's paragraphs into pages; each page is a list of paragraphs
const paginate = (paras) => {
    const pages = []
    let page = []
    let used = 0
    let limit = FIRST_PAGE_CHARS
    const newPage = () => {
        pages.push(page)
        page = []
        used = 0
        limit = PAGE_CHARS
    }
    paras.forEach((para) => {
        if (used + para.length <= limit) {
            page.push(para)
            used += para.length
            return
        }
        // the paragraph doesn't fit whole: fill the page sentence by sentence
        let piece = ""
        sentencesOf(para).forEach((sentence) => {
            const next = piece ? `${piece} ${sentence}` : sentence
            if (used + next.length > limit && (piece || page.length)) {
                if (piece) page.push(piece)
                newPage()
                piece = sentence
            } else {
                piece = next
            }
        })
        if (piece) {
            page.push(piece)
            used += piece.length
        }
    })
    if (page.length) pages.push(page)
    return pages
}

const PAGES = ABOUT_BOOK.flatMap(({ num, image, name, quote, paras }) => {
    const textPages = paginate(paras)
    const pages = [
        { image, name },
        ...textPages.map((chunk, i) => ({ name, title: i === 0 ? num : null, paras: chunk, continued: i > 0 })),
    ]
    if (textPages.length % 2 === 0) pages.push({ name, quote })
    return pages
})

const CoverPage = forwardRef(({ onOpen }, ref) => (
    <div className="legacy-book-page legacy-book-page--cover" ref={ref}>
        <div className="legacy-book-page__cover-inner">
            <span className="legacy-book-page__cover-symbol" aria-hidden="true">
                <img src="assets/images/about/about.png" alt="" />
            </span>

            <h3 className="legacy-book-page__cover-title">
                <span className="legacy-book-page__cover-title-bar" aria-hidden="true">||</span>
                दिव्य जीवनगाथा
                <span className="legacy-book-page__cover-title-bar" aria-hidden="true">||</span>
            </h3>
            <span className="legacy-book-page__cover-subtitle">दत्तकृपा, शंकर महाराजांचा अनुग्रह आणि निःस्वार्थ लोकसेवेची कहाणी</span>

            <button
                type="button"
                className="legacy-book-page__cta"
                aria-label="गाथा वाचा — स्वामी महाराजांची जीवनगाथा वाचायला सुरुवात करा"
                onPointerDown={(e) => {
                    // react-pageflip listens on pointer/mouse-down and, in Chrome,
                    // starts a flip-drag gesture that can swallow the button's
                    // click. Stop it here so our own handler always runs.
                    e.stopPropagation()
                }}
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                onClick={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                    onOpen?.()
                }}
            >
                <span className="legacy-book-page__cta-label">गाथा वाचा</span>
                <span className="legacy-book-page__cta-icon" aria-hidden="true">
                    <i className="icon-arrow-right"></i>
                </span>
            </button>
        </div>
    </div>
))
CoverPage.displayName = "CoverPage"

const PortraitPage = forwardRef(({ page, index }, ref) => (
    <div className="legacy-book-page legacy-book-page--portrait" ref={ref}>
        <div className="legacy-book-page__photo legacy-book-page__photo--full">
            {page.mobileImage ? (
                <>
                    <img className="legacy-book-page__photo-img--desktop" src={page.image} alt={page.name} />
                    <img className="legacy-book-page__photo-img--mobile" src={page.mobileImage} alt={page.name} />
                </>
            ) : (
                <img src={page.image} alt={page.name} />
            )}
            <span className="legacy-book-page__photo-frame" aria-hidden="true"></span>
        </div>
        <span className="legacy-book-page__number">{index}</span>
    </div>
))
PortraitPage.displayName = "PortraitPage"

const TextPage = forwardRef(({ page }, ref) => (
    <div className="legacy-book-page" ref={ref}>
        <div className="legacy-book-page__body">
            {page.title && (
                <>
                    <span className="legacy-book-page__name">{page.name}</span>
                    <span className="legacy-book-page__role">{page.title}</span>
                </>
            )}
            {page.continued && <span className="legacy-book-page__running">{page.name}</span>}
            {page.paras.map((para, i) => (
                <p key={i} className="legacy-book-page__text">{para}</p>
            ))}
        </div>
    </div>
))
TextPage.displayName = "TextPage"

// closing page of a chapter whose text ran onto an even number of pages
const QuotePage = forwardRef(({ page }, ref) => (
    <div className="legacy-book-page legacy-book-page--quote" ref={ref}>
        <div className="legacy-book-page__quote-inner">
            <span className="legacy-book-page__quote-mark" aria-hidden="true">॥</span>
            <p className="legacy-book-page__quote-text">{page.quote}</p>
            <span className="legacy-book-page__quote-mark" aria-hidden="true">॥</span>
            <span className="legacy-book-page__quote-source">{page.name}</span>
        </div>
    </div>
))
QuotePage.displayName = "QuotePage"

const ContentPage = forwardRef(({ person, index }, ref) => (
    person.image
        ? <PortraitPage page={person} index={index} ref={ref} />
        : person.quote
            ? <QuotePage page={person} ref={ref} />
            : <TextPage page={person} index={index} ref={ref} />
))
ContentPage.displayName = "ContentPage"

const BackCoverPage = forwardRef((props, ref) => (
    <div className="legacy-book-page legacy-book-page--cover" ref={ref}>
        <div className="legacy-book-page__cover-inner">
            <span className="legacy-book-page__cover-symbol" aria-hidden="true">
                <img src="assets/images/about/about.png" alt="" />
            </span>
            <span className="legacy-book-page__cover-subtitle legacy-book-page__cover-subtitle--back">मंगल भक्त सेवा मंडळ, अहिल्यानगर</span>
        </div>
    </div>
))
BackCoverPage.displayName = "BackCoverPage"

const TABLET_MIN_WIDTH = 768
const TABLET_MAX_WIDTH = 991
const MOBILE_MAX_WIDTH = 767

export default function Legacy() {
    const bookRef = useRef(null)
    const [pageIndex, setPageIndex] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [closedSide, setClosedSide] = useState("front") // "front" | "back" | null
    const [isTablet, setIsTablet] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const totalPages = PAGES.length + 2

    useEffect(() => {
        const tabletMql = window.matchMedia(`(min-width: ${TABLET_MIN_WIDTH}px) and (max-width: ${TABLET_MAX_WIDTH}px)`)
        const updateTablet = () => setIsTablet(tabletMql.matches)
        updateTablet()
        tabletMql.addEventListener("change", updateTablet)

        const mobileMql = window.matchMedia(`(max-width: ${MOBILE_MAX_WIDTH}px)`)
        const updateMobile = () => setIsMobile(mobileMql.matches)
        updateMobile()
        mobileMql.addEventListener("change", updateMobile)

        return () => {
            tabletMql.removeEventListener("change", updateTablet)
            mobileMql.removeEventListener("change", updateMobile)
        }
    }, [])

    const goPrev = () => bookRef.current?.pageFlip()?.flipPrev()
    const goNext = () => bookRef.current?.pageFlip()?.flipNext()

    // "गाथा वाचा" — open the closed book to its first content page.
    // flipNext() is the reliable call here; flip(n) is blocked by page-flip's
    // own click guard when the book is in its single-page closed state.
    // Defer a tick so react-pageflip's own pointer handlers finish first —
    // calling synchronously from the click races them on Chrome and no-ops.
    const openBook = () => {
        requestAnimationFrame(() => {
            bookRef.current?.pageFlip()?.flipNext("bottom")
        })
    }

    const handleFlip = (e) => {
        setPageIndex(e.data)
        // "Open" = showing an interior spread; first page (front cover) and last
        // page (back cover) are single closed pages sitting on opposite halves.
        const open = e.data > 0 && e.data < totalPages - 1
        setIsOpen(open)
        setClosedSide(e.data === 0 ? "front" : e.data === totalPages - 1 ? "back" : null)
    }

    return (
        <section className={`legacy-One${isOpen ? " legacy-One--book-open" : " legacy-One--book-closed"}`}>
            <div className="divine-border--legacy divine-border--legacy-top" role="presentation"></div>
            <div className="divine-border--legacy-vertical divine-border--legacy-left" role="presentation"></div>
            <div className="divine-border--legacy-vertical divine-border--legacy-right" role="presentation"></div>
            <span className="legacy-One__corner legacy-One__corner--tl" aria-hidden="true"></span>
            <span className="legacy-One__corner legacy-One__corner--tr" aria-hidden="true"></span>
            <span className="legacy-One__corner legacy-One__corner--bl" aria-hidden="true"></span>
            <span className="legacy-One__corner legacy-One__corner--br" aria-hidden="true"></span>

            <div className="section-title text-center sec-title-animation animation-style1">
                <div className="section-title__tagline-box">
                    <span className="section-title__tagline">प्रेरणादायी जीवनगाथा</span>
                </div>
                <h2 className="section-title__title title-animation">श्रद्धेपासून सेवेपर्यंतचा <br className="legacy-One__title-break" /> दिव्य प्रवास</h2>
            </div>

            <div className={`legacy-book-stage${isOpen ? " legacy-book-stage--opened" : ` legacy-book-stage--closed legacy-book-stage--closed-${closedSide || "front"}`}`}>
                <button
                    type="button"
                    className="legacy-book-arrow legacy-book-arrow--prev"
                    onClick={goPrev}
                    disabled={pageIndex === 0}
                    aria-label="मागील पान"
                >
                    <svg className="legacy-book-arrow__icon" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Desktop diya-pillars hugging the book's left/right edges —
                    they rise in when the book is closed, recede when it opens */}
                {["left", "right"].map((side) => (
                    <video
                        key={side}
                        src="assets/images/resources/diya-pillar.mov"
                        aria-hidden="true"
                        className={`legacy-One__aside legacy-One__aside--${side}`}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                ))}

                <div className="legacy-book-wrap wow fadeIn" data-wow-delay="100ms">
                    <Suspense fallback={<div className="legacy-book-loading" aria-hidden="true"></div>}>
                        <HTMLFlipBook
                            key={isTablet ? "tablet" : isMobile ? "mobile" : "default"}
                            ref={bookRef}
                            width={isMobile ? 460 : 620}
                            height={isMobile ? 720 : 720}
                            size="stretch"
                            minWidth={isTablet ? 400 : isMobile ? 340 : 220}
                            maxWidth={isTablet ? 560 : isMobile ? 460 : 900}
                            minHeight={256}
                            maxHeight={isTablet ? 820 : isMobile ? 720 : 880}
                            showCover={true}
                            maxShadowOpacity={0.65}
                            flippingTime={800}
                            drawShadow={true}
                            useMouseEvents={true}
                            className={`legacy-book${isOpen ? " legacy-book--opened" : " legacy-book--closed"}`}
                            onFlip={handleFlip}
                        >
                            <CoverPage onOpen={openBook} />
                            {PAGES.map((person, i) => (
                                <ContentPage key={i} person={person} index={i + 1} />
                            ))}
                            <BackCoverPage />
                        </HTMLFlipBook>
                    </Suspense>
                </div>

                <button
                    type="button"
                    className="legacy-book-arrow legacy-book-arrow--next"
                    onClick={goNext}
                    disabled={pageIndex === totalPages - 1}
                    aria-label="पुढील पान"
                >
                    <svg className="legacy-book-arrow__icon" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                <div className="legacy-book-arrow-row">
                    <button
                        type="button"
                        className="legacy-book-arrow legacy-book-arrow--prev legacy-book-arrow--stacked"
                        onClick={goPrev}
                        disabled={pageIndex === 0}
                        aria-label="मागील पान"
                    >
                        <svg className="legacy-book-arrow__icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    <button
                        type="button"
                        className="legacy-book-arrow legacy-book-arrow--next legacy-book-arrow--stacked"
                        onClick={goNext}
                        disabled={pageIndex === totalPages - 1}
                        aria-label="पुढील पान"
                    >
                        <svg className="legacy-book-arrow__icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="divine-border--legacy divine-border--legacy-bottom" role="presentation"></div>
        </section>
    )
}
