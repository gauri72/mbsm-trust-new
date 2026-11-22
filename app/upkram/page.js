import { pageMetadata } from "../_shared/_components/siteContent"
import ProjectList from "./_components/ProjectList/ProjectList"

// The mantra, the breadcrumb artwork, the border, the gallery and the closing call-to-action are the shared
// frame in app/template.js: a page only adds its own content.
export const metadata = pageMetadata("upkram", "मंगल भक्त सेवा मंडळाचे सामाजिक उपक्रम: बालशिक्षण, अन्नदान, आरोग्यसेवा आणि उत्सव.")

// The 30 projects of the old site's causes page, in four causes (upkram/_data/projects.js).
export default function UpkramPage() {
    return <ProjectList />
}
