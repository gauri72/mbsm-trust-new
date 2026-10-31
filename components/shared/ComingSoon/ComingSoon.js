import Link from "next/link"
import styles from "./ComingSoon.module.css"

// Placeholder body for a section whose content isn't ready yet.
export default function ComingSoon({ title }) {
    return (
        <section className={styles.root}>
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline" lang="mr">लवकरच येत आहे</span>
                    </div>
                    <h2 className="section-title__title" lang="mr">{title}</h2>
                </div>
                <p className={styles.text} lang="mr">
                    या विभागाची माहिती लवकरच येथे उपलब्ध होईल. अधिक माहितीसाठी आमच्याशी संपर्क साधा.
                </p>
                <div className={styles.btnBox}>
                    <Link href="/sampark" className="thm-btn" lang="mr">
                        संपर्क साधा<span><i className="icon-arrow-right"></i></span>
                    </Link>
                </div>
            </div>
        </section>
    )
}
