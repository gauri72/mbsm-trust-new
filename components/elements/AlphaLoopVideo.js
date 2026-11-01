'use client'
import { useEffect, useRef, useState } from "react"

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
    const isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
    const isMacSafari = /Macintosh/.test(ua) && /Safari/.test(ua) && !/Chrome|Chromium|Edg|OPR|Firefox/.test(ua)
    return isIOS || isMacSafari
}

export default function AlphaLoopVideo({ src, webmSrc, className }) {
    const ref = useRef(null)
    // null until we know the browser on the client, so no opaque video
    // box ever flashes on browsers that can't do HEVC alpha
    const [videoSrc, setVideoSrc] = useState(null)

    useEffect(() => {
        setVideoSrc(webmSrc && !supportsHevcAlpha() ? webmSrc : src)
    }, [src, webmSrc])

    useEffect(() => {
        const v = ref.current
        if (!v) return

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
    }, [videoSrc])

    return (
        <span className={`alpha-loop-video ${className || ""}`}>
            {videoSrc && (
                <video ref={ref} src={videoSrc} className="alpha-loop-video__video" muted playsInline autoPlay loop preload="auto" />
            )}
        </span>
    )
}
