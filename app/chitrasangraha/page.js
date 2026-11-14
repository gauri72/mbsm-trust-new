import ComingSoon from "../_shared/_components/ComingSoon/ComingSoon"
import { pageMetadata } from "../_shared/_components/siteContent"
// Hidden for now (to bring them back, uncomment their imports and tags):
// import PhotoGallery from "./_components/PhotoGallery/PhotoGallery"
// import VideoGallery from "./_components/VideoGallery/VideoGallery"

// The mantra, the breadcrumb artwork, the border, the gallery and the closing call-to-action are the shared
// frame in app/template.js: a page only adds its own content.
export const metadata = pageMetadata("chitrasangraha", "Explore photographs from Shri Shubharay Maharaj Math — temple, seva and community events.")

export default function ChitrasangrahaPage() {
    // Hidden for now: <PhotoGallery /> and <VideoGallery />
    return <ComingSoon />
}
