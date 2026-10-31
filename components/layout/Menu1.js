'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { NAV_ITEMS, isNavActive } from "@/lib/data/navItems"

export default function Menu1() {
    const pathname = usePathname()

    return (
        <>
            <ul className="main-menu__list">
                {NAV_ITEMS.map((item) => {
                    if (item.children) {
                        const isActive = item.children.some((child) => isNavActive(pathname, child.href))
                        return (
                            <li key={item.label} className={`dropdown${isActive ? " current" : ""}`}>
                                <a href="#" role="button" aria-haspopup="true" onClick={(e) => e.preventDefault()}>{item.label}</a>
                                <ul className="shadow-box nav-dropdown">
                                    {item.children.map((child) => {
                                        const childActive = isNavActive(pathname, child.href)
                                        return (
                                            <li key={child.href} className={childActive ? "current" : ""}>
                                                <Link href={child.href} aria-current={childActive ? "page" : undefined}>
                                                    <span className="nav-dropdown__icon" aria-hidden="true"><i className={child.icon}></i></span>
                                                    <span className="nav-dropdown__label">{child.label}</span>
                                                    <span className="nav-dropdown__arrow" aria-hidden="true"><i className="fas fa-chevron-right"></i></span>
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </li>
                        )
                    }
                    const isActive = isNavActive(pathname, item.href)
                    return (
                        <li key={item.href} className={isActive ? "current" : ""}>
                            <Link href={item.href} aria-current={isActive ? "page" : undefined}>{item.label}</Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
