import Link from "next/link"
import { HEADER_PHONE_DISPLAY, HEADER_PHONE_TEL, HEADER_EMAIL, HEADER_EMAIL_MAILTO, HEADER_ADDRESS, HEADER_MAP_URL } from "@/lib/siteInfo"

// Slim contact strip above the main header: phone + email on the left,
// address on the right; centred on two lines below 768px.
export default function HeaderTopbar() {
    return (
        <div className="header-topbar">
            <div className="container">
                <div className="header-topbar__inner">
                    <ul className="header-topbar__list list-unstyled">
                        <li>
                            <span className="icon-call" aria-hidden="true"></span>
                            <Link href={HEADER_PHONE_TEL} lang="mr">{HEADER_PHONE_DISPLAY}</Link>
                        </li>
                        <li>
                            <span className="fas fa-envelope" aria-hidden="true"></span>
                            <Link href={HEADER_EMAIL_MAILTO}>{HEADER_EMAIL}</Link>
                        </li>
                    </ul>
                    <div className="header-topbar__address">
                        <span className="icon-pin-two" aria-hidden="true"></span>
                        <Link href={HEADER_MAP_URL} target="_blank" rel="noopener noreferrer" lang="mr">{HEADER_ADDRESS}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
