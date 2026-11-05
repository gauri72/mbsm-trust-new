'use client'
import { useEffect, useRef } from "react"

// Shared lightbox behaviour for the Photo and Video galleries: Escape/Arrow
// keys, body scroll-lock (with scrollbar-width compensation so the page
// doesn't jump), and a focus trap that moves focus into the dialog on open
// and restores it to the trigger element on close.
export default function useLightbox(isOpen, { onEscape, onPrev, onNext } = {}) {
    const dialogRef = useRef(null)
    const triggerRef = useRef(null)

    useEffect(() => {
        if (isOpen) {
            triggerRef.current = document.activeElement
        }
    }, [isOpen])

    useEffect(() => {
        if (!isOpen) return

        const dialog = dialogRef.current
        const focusable = dialog
            ? dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
            : []
        if (focusable.length) focusable[0].focus()

        const onKey = (e) => {
            if (e.key === "Escape") onEscape?.()
            if (e.key === "ArrowLeft") onPrev?.()
            if (e.key === "ArrowRight") onNext?.()
            if (e.key === "Tab" && focusable.length) {
                const first = focusable[0]
                const last = focusable[focusable.length - 1]
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault()
                    last.focus()
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault()
                    first.focus()
                }
            }
        }

        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
        document.addEventListener("keydown", onKey)
        document.body.style.overflow = "hidden"
        if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`

        return () => {
            document.removeEventListener("keydown", onKey)
            document.body.style.overflow = ""
            document.body.style.paddingRight = ""
            triggerRef.current?.focus?.()
        }
    }, [isOpen, onEscape, onPrev, onNext])

    return dialogRef
}
