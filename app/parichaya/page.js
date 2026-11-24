import { pageMetadata } from "../_shared/_components/siteContent"
import LifeStory from "./_components/LifeStory/LifeStory"

// The mantra, the breadcrumb artwork, the border, the gallery and the closing call-to-action are the shared
// frame in app/template.js: a page only adds its own content.
export const metadata = pageMetadata("parichaya", "श्री विश्वेश्वर स्वामी महाराजांची आध्यात्मिक वाटचाल.")

// The life story of Shri Vishweshwar Swami Maharaj, as a book that turns its pages.
export default function ParichayaPage() {
    return <LifeStory />
}
