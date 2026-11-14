import Link from "next/link"
import Breadcrumb from "./_shared/_components/Breadcrumb/Breadcrumb"
import styles from "./not-found.module.css"

// The page for any address that is not a page. The mantra, the closing call-to-action and the closing
// mantra around it are the shared frame in app/template.js.
export default function Error404() {
    return (
        <>
            <Breadcrumb image="/assets/media/shared/page-header-bg.webp" />
            <section className={styles.errorPage}>
                <div className="container">
                    <div className={styles.inner}>
                        {/* the big number is decoration: the heading below says it */}
                        <p className={styles.number} aria-hidden="true">404</p>
                        <h1 className={styles.title} lang="mr">पान सापडले नाही</h1>
                        <p className={styles.text} lang="mr">तुम्ही शोधत असलेले पान अस्तित्वात नाही किंवा हलवले गेले आहे.</p>
                        <Link href="/" className="pill-btn" lang="mr">
                            <span>मुख्यपृष्ठावर परत जा</span>
                            <i className="fas fa-arrow-right" aria-hidden="true"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
