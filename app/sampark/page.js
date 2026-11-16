import Border from "../_shared/_components/Border/Border"
import { pageMetadata } from "../_shared/_components/siteContent"
import Form from "./_components/Form/Form"
import Location from "./_components/Location/Location"

export const metadata = pageMetadata("sampark", "मंगल भक्त सेवा मंडळाशी संपर्क साधा — पत्ता, दूरध्वनी क्रमांक व संपर्क फॉर्म.")

// The contact page: the message form, then the location (the map and the phone, email and address). The mantra, the
// breadcrumb, the gallery and the closing call-to-action around it are the shared frame in app/template.js.
export default function Contact() {
    return (
        <>
            <Form />
            <Border />
            <Location />
        </>
    )
}
