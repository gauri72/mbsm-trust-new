import { useEffect, useLayoutEffect, useState } from "react"

/* =============================================================================
   Small helpers the shared components use in common.
   ========================================================================== */

// join class names, skipping falsy ones: cx("a", isOpen && "b")
export const cx = (...names) => names.filter(Boolean).join(" ")

// useLayoutEffect measures before the browser paints; on the server it does nothing (and warns), so use useEffect there
export const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect

// Does the visitor ask their device for reduced motion? It follows the setting live. (false on the server and
// on the first client render, so the server's HTML and the first render agree.)
export function useReducedMotion() {
    const [reduced, setReduced] = useState(false)
    useEffect(() => {
        const query = window.matchMedia("(prefers-reduced-motion: reduce)")
        const update = () => setReduced(query.matches)
        update()
        query.addEventListener("change", update)
        return () => query.removeEventListener("change", update)
    }, [])
    return reduced
}
