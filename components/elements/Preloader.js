'use client'
import { useEffect, useState } from "react"
import { HEADER_TITLE } from "@/lib/siteInfo"

const MIN_DISPLAY_MS = 500

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true)
    const [isLeaving, setIsLeaving] = useState(false)

    useEffect(() => {
        const mountedAt = Date.now()
        let hideTimer

        const startHide = () => {
            const elapsed = Date.now() - mountedAt
            const remaining = Math.max(MIN_DISPLAY_MS - elapsed, 0)
            hideTimer = setTimeout(() => {
                setIsLeaving(true)
                setTimeout(() => setIsLoading(false), 400)
            }, remaining)
        }

        if (document.readyState === "complete") {
            startHide()
        } else {
            window.addEventListener("load", startHide)
        }

        return () => {
            window.removeEventListener("load", startHide)
            clearTimeout(hideTimer)
        }
    }, [])

    useEffect(() => {
        if (!isLoading) return
        const original = document.body.style.overflow
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = original
        }
    }, [isLoading])

    if (!isLoading) return null

    return (
        <div className={`preloader ${isLeaving ? "preloader--leaving" : ""}`}>
            <div className="preloader__inner">
                <div className="preloader__image"></div>
                <p className="preloader__title">{HEADER_TITLE}</p>
                <p className="preloader__text">Loading&hellip;</p>
            </div>
        </div>
    )
}
