import Border from "../_shared/_components/Border/Border"
import { pageMetadata } from "../_shared/_components/siteContent"
import RegularEvents from "./_components/RegularEvents/RegularEvents"
import AnnualEvents from "./_components/AnnualEvents/AnnualEvents"

// The mantra, the breadcrumb artwork, the border, the gallery and the closing call-to-action are the shared
// frame in app/template.js: a page only adds its own content.
export const metadata = pageMetadata("utsav", "मंगल भक्त सेवा मंडळाचे नियमित आणि वार्षिक उत्सव.")

// The regular programmes (every week and month), then the festivals of the year.
export default function UtsavPage() {
    return (
        <>
            <RegularEvents />
            <Border />
            <AnnualEvents />
        </>
    )
}
