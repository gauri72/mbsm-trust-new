'use client'
import { useEffect, useRef } from "react"
import styles from "./CustomCursor.module.css"

/* =============================================================================
   Custom cursor (mouse / trackpad only; rendered once in app/layout.js).

   A gold dot exactly at the pointer, and a ring that follows it with a slight
   ease — both drawn like the header's logo medal: gold with a maroon edge, so
   they read on the site's gold and maroon surfaces alike. Over anything you can
   click, the ring grows and the dot fades; pressing shrinks both a little.
   The system cursor stays as it is. Design rules: see CustomCursor.module.css.
   ========================================================================== */

// anything clickable or typeable gets the hover state
const INTERACTIVE = "a, button, input, textarea, select, label, summary, [role='button']"
const FOLLOW = 0.18          // how far the ring closes on the pointer each frame (1 = no lag)

export default function CustomCursor() {
    const ringRef = useRef(null)
    const dotRef = useRef(null)

    useEffect(() => {
        const ring = ringRef.current
        const dot = dotRef.current
        if (!ring || !dot) return

        // the ring follows without lag for visitors who ask for reduced motion
        const follow = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 1 : FOLLOW
        const mouse = { x: 0, y: 0 }
        const at = { x: 0, y: 0 }
        let rafId
        let seen = false

        const setVisible = (visible) => {
            ring.classList.toggle(styles.isVisible, visible)
            dot.classList.toggle(styles.isVisible, visible)
        }
        const setState = (name, on) => {
            ring.classList.toggle(styles[name], on)
            dot.classList.toggle(styles[name], on)
        }

        const onMove = (e) => {
            mouse.x = e.clientX
            mouse.y = e.clientY
            dot.style.translate = `${mouse.x}px ${mouse.y}px`
            if (!seen) {                       // first move: start the ring on the pointer
                seen = true
                at.x = mouse.x
                at.y = mouse.y
                setVisible(true)
            }
        }

        const tick = () => {
            at.x += (mouse.x - at.x) * follow
            at.y += (mouse.y - at.y) * follow
            ring.style.translate = `${at.x}px ${at.y}px`
            rafId = requestAnimationFrame(tick)
        }

        const onOver = (e) => { if (e.target.closest(INTERACTIVE)) setState("isHover", true) }
        const onOut = (e) => { if (e.target.closest(INTERACTIVE)) setState("isHover", false) }
        const onDown = () => setState("isPressed", true)
        const onUp = () => setState("isPressed", false)
        const onLeave = () => setVisible(false)
        const onEnter = () => { if (seen) setVisible(true) }

        const listeners = [
            ["mousemove", onMove], ["mouseover", onOver], ["mouseout", onOut],
            ["mousedown", onDown], ["mouseup", onUp],
            ["mouseleave", onLeave], ["mouseenter", onEnter],
        ]
        listeners.forEach(([type, fn]) => document.addEventListener(type, fn))
        rafId = requestAnimationFrame(tick)

        return () => {
            listeners.forEach(([type, fn]) => document.removeEventListener(type, fn))
            cancelAnimationFrame(rafId)
        }
    }, [])

    return (
        <>
            <div ref={ringRef} className={styles.ring} aria-hidden="true"></div>
            <div ref={dotRef} className={styles.dot} aria-hidden="true"></div>
        </>
    )
}
