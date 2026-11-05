'use client'
import { useCallback, useRef, useState } from "react"
import useLightbox from "../useLightbox"
import styles from "./VideoGallery.module.css"

const VIDEOS = [
    { id: "PTV3-PZzozo", label: "भक्तिसोहळा" },
    { id: "w-lyni2N3M0", label: "भक्तिगीत" },
    { id: "LWmc6Jq4SKU", label: "उत्सव सोहळा" },
    { id: "rnbfULtFN7A", label: "सत्संग" },
    { id: "EbpUn2b6H6E", label: "प्रवचन" },
    { id: "sS6NDlKWBSc", label: "नित्य आरती" },
]

const SWIPE_THRESHOLD = 50

// HD thumbnails (maxresdefault) aren't generated for every upload. When
// missing, YouTube's server still answers with HTTP 404 but a *valid*
// 120x90 grey placeholder JPEG body — so the <img> loads fine and never
// fires onError. We detect that placeholder by its known fixed size on
// load and fall back to the SD (hqdefault) tier, then the local logo.
function ThumbImg({ id, ...props }) {
    const [tier, setTier] = useState("max")
    const src =
        tier === "max"
            ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
            : tier === "hq"
                ? `https://img.youtube.com/vi/${id}/hqdefault.jpg`
                : "assets/images/resources/logo-shubharay-math.svg"
    return (
        <img
            src={src}
            onLoad={(e) => {
                if (tier === "max" && e.target.naturalWidth === 120 && e.target.naturalHeight === 90) {
                    setTier("hq")
                }
            }}
            onError={() => setTier((t) => (t === "max" ? "hq" : "broken"))}
            {...props}
        />
    )
}

export default function VideoGallery() {
    const [activeIndex, setActiveIndex] = useState(null)
    const [flashIndex, setFlashIndex] = useState(null)
    const isOpen = activeIndex !== null
    const touch = useRef({ x: 0, active: false })

    const openAt = useCallback((index) => {
        setFlashIndex(index)
        window.setTimeout(() => setFlashIndex(null), 260)
        window.setTimeout(() => setActiveIndex(index), 120)
    }, [])

    const close = useCallback(() => setActiveIndex(null), [])
    const showPrev = useCallback(() => {
        setActiveIndex((i) => (i === null ? null : (i - 1 + VIDEOS.length) % VIDEOS.length))
    }, [])
    const showNext = useCallback(() => {
        setActiveIndex((i) => (i === null ? null : (i + 1) % VIDEOS.length))
    }, [])

    const dialogRef = useLightbox(isOpen, { onEscape: close, onPrev: showPrev, onNext: showNext })

    const onTouchStart = (e) => {
        touch.current = { x: e.touches[0].clientX, active: true }
    }
    const onTouchEnd = (e) => {
        if (!touch.current.active) return
        const dx = e.changedTouches[0].clientX - touch.current.x
        if (Math.abs(dx) > SWIPE_THRESHOLD) {
            if (dx < 0) showNext()
            else showPrev()
        }
        touch.current.active = false
    }

    return (
        <section className={`gallery-grid ${styles.galleryGridVideo}`}>
            <div className="divine-border--all-events divine-border--all-events-top" role="presentation"></div>
            <div className="divine-border--all-events-vertical divine-border--all-events-left" role="presentation"></div>
            <div className="divine-border--all-events-vertical divine-border--all-events-right" role="presentation"></div>
            <span className="all-events__corner all-events__corner--tl" aria-hidden="true"></span>
            <span className="all-events__corner all-events__corner--tr" aria-hidden="true"></span>
            <span className="all-events__corner all-events__corner--bl" aria-hidden="true"></span>
            <span className="all-events__corner all-events__corner--br" aria-hidden="true"></span>
            <div className="divine-border--all-events divine-border--all-events-bottom" role="presentation"></div>

            <div className="container">
                <div className="video-gallery__head">
                    {/* Decorative peacock/floral strips flanking the heading (desktop only) */}
                    <span className={`${styles.galleryGridPeacock} ${styles.galleryGridPeacockLeft}`} aria-hidden="true"></span>
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">भक्तिरसाचे क्षण</span>
                        </div>
                        <h2 className="section-title__title title-animation">व्हिडिओ गॅलरी</h2>
                    </div>
                    <span className={`${styles.galleryGridPeacock} ${styles.galleryGridPeacockRight}`} aria-hidden="true"></span>
                </div>

                <div className={styles.videoGrid}>
                    {VIDEOS.map((video, index) => (
                        <button
                            type="button"
                            key={video.id}
                            className={styles.item}
                            onClick={() => openAt(index)}
                            aria-label={`${video.label} - व्हिडिओ पहा`}
                        >
                            <span className={styles.border} aria-hidden="true">
                                <span className={`${styles.corner} ${styles.cornerTl}`} aria-hidden="true"></span>
                                <span className={`${styles.corner} ${styles.cornerTr}`} aria-hidden="true"></span>
                                <span className={`${styles.corner} ${styles.cornerBl}`} aria-hidden="true"></span>
                                <span className={`${styles.corner} ${styles.cornerBr}`} aria-hidden="true"></span>
                            </span>
                            <ThumbImg
                                id={video.id}
                                alt=""
                                width="1280"
                                height="720"
                                loading="lazy"
                            />
                            <span className={styles.overlay} aria-hidden="true"></span>
                            <span className={styles.play} aria-hidden="true">
                                <i className="fas fa-play-circle"></i>
                            </span>
                            {flashIndex === index && <span className={styles.flash} aria-hidden="true"></span>}
                        </button>
                    ))}
                </div>
            </div>

            {isOpen && (
                <div className={styles.videoLightbox} role="dialog" aria-modal="true" onClick={close}>
                    <div
                        className={styles.videoLightboxInner}
                        ref={dialogRef}
                        onClick={(e) => e.stopPropagation()}
                        onTouchStart={onTouchStart}
                        onTouchEnd={onTouchEnd}
                    >
                        <button
                            type="button"
                            className={styles.videoLightboxClose}
                            onClick={close}
                            aria-label="बंद करा"
                        >
                            &times;
                        </button>
                        <button
                            type="button"
                            className={`${styles.videoLightboxNav} ${styles.videoLightboxNavPrev}`}
                            onClick={showPrev}
                            aria-label="मागील व्हिडिओ"
                        >
                            <i className="fas fa-arrow-right"></i>
                        </button>
                        <div className={styles.videoLightboxFrame}>
                            <iframe
                                key={VIDEOS[activeIndex].id}
                                src={`https://www.youtube-nocookie.com/embed/${VIDEOS[activeIndex].id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                                title={VIDEOS[activeIndex].label}
                                frameBorder="0"
                                allow="accelerate-compute; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <button
                            type="button"
                            className={`${styles.videoLightboxNav} ${styles.videoLightboxNavNext}`}
                            onClick={showNext}
                            aria-label="पुढील व्हिडिओ"
                        >
                            <i className="fas fa-arrow-right"></i>
                        </button>

                        <div className={styles.videoLightboxThumbs}>
                            {VIDEOS.map((video, index) => (
                                <button
                                    type="button"
                                    key={video.id}
                                    className={`${styles.videoLightboxThumb}${index === activeIndex ? " is-active" : ""}`}
                                    onClick={() => setActiveIndex(index)}
                                    aria-label={video.label}
                                    aria-current={index === activeIndex}
                                >
                                    <img
                                        src={`https://img.youtube.com/vi/${video.id}/default.jpg`}
                                        alt=""
                                        loading="lazy"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
