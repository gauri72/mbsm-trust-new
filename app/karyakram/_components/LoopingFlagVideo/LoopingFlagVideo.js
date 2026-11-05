'use client'
import { useEffect, useRef } from "react"
import styles from "./LoopingFlagVideo.module.css"

// Two copies of the same clip, offset by half a loop and crossfaded near the
// seam, so the native loop restart (which jumps because the source's last
// frame doesn't match its first) is masked under the fade instead of popping.
const FADE_MS = 450

export default function LoopingFlagVideo({ src, className }) {
    const aRef = useRef(null)
    const bRef = useRef(null)

    useEffect(() => {
        const a = aRef.current
        const b = bRef.current
        if (!a || !b) return

        let halfStartedA = false
        let halfStartedB = false
        let raf

        const onLoadedA = () => {
            const duration = a.duration
            if (!duration || !isFinite(duration)) return
            b.currentTime = duration / 2
            a.play().catch(() => {})
        }

        const tick = () => {
            const duration = a.duration
            if (duration && isFinite(duration)) {
                const half = duration / 2

                // Each video, once it crosses its own halfway point, kicks off
                // the other from 0 — so they keep leapfrogging indefinitely.
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

                const aRemaining = duration - a.currentTime
                const bRemaining = duration - b.currentTime
                const aActive = !a.paused && aRemaining > FADE_MS / 1000
                if (aActive) {
                    a.style.opacity = "1"
                    b.style.opacity = "0"
                } else {
                    a.style.opacity = "0"
                    b.style.opacity = "1"
                }
            }
            raf = requestAnimationFrame(tick)
        }

        a.addEventListener("loadedmetadata", onLoadedA)
        raf = requestAnimationFrame(tick)

        return () => {
            a.removeEventListener("loadedmetadata", onLoadedA)
            cancelAnimationFrame(raf)
        }
    }, [])

    return (
        <span className={styles.loopingFlagVideo}>
            <video ref={aRef} src={src} className={className} muted playsInline autoPlay style={{ opacity: 1 }} />
            <video ref={bRef} src={src} className={className} muted playsInline style={{ opacity: 0 }} />
        </span>
    )
}
