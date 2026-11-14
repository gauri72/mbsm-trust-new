'use client'
import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "../../utils"
import styles from "./AlphaLoopVideo.module.css"

// A single transparent clip played on a native `loop`. The clips are
// encoded as ping-pong loops (forward, then the same frames reversed), so
// the last frame always meets the first and the loop has no visible seam.
//
// Transparent video needs a different file per engine: Apple's WebKit
// renders HEVC-with-alpha .mov (`src`), while Chrome/Edge/Firefox/Android
// render VP9-with-alpha .webm (`webmSrc`). Chrome can decode HEVC too but
// draws it on an opaque box, so the choice is made by engine, not by
// canPlayType.
function supportsHevcAlpha() {
    const ua = navigator.userAgent
    // (iPadOS asks for desktop sites and reports a Mac: a Mac with a touch screen is an iPad)
    const isIOS = /iPad|iPhone|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)
    const isMacSafari = /Macintosh/.test(ua) && /Safari/.test(ua) && !/Chrome|Chromium|Edg|OPR|Firefox/.test(ua)
    return isIOS || isMacSafari
}

// The clip is decoration, and it is big (about 2-3 MB): it is only fetched once it is near the screen (the
// closing section sits at the very bottom of every page), it plays only while it is near the screen, and
// it is not shown at all to visitors who ask their device for reduced motion (it never stops moving).
const NEAR_SCREEN = "300px 0px"

export default function AlphaLoopVideo({ src, webmSrc, className }) {
    const rootRef = useRef(null)
    const videoRef = useRef(null)
    const reduceMotion = useReducedMotion()
    const [near, setNear] = useState(false)
    // null until the clip is wanted and we know the browser, so no opaque video
    // box ever flashes on browsers that can't do HEVC alpha
    const [videoSrc, setVideoSrc] = useState(null)

    // near the screen or not (reduced motion: no clip at all)
    useEffect(() => {
        const root = rootRef.current
        if (!root || reduceMotion) return
        const observer = new IntersectionObserver((entries) => setNear(entries.some((e) => e.isIntersecting)), { rootMargin: NEAR_SCREEN })
        observer.observe(root)
        return () => observer.disconnect()
    }, [reduceMotion])

    // the first time it is near the screen, pick the file for this browser (and start fetching it)
    useEffect(() => {
        if (near && !reduceMotion && !videoSrc) setVideoSrc(webmSrc && !supportsHevcAlpha() ? webmSrc : src)
    }, [near, reduceMotion, videoSrc, src, webmSrc])

    // play while near the screen, pause when it has scrolled far away
    useEffect(() => {
        const v = videoRef.current
        if (!v) return
        if (!near) {
            v.pause()
            return
        }

        // iOS only autoplays muted video, and React sets `muted` as a
        // property late, so set it explicitly before play()
        v.muted = true

        // iOS can block autoplay (e.g. Low Power Mode); if so, start on
        // the visitor's first touch/scroll instead of staying frozen
        const gestures = ["touchstart", "pointerdown", "scroll"]
        const onGesture = () => {
            v.play().catch(() => {})
            gestures.forEach((g) => window.removeEventListener(g, onGesture))
        }
        v.play().catch(() => {
            gestures.forEach((g) => window.addEventListener(g, onGesture, { passive: true }))
        })

        return () => gestures.forEach((g) => window.removeEventListener(g, onGesture))
    }, [videoSrc, near])

    return (
        // decoration: hidden from screen readers
        <span ref={rootRef} aria-hidden="true" className={className ? `${styles.root} ${className}` : styles.root}>
            {videoSrc && !reduceMotion && (
                <video ref={videoRef} src={videoSrc} className={styles.video} muted playsInline loop preload="auto" />
            )}
        </span>
    )
}
