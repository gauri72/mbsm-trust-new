'use client'
import { useEffect, useRef, useState } from "react"

// Two copies of the same clip, offset by half the trim window and
// crossfaded near the seam, so the restart-to-0 seek (which otherwise
// causes a visible stutter/pause) is masked under the fade instead.
const FADE_MS = 450

// Transparent video needs a different file per engine: Apple's WebKit
// renders HEVC-with-alpha .mov (`src`), while Chrome/Edge/Firefox/Android
// render VP9-with-alpha .webm (`webmSrc`). Chrome can decode HEVC too but
// draws it on an opaque box, so the choice is made by engine, not by
// canPlayType.
function supportsHevcAlpha() {
    const ua = navigator.userAgent
    const isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
    const isMacSafari = /Macintosh/.test(ua) && /Safari/.test(ua) && !/Chrome|Chromium|Edg|OPR|Firefox/.test(ua)
    return isIOS || isMacSafari
}

export default function TrimmedLoopVideo({ src, webmSrc, className, trimSeconds = 7 }) {
    const aRef = useRef(null)
    const bRef = useRef(null)
    // null until we know the browser on the client, so no opaque video
    // box ever flashes on browsers that can't do HEVC alpha
    const [videoSrc, setVideoSrc] = useState(null)

    useEffect(() => {
        setVideoSrc(webmSrc && !supportsHevcAlpha() ? webmSrc : src)
    }, [src, webmSrc])

    useEffect(() => {
        if (!videoSrc) return
        const a = aRef.current
        const b = bRef.current
        if (!a || !b) return

        const half = trimSeconds / 2
        let halfStartedA = false
        let halfStartedB = false
        let raf

        // iOS only autoplays muted video, and React sets `muted` as a
        // property late, so set it explicitly before any play() call
        a.muted = true
        b.muted = true

        // iOS can block autoplay (e.g. Low Power Mode); if so, start on
        // the visitor's first touch/scroll instead of staying frozen
        const kick = () => { if (a.paused && b.paused) a.play().catch(() => {}) }
        const gestures = ["touchstart", "pointerdown", "scroll"]
        const onGesture = () => {
            kick()
            gestures.forEach((g) => window.removeEventListener(g, onGesture))
        }

        const start = () => {
            b.currentTime = half
            a.play().catch(() => {
                gestures.forEach((g) => window.addEventListener(g, onGesture, { passive: true }))
            })
        }

        const tick = () => {
            if (!a.paused && !halfStartedA && a.currentTime > half) {
                halfStartedA = true
                halfStartedB = false
                b.currentTime = 0
                b.play().catch(() => {})
            }
            if (!b.paused && !halfStartedB && b.currentTime > half) {
                halfStartedB = true
                halfStartedA = false
                a.currentTime = 0
                a.play().catch(() => {})
            }

            const aRemaining = trimSeconds - a.currentTime
            const aActive = !a.paused && aRemaining > FADE_MS / 1000
            if (aActive) {
                a.style.opacity = "1"
                b.style.opacity = "0"
            } else if (!b.paused) {
                a.style.opacity = "0"
                b.style.opacity = "1"
            }

            raf = requestAnimationFrame(tick)
        }

        // metadata may already be loaded by the time this effect runs
        if (a.readyState >= 1) start()
        else a.addEventListener("loadedmetadata", start, { once: true })
        raf = requestAnimationFrame(tick)

        return () => {
            a.removeEventListener("loadedmetadata", start)
            gestures.forEach((g) => window.removeEventListener(g, onGesture))
            cancelAnimationFrame(raf)
        }
    }, [trimSeconds, videoSrc])

    return (
        <span className={`trimmed-loop-video ${className || ""}`}>
            {videoSrc && (
                <>
                    <video ref={aRef} src={videoSrc} className="trimmed-loop-video__video" muted playsInline autoPlay preload="auto" style={{ opacity: 1 }} />
                    <video ref={bRef} src={videoSrc} className="trimmed-loop-video__video" muted playsInline preload="auto" style={{ opacity: 0 }} />
                </>
            )}
        </span>
    )
}
